/* ==========================================================================
   DATA — this is the file you'll edit most.
   ==========================================================================

   THE MAP COORDINATE SYSTEM (read once, then it all makes sense):
   Everything on the map lives in one shared unit space:

        x: 180 → 420   (west shore → east shore, 240 units wide)
        y: 480 → 1500  (~59th St at top → the Battery at bottom, 1020 tall)

   Era `view` boxes and theater dots are all in these units. The camera
   just pans/zooms around inside this space.

   YOUR HAND-DRAWN MAP:
   Draw ONE tall strip map of Manhattan (Battery → 59th St) that covers
   exactly this region, at a 240:1020 ratio (≈ 1 : 4.25). Recommended:

        1600 px wide × 6800 px tall   (PNG, or JPG if the file gets huge)

   Then set MAP_IMAGE.src below to its path. The site will automatically
   pan/zoom your drawing using the same `view` boxes — and if you keep
   the proportions, the theater dots/labels will land in the right spots
   ON TOP of your art. Set showDotsOverImage:false to hide them.
   ========================================================================== */

const MAP_UNITS = { x:180, y:480, w:240, h:1020 };

const MAP_IMAGE = {
  src: "images/manhattan-map.png",
  showDotsOverImage: true
};

/* --------------------------------------------------------------------------
   ERAS — one entry = one playbill card + one map view + one timeline stamp
   - view: [x, y, w, h] camera box (in map units above)
   - dots: theaters for that era ({gone:true} renders a red demolition ✕)
   - halo: optional [cx, cy, rx, ry] dashed ellipse = the district footprint
   - imgs: side-panel image slots (first one becomes the playbill "cover")
   -------------------------------------------------------------------------- */
/* ERA_MAP — map/coordinate data only. Text content lives in content/eras.js */
const ERA_MAP = [
  { id:"e1798",  stamp:"1798",   date:"1798",       view:[170,1180,340,300],
    dots:[{x:315,y:1345,label:"Park Theatre"}],
    halo:null,
    caption:"<b>Park Row, downtown.</b> Theater lives where the whole city lives — below Chambers Street." },

  { id:"e1849",  stamp:"1849",   date:"1849",       view:[170,1060,340,300],
    dots:[
      {x:370,y:1265,label:"Bowery Theatre"},
      {x:305,y:1225,label:"Niblo's Garden"},
      {x:328,y:1145,label:"Astor Place Opera House"}
    ],
    halo:null,
    caption:"<b>The Bowery vs. Astor Place.</b> Working-class theater and 'respectable' theater are now different buildings." },

  { id:"e1870",  stamp:"1870s",  date:"1870s",      view:[160,960,340,300],
    dots:[
      {x:340,y:1085,label:"Academy of Music"},
      {x:330,y:1072,label:"Union Square Theatre"},
      {x:255,y:975,label:"Booth's Theatre"}
    ],
    halo:[315,1075,85,45],
    caption:"<b>Union Square, 'The Rialto.'</b> For the first time, theaters cluster on purpose — a district is born." },

  { id:"e1893",  stamp:"1893",   date:"1893",       view:[150,760,340,300],
    dots:[
      {x:285,y:920,label:"Tin Pan Alley (W 28th)"},
      {x:272,y:845,label:"Herald Sq. Theatre"},
      {x:258,y:775,label:"Casino Theatre"},
      {x:255,y:762,label:"Empire Theatre"}
    ],
    halo:[268,835,60,95],
    caption:"<b>Herald Square.</b> The district keeps climbing — and behind the stages, a cartel quietly takes control." },

  { id:"e1904",  stamp:"1904",   date:"1904",       view:[140,590,340,300],
    dots:[
      {x:256,y:735,label:"New Amsterdam"},
      {x:247,y:730,label:"Times Tower"},
      {x:268,y:695,label:"Lyceum"},
      {x:252,y:700,label:"Olympia (Hammerstein)"}
    ],
    halo:[255,705,55,70],
    caption:"<b>Times Square, year one.</b> Subway + newspaper + theaters, all in the same year. The center of gravity locks in." },

  { id:"e1927",  stamp:"1927",   date:"1927",       view:[130,540,340,300],
    dots:[
      {x:240,y:710,label:"Shubert"},
      {x:245,y:665,label:"Barrymore"},
      {x:281,y:612,label:"Ziegfeld"}
    ],
    halo:[252,660,72,110],
    caption:"<b>The district at maximum.</b> Roughly 70–80 houses; the 1927–28 season opens ~264 productions — still the record." },

  { id:"e1982",  stamp:"1982",   date:"1982",       view:[135,570,340,300],
    dots:[
      {x:243,y:700,label:"Morosco",gone:true},
      {x:246,y:688,label:"Helen Hayes",gone:true},
      {x:256,y:735,label:"New Amsterdam (dark)"}
    ],
    halo:null,
    caption:"<b>Times Square, low point.</b> Red marks = theaters demolished in 1982 for a hotel. The district survives — barely." },

  { id:"etoday", stamp:"Today",  date:"1997&rarr;", view:[130,545,340,300],
    dots:[
      {x:256,y:735,label:"New Amsterdam (Disney)"},
      {x:268,y:695,label:"Lyceum"},
      {x:240,y:710,label:"Shubert"},
      {x:249,y:672,label:"TKTS / Duffy Sq."}
    ],
    halo:[252,660,72,110],
    caption:"<b>The modern district.</b> 41 theaters, and an economy of hotels, restaurants, and tourism wrapped around them." }
];
