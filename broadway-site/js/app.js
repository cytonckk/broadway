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

  // Island shoreline (stylized, pixel-native to a 500x1000 canvas:
  // Upper West/East Side near y=0, past Battery Park near y=1000)
  base.appendChild(el('path', { class:'shore', d:
    "M 140 0 L 105 100 L 100 200 L 105 300 L 110 400 L 105 460 L 105 530 L 105 600 L 100 700 L 100 800 L 105 900 L 160 985 L 215 900 L 240 800 L 245 700 L 245 600 L 245 460 L 245 400 L 245 300 L 245 200 L 250 100 L 235 0" }));

  // Grid streets
  for (let y = 40; y < 950; y += 37)
    base.appendChild(el('line', { class:'street', x1:105, y1:y, x2:245, y2:y }));
  [135,165,195,215].forEach(x =>
    base.appendChild(el('line', { class:'street', x1:x, y1:20, x2:x, y2:950 })));

  // BROADWAY — the spine (runs through the real theater waypoints)
  base.appendChild(el('path', { class:'broadway', d:
    "M 160 985 L 250 795 L 213 635 L 228 570 L 235 500 L 235 452 L 217 412 L 195 323 L 195 255 L 204 225 L 210 205 L 186 149 L 175 40" }));

  const t = el('text', { class:'dot-label', x:180, y:600, 'font-size':'15' });
  t.textContent = "BROADWAY";
  t.setAttribute('transform', 'rotate(75 180 600)');
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
   5) Era switching + zoom
------------------------------------------------------------------ */
let currentEra = null;
let currentBaseView = ERA_MAP[0].view.slice();  // the era's natural view, pre-zoom
let zoom = 1;                                    // 1 = fit era; >1 = zoomed out
const ZOOM_MIN = 0.5, ZOOM_MAX = 1.5, ZOOM_STEP = 1.5;

// Expand a base view around its center by the current zoom, clamped to the map.
function zoomedView([x, y, w, h]){
  const cx = x + w/2, cy = y + h/2;
  let nw = Math.min(w * zoom, MAP_UNITS.w);
  let nh = Math.min(h * zoom, MAP_UNITS.h);
  let nx = cx - nw/2, ny = cy - nh/2;
  nx = Math.max(MAP_UNITS.x, Math.min(nx, MAP_UNITS.x + MAP_UNITS.w - nw));
  ny = Math.max(MAP_UNITS.y, Math.min(ny, MAP_UNITS.y + MAP_UNITS.h - nh));
  return [nx, ny, nw, nh];
}

function applyCamera(){ animateView(zoomedView(currentBaseView)); }

function showEra(id){
  if (id === currentEra) return;
  currentEra = id;
  const era = ERAS.find(e => e.id === id);
  currentBaseView = era.view.slice();

  document.querySelectorAll('.stamp').forEach(s =>
    s.classList.toggle('active', s.dataset.era === id));

  applyCamera();

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
      g.appendChild(el('circle', { class:'dot', cx:d.x, cy:d.y, r:5 }));
    }
    // Flip the label to the LEFT of the dot when the dot sits in the right
    // portion of the view, so long labels never run off the frame edge.
    const [vx,,vw] = era.view;
    const flipLeft = d.flip !== undefined ? d.flip : d.x > vx + vw * 0.5;
    const lbl = el('text', {
      class:'dot-label' + (d.gone ? ' gone' : ''),
      x: flipLeft ? d.x - 9 : d.x + 9,
      y: d.y + 3.5 + (d.ly || 0),
      'text-anchor': flipLeft ? 'end' : 'start'
    });
    lbl.textContent = d.label;
    g.appendChild(lbl);

    if (d.sub){
      const sub = el('text', {
        class:'dot-sublabel' + (d.gone ? ' gone' : ''),
        x: flipLeft ? d.x - 9 : d.x + 9,
        y: d.y + 3.5 + (d.ly || 0) + 9,
        'text-anchor': flipLeft ? 'end' : 'start'
      });
      sub.textContent = d.sub;
      g.appendChild(sub);
    }

    layer.appendChild(g);
    g.animate([{opacity:0},{opacity:1}], { duration:400, delay:250 + i*140, fill:'forwards' });
  });

  mapCap.innerHTML = era.caption;
  mapTitle.innerHTML = "Manhattan &middot; " + era.stamp;
}

/* ------------------------------------------------------------------
   6) Zoom controls
------------------------------------------------------------------ */
const zoomInBtn  = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const zoomResetBtn = document.getElementById('zoom-reset');

function updateZoomButtons(){
  // remember: bigger zoom = more zoomed OUT
  zoomInBtn.disabled  = zoom <= ZOOM_MIN + 1e-6;
  zoomOutBtn.disabled = zoom >= ZOOM_MAX - 1e-6;
}
function setZoom(z){
  zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));
  updateZoomButtons();
  applyCamera();
}
zoomInBtn.addEventListener('click',  () => setZoom(zoom / ZOOM_STEP));
zoomOutBtn.addEventListener('click', () => setZoom(zoom * ZOOM_STEP));
zoomResetBtn.addEventListener('click', () => setZoom(1));
updateZoomButtons();

/* ------------------------------------------------------------------
   7) Scroll observation — cards drive the map
------------------------------------------------------------------ */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) showEra(en.target.dataset.era); });
}, { rootMargin:"-40% 0px -40% 0px" });

document.querySelectorAll('.era-card').forEach(c => io.observe(c));

showEra(ERAS[0].id);
