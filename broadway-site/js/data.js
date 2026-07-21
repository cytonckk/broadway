/* ==========================================================================
   DATA — this is the file you'll edit most.
   ==========================================================================

   THE MAP COORDINATE SYSTEM:
   Coordinates below are PIXEL-NATIVE to images/manhattan-map.png, which is
   700 x 1024. x runs left-to-right (0-700), y runs top-to-bottom (0-1024),
   with (0,0) at the top-left corner (roughly Riverside Park / upper Central
   Park) and (700,1024) at the bottom-right (New York Harbor).

   Because coordinates match the image 1:1, there's no unit conversion to
   get wrong -- a dot at (362,245) sits exactly 362px from the left edge and
   245px from the top edge of manhattan-map.png. If you redraw the map at a
   different size, scale every x/y and view box below by the same factor.

   Landmark coordinates here were read directly off Nicholas's labeled
   reference map (map_draft.png), which shares the exact same 700x1024
   canvas as manhattan-map.png -- confirmed by overlaying the two.
   ========================================================================== */

const MAP_UNITS = { x:0, y:0, w:700, h:1024 };

const MAP_IMAGE = {
  src: "images/manhattan-map.png",
  showDotsOverImage: true    // false = hide the gold dots/labels, let your art speak alone
};

/* --------------------------------------------------------------------------
   ERA_MAP -- map/coordinate data only. Text content lives in content/eras.js
   - view: [x, y, w, h] camera box, in image pixels (aim for ~0.75 w:h ratio
           to match the 3:4 map frame -- avoids letterboxing)
   - dots: theaters for that era, in image pixels ({gone:true} = demolished X)
   - halo: optional [cx, cy, rx, ry] dashed ellipse = the district footprint
   -------------------------------------------------------------------------- */
const ERA_MAP = [

  { id:"e1798", stamp:"1798", date:"1798",
    view:[150,640,260,347],
    dots:[
      {x:270,y:763,label:"Park Theatre"}
    ],
    halo:null,
    caption:"<b>Park Row, downtown.</b> Theater lives where the whole city lives — below Chambers Street." },

  { id:"e1849", stamp:"1849", date:"1849",
    view:[265,460,260,350],
    dots:[
      {x:378,y:705,label:"Bowery Theatre"},
      {x:365,y:628,label:"Niblo's Garden"},
      {x:430,y:570,label:"Astor Place Opera House"}
    ],
    halo:null,
    caption:"<b>The Bowery vs. Astor Place.</b> Working-class theater and 'respectable' theater are now different buildings." },

  { id:"e1870", stamp:"1870s", date:"1870s",
    view:[230,305,260,347],
    dots:[
      {x:365,y:468,label:"Academy of Music"},
      {x:378,y:528,label:"Union Square Theatre"},
      {x:345,y:428,label:"Booth's Theatre"}
    ],
    halo:[371,485,60,75],
    caption:"<b>Union Square, 'The Rialto.'</b> For the first time, theaters cluster on purpose — a district is born." },

  { id:"e1893", stamp:"1893", date:"1893",
    view:[215,195,260,350],
    dots:[
      {x:345,y:388,label:"Tin Pan Alley (W 28th)"},
      {x:345,y:350,label:"Casino Theatre"}
    ],
    halo:[345,369,45,55],
    caption:"<b>Herald Square.</b> The district keeps climbing — and behind the stages, a cartel quietly takes control." },

  { id:"e1904", stamp:"1904", date:"1904",
    view:[220,105,260,350],
    dots:[
      {x:362,y:245,label:"New Amsterdam"},
      {x:352,y:280,label:"Lyceum"},
      {x:345,y:313,label:"Olympia (Hammerstein)"}
    ],
    // Times Square's real footprint IS this cluster -- the reference map's
    // own "Times Square" pin sits well southwest of here, which is
    // geographically off (real Times Square = Broadway/7th/42nd, i.e.
    // right at New Amsterdam). We center the halo on the theaters instead.
    halo:[353,279,80,115],
    caption:"<b>Times Square, year one.</b> Subway + newspaper + theaters, all in the same year. The center of gravity locks in." },

  { id:"e1927", stamp:"1927", date:"1927",
    view:[270,0,260,347],
    dots:[
      {x:390,y:190,label:"Barrymore"},
      {x:430,y:152,label:"Ziegfeld"}
    ],
    halo:[405,175,75,100],
    caption:"<b>The district at maximum.</b> Roughly 70–80 houses; the 1927–28 season opens ~264 productions — still the record." },

  { id:"e1982", stamp:"1982", date:"1982",
    view:[255,35,260,350],
    dots:[
      // Morosco & Helen Hayes stood on the same W. 45th-46th block as the
      // Barrymore, just east of it -- approximate placement, not on the
      // reference map; verify against a period plat map before printing.
      {x:405,y:178,label:"Morosco",gone:true},
      {x:415,y:188,label:"Helen Hayes",gone:true},
      {x:362,y:245,label:"New Amsterdam (dark)"}
    ],
    halo:null,
    caption:"<b>Times Square, low point.</b> Red marks = theaters demolished in 1982 for a hotel. The district survives — barely." },

  { id:"etoday", stamp:"Today", date:"1997&rarr;",
    view:[240,70,260,350],
    dots:[
      {x:362,y:245,label:"New Amsterdam (Disney)"},
      {x:352,y:280,label:"Lyceum"},
      // Shubert Theatre / TKTS booth -- approximate placement (not on the
      // reference map), positioned near their real W. 44th/Duffy Sq block.
      {x:398,y:205,label:"Shubert"},
      {x:355,y:213,label:"TKTS / Duffy Sq."}
    ],
    halo:[370,240,90,130],
    caption:"<b>The modern district.</b> 41 theaters, and an economy of hotels, restaurants, and tourism wrapped around them." }
];
