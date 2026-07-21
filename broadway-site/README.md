# Broadway Time Map

An interactive, scroll-through-time map of how the Broadway theater district
migrated up Manhattan (1798 -> today). Left column is styled as a real
Playbill pamphlet; center is a hand-drawn map whose camera pans north as
you scroll; right is a marquee-bulb timeline.

## File structure

```
index.html         - markup only
css/styles.css      - all visuals (Playbill theming, map frame, timeline)
content/eras.js      - ALL ESSAY TEXT: titles, "why this moment", body copy
js/data.js           - MAP DATA: theater dot coordinates, view boxes, timeline dates
js/app.js            - rendering logic (merges the two files above; rarely needs edits)
images/
  manhattan-map.png   - your hand-drawn map (700x1024)
  playbill-logo.png    - the real Playbill wordmark
```

Content is split in two on purpose: `content/eras.js` is where you edit
writing, `js/data.js` is where you edit map coordinates. Both files share
eras by `id` (e.g. `"e1904"`) and get merged together in `js/app.js`.

## Run it

Just open `index.html` in a browser -- no build step, no dependencies.
For GitHub Pages: push the repo, then Settings -> Pages -> deploy from main.

## The map coordinate system

Coordinates in `js/data.js` are **pixel-native** to `images/manhattan-map.png`,
which is 700 x 1024px:

| | |
|---|---|
| x axis | 0 (west/left edge) -> 700 (east/right edge) |
| y axis | 0 (~Central Park, north/top) -> 1024 (Battery/harbor, south/bottom) |

A dot at `{x:362, y:245}` sits exactly 362px from the left edge and 245px
from the top edge of the image. No unit conversion, no distortion -- what
you see in an image editor is what you type into `data.js`.

**If you redraw the map at a different size**, scale every x/y and view
box in `js/data.js` by the same factor (e.g. doubling the canvas to
1400x2048 means doubling every coordinate too), and update `MAP_UNITS` in
`js/data.js` to match the new width/height.

The current dot coordinates were read directly off the labeled reference
map you provided, confirmed by overlaying it pixel-for-pixel against the
plain map -- they share the same canvas, so the two lined up exactly.

A few dots are marked in comments as **approximate** (Morosco, Helen Hayes,
Shubert, TKTS/Duffy Square) because they weren't on your labeled reference
map -- worth double-checking against a period plat map or Google Maps
before treating them as precise.

## Editing the map

In `js/data.js`, each era in `ERA_MAP` has:
- `view: [x, y, w, h]` -- the camera's crop window for that era (keep the
  w:h ratio near 260:347 / 0.75 to match the map frame and avoid letterboxing)
- `dots: [{x, y, label}]` -- theaters shown for that era; add `gone:true`
  for a demolished-theater X mark instead of a dot
- `halo: [cx, cy, rx, ry]` -- optional dashed ellipse marking a district's
  footprint (set to `null` to omit)

## Editing the writing

Everything readable lives in `content/eras.js`:
- `why` -- the "Why This Moment" justification (required for every era)
- `body` -- array of paragraphs, first person
- `imgs` -- side-panel image slots; first one becomes the playbill cover

## Swapping in real photos

Each `imgs` entry in `content/eras.js` renders as a labeled placeholder
frame in `js/app.js` (the `.img-ph` div). To use a real photo, give the
entry a `src` and swap that div for an `<img src="...">` -- the frame,
sizing, and caption stay identical either way.
