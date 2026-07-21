# Broadway Time Map

An interactive, scroll-through-time map of how the Broadway theater district
migrated up Manhattan (1798 → today). Left column is styled as a Playbill
pamphlet; center is a map whose camera pans north as you scroll; right is a
marquee-bulb timeline.

## File structure

```
index.html      — markup only
css/styles.css  — all visuals (Playbill theming, map frame, timeline)
js/data.js      — ALL CONTENT: eras, text, dots, map config  ← edit this most
js/app.js       — rendering logic (rarely needs edits)
assets/         — (make this) your map drawing + era photos go here
```

## Run it

Just open `index.html` in a browser — no build step, no dependencies.
For GitHub Pages: push the repo, then Settings → Pages → deploy from main.

## Drawing your map — THE DIMENSIONS

The whole map lives in one shared coordinate space:

| thing | value |
|---|---|
| unit space | x: 180–420, y: 480–1500 (240 wide × 1020 tall) |
| coverage | ~59th St (top) down to the Battery (bottom) |
| aspect ratio | 240 : 1020 = **1 : 4.25** |
| recommended canvas | **1600 × 6800 px** (PNG) |
| viewport frame | 3:4 portrait; each era's camera box is 340×300 units |

Draw ONE tall strip map at 1600×6800 (or any size with that 1:4.25 ratio),
save it to `assets/manhattan-strip.png`, then in `js/data.js` set:

```js
const MAP_IMAGE = {
  src: "assets/manhattan-strip.png",
  showDotsOverImage: true   // false = hide the gold dots over your art
};
```

That's it — the placeholder SVG hides itself and the same camera moves
pan/zoom across your drawing. If your drawing's proportions match the specs
above, the theater dots and labels will land in the correct spots on top of
your art. Landmarks to align against while drawing (in unit coords):
Broadway runs from (300, 1470) at Bowling Green, through (316, 1140) at
Astor Pl, (290, 980) at 23rd, (255, 735) at 42nd, to (235, 505) at 59th.

## Swapping in side-panel photos

Find any `<figure class="img-slot">` output — in `js/data.js` each era has
an `imgs` array with a `label` (what image belongs there + which archive to
get it from). To use real images, replace the placeholder rendering: in
`js/app.js` the `.img-ph` div is generated from that label; the simplest
route is to add a `src` field to the img object and swap the div for
`<img src="...">` — or just edit the generated HTML approach by giving each
`imgs` entry a `src` and updating the two template strings in app.js
(marked `img-ph`). Captions and frames stay identical.

## Editing content

Everything readable lives in `js/data.js`:
- `why` — the "Why this moment" justification (required for every stamp)
- `body` — array of paragraphs (written in first person)
- `dots` — theaters shown for that era; `gone:true` renders a red ✕
- `view` — the camera box `[x, y, w, h]` in map units
