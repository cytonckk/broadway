/* ==========================================================================
   APP — rendering logic. You shouldn't need to edit this file often;
   content lives in js/data.js and visuals in css/styles.css.
   ========================================================================== */

const ERAS = ERA_MAP.map(e => ({ ...e, ...ERA_CONTENT.find(c => c.id === e.id) }));

const readingCol = document.getElementById('reading-col');
const timeline   = document.getElementById('timeline');
const svg        = document.getElementById('map-svg');
const mapFrame   = document.getElementById('map-frame');
const mapCap     = document.getElementById('map-caption');
const mapTitle   = document.getElementById('map-era-title');
const stripMap   = document.getElementById('strip-map');
const SVGNS      = "http://www.w3.org/2000/svg";

const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];

/* ------------------------------------------------------------------
   1) Build the playbill cards
------------------------------------------------------------------ */
ERAS.forEach((era, i) => {
  const card = document.createElement('article');
  card.className = 'era-card';
  card.id = era.id;
  card.dataset.era = era.id;

  const cover = era.imgs[0] ? `
    <figure class="img-slot">
      <div class="img-ph">${era.imgs[0].label}</div>
      <figcaption>${era.imgs[0].cap}</figcaption>
    </figure>` : '';

  const extraImgs = era.imgs.slice(1).map(im => `
    <figure class="img-slot">
      <div class="img-ph">${im.label}</div>
      <figcaption>${im.cap}</figcaption>
    </figure>`).join('');

  card.innerHTML = `
    <div class="pb-banner">
      <img class="pb-logo-img" src="images/playbill-logo.png" alt="Playbill">
      <div class="pb-theater">${era.venue}</div>
    </div>

    <div class="pb-cover">
      <div class="pb-date">${era.date}</div>
      <h2 class="pb-title">${era.title}</h2>
      ${cover}
    </div>

    <div class="pb-program">
      <div class="pb-section">Why This Moment</div>
      <div class="why"><p>${era.why}</p></div>

      <div class="pb-section">The Program</div>
      <div class="pb-body">
        ${era.body.map(p => `<p>${p}</p>`).join('')}
        ${extraImgs}
      </div>
    </div>`;

  readingCol.appendChild(card);
});

/* ------------------------------------------------------------------
   2) Build the timeline stamps
------------------------------------------------------------------ */
ERAS.forEach(era => {
  const b = document.createElement('button');
  b.className = 'stamp';
  b.dataset.era = era.id;
  b.innerHTML = `<span class="bulb"></span><svg class="stamp-year-svg" aria-hidden="true"><text class="stamp-year-text" x="50%" y="1em" text-anchor="middle">${era.stamp}</text></svg>`;
  b.addEventListener('click', () =>
    document.getElementById(era.id)
      .scrollIntoView({ behavior:'smooth', block:'center' }));
  timeline.appendChild(b);
});

/* ------------------------------------------------------------------
   3) The map — SVG placeholder base + dot overlay
------------------------------------------------------------------ */
function el(name, attrs){
  const e = document.createElementNS(SVGNS, name);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}

const usingImage = !!MAP_IMAGE.src;

function buildBaseMap(){
  const base = el('g', { id:'base-layer' });

  // Island shoreline (stylized, pixel-native to a 700x1024 canvas:
  // ~59th St / Central Park near y=0, the Battery near y=1000)
  base.appendChild(el('path', { class:'shore', d:
    "M 195 0 L 150 100 L 140 200 L 150 300 L 155 400 L 150 460 L 150 530 L 150 600 L 140 700 L 140 800 L 150 900 L 225 985 L 300 900 L 335 800 L 340 700 L 345 600 L 345 460 L 345 400 L 345 300 L 340 200 L 350 100 L 330 0" }));

  // Grid streets
  for (let y = 40; y < 950; y += 37)
    base.appendChild(el('line', { class:'street', x1:150, y1:y, x2:345, y2:y }));
  [190,230,270,300].forEach(x =>
    base.appendChild(el('line', { class:'street', x1:x, y1:20, x2:x, y2:950 })));

  // BROADWAY — the spine (runs through the theater waypoints)
  base.appendChild(el('path', { class:'broadway', d:
    "M 225 985 L 270 763 L 320 660 L 400 570 L 378 528 L 365 468 L 345 428 L 345 350 L 345 313 L 352 280 L 362 245 L 390 190 L 430 152 L 400 40" }));

  const t = el('text', { class:'dot-label', x:250, y:600, 'font-size':'15' });
  t.textContent = "BROADWAY";
  t.setAttribute('transform', 'rotate(75 250 600)');
  base.appendChild(t);

  svg.appendChild(base);
  svg.appendChild(el('g', { id:'era-layer' }));

  // Hand-drawn mode: hide the placeholder art, keep (or hide) the dots
  if (usingImage){
    base.style.display = 'none';
    stripMap.src = MAP_IMAGE.src;
    stripMap.style.display = 'block';
    stripMap.addEventListener('load', () => { if (lastView) positionStripMap(lastView); });
    if (!MAP_IMAGE.showDotsOverImage)
      document.getElementById('era-layer').style.display = 'none';
  }
}
buildBaseMap();

/* ------------------------------------------------------------------
   4) Camera: pans the SVG viewBox, and (in hand-drawn mode) also
      pans/zooms your strip-map image to the same view box.
------------------------------------------------------------------ */
let vbAnim = null;

function animateView([x, y, w, h]){
  // --- SVG viewBox tween (drives the dot overlay too) ---
  const cur = svg.getAttribute('viewBox').split(' ').map(Number);
  if (vbAnim) cancelAnimationFrame(vbAnim);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const apply = v => svg.setAttribute('viewBox', v.join(' '));
  if (reduce){ apply([x,y,w,h]); }
  else {
    const start = performance.now(), dur = 900;
    const step = now => {
      const t = Math.min(1, (now - start) / dur);
      const e = t < .5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;
      apply(cur.map((c, i) => c + ([x,y,w,h][i] - c) * e));
      if (t < 1) vbAnim = requestAnimationFrame(step);
    };
    vbAnim = requestAnimationFrame(step);
  }

  // --- strip-map image pan (CSS transition does the easing) ---
  if (usingImage) positionStripMap([x, y, w, h]);
}

let lastView = null;
function positionStripMap([vx, vy, vw, vh]){
  lastView = [vx, vy, vw, vh];
  const fw = mapFrame.clientWidth, fh = mapFrame.clientHeight;
  if (!fw || !fh) return;

  // Use natural image dimensions so the image is never stretched
  const iw = stripMap.naturalWidth  || MAP_UNITS.w;
  const ih = stripMap.naturalHeight || MAP_UNITS.h;
  stripMap.style.width  = iw + 'px';
  stripMap.style.height = ih + 'px';

  // Convert view box from map units → image pixels
  const ux  = iw / MAP_UNITS.w;
  const uy  = ih / MAP_UNITS.h;
  const pvx = (vx - MAP_UNITS.x) * ux;
  const pvy = (vy - MAP_UNITS.y) * uy;
  const pvw = vw * ux;
  const pvh = vh * uy;

  const s  = Math.min(fw / pvw, fh / pvh);
  const tx = fw/2 - (pvx + pvw/2) * s;
  const ty = fh/2 - (pvy + pvh/2) * s;
  stripMap.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
}
window.addEventListener('resize', () => { if (lastView) positionStripMap(lastView); });

/* ------------------------------------------------------------------
   5) Era switching
------------------------------------------------------------------ */
let currentEra = null;

function showEra(id){
  if (id === currentEra) return;
  currentEra = id;
  const era = ERAS.find(e => e.id === id);

  document.querySelectorAll('.stamp').forEach(s =>
    s.classList.toggle('active', s.dataset.era === id));

  animateView(era.view);

  const layer = document.getElementById('era-layer');
  layer.innerHTML = '';
  if (era.halo){
    const [hx, hy, rx, ry] = era.halo;
    layer.appendChild(el('ellipse', { class:'district-halo', cx:hx, cy:hy, rx:rx, ry:ry }));
  }
  era.dots.forEach((d, i) => {
    const g = el('g', { opacity:0 });
    if (d.gone){
      g.appendChild(el('line', { class:'dot-gone', x1:d.x-5, y1:d.y-5, x2:d.x+5, y2:d.y+5 }));
      g.appendChild(el('line', { class:'dot-gone', x1:d.x-5, y1:d.y+5, x2:d.x+5, y2:d.y-5 }));
    } else {
      g.appendChild(el('circle', { class:'dot', cx:d.x, cy:d.y, r:5.5 }));
    }
    const lbl = el('text', { class:'dot-label' + (d.gone ? ' gone' : ''), x:d.x+10, y:d.y+4 });
    lbl.textContent = d.label;
    g.appendChild(lbl);
    layer.appendChild(g);
    g.animate([{opacity:0},{opacity:1}], { duration:400, delay:250 + i*140, fill:'forwards' });
  });

  mapCap.innerHTML = era.caption;
  mapTitle.innerHTML = "Manhattan &middot; " + era.stamp;
}

/* ------------------------------------------------------------------
   6) Scroll observation — cards drive the map
------------------------------------------------------------------ */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) showEra(en.target.dataset.era); });
}, { rootMargin:"-40% 0px -40% 0px" });

document.querySelectorAll('.era-card').forEach(c => io.observe(c));

showEra(ERAS[0].id);
