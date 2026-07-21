/* ==========================================================================
   ERA CONTENT — edit this file to update all essay text, titles, and image slots.
   Map coordinates, dots, and timeline data live in js/data.js.

   CITATIONS: prose uses short in-text tags like (Folger) that match the first
   word(s) of an entry in that era's `sources` array. The site renders those
   sources as a linked bibliography under each act. None cite Wikipedia directly
   — each traces to an institutional / primary source.
   ========================================================================== */

const ERA_CONTENT = [
{
  id:"e1798",
  title:"New York's First Stage: The Park Theatre",
  venue:"Park Row · Lower Manhattan",
  why:"Before Broadway becomes Broadway, we have to go back to the roots of New York theater. It all started at Park Row, downtown, because in 1798, Lower Manhattan was basically the entire city.",
  body:[
    `Here's the thing I didn't know before I started this project: for most of the 1700s, "American theater" didn't have a home. It had a suitcase. Before there were permanent playhouses, there were touring companies — troupes of English actors who moved from town to town putting on shows wherever they could find a room, a tavern, or a hastily built wooden hall. The most important of these was the company Lewis Hallam brought over from London, which gave its first American performance — a version of Shakespeare's The Merchant of Venice — in Williamsburg, Virginia, in 1752 (Colonial Williamsburg). They toured up and down the colonies for decades, renting or altering whatever wooden structure they could find in each new town before moving on (Lives & Legacies).`,
    `That's the world the Park Theatre was born out of, and it's why it matters. New York's first real permanent playhouse was actually the John Street Theatre, which opened in 1767 and got nicknamed "the Birthplace of American Theatre" (CultureNow). But John Street was a modest thing — a wooden building on a dirt road — and by the 1790s the city had outgrown it. The Park Theatre, which opened in 1798 (the same year John Street closed for good), was the upgrade: a genuine, ambitious, roughly two-thousand-seat house meant to prove that New York could take theater seriously. I think of it as the moment the suitcase finally got unpacked.`,
    `So what were people actually watching? Mostly imported English drama. Shakespeare was the backbone — Hamlet, Macbeth, Richard III — alongside popular British comedies like Richard Sheridan's The School for Scandal and lighter farces to close out the night (EBSCO). This is centuries before the musical exists as we'd recognize it. There was music in the theater, but a night out was built around spoken drama and comedy, not songs. The one genuinely American wrinkle was rare: the first play written by an American to be staged by professionals, Thomas Godfrey's tragedy The Prince of Parthia, had premiered back in 1767, and it was the exception that proved how English the whole enterprise still was (Lives & Legacies).`,
    `The detail I keep coming back to is who sat in the room. Because there was essentially one major theater, everybody went to the same one — wealthy merchants in the boxes, working people crammed into the pit, all watching the same stage on the same night. Early New York theater wasn't a luxury product; it was one of the only shared public rooms the city had. Rich and poor watched the same show, just from different seats and at different prices. Hold onto that, because the entire rest of this timeline is really the story of that shared room slowly splitting apart — by class, by neighborhood, and eventually by ticket price.`,
    `One last thing that says a lot about the era: the Park burned down twice. Theaters then were wooden, lit by open gas flame, and packed to the rafters, so they went up in flames constantly, and the industry just rebuilt wherever the audience had drifted to next. Almost nothing from this early map survives today. That restlessness — theater chasing its audience, rebuilding a little further along each time — is the engine of this entire project.`
  ],
  imgs:[
    {src:"images/park-theatre-interior.jpg", label:"Park Theatre interior",
     cap:"Interior of the Park Theatre, November 7, 1822"}
  ],
  sources:[
    {tag:"Colonial Williamsburg", name:"Colonial Williamsburg Foundation Digital Library — Williamsburg and Its Theatres (Bullock, 1937)", url:"https://research.colonialwilliamsburg.org/DigitalLibrary/view/index.cfm?doc=ResearchReports%5CRR1584.xml"},
    {tag:"CultureNow", name:"CultureNow (Museum Without Walls) — John Street Theatre, 1st Permanent Theatre in New York", url:"https://culturenow.org/site/9a328983-0989-4f24-9bbe-481a6fb4b696"},
    {tag:"EBSCO", name:"EBSCO Research Starters — First American Theater Opens", url:"https://www.ebsco.com/research-starters/history/first-american-theater-opens"},
    {tag:"Lives & Legacies", name:"Lives & Legacies (Rosenbach) — The Thriving Theatre of Colonial America", url:"https://livesandlegaciesblog.org/2018/06/06/the-thriving-theatre-of-colonial-america/"}
  ]
},
{
  id:"e1849",
  title:"The Astor Place Riot — theater splits by class",
  venue:"The Bowery &amp; Astor Place",
  why:"I chose 1849 because it's the year the 'shared room' idea died — violently. The Astor Place Riot is the clearest proof that by mid-century, which theater you went to had become a statement about who you were.",
  body:[
    `Fifty years after the Park, the single shared room had split in two, and the split ran straight along class lines. Downtown on the Bowery, the Bowery Theatre played to a rowdy, working-class crowd — melodrama, spectacle, cheap seats, and an audience that heckled, cheered, and threw things (this was also the first New York theater lit by gas, which tells you it wasn't some second-rate house — it just served a different public) (Musicals101). A few blocks northwest, the Astor Place Opera House opened in 1847 with a dress code and a menu of Italian opera aimed squarely at the carriage-and-kid-gloves set. Same city, same art form, two completely different rooms — and by 1849 the difference between them was worth killing over.`,
    `The flashpoint was, of all things, a Shakespeare rivalry. The American actor Edwin Forrest — muscular, plainspoken, a hero to the working class — had a long, bitter feud with the polished British tragedian William Macready, the darling of the elite (Folger). When Macready played Macbeth at the Astor Place Opera House on May 10, 1849, thousands of Forrest's supporters massed outside. The state militia was called in, and they fired into the crowd. Depending on the source, somewhere between twenty-two and thirty-one people were killed (Folger). It remains one of the deadliest civil disturbances in the city's history, and the trigger, on paper, was whose Macbeth was better.`,
    `Obviously it was never really about Shakespeare. It was about class, immigration, and a young country's resentment of Britain, all of it boiling over in the one public space where those groups actually collided (Gotham Center). The Astor Place Opera House had become a symbol of a wealthy elite trying to wall its culture off behind a dress code, and the crowd outside was rejecting the idea that culture could be fenced in like that. Historians point out that the truly new thing wasn't the riot — New York had riots — it was the state opening fire on its own citizens over a night at the theater (Gotham Center).`,
    `For my argument, this is the hinge. In 1798 everyone watched the same stage. By 1849, New York theater had stopped being one institution and become a market with segments — a high-culture opera house for the rich, a melodrama house for the workers, and a lethal amount of tension in between. And once culture becomes a market sorted by class, it starts going where the money is. On this map, the money is about to start moving uptown, fast — and the theaters are going to chase it.`
  ],
  imgs:[
    {label:"PASTE IMAGE: Astor Place Riot lithograph, 1849",
     cap:"The militia firing on the crowd at Astor Place, 1849 — Library of Congress (public domain)"},
    {label:"PASTE IMAGE: Bowery Theatre exterior or interior",
     cap:"The Bowery Theatre — NYPL Digital Collections"}
  ],
  sources:[
    {tag:"Folger", name:"Folger Shakespeare Library — The Astor Place Riot", url:"https://www.folger.edu/blogs/shakespeare-and-beyond/astor-place-riot-macbeth-new-york/"},
    {tag:"Gotham Center", name:"Gotham Center for NYC History — Blood on the Cobblestones", url:"https://www.gothamcenter.org/blog/astorplaceriot-commemorationpart2-zy4la-cerc4-ezwep-hsfs3s-rnyg3-tm6kl-anff2-8hdc3-el4s7-lryac"},
    {tag:"Musicals101", name:"Musicals101 (John Kenrick) — Demolished Broadway Theatres", url:"https://www.musicals101.com/bwaypast.htm"}
  ]
},
{
  id:"e1870",
  title:"The Rialto — Union Square invents the industry",
  venue:"Union Square · 'The Rialto'",
  why:"This stamp isn't about one building; it's about a pattern. Union Square is the first time New York theaters clustered on purpose — and the cluster, not any single theater, is what keeps moving north.",
  body:[
    `After the Civil War, the theater district crawled up to Union Square, and the blocks around it turned into what people literally called "The Rialto" — theaters, yes, but also the whole supporting economy that grows up around them: agents' offices, costume and scenery shops, photographers, ticket brokers, and the restaurants where actors got hired over lunch. If you've ever wondered why Broadway still feels like an entire industry crammed into ten blocks, this is where that model got invented. And I want to slow down here, because this era isn't really about one theater — it's about three very different kinds of theater existing side by side, which is the whole point.`,
    `The grandest was the Academy of Music on 14th Street, built in 1854. This was the city's premier opera house, where New York got its American premieres of Verdi's Il Trovatore and La Traviata and Bizet's Carmen (Musicals101). Opera in this era was the ultimate elite art form — Italian-language, expensive, and socially exclusive by design. The Academy was so exclusive, in fact, that when a wave of newly rich families couldn't buy their way into its private boxes, they went off and built their own opera house to spite it: the Metropolitan Opera, in 1883. That's opera as a class weapon, and it's a straight line from the snobbery that helped spark the Astor Place Riot.`,
    `Then there was Booth's Theatre, opened in 1869 at 23rd and Sixth by Edwin Booth — the greatest American Shakespearean actor of the century, and, in a grim footnote, the brother of Lincoln's assassin. Booth built one of the most technically advanced and ornate theaters in the country and staged lavish, historically detailed Shakespeare there: Hamlet, Richelieu, the classics (Musicals101). It was a temple to "legitimate" spoken drama at the highest level. It also went broke — Booth had no head for business and lost the theater to bankruptcy within a few years (Musicals101). Keep that failure in mind; it's a recurring theme that the artists rarely control the real estate.`,
    `And here's the part I love: the American musical was quietly being born a few blocks away, almost by accident. In 1866, a fire at the Academy of Music left a French ballet troupe stranded with no stage. A producer at nearby Niblo's Garden grabbed them and their elaborate scenery and welded them onto a Faust melodrama already in rehearsal, and the resulting five-and-a-half-hour spectacle of tights, special effects, and songs — The Black Crook — became a phenomenon, running a record 474 performances (Classic City News). It's widely called the first American musical, though honestly, historians still argue about whether it really counts (Classic City News). Either way, the ingredients of the musical are now on the board.`,
    `So the real story of this era is that a theater is a building, but a theater district is an economy. Once opera, Shakespeare, and the first stirrings of the musical are all clustered together with their agents and shops and restaurants, every new theater has a gravitational reason to open near the old ones. That's why the district from here on moves as a single unit rather than scattering — and it's why, when it finally lands in Times Square, it'll be almost impossible to dislodge. The roots aren't the stages; they're the whole ecosystem around them.`
  ],
  imgs:[
    {label:"PASTE IMAGE: Union Square / the Rialto, 1870s–80s",
     cap:"The Rialto around Union Square — Museum of the City of New York"},
    {label:"PASTE IMAGE: Booth's Theatre exterior, c. 1870",
     cap:"Edwin Booth's Theatre at 23rd &amp; Sixth — NYPL Digital Collections"}
  ],
  sources:[
    {tag:"Musicals101", name:"Musicals101 (John Kenrick) — Demolished Broadway Theatres & Broadway History", url:"https://www.musicals101.com/bwaypast.htm"},
    {tag:"Classic City News", name:"Classic City News — The First Broadway Musical Was Performed in 1866 (The Black Crook)", url:"https://www.classiccitynews.com/post/the-first-broadway-musical-was-performed-in-1866"}
  ]
},
{
  id:"e1893",
  title:"Herald Square — showmen, syndicates, and Tin Pan Alley",
  venue:"Herald Square · W 28th–40th",
  why:"The Empire Theatre opens at 40th and Broadway in 1893 — the district's northern flag — on the eve of the Theatrical Syndicate. This is when Broadway becomes a business empire, not just a neighborhood.",
  body:[
    `By the 1890s the Rialto had slid north again, up to Herald Square, and the most important action was increasingly happening in offices rather than onstage. This is the era where Broadway stops being just a cluster of theaters and becomes a business — a nationally organized one — and I think it's the most underrated turning point in the whole story.`,
    `In 1896, six men — producer Charles Frohman and five partners — formed the Theatrical Syndicate, a booking cartel that controlled which shows played which theaters across basically the entire country until the Shubert brothers finally broke their grip in the 1910s (Musicals101). Think about what that means: before Times Square, before the neon, New York had already made itself the command center of American theater through pure business consolidation. A show might tour through fifty towns, but the contracts, the bookings, and the money all ran through Manhattan. That's the moment New York's dominance became structural, not just cultural.`,
    `The shows themselves were changing too. Three strains of popular musical theater were competing for the same audience: European-style operetta (lush, romantic, imported), musical farce, and the rowdier world of vaudeville (Library of Congress). The Casino Theatre nearby specialized in exactly this kind of tuneful, lighter fare, and it's where the era's runaway hit Floradora landed in 1900. This is the commercial soil the modern American musical is about to grow out of — but it hasn't quite found its own voice yet. It's still borrowing heavily from Europe.`,
    `And one block-sized detail I can't resist: West 28th Street, where the sheet-music publishers crammed their offices together, got nicknamed Tin Pan Alley — supposedly for the tinny racket of all their cheap pianos banging out songs at once (Library of Congress). The song-publishing industry deliberately parked itself right next to the theater industry, because the two fed each other: a hit show sold sheet music, and a hit song sold tickets. It's the same clustering logic as the Rialto, just one economy feeding another. Broadway, I've come to think, has never really been one industry — it's a bundle of industries all pretending to be one.`
  ],
  imgs:[
    {label:"PASTE IMAGE: Empire Theatre exterior, c. 1900",
     cap:"Frohman's Empire Theatre at Broadway &amp; 40th — NYPL Digital Collections"},
    {label:"PASTE IMAGE: Tin Pan Alley sheet music cover",
     cap:"Sheet music from W. 28th Street — Library of Congress, Musical Theater collection"}
  ],
  sources:[
    {tag:"Musicals101", name:"Musicals101 (John Kenrick) — The Theatrical Syndicate & Broadway History", url:"https://www.musicals101.com/bwaypast.htm"},
    {tag:"Library of Congress", name:"Library of Congress — Musicals (Songs of America)", url:"https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/"}
  ]
},
{
  id:"e1904",
  title:"Longacre becomes Times Square — the district finds home",
  venue:"Longacre Square → Times Square",
  why:"This is the pivot of the whole project. In about twelve months the subway arrives, The New York Times moves in, and Longacre Square is renamed Times Square. Transit, media, and real estate all land at once — and the century-long migration finally stops.",
  body:[
    `Everything this project has been building toward happens in a single year. The blocks around 42nd Street were still called Longacre Square — a gritty carriage-and-stable district — when a handful of forces converged almost simultaneously and froze the theater district in place for good.`,
    `On April 8, 1904, Mayor George McClellan officially renamed Longacre Square "Times Square," after The New York Times, which was building its new tower on the odd triangular block where Broadway crosses Seventh Avenue (Britannica). That October — on the 27th — the city's very first subway line opened, with a station right at 42nd Street, and it instantly became one of the busiest hubs in the system (NYPL). The Times moved into the tower in January 1905, and a couple of years later it started dropping a lit ball from the roof every New Year's Eve, a tradition that began in 1907 (Britannica). Within a decade, an anonymous wagon district had become the most famous intersection in America.`,
    `Here's my actual argument about why this is the pivot: Broadway didn't choose Times Square for glamour. It chose it because the subway could deliver an audience from anywhere in the city to one single intersection. For a hundred years the district had been chasing its audience northward, rebuilding a little further uptown each time the crowd drifted. The subway ended the chase — once one spot was reachable from everywhere, there was no reason to keep moving. Transit froze the map. That's why the migration this whole site traces basically stops here.`,
    `And the shows finally found an American voice to match. The same year the square got its name, George M. Cohan — the man usually called the father of American musical comedy — opened Little Johnny Jones (Library of Congress). It's the show that gave us "Give My Regards to Broadway" and "The Yankee Doodle Boy," and it was a genuine break from the imported operetta that had dominated the 1890s: brash, fast-talking, patriotic, full of slang, and unmistakably American (EBSCO). Cohan's real innovation was structural — he built the plot first and fit the songs to it, instead of hanging a thin story on a pile of popular tunes (EBSCO). His shows also openly celebrated the immigrant experience, which is worth flagging, because Broadway is starting to reflect the actual city around it.`,
    `A few years later the New Amsterdam, one of the theaters that first anchored this block, became the home of the Ziegfeld Follies (1907–1931) — the lavish, star-studded revue that defined Broadway spectacle for a generation (Library of Congress). So by the 1910s you've got the full modern menu taking shape in one district: American musical comedy, the big revue, imported operetta, and straight plays, all within a few blocks of a subway stop. The district didn't just find a home. It found its form.`
  ],
  imgs:[
    {label:"PASTE IMAGE: Times Tower / Longacre Square, c. 1904–05",
     cap:"The Times Tower rising over the new Times Square — Museum of the City of New York"},
    {label:"PASTE IMAGE: New Amsterdam Theatre facade, c. 1905",
     cap:"The New Amsterdam on 42nd Street — NYPL Digital Collections"}
  ],
  sources:[
    {tag:"Britannica", name:"Encyclopaedia Britannica — Times Square", url:"https://www.britannica.com/topic/Times-Square"},
    {tag:"NYPL", name:"The New York Public Library — The Changing Face of Times Square", url:"https://www.nypl.org/blog/2015/01/12/changing-times-square"},
    {tag:"Library of Congress", name:"Library of Congress — Musicals (Songs of America)", url:"https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/"},
    {tag:"EBSCO", name:"EBSCO Research Starters — Cohan's Little Johnny Jones Premieres", url:"https://www.ebsco.com/research-starters/drama-and-theater-arts/cohans-little-johnny-jones-premieres"}
  ]
},
{
  id:"e1927",
  title:"The Golden Age peak — and the cliff right after it",
  venue:"Times Square · 70+ Theaters",
  why:"The 1927–28 season is the statistical summit of Broadway as a production machine — more theaters and openings than ever before or since. I picked the peak on purpose, because you can't understand 60 years of decline without knowing how high the drop started.",
  body:[
    `The numbers from the 1927–28 season almost don't feel real. On the order of 250 or more productions opened in a single season, spread across roughly seventy to eighty theaters — most of them thrown up in a twenty-year building sprint by rival dynasties like the Shuberts (Library of Congress). For comparison, a modern season opens around forty shows across forty-one theaters. This was Broadway at absolute maximum, and by 1927 it wasn't just big — it was artistically the most exciting theater in the world.`,
    `The whole menu of forms was thriving at once. There were sumptuous operettas like Sigmund Romberg's The Student Prince, lighthearted musical comedies from young songwriters like George Gershwin and Rodgers & Hart, the annual Ziegfeld Follies and its rival revues, and — importantly — a new generation of serious American plays, led by Eugene O'Neill and the Theatre Guild, that finally proved American drama could stand next to the European classics. Broadway had become a genuine world capital of theater, not a province importing everyone else's culture.`,
    `And then, on December 27, 1927, Show Boat opened at the Ziegfeld Theatre — and everything about what a musical could be changed overnight (Rodgers & Hammerstein). Up to this point, musicals were mostly light: pretty songs, thin plots, spectacle. Show Boat, with Jerome Kern's music and Oscar Hammerstein II's book, wove the songs directly into a serious story that spanned forty years and dealt head-on with racial injustice and an interracial marriage (PBS). It ran 572 performances and gave us "Ol' Man River" (Rodgers & Hammerstein). PBS's history calls it the first time serious Black and white characters shared a Broadway stage as equals (PBS). This is exactly where the "social mirror" part of my project comes alive: a commercial blockbuster that put the country's ugliest subject on a mainstream stage and made audiences sit with it.`,
    `But I chose 1927 for the cliff as much as the peak. Within two years, the Depression gutted ticket sales, and the arrival of talking pictures gave people a much cheaper night out. One by one, theaters converted into movie houses — same buildings, same marquees, entirely different industry. Here's the part I find most important, and it's a break from everything before it: for the first time, the district didn't shrink by moving somewhere else. It shrank in place. Times Square kept the theaters' bodies even as it lost their business — and that stranded, hollowed-out district is exactly the setup for the decades of decay to come.`
  ],
  imgs:[
    {label:"PASTE IMAGE: Times Square at night, late 1920s",
     cap:"The district at full wattage — Museum of the City of New York"},
    {label:"PASTE IMAGE: Show Boat 1927 production photo or program",
     cap:"Show Boat at the Ziegfeld, December 1927 — NYPL Billy Rose Theatre Division"}
  ],
  sources:[
    {tag:"Rodgers & Hammerstein", name:"The Rodgers & Hammerstein Organization — Show Boat, 1927 Original Broadway", url:"https://rodgersandhammerstein.com/production/show-boat/1927-original-broadway/"},
    {tag:"PBS", name:"PBS, Broadway: The American Musical — Show Boat", url:"https://www.pbs.org/wnet/broadway/shows/show-boat/"},
    {tag:"Library of Congress", name:"Library of Congress — Musicals (Songs of America)", url:"https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/"}
  ]
},
{
  id:"e1982",
  title:"The wrecking ball — Broadway nearly loses its home",
  venue:"Times Square · The Low Point",
  why:"1982 is when the decline stopped being abstract. Five theaters — including the Morosco and the Helen Hayes — were torn down for a hotel while actors were arrested protesting outside. It's the closest Broadway ever came to being redeveloped out of its own home.",
  body:[
    `The decades after World War II hollowed Times Square out. The middle-class audience left for the suburbs and for television; the grand houses on 42nd Street slid into showing grindhouse and pornographic films; and by the 1970s Times Square had become the national shorthand for urban decay. Remember, transit had frozen the theaters in place — so they didn't leave, they just sat there while the neighborhood rotted around them, and a nearly bankrupt city mostly let it happen (PBS).`,
    `Then in 1982 redevelopment arrived in the ugliest possible form. To build the Marriott Marquis hotel, the city approved demolishing five theaters — the Morosco, the Helen Hayes, the Bijou, the Astor, and the Gaiety — including houses where Eugene O'Neill and Arthur Miller premieres had run (PBS). Preservationists, led by producer Joseph Papp and Actors' Equity under the banner "Save the Theaters," fought it hard, pulling in famous actors to protest (NYPAP). Demolition began on March 22, 1982; the next day around 165 people were arrested for physically trying to block it (NYPAP). The wrecking ball went through anyway.`,
    `What was strange and telling is what was playing while this happened. That very same year — October 7, 1982 — a British import called Cats opened a few blocks north at the Winter Garden and quietly began rewriting the economics of Broadway (Smithsonian). So the district hit its absolute low point and planted the seed of its rescue in the same twelve months, a few blocks apart. I'll come back to Cats, because it becomes the whole model for what saves this place.`,
    `I picked 1982 because it forced the city to answer a question out loud that it had always dodged: what actually is Broadway — a pile of valuable real estate, or an institution worth protecting? The demolition was the wrong answer. But it produced the right reaction. Within a few years the backlash pushed the Landmarks Preservation Commission to designate most of the surviving theaters — around twenty-five of them by 1987 — which is the single reason the district you can walk through today still physically exists (PBS). Sometimes preservation only wins right after it loses.`
  ],
  imgs:[
    {label:"PASTE IMAGE: 'Save the Theaters' protest, 1982",
     cap:"Actors protesting the Morosco demolition, 1982 — verify license (NYPL / news archives)"},
    {label:"PASTE IMAGE: 42nd Street grindhouse marquees, 1970s",
     cap:"The district at its lowest — Museum of the City of New York"}
  ],
  sources:[
    {tag:"PBS", name:"PBS, Broadway: The American Musical — Resurrection of 42nd Street", url:"https://www.pbs.org/wnet/broadway/essays/resurrection-of-42nd-street/"},
    {tag:"NYPAP", name:"New York Preservation Archive Project — Helen Hayes & Morosco Theatres", url:"https://www.nypap.org/preservation-history/helen-hayes-morosco-theatres/"},
    {tag:"Smithsonian", name:"Smithsonian — Object of the Day: Cats costume (Cats & the megamusical)", url:"https://music.si.edu/node/1197"}
  ]
},
{
  id:"etoday",
  title:"Rebirth — Broadway as an economic engine",
  venue:"Times Square · 41 Theaters",
  why:"1997 — Disney reopening the restored New Amsterdam, with The Lion King arriving that fall — is the cleanest marker of the turnaround. It's when Broadway stopped being something the city tolerated and became something the city's economy is openly built on.",
  body:[
    `The comeback was engineered, not accidental. Through the 1990s the state and city seized and cleaned up 42nd Street in a massive redevelopment push, and the keystone of the whole deal was bringing Disney in to restore the New Amsterdam — the same theater that had anchored this block back in 1903 — after a four-year restoration. When The Lion King opened there in the fall of 1997, it wasn't just a hit; it was a statement that Times Square was safe, corporate, and open for family business again (PBS).`,
    `But the show that actually invented the economic model was the one I flagged in the last act — Cats. I have a soft spot for it, honestly: it was the first musical I ever saw, and I didn't know until I started this project that the goofy singing-cats show I loved as a kid is arguably the most important business event in modern Broadway history. Cats ran eighteen years and 7,485 performances, from 1982 all the way to 2000, and for a long stretch it was the longest-running show Broadway had ever seen (Smithsonian). It's usually called the first "megamusical" — a big-budget, spectacle-driven, sung-through show designed to run for decades and sell to tourists and families regardless of what critics thought (Smithsonian). It even pioneered selling merchandise as a serious revenue stream. Its producer, Cameron Mackintosh, and composer, Andrew Lloyd Webber, followed it with Les Misérables and The Phantom of the Opera, and that British "megamusical" invasion is what refilled these theaters in the 1980s and '90s (London Theatre).`,
    `That model — long-running, tourist-facing blockbusters that become destinations in themselves — is what turned Broadway into a genuine economic engine, and the numbers now are staggering. The most recent season, 2024–25, grossed about $1.89 billion, the highest in recorded history, with roughly 14.7 million tickets sold (Broadway League). The old record season, 2018–19, drew 14.77 million people — more than all ten of the New York area's major professional sports teams combined (Baruch/CUNY). And that's just ticket sales. The Broadway League's most recent economic-impact study put Broadway's total contribution to the city's economy at about $14.7 billion, supporting nearly 97,000 jobs, most of it from "Broadway tourists" — roughly two-thirds of the audience are visitors, and something like 8.5 million tickets a year go to people who name Broadway as a very important reason for their trip to New York (Baruch/CUNY).`,
    `It's not all spectacle and franchises, either — the social-mirror thread runs right up to the present. In 2015, Hamilton put a cast of Black and Latino actors in the roles of the white Founding Fathers, set the whole thing to hip-hop, and turned the American immigrant story into the biggest ticket in the world. It's Show Boat's job, done again for a new century: a commercial juggernaut that also forces the audience to see the country differently.`,
    `And here's the ending I didn't see coming when I started. Two centuries after the Park Theatre, the relationship between Broadway and the city has completely inverted. For a hundred years the theaters chased the city, rebuilding a little further uptown each time the audience moved. Now the city organizes itself around Broadway — its zoning, its policing, its tourism strategy, even the decision to close Times Square to cars and hand it to pedestrians. The clearest symbol of the flip is the Marriott Marquis, the hotel that got the Morosco torn down in 1982: it now exists mostly to house people who came to New York for the theater. The district that spent its whole life chasing the city became the thing the city — and the world — plans around. Broadway isn't just in New York anymore. At this point, a real piece of New York is in Broadway.`
  ],
  imgs:[
    {label:"PASTE IMAGE: Restored New Amsterdam / Lion King marquee, 1997+",
     cap:"The New Amsterdam reborn under Disney — Wikimedia Commons (check license)"},
    {label:"PASTE IMAGE: Modern Times Square pedestrian plaza",
     cap:"The district today — Wikimedia Commons"}
  ],
  sources:[
    {tag:"PBS", name:"PBS, Broadway: The American Musical — Resurrection of 42nd Street", url:"https://www.pbs.org/wnet/broadway/essays/resurrection-of-42nd-street/"},
    {tag:"Smithsonian", name:"Smithsonian — Object of the Day: Cats & the megamusical", url:"https://music.si.edu/node/1197"},
    {tag:"London Theatre", name:"London Theatre — Everything you need to know about Cats", url:"https://www.londontheatre.co.uk/theatre-news/news/everything-you-need-to-know-about-andrew-lloyd-webbers-cats"},
    {tag:"Broadway League", name:"The Broadway League — 2024–25 Season Statistics", url:"https://www.broadwayleague.com/press/press-releases/broadways-2024-2025-season-wraps-with-147-million-attendances-and-grosses-of-189-billion/"},
    {tag:"Baruch/CUNY", name:"Baruch College / CUNY — Broadway's Economic Impact to NYC (Broadway League data)", url:"https://www.baruch.cuny.edu/nycdata/culture/broadway-economics.htm"}
  ]
}
];
