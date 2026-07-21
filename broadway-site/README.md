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
which is 500 x 1000px -- a real, labeled NYC street map (not a stylized
illustration), covering roughly the Upper West/East Side down to Battery Park.

| | |
|---|---|
| x axis | 0 (west/left edge) -> 500 (east/right edge) |
| y axis | 0 (~66th St, north/top) -> 1000 (Battery Park, south/bottom) |

A dot at `{x:195, y:255}` sits exactly 195px from the left edge and 255px
from the top edge of the image. No unit conversion, no distortion -- what
you see in an image editor is what you type into `data.js`.

**If you redraw or replace the map at a different size**, scale every x/y
and view box in `js/data.js` by the same factor, and update `MAP_UNITS` in
`js/data.js` to match the new width/height.

Every theater's coordinates were derived by looking up its real
latitude/longitude (Wikipedia for surviving/documented theaters, nearest
street corner for demolished ones), then applying a least-squares affine
transform fit from 12 known map landmarks (Times Square, Empire State,
Grand Central, Union Square, Washington Square, City Hall, Battery Park,
Carnegie Hall, Lincoln Center, MoMA, Rockefeller Center, Chrysler). So the
placements are geographically accurate to within a stylized map's limits.

Dots whose comment says `est` used a street corner rather than an exact
coordinate -- still solid, but the first ones to re-check if anything looks
off (Astor Place, Union Square Theatre, Booth's, Casino, Tin Pan Alley,
Olympia, Ziegfeld, Morosco, Helen Hayes, Shubert, TKTS).

Optional per-dot `ly` field nudges a label up/down (used to separate the
tightest clusters where two theaters sit within a block of each other).

## Zoom

The map has zoom controls (top-right of the frame): **+** / **−** step the
camera in and out around the current era, **fit** snaps back to that era's
default framing. Zooming out shows more of the island so you can see where
each era's cluster sits in context. The zoom level persists as you scroll
between eras. Tune the limits via `ZOOM_MIN` / `ZOOM_MAX` / `ZOOM_STEP` in
`js/app.js`.

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
