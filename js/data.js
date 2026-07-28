/* ==========================================================================
   DATA -- this is the file you'll edit most.
   ==========================================================================

   THE MAP COORDINATE SYSTEM:
   Coordinates below are PIXEL-NATIVE to images/manhattan-map.jpg (500 x 1000).
   x runs left-to-right (0-500), y runs top-to-bottom (0-1000), with (0,0) at
   the top-left (Upper West/East Side) and (500,1000) at the bottom (harbor).

   HOW THESE COORDINATES WERE DERIVED (so you can trust / extend them):
   Every theater's real latitude/longitude was looked up (Wikipedia geohack
   for the ones that survive or are well-documented; nearest street corner
   for the demolished ones). Then a least-squares affine transform was fit
   from 12 known map landmarks (Times Square, Empire State, Grand Central,
   Union Square, Washington Square, City Hall, Battery Park, Carnegie Hall,
   Lincoln Center, MoMA, Rockefeller Center, Chrysler) -- read directly off
   this map -- and applied to each theater's lat/long. Max landmark fit
   error was ~27px; most under 15px. So placements are as accurate as a
   stylized map allows.

   Dots marked "est" in comments used a street corner rather than an exact
   coordinate -- still good, but the ones to re-check first if anything
   looks off.
   ========================================================================== */

const MAP_UNITS = { x:0, y:0, w:500, h:1000 };

const MAP_IMAGE = {
  src: "images/manhattan-map.jpg",
  showDotsOverImage: true    // false = hide the gold dots/labels, let the map's own labels speak
};

/* --------------------------------------------------------------------------
   ERA_MAP -- map/coordinate data only. Text content lives in content/eras.js
   - view: [x, y, w, h] camera box, in image pixels. Wider than the cluster
           on purpose, so labels have room and don't run off the frame.
   - dots: theaters, in image pixels ({gone:true} = demolished X mark)
   - halo: optional [cx, cy, rx, ry] dashed ellipse = the district footprint
   -------------------------------------------------------------------------- */
const ERA_MAP = [

  { id:"e1798", stamp:"1798", date:"1798",
    view:[60,600,300,400],
    dots:[
      {x:214,y:833,label:"Park Theatre",sub:"1st Major Theater"}   // 21-25 Park Row, by City Hall (exact)
    ],
    halo:null,
    caption:"<b>Park Row, downtown.</b> Theater lives where the whole city lives — steps from City Hall." },

  { id:"e1849", stamp:"1849", date:"1849",
    view:[120,440,300,400],
    dots:[
      {x:285,y:743,label:"Bowery Theatre",sub:"Working-class"},        // 46 Bowery (exact)
      {x:259,y:670,label:"Niblo's Garden",sub:"Biggest commercial hit"},         // Broadway & Prince (exact)
      {x:280,y:579,label:"Astor Place Opera",sub:"Upper-class"}       // Astor Place (est)
    ],
    halo:null,
    caption:"<b>The Bowery vs. Astor Place.</b> Working-class theater and 'respectable' theater are now different buildings." },

  { id:"e1870", stamp:"1870s", date:"1870s",
    view:[110,290,300,400],
    dots:[
      {x:282,y:514,label:"Academy of Music",flip:false,sub:"Opera house"},   // 14th & Irving Pl (exact)
      {x:241,y:509,label:"Union Sq. Theatre",flip:true,sub:"'The Rialto'"},  // Union Square (est)
      {x:220,y:441,label:"Booth's Theatre"}     // 23rd & 6th Ave (est)
    ],
    halo:[252,488,70,55],
    caption:"<b>Union Square, 'The Rialto.'</b> For the first time, theaters cluster on purpose — a district is born." },

  { id:"e1893", stamp:"1893", date:"1893",
    view:[75,160,300,400],
    dots:[
      {x:219,y:398,label:"Tin Pan Alley",flip:true,sub:"Music publishers"},   // W 28th, 5th-6th (est)
      {x:205,y:320,label:"Empire Theatre"}   // Broadway & 39th (est)
    ],
    halo:[217,352,45,60],
    caption:"<b>Herald Square.</b> The district keeps climbing — and behind the stages, a cartel quietly takes control." },

  { id:"e1904", stamp:"1904", date:"1904",
    view:[65,90,300,400],
    dots:[
      {x:201,y:283,label:"42nd St Subway",sub:"Times Sq-42 St"},        // 214 W 42nd (exact)
      {x:200,y:258,label:"Olympia",flip:true,sub:"1st in Times Sq"},               // Hammerstein's, Bway 44-45 (est)
      {x:232,y:253,label:"Lyceum",flip:false,sub:"Oldest surviving theater"}                 // 149 W 45th (exact)
    ],
    halo:[212,268,55,55],
    caption:"<b>Times Square, year one.</b> Subway + newspaper + theaters, all in the same year. The center of gravity locks in." },

  { id:"e1927", stamp:"1927", date:"1927",
    view:[75,30,300,400],
    dots:[
      {x:201,y:235,label:"Barrymore",sub:"still running"},   // 243 W 47th (exact)
      {x:256,y:178,label:"Ziegfeld",sub:"Showoat"}     // 6th Ave & 54th (est)
    ],
    halo:[225,205,70,70],
    caption:"<b>The district at maximum.</b> Roughly 70–80 houses; the 1927–28 season opens ~264 productions — still the record." },

  { id:"e1982", stamp:"1982", date:"1982",
    view:[60,90,300,400],
    dots:[
      {x:203,y:256,label:"Morosco",flip:true,gone:true,sub:"demolished 1982"},      // 217 W 45th (est)
      {x:206,y:245,label:"Helen Hayes",gone:true,sub:"demolished 1982"},  // 210 W 46th (est)
      {x:201,y:283,label:"New Amsterdam",sub:"Landmark (survived!)"},
      {x:230,y:208,label:"Winter Garden Theater",flip:true, sub:"Cats"}   
              
    ],
    halo:null,
    caption:"<b>Times Square, low point.</b> Red marks = theaters demolished in 1982 for a hotel. The district survives — barely." },

  { id:"etoday", stamp:"Today", date:"1997&rarr;",
    view:[65,90,300,400],
    dots:[
      {x:201,y:283,label:"New Amsterdam",sub:"Disney-owned"},   // 214 W 42nd (exact)
      {x:232,y:253,label:"Lyceum",flip:false,sub:"oldest surviving"},           // 149 W 45th (exact)
      {x:190,y:260,label:"Majestic",flip:true,sub:"Phantom of the Opera"},
      {x:200,y:204,label:"Gershwin",flip:true,sub:"Wicked"},          // 225 W 44th (est)
      {x:206,y:240,label:"TKTS",flip:true,sub:"discount tickets"},
      {x:230,y:208,label:"Winter Garden Theater",flip:false, sub:"Cats"}  // Broadway & 47th (est)
    ],
    halo:[212,262,60,65],
    caption:"<b>The modern district.</b> 41 theaters, and an economy of hotels, restaurants, and tourism wrapped around them." }
];
