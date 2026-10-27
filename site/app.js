// Brooklyn SDA School site logic.
// Ported from the Claude Design prototype: the Component class below is the prototype's
// state + data + renderVals(); everything above it is a tiny runtime (state, render, events).
// Donation counter: set window.BSDA_CONFIG = { raised, goal, donors } before this script loads.

class DCLogic {
  constructor(props) { this.props = props || {}; }
  setState(patch) {
    Object.assign(this.state, typeof patch === 'function' ? patch(this.state) : patch);
    this.schedule();
  }
}

class Component extends DCLogic {
  state = {
    route: 'home', menuOpen: false, slide: 0,
    grade: '3', clubCat: 'All', room: 'stem', evFilter: 'All',
    step: 0, submitted: false, submittedName: '', contactSent: false,
    errors: {}, barReady: false, countUp: 0,
    form: { firstName:'', lastName:'', dob:'', gradeApplying:'', guardian:'', relationship:'', email:'', phone:'', address:'', currentSchool:'', lastGrade:'', church:'', heard:'', notes:'', agree:false }
  };

  routes = ['home','about','faculty','admissions','apply','life','events','news','fundraisers','give','yearbooks','store','portals','contact'];

  componentDidMount() {
    this.onHash();
    window.addEventListener('hashchange', this.onHash);
    this._bar = setTimeout(() => { this.state.barReady = true; this.updateLive(); }, 260);
    this.startCount();
    this._auto = setInterval(() => {
      if (this.state.route === 'home' && !this.state.menuOpen) this.setState({ slide: (this.state.slide + 1) % this.slides.length });
    }, 7000);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHash);
    clearTimeout(this._bar); clearInterval(this._count); clearInterval(this._auto);
  }

  startCount() {
    const target = Number(this.props.raised != null ? this.props.raised : 18400);
    const t0 = Date.now();
    clearInterval(this._count);
    this._count = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / 1700);
      this.state.countUp = Math.round(target * (1 - Math.pow(1 - p, 3))); this.updateLive();
      if (p >= 1) clearInterval(this._count);
    }, 40);
  }

  onHash = () => {
    const h = (window.location.hash || '').replace('#','');
    if (this.routes.indexOf(h) !== -1) this.setState({ route: h, menuOpen: false });
  };

  go = (r) => (e) => {
    if (e) e.preventDefault();
    window.location.hash = r;
    this.setState({ route: r, menuOpen: false });
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  updateLive() {
    const raised = Number(this.props.raised != null ? this.props.raised : 18400);
    const goal = Number(this.props.goal != null ? this.props.goal : 55000);
    const pct = Math.max(0, Math.min(100, Math.round((raised / (goal || 1)) * 100)));
    document.querySelectorAll('[data-raised]').forEach((el) => { el.textContent = this.money(this.state.countUp); });
    document.querySelectorAll('[data-bar]').forEach((el) => { el.style.width = (this.state.barReady ? pct : 0) + '%'; });
  }

  money = (n) => '$' + Number(n || 0).toLocaleString('en-US');

  // ---------- hero slides ----------
  slides = [
    { kicker:'To inspire', word:'Faith', img:'assets/hero-faith.jpg', pos:'50% 30%', alt:'Student in prayer',
      lede:'As a Christian school, we care about our students\u2019 education from an', ledeAccent:'eternal perspective.',
      body:'A belief in the Creator God is fundamental to everything we do. Morning worship, Bible class and service are woven through the day \u2014 our aim is to educate the heart as fully as the mind.',
      cta:'Our philosophy', ctaKey:'about' },
    { kicker:'To dream', word:'Bigger', img:'assets/students-worship.jpg', pos:'50% 35%', alt:'Students leading worship with microphones',
      lede:'Our students lead worship, sing in the choir and speak to the', ledeAccent:'whole school.',
      body:'Performing arts groups, choir and Music Enrichment give every child a stage. Confidence here is practiced, not assumed \u2014 students take real responsibility from the earliest grades.',
      cta:'Student life', ctaKey:'life' },
    { kicker:'To build', word:'Futures', img:'assets/hero-stem.jpg', pos:'50% 40%', alt:'Student building a circuit board in the STEM lab',
      lede:'Hands-on STEM, inquiry-based learning and critical thinking for', ledeAccent:'high school and beyond.',
      body:'A balanced curriculum of academics, creative arts and physical activity. Build days in the STEM lab, lab science upstairs, and preparation that carries into academy and college.',
      cta:'Grade explorer', ctaKey:'life' },
    { kicker:'To serve', word:'Others', img:'assets/students-service.jpg', pos:'50% 40%', alt:'Students handing out gifts in the neighborhood',
      lede:'We teach our students the importance of', ledeAccent:'giving back.',
      body:'Compassion, respect and responsibility \u2014 practiced through neighborhood service projects, church partnership and care for the people around us in Brooklyn.',
      cta:'Our mission', ctaKey:'about' }
  ];

  // ---------- statement boxes ----------
  statementData = [
    { kicker:'Academics', title:'Equipped to learn', img:'assets/classroom.jpg', alt:'Kindergarten class',
      body:'A balanced curriculum of academics, creative arts and physical activity, built on inquiry and critical thinking. We teach Pre-K through 8th grade, and the first years of school are the most intensive learning years of a child\u2019s life.',
      cta:'Explore grades', key:'life', bg:'#F4F2ED', titleColor:'#131A2E', bodyColor:'#5A6180', kickerColor:'#4A6FD0', btnBg:'#4A6FD0', btnColor:'#fff', flip:false },
    { kicker:'Character', title:'Building character for Christ', img:'assets/hero-faith.jpg', alt:'Student in prayer',
      body:'We help students grow socially, mentally, physically and spiritually. We create an environment where students feel safe and secure, and learn to appreciate the wisdom and love of Jesus.',
      cta:'About us', key:'about', bg:'#131A2E', titleColor:'#ffffff', bodyColor:'#A9B1CE', kickerColor:'#8CC63F', btnBg:'#8CC63F', btnColor:'#0C1120', flip:true },
    { kicker:'Community', title:'A culture of service', img:'assets/students-service.jpg', alt:'Students on a service day',
      body:'We equip students with the skills and knowledge to become active members of the community, and teach them the importance of giving back \u2014 compassion, respect and responsibility, practiced in the neighborhood.',
      cta:'Our fundraisers', key:'fundraisers', bg:'#4A6FD0', titleColor:'#ffffff', bodyColor:'#DCE4FA', kickerColor:'#FFD24A', btnBg:'#FFD24A', btnColor:'#0C1120', flip:false }
  ];

  mosaicData = [
    { label:'1938', sub:'Founded in Bay Ridge, Brooklyn \u2014 one classroom in a church basement.', cols:1, rows:1, bg:'#131A2E', color:'#ffffff', subColor:'#8A93B6', size:'44px' },
    { label:'Pre-K \u2013 8', sub:'Every grade, one building on Ocean Avenue.', cols:1, rows:1, bg:'#8CC63F', color:'#16240A', subColor:'#2C4212', size:'38px' },
    { label:'', sub:'', cols:2, rows:2, img:'assets/building-front.jpg', alt:'The school building at 1260 Ocean Avenue', bg:'#131A2E', color:'#ffffff', subColor:'#D6DBEC', size:'28px', labelOverride:'1260 Ocean Ave', subOverride:'Our home in Flatbush since the 1980s.' },
    { label:'', sub:'', cols:1, rows:1, img:'assets/hero-stem.jpg', alt:'STEM lab', bg:'#131A2E', color:'#ffffff', subColor:'#D6DBEC', size:'26px', labelOverride:'STEM', subOverride:'Build days, circuits and motorized planes.' },
    { label:'11', sub:'Faculty and staff who know every student by name.', cols:1, rows:1, bg:'#FFD24A', color:'#2E2306', subColor:'#453712', size:'44px' },
    { label:'', sub:'', cols:2, rows:1, img:'assets/students-worship.jpg', alt:'Students leading worship', bg:'#131A2E', color:'#ffffff', subColor:'#D6DBEC', size:'26px', labelOverride:'Worship & choir', subOverride:'Students lead the whole school in song and prayer.' },
    { label:'2', sub:'Accreditations \u2014 Adventist Accrediting Association and NCPSA.', cols:2, rows:1, bg:'#F4F2ED', color:'#131A2E', subColor:'#5A6180', size:'44px' }
  ];

  missionPoints = ['Build characters for Christ','Foster social, mental, physical and spiritual development','Develop a culture of service','Equip students with the skills necessary for high school and beyond'];
  philosophyPoints = ['develop a personal relationship with God and his fellow men','master the basic academic skills','value labor, physical and mental, as the blessing God intended','cultivate physical fitness, mental ability and moral purity'];
  principalLetter = [
    'Welcome to Brooklyn Seventh-day Adventist School. Whether you are a new student or a returning one, our community is ready to embrace you. The love of God permeates every faculty member, staff and student, creating an environment that feels like home.',
    'Our moral foundation is rooted in the belief that God\u2019s ideal for His children surpasses human comprehension. Our aim is to guide each student toward godliness, nurturing them for excellence and equipping them for a life of service and mastery.',
    'We provide a quality Christian education that emphasizes critical thinking, enabling our students to thrive in today\u2019s ever-changing world. Our teachers and staff form a professional learning community with a high standard for excellence.',
    'Inside our classrooms, rigorous academic pursuits take place, complemented by extracurricular clubs, performing arts groups, athletic teams and events. We look forward to partnering with you on this journey.'
  ];
  history = [
    { year:'1938', title:'The foundation', body:'Pastor Gerhart Herwick and parents of the Danish-Norwegian Church opened a school in Bay Ridge \u2014 one classroom in a church basement on 50th Street, with Betty Thogunsen as the first teacher.' },
    { year:'1962', title:'Closed, then reopened', body:'After years closed, the school reopened under Pastor William Goransson. His wife Dolphy became the first teacher, joined by Jack Mentges, in two basement classrooms.' },
    { year:'1964', title:'New church, new school', body:'The Italian-American Church merged with the Danish-Norwegian Bay Ridge Church to become the Brooklyn Seventh-day Adventist Church \u2014 the origin of the Brooklyn S.D.A. School.' },
    { year:'1970', title:'Classroom expansions', body:'Under Pastor Halvard J. Thomsen and principal Joseph Miller the school grew to three classrooms, plus one in Staten Island, then moved to Viking Hall with Nursery/K and grades 1\u20139.' },
    { year:'1980s', title:'1260 Ocean Avenue', body:'Under Pastor Glen Hixon the current building was purchased, with Yaqub Khan as principal. A grades 1\u20138 program was established at the new site.' },
    { year:'1998', title:'Pre-K expansion', body:'The Pre-K and Kindergarten program was re-established under the leadership of Dr. Iola Brown.' },
    { year:'2023', title:'A new principal', body:'Loris LaBorde became principal, bringing years of experience in Adventist schools and plans for growth through fundraising, rebranding and reorganization.' }
  ];
  faculty = [
    { name:'Loris LaBorde', role:'Principal', dept:'Administration' },
    { name:'Teisha Richards', role:'Asst. Principal · Grades 1&2 Teacher', dept:'Administration' },
    { name:'Christine Honore', role:'Administrative Assistant', dept:'Administration' },
    { name:'Jacques Docteur', role:'Treasurer', dept:'Administration' },
    { name:'Cheryl Walcott', role:'Pre-K / K Teacher', dept:'Early years' },
    { name:'Nardlie Denard', role:'Pre-K / K Assistant', dept:'Early years' },
    { name:'Gercine Straker', role:'Grades 3&4 Teacher', dept:'Classroom' },
    { name:'Thea Fleuriot', role:'Grades 5&6 Teacher', dept:'Classroom' },
    { name:'Heather Anderson', role:'Grades 7&8 Teacher', dept:'Classroom' },
    { name:'Mark Gordon', role:'Computer / Gym Teacher', dept:'Specials' },
    { name:'Paul Engram', role:'Music Teacher', dept:'Specials' }
  ];
  deptColors = { 'Administration':['#4A6FD0','#ffffff'], 'Early years':['#FFD24A','#2E2306'], 'Classroom':['#8CC63F','#16240A'], 'Specials':['#131A2E','#8CC63F'] };
  admitSteps = [
    { n:'1', step:'Step one', title:'Apply', bar:'#4A6FD0', barText:'#ffffff', items:['Complete the application form','Pay the $60 application fee (non-refundable)','Meet with administration or the principal, virtually or in person'] },
    { n:'2', step:'Step two', title:'Test', bar:'#FFD24A', barText:'#2E2306', items:['Sit the placement test on one of the scheduled dates','Receive the status of your application','If accepted, move on to registration'] },
    { n:'3', step:'Step three', title:'Register', bar:'#8CC63F', barText:'#16240A', items:['Submit all required documents to the office','Late registration in September carries a $50 non-refundable fee','Reserve your grade-level registration day in August'] },
    { n:'4', step:'Step four', title:'Enroll', bar:'#131A2E', barText:'#8CC63F', items:['Sign the contract and pay fees','Pay first and last month\u2019s tuition','Receive your acceptance letter, uniform info, supply list and handbook'] }
  ];
  documents = ['Transcript release form','Recommendation letters from previous school','Letter verifying church membership','Previous report card','Original birth certificate','Medical records & immunization','NYC support school funding form','Recent photograph','Internet user policy agreement','Media release form','Technology agreement form','Home & school agreement form','Music enrichment application'];
  testDates = [
    { date:'Sep 8 & 15', kind:'Placement test' }, { date:'Nov 12', kind:'Placement test' },
    { date:'Jan 21', kind:'Placement test' }, { date:'Mar 17', kind:'Placement test' },
    { date:'May 19', kind:'Placement test' }, { date:'Jul 21', kind:'Placement test' },
    { date:'Aug 19\u201323', kind:'Registration week' }
  ];
  events = [
    { day:'19\u201323', month:'Aug', title:'Registration week', body:'Pre-K & K on the 19th, grades 1\u20132 on the 20th, 3\u20134 on the 21st, 5\u20136 on the 22nd, 7\u20138 on the 23rd.', cat:'Registration', bar:'#4A6FD0', barText:'#ffffff' },
    { day:'08', month:'Sep', title:'Placement test', body:'Second session on September 15. Reserve a slot with the admissions office.', cat:'Placement', bar:'#FFD24A', barText:'#2E2306' },
    { day:'01\u201331', month:'Oct', title:'Pastor Appreciation Month', body:'A month-long celebration with the Brooklyn Seventh-day Adventist Church. Repeats yearly.', cat:'Community', bar:'#8CC63F', barText:'#16240A' },
    { day:'12', month:'Nov', title:'Placement test', body:'Autumn placement session for new applicants.', cat:'Placement', bar:'#FFD24A', barText:'#2E2306' },
    { day:'21', month:'Jan', title:'Placement test', body:'Winter placement session for new applicants.', cat:'Placement', bar:'#FFD24A', barText:'#2E2306' },
    { day:'17', month:'Mar', title:'Placement test', body:'Spring placement session for new applicants.', cat:'Placement', bar:'#FFD24A', barText:'#2E2306' },
    { day:'19', month:'May', title:'Placement test', body:'End-of-year placement session for new applicants.', cat:'Placement', bar:'#FFD24A', barText:'#2E2306' },
    { day:'21', month:'Jul', title:'Placement test', body:'Summer session ahead of registration week.', cat:'Placement', bar:'#FFD24A', barText:'#2E2306' }
  ];
  news = [
    { date:'07.29.24', title:'2024/2025 School Year Calendar Now Available', excerpt:'Check out the new school calendar for Brooklyn Seventh-day Adventist School. We have a lot of amazing things planned for this coming year.', img:'assets/calendar.jpg' },
    { date:'06.24.24', title:'Join the Summer Blast Program for an Unforgettable Summer', excerpt:'Our Summer Blast program offers engaging activities for Pre-K to 8th grade students through the summer months.', img:'assets/summer-blast.jpg' },
    { date:'09.18.23', title:'Support our Students\u2019 Futures with the New 12 Stones Fund', excerpt:'With the support of our friends and families, this contributor-funded initiative is dedicated to empowering Seventh-day Adventist education.', img:'assets/stones.jpg' }
  ];
  dayFull = [
    { time:'7:45', title:'Arrival', body:'Doors open on Ocean Avenue. Bags down, uniforms checked, friends found.', bar:'#4A6FD0', barText:'#ffffff' },
    { time:'8:15', title:'Morning worship', body:'The whole school gathers to sing and pray. Students lead in rotation.', bar:'#FFD24A', barText:'#2E2306' },
    { time:'8:45', title:'Math block', body:'Number sense in the lower grades, pre-algebra and algebra upstairs.', bar:'#F4F2ED', barText:'#131A2E' },
    { time:'10:15', title:'Recess', body:'Outside on the yard, or the gym when Brooklyn weather says otherwise.', bar:'#8CC63F', barText:'#16240A' },
    { time:'10:45', title:'Reading & writing', body:'Guided reading groups, then writing workshop with peer feedback.', bar:'#F4F2ED', barText:'#131A2E' },
    { time:'12:00', title:'Lunch', body:'Cafeteria, then a stretch outdoors before the afternoon.', bar:'#131A2E', barText:'#8CC63F' },
    { time:'12:45', title:'Science & STEM', body:'Lab work and build days \u2014 including motorized planes in the STEM program.', bar:'#4A6FD0', barText:'#ffffff' },
    { time:'1:45', title:'Specials', body:'Music, art or PE, rotating through the week. Choir rehearses here.', bar:'#FFD24A', barText:'#2E2306' },
    { time:'2:45', title:'Dismissal', body:'Classroom reset, homework logged, dismissal at 3:15. After-school runs later.', bar:'#8CC63F', barText:'#16240A' }
  ];
  grades = {
    'Pre-K': { kicker:'Ages 4\u20135', title:'Play with a purpose', body:'The first year of school is about routine, curiosity and confidence. Days are short, structured and full of hands-on discovery.', moment:'The Pre-K nativity play at the church', learn:['Letters, sounds and name writing','Counting, sorting and patterns','Fine motor skills and early art','Bible stories and songs'] },
    'K': { kicker:'Ages 5\u20136', title:'Getting ready to read', body:'Kindergarten builds the habits that carry through the rest of school \u2014 listening, sharing, and sounding out the first real words.', moment:'Reading your first book out loud to the class', learn:['Phonics and sight words','Numbers to 100','Classroom routines and responsibility','Morning worship participation'] },
    '1': { kicker:'Grade 1', title:'Reading takes off', body:'Students move from decoding to reading for meaning, and from counting to real arithmetic.', moment:'The first chapter book finished alone', learn:['Fluent reading and short writing','Addition and subtraction facts','Observing and recording in science','Memory verses'] },
    '2': { kicker:'Grade 2', title:'Writing with a voice', body:'Sentences become paragraphs. Students start explaining their thinking, not just giving answers.', moment:'Publishing a class storybook', learn:['Paragraph writing','Place value and time','Community and neighborhoods','Service project participation'] },
    '3': { kicker:'Grade 3', title:'Thinking it through', body:'Third grade is the pivot from learning to read to reading to learn, with multiplication and real research.', moment:'The first STEM build day', learn:['Multiplication and division','Research and note-taking','Cursive handwriting','Introduction to STEM projects'] },
    '4': { kicker:'Grade 4', title:'Making an argument', body:'Students learn to back up what they say \u2014 in writing, in science, and in class discussion.', moment:'Presenting a project to the whole class', learn:['Fractions and measurement','Persuasive and expository writing','New York State history','Choir and instrumental music'] },
    '5': { kicker:'Grade 5', title:'Owning the work', body:'Longer assignments, real deadlines, and the first taste of managing your own schedule.', moment:'Leading morning worship', learn:['Decimals, ratios and data','Multi-source research writing','Lab science and experiments','Leadership in worship and clubs'] },
    '6': { kicker:'Grade 6', title:'Stepping up', body:'Middle school habits arrive: notebooks, study skills and accountability for your own learning.', moment:'Joining a competitive team or club', learn:['Pre-algebra','Literary analysis','Earth and life science','Community service hours'] },
    '7': { kicker:'Grade 7', title:'Building the record', body:'Grades start to matter for what comes next. Students learn to study, revise and ask for help.', moment:'A service project with the class', learn:['Algebra foundations','Essay structure and revision','Physical and life science','Peer mentoring of younger grades'] },
    '8': { kicker:'Grade 8', title:'Ready for high school', body:'The final year focuses on independence, faith and preparation for academy or high school.', moment:'Graduation at the church', learn:['Algebra I','Research papers and presentations','High school placement preparation','Leading school-wide service initiatives'] }
  };
  gradeOrder = ['Pre-K','K','1','2','3','4','5','6','7','8'];
  clubs = [
    { name:'Choir', cat:'Arts', bar:'#FFD24A', barText:'#2E2306', body:'The school choir sings at worship, church services and community events.', when:'Weekly \u00b7 choir dues apply' },
    { name:'Music Enrichment', cat:'Arts', bar:'#FFD24A', barText:'#2E2306', body:'Instrumental instruction with a separate application form and class fee.', when:'Application required' },
    { name:'Art Club', cat:'Arts', bar:'#FFD24A', barText:'#2E2306', body:'Drawing, painting and mixed media, with work shown on the student wall.', when:'After school' },
    { name:'STEM Club', cat:'STEM', bar:'#4A6FD0', barText:'#ffffff', body:'Hands-on builds and experiments \u2014 including motorized planes.', when:'Weekly \u00b7 STEM class fee applies' },
    { name:'Computer Class', cat:'STEM', bar:'#4A6FD0', barText:'#ffffff', body:'Keyboarding, digital literacy and computer education with Mr. Gordon.', when:'In the weekly rotation' },
    { name:'Yearbook Club', cat:'STEM', bar:'#4A6FD0', barText:'#ffffff', body:'Photography, layout and interviews for the annual yearbook.', when:'Fall through spring' },
    { name:'Basketball', cat:'Sports', bar:'#8CC63F', barText:'#16240A', body:'Practices and games in the gym for upper-grade students.', when:'Season play \u00b7 sports dues apply' },
    { name:'Intramurals', cat:'Sports', bar:'#8CC63F', barText:'#16240A', body:'Open games and fitness for all grades during and after school.', when:'Year-round' },
    { name:'Community Service Corps', cat:'Service', bar:'#131A2E', barText:'#8CC63F', body:'Neighborhood service projects that put compassion and responsibility into practice.', when:'Monthly projects' },
    { name:'Pathfinders & Adventurers', cat:'Service', bar:'#131A2E', barText:'#8CC63F', body:'Church-affiliated clubs for outdoor skills, service and leadership.', when:'With the Brooklyn SDA Church' }
  ];
  wall = [
    { img:'assets/classroom.jpg', caption:'Kindergarten pajama day \u2014 continents and oceans on the board.', cols:2, rows:1 },
    { img:'assets/hero-stem.jpg', caption:'Building circuits as part of an interactive STEM program.', cols:1, rows:2 },
    { img:'assets/students-worship.jpg', caption:'Our students are an important part of the Brooklyn Seventh-day Adventist Church.', cols:1, rows:1 },
    { img:'assets/students-service.jpg', caption:'Community service day in the neighborhood.', cols:2, rows:1 },
    { img:'assets/building-front.jpg', caption:'1260 Ocean Avenue, Flatbush.', cols:1, rows:1 }
  ];
  roomList = [
    { id:'office', name:'Main Office', floor:'Ground floor', span:2, body:'Admissions, tuition and records. Stop here first \u2014 the registrar can answer most questions about paperwork and fees.' },
    { id:'prek', name:'Pre-K Room', floor:'Ground floor', span:1, body:'A dedicated early-childhood classroom with its own quiet corner, reading rug and art table.' },
    { id:'k12', name:'Grades 1\u20132', floor:'Ground floor', span:1, body:'Foundational reading, writing and math for our youngest full-day students.' },
    { id:'g34', name:'Grades 3\u20134', floor:'Second floor', span:1, body:'Where reading to learn begins \u2014 research corners, multiplication walls and project tables.' },
    { id:'g56', name:'Grades 5\u20136', floor:'Second floor', span:1, body:'Pre-algebra, lab science and the first long-form research writing.' },
    { id:'g78', name:'Grades 7\u20138', floor:'Second floor', span:1, body:'Algebra, essay writing and high school preparation for our graduating classes.' },
    { id:'stem', name:'STEM Lab', floor:'Second floor', span:1, body:'Build days happen here. Circuits, motorized planes and experiments across grades 3 through 8.' },
    { id:'library', name:'Library', floor:'Second floor', span:1, body:'Guided reading groups, independent reading and research time.' },
    { id:'music', name:'Music Room', floor:'Ground floor', span:1, body:'Choir rehearsal and the Music Enrichment program \u2014 instruments, theory and performance prep.' },
    { id:'gym', name:'Gym & Hall', floor:'Lower level', span:2, body:'PE, basketball, indoor recess, assemblies and school-wide worship when the whole school gathers.' },
    { id:'cafeteria', name:'Cafeteria', floor:'Lower level', span:1, body:'Lunch service and after-school program home base.' },
    { id:'yard', name:'Play Yard', floor:'Outdoors', span:1, body:'Morning recess and field day. Fenced and supervised.' }
  ];
  campaignData = [
    { title:'12 Stones Fund', tag:'Flagship', tagBg:'#8CC63F', tagColor:'#16240A', img:'assets/12stones-logo.png', fit:'contain', body:'A contributor-funded initiative empowering Adventist education at Brooklyn SDA School \u2014 tuition assistance, classroom resources and the building itself.', raised:18400, goal:55000 },
    { title:'55 in 25 for the 12 Stones Fund', tag:'Campaign', tagBg:'#FFD24A', tagColor:'#2E2306', img:'assets/stones.jpg', fit:'cover', body:'A focused push toward the 12 Stones goal. Campaign copy and targets to be confirmed by the school office.', raised:9200, goal:25000 },
    { title:'Fruit Fundraiser', tag:'Seasonal', tagBg:'#4A6FD0', tagColor:'#ffffff', img:'assets/summer-blast.jpg', fit:'cover', body:'The annual fruit sale run by students and families. Ordering details and dates to be confirmed each season.', raised:4600, goal:12000 }
  ];
  giving = [
    { amount:'$25', title:'Classroom supplies', bar:'#FFD24A', barText:'#2E2306', body:'Books, materials and the small things that make a classroom work all year.' },
    { amount:'$100', title:'STEM program', bar:'#4A6FD0', barText:'#ffffff', body:'Kits, components and build materials for hands-on science across the grades.' },
    { amount:'$500', title:'Tuition assistance', bar:'#8CC63F', barText:'#16240A', body:'Direct support so a Brooklyn family can choose Adventist education for their child.' }
  ];
  yearbooks = [
    { title:'Yearbook 2022\u20132023', note:'Principal transition year, STEM program expansion and spring graduation.', img:'assets/students-worship.jpg' },
    { title:'Yearbook 2021\u20132022', note:'A full year back together \u2014 choir, sports and service projects.', img:'assets/classroom.jpg' }
  ];
  products = [
    { name:'Uniform Polo', cat:'Uniform', price:'$\u2014', tagBg:'#4A6FD0', tagColor:'#ffffff' },
    { name:'School Cardigan', cat:'Uniform', price:'$\u2014', tagBg:'#4A6FD0', tagColor:'#ffffff' },
    { name:'Gym T-Shirt', cat:'PE', price:'$\u2014', tagBg:'#8CC63F', tagColor:'#16240A' },
    { name:'Gym Shorts', cat:'PE', price:'$\u2014', tagBg:'#8CC63F', tagColor:'#16240A' },
    { name:'Spirit Hoodie', cat:'Spirit wear', price:'$\u2014', tagBg:'#FFD24A', tagColor:'#2E2306' },
    { name:'Water Bottle', cat:'Spirit wear', price:'$\u2014', tagBg:'#FFD24A', tagColor:'#2E2306' },
    { name:'Tote Bag', cat:'Spirit wear', price:'$\u2014', tagBg:'#FFD24A', tagColor:'#2E2306' },
    { name:'Yearbook Pre-Order', cat:'Archive', price:'$\u2014', tagBg:'#131A2E', tagColor:'#8CC63F' }
  ];
  portals = [
    { title:'Students', bar:'#4A6FD0', barText:'#ffffff', body:'Assignments, grades and class resources in one place.' },
    { title:'Parents', bar:'#FFD24A', barText:'#2E2306', body:'Attendance, report cards, tuition balance and school communication.' },
    { title:'School Board', bar:'#8CC63F', barText:'#16240A', body:'Board documents, meeting minutes and governance resources.' }
  ];

  pageMeta = {
    about:      { kicker:'About us', title:'A Brooklyn school since 1938', img:'assets/building-front.jpg', blurb:'A private, co-educational day school owned and operated by the Greater New York Conference of Seventh-day Adventists, offering grades Pre-K through 8.' },
    faculty:    { kicker:'About', title:'Faculty & staff', img:'assets/classroom.jpg', blurb:'Our teachers form a professional learning community, committed to serving and inspiring students, with regular training in current teaching methods.' },
    admissions: { kicker:'Admissions', title:'Come learn with us', img:'assets/students-worship.jpg', blurb:'We welcome applications from girls and boys of all races, ethnicities and economic backgrounds. Decisions are made on a candidate\u2019s individual strengths and talents, potential to thrive, and ability to contribute positively to our community.' },
    apply:      { kicker:'Enrollment form', title:'Apply to BSDA', img:'assets/classroom.jpg', blurb:'Four short steps. You can save the $60 application fee for the end \u2014 nothing is submitted until you review it.' },
    life:       { kicker:'Student life', title:'What it\u2019s like to go here', img:'assets/hero-stem.jpg', blurb:'Rigorous classrooms, plus clubs, performing arts, athletics and events. Here\u2019s the whole day, grade by grade, room by room.' },
    events:     { kicker:'Calendar', title:'School events', img:'assets/calendar.jpg', blurb:'Registration windows, placement tests and community dates for the school year.' },
    news:       { kicker:'News', title:'From the school', img:'assets/calendar.jpg', blurb:'Announcements, programs and stories from 1260 Ocean Avenue.' },
    fundraisers:{ kicker:'Fundraisers', title:'Every gift builds a student', img:'assets/stones.jpg', blurb:'Three active campaigns keep tuition affordable, classrooms stocked and the building on Ocean Avenue ready for the next generation.' },
    give:       { kicker:'12 Stones Fund', title:'Give to BSDA', img:'assets/stones.jpg', blurb:'Building human monuments for eternity \u2014 a contributor-funded initiative empowering Seventh-day Adventist education in Brooklyn.' },
    yearbooks:  { kicker:'Archive', title:'Yearbooks', img:'assets/students-worship.jpg', blurb:'Every class, every year. Flip through past editions.' },
    store:      { kicker:'Store', title:'Uniforms & spirit wear', img:'assets/classroom.jpg', blurb:'Everything on the supply list, plus gear for game day.' },
    portals:    { kicker:'Portals', title:'Sign in', img:'assets/building-front.jpg', blurb:'Secure portals for students, parents and the school board. Coming soon.' },
    contact:    { kicker:'Contact', title:'Say hello', img:'assets/building-front.jpg', blurb:'Connect with Brooklyn Seventh-day Adventist School in a number of different ways.' }
  };

  navTree = [
    { label:'About', key:'about', items:[['Faculty & Staff','faculty'],['Our mission','about'],['History','about'],['Privacy policy','about']] },
    { label:'Admissions', key:'admissions', items:[['Enrollment form','apply'],['Tuition & fees','admissions'],['Placement dates','events']] },
    { label:'Student Life', key:'life', items:[['A day in the life','life'],['Grade explorer','life'],['Clubs & activities','life'],['Campus map','life']] },
    { label:'Events', key:'events', items:[['Full calendar','events'],['Event management','events'],['Add new event','events']] },
    { label:'Fundraisers', key:'fundraisers', items:[['12 Stones Fund','give'],['55 in 25','fundraisers'],['Fruit Fundraiser','fundraisers'],['Donate now','give'],['Donor dashboard','portals']] },
    { label:'News', key:'news', items:[['All posts','news']] },
    { label:'Store', key:'store', items:[['Uniforms','store'],['Spirit wear','store'],['Yearbooks','yearbooks']] },
    { label:'Portals', key:'portals', items:[['Students (coming soon)','portals'],['Parents (coming soon)','portals'],['School Board (coming soon)','portals'],['Contact us','contact']] }
  ];

  // ---------- form ----------
  required = {
    0: { firstName:'Student first name is required.', lastName:'Student last name is required.', dob:'Please enter a date of birth.', gradeApplying:'Choose the grade you are applying for.' },
    1: { guardian:'Please enter a parent or guardian name.', relationship:'Select a relationship.', email:'Please enter a valid email address.', phone:'Please enter a phone number.', address:'Please enter a home address.' },
    2: { currentSchool:'Enter a school name, or write “none”.' },
    3: { agree:'Please confirm before submitting.' }
  };
  setField = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const errors = Object.assign({}, this.state.errors); delete errors[k];
    this.setState({ form: Object.assign({}, this.state.form, { [k]: v }), errors: errors });
  };
  validate = (step) => {
    const rules = this.required[step] || {}; const errors = {};
    Object.keys(rules).forEach((k) => {
      const v = this.state.form[k];
      if (k === 'agree') { if (!v) errors[k] = rules[k]; return; }
      if (!String(v || '').trim()) { errors[k] = rules[k]; return; }
      if (k === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) errors[k] = rules[k];
      if (k === 'phone' && String(v).replace(/\D/g,'').length < 10) errors[k] = 'Please enter a 10-digit phone number.';
    });
    this.setState({ errors: errors });
    return Object.keys(errors).length === 0;
  };
  onNext = () => { if (this.validate(this.state.step)) this.setState({ step: Math.min(3, this.state.step + 1) }); };
  onBack = () => this.setState({ step: Math.max(0, this.state.step - 1), errors: {} });
  onSubmit = (e) => { e.preventDefault(); if (this.state.step < 3) { this.onNext(); return; } if (!this.validate(3)) return; this.setState({ submitted:true, submittedName: this.state.form.guardian || this.state.form.firstName }); };
  onReset = () => this.setState({ submitted:false, step:0, errors:{}, form: { firstName:'', lastName:'', dob:'', gradeApplying:'', guardian:'', relationship:'', email:'', phone:'', address:'', currentSchool:'', lastGrade:'', church:'', heard:'', notes:'', agree:false } });
  onContact = (e) => { e.preventDefault(); this.setState({ contactSent: true }); };

  renderVals() {
    const r = this.state.route;
    const goal = Number(this.props.goal != null ? this.props.goal : 55000);
    const raised = Number(this.props.raised != null ? this.props.raised : 18400);
    const pct = Math.max(0, Math.min(100, Math.round((raised / (goal || 1)) * 100)));
    const grade = this.grades[this.state.grade] || this.grades['3'];
    const clubCat = this.state.clubCat, evFilter = this.state.evFilter;
    const room = this.roomList.filter((x) => x.id === this.state.room)[0] || this.roomList[0];
    const s = this.slides[this.state.slide] || this.slides[0];

    const f = {};
    ['firstName','lastName','dob','gradeApplying','guardian','relationship','email','phone','address','currentSchool','lastGrade','church','heard','notes','agree']
      .forEach((k) => { f[k] = { value: this.state.form[k], onChange: this.setField(k), error: this.state.errors[k] || '' }; });
    const sum = (label, v) => ({ label: label, value: v || '—' });

    return {
      isHome: r === 'home', isInner: r !== 'home',
      isAbout: r === 'about', isFaculty: r === 'faculty', isAdmissions: r === 'admissions', isApply: r === 'apply',
      isLife: r === 'life', isEvents: r === 'events', isNews: r === 'news', isFundraisers: r === 'fundraisers',
      isGive: r === 'give', isYearbooks: r === 'yearbooks', isStore: r === 'store', isPortals: r === 'portals', isContact: r === 'contact',
      page: this.pageMeta[r] || this.pageMeta.about,

      goHome: this.go('home'), goAbout: this.go('about'), goFaculty: this.go('faculty'), goAdmissions: this.go('admissions'),
      goApply: this.go('apply'), goLife: this.go('life'), goEvents: this.go('events'), goNews: this.go('news'),
      goGive: this.go('give'), goFundraisers: this.go('fundraisers'), goPortals: this.go('portals'), goContact: this.go('contact'),

      menuOpen: this.state.menuOpen,
      openMenu: () => this.setState({ menuOpen: true }),
      closeMenu: () => this.setState({ menuOpen: false }),
      menuGroups: this.navTree.map((g) => ({
        label: g.label, href: '#' + g.key, onClick: this.go(g.key),
        items: g.items.map(([label, key]) => ({ label: label, href: '#' + key, onClick: this.go(key) }))
      })),

      // hero
      slide: Object.assign({}, s, { ctaHref: '#' + s.ctaKey, ctaClick: this.go(s.ctaKey) }),
      slideDots: this.slides.map((x, i) => ({
        n: i + 1, onClick: () => this.setState({ slide: i }),
        border: this.state.slide === i ? '2px solid #ffffff' : '2px solid transparent',
        color: this.state.slide === i ? '#ffffff' : '#8CC63F'
      })),

      // donation
      hudRaised: this.money(this.state.countUp),
      hudGoal: this.money(goal),
      hudDonors: String(this.props.donors != null ? this.props.donors : 214),
      hudPct: (this.state.barReady ? pct : 0) + '%',
      hudPctLabel: pct + '%',

      statements: this.statementData.map((x) => ({
        kicker: x.kicker, title: x.title, body: x.body, cta: x.cta, img: x.img, alt: x.alt,
        href: '#' + x.key, onClick: this.go(x.key),
        bg: x.bg, titleColor: x.titleColor, bodyColor: x.bodyColor, kickerColor: x.kickerColor,
        btnBg: x.btnBg, btnColor: x.btnColor,
        imgOrder: x.flip ? 2 : 1, txtOrder: x.flip ? 1 : 2
      })),
      mosaic: this.mosaicData.map((m) => ({
        label: m.labelOverride || m.label, sub: m.subOverride || m.sub,
        cols: m.cols, rows: m.rows, bg: m.bg, color: m.color, subColor: m.subColor, size: m.size,
        hasImg: !!m.img, img: m.img || '', alt: m.alt || ''
      })),

      missionPoints: this.missionPoints.map((m) => ({ label: m })),
      philosophyPoints: this.philosophyPoints.map((p) => ({ label: p })),
      principalLetter: this.principalLetter.map((t) => ({ text: t })),
      history: this.history,
      faculty: this.faculty.map((x) => {
        const c = this.deptColors[x.dept] || ['#131A2E','#ffffff'];
        return Object.assign({}, x, {
          initials: x.name.split(' ').map((p) => p[0]).join(''),
          tagBg: c[0], tagColor: c[1]
        });
      }),
      facultyStats: [
        { value: '11', label: 'Faculty & staff' },
        { value: 'Pre-K–8', label: 'Grades taught' },
        { value: '1', label: 'Shared mission' }
      ],
      admitSteps: this.admitSteps.map((x) => Object.assign({}, x, { items: x.items.map((i) => ({ label: i })) })),
      documents: this.documents.map((d) => ({ label: d })),
      testDates: this.testDates,
      dayFull: this.dayFull,
      news: this.news,
      homeNews: this.news.slice(0, 2),
      homeEvents: this.events.slice(0, 3).map((e) => ({ day: e.day, month: e.month, title: e.title, meta: e.cat })),
      yearbooks: this.yearbooks,
      products: this.products,
      giving: this.giving,
      portals: this.portals,
      wall: this.wall,
      campaigns: this.campaignData.map((c) => ({
        title: c.title, tag: c.tag, tagBg: c.tagBg, tagColor: c.tagColor, img: c.img, fit: c.fit, body: c.body,
        raised: this.money(c.raised), pct: Math.round((c.raised / c.goal) * 100) + '%'
      })),

      gradeTabs: this.gradeOrder.map((g) => ({
        label: (g === 'Pre-K' || g === 'K') ? g : 'Grade ' + g,
        onClick: () => this.setState({ grade: g }),
        bg: this.state.grade === g ? '#8CC63F' : 'transparent',
        border: this.state.grade === g ? '#8CC63F' : 'rgba(255,255,255,.3)',
        color: this.state.grade === g ? '#16240A' : '#ffffff'
      })),
      activeGrade: Object.assign({}, grade, { learn: grade.learn.map((l) => ({ label: l })) }),

      clubCats: ['All','Arts','STEM','Sports','Service'].map((c) => ({
        label: c, onClick: () => this.setState({ clubCat: c }),
        bg: clubCat === c ? '#131A2E' : 'transparent',
        color: clubCat === c ? '#ffffff' : '#131A2E'
      })),
      visibleClubs: this.clubs.filter((c) => clubCat === 'All' || c.cat === clubCat),

      eventCats: ['All','Registration','Placement','Community'].map((c) => ({
        label: c, onClick: () => this.setState({ evFilter: c }),
        bg: evFilter === c ? '#131A2E' : 'transparent',
        color: evFilter === c ? '#ffffff' : '#131A2E'
      })),
      visibleEvents: this.events.filter((e) => evFilter === 'All' || e.cat === evFilter),

      rooms: this.roomList.map((x) => Object.assign({}, x, {
        onClick: () => this.setState({ room: x.id }),
        bg: this.state.room === x.id ? '#4A6FD0' : 'transparent',
        border: this.state.room === x.id ? '#4A6FD0' : 'rgba(255,255,255,.22)',
        color: '#ffffff'
      })),
      activeRoom: room,

      footerCols: [
        { title: 'Quick links', items: [['About','about'],['Faculty & Staff','faculty'],['Admissions','admissions'],['Enrollment form','apply'],['Student life','life'],['Events','events'],['News','news']] },
        { title: 'Giving & shop', items: [['Fundraisers','fundraisers'],['12 Stones Fund','give'],['55 in 25','fundraisers'],['Fruit Fundraiser','fundraisers'],['Donor dashboard','portals'],['Store','store'],['Yearbooks','yearbooks']] },
        { title: 'Portals & legal', items: [['Students (soon)','portals'],['Parents (soon)','portals'],['School Board (soon)','portals'],['Contact','contact'],['Privacy policy','about'],['Legal notice','about'],['Cookies','about']] }
      ].map((col) => ({
        title: col.title,
        items: col.items.map(([label, key]) => ({ label: label, href: '#' + key, onClick: this.go(key), color: '#B9C0DA', size: '15px', indent: '0px' }))
      })),

      f: f,
      gradeOptions: this.gradeOrder.map((g) => ({ label: (g === 'Pre-K' || g === 'K') ? g : 'Grade ' + g })),
      stepTabs: ['Student','Guardian','School','Review'].map((label, i) => ({
        n: i + 1, label: label,
        bg: this.state.step === i ? '#131A2E' : '#F4F2ED',
        rule: this.state.step === i ? '#8CC63F' : (this.state.step > i ? '#8CC63F' : '#DCD8CE'),
        color: this.state.step === i ? '#ffffff' : '#131A2E',
        muted: this.state.step === i ? '#8A93B6' : '#8A90A8'
      })),
      step0: this.state.step === 0, step1: this.state.step === 1, step2: this.state.step === 2, step3: this.state.step === 3,
      atFirstStep: this.state.step === 0,
      backOpacity: this.state.step === 0 ? 0.35 : 1,
      notLastStep: this.state.step < 3,
      submitted: this.state.submitted, notSubmitted: !this.state.submitted, submittedName: this.state.submittedName,
      summary: [
        sum('Student', (this.state.form.firstName + ' ' + this.state.form.lastName).trim()),
        sum('Date of birth', this.state.form.dob),
        sum('Grade applying for', this.state.form.gradeApplying),
        sum('Guardian', this.state.form.guardian),
        sum('Relationship', this.state.form.relationship),
        sum('Email', this.state.form.email),
        sum('Phone', this.state.form.phone),
        sum('Address', this.state.form.address),
        sum('Current school', this.state.form.currentSchool),
        sum('Home church', this.state.form.church)
      ],
      onNext: this.onNext, onBack: this.onBack, onSubmit: this.onSubmit, onReset: this.onReset,
      onContact: this.onContact, contactSent: this.state.contactSent
    };
  }
}

// ---------- runtime ----------
(function () {
  const root = document.getElementById('app');
  const handlers = [];
  const esc = (v) => (v == null ? '' : String(v)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const reg = (fn) => { handlers.push(fn); return handlers.length - 1; };

  const app = new Component(Object.assign({}, window.BSDA_CONFIG));
  app.schedule = () => {
    if (app._queued) return;
    app._queued = true;
    Promise.resolve().then(() => { app._queued = false; render(); });
  };

  // A form control that stands for a different field (new step, new page) must not inherit the old one's state.
  const differentControl = (x, y) => /^(INPUT|SELECT|TEXTAREA)$/.test(x.nodeName) &&
    (x.getAttribute('placeholder') !== y.getAttribute('placeholder') || x.getAttribute('type') !== y.getAttribute('type') || x.getAttribute('data-change') !== y.getAttribute('data-change') && x.hasAttribute('data-val') !== y.hasAttribute('data-val'));

  // Update the live DOM to match `to` without replacing nodes, so focus, scroll and animations survive.
  function morph(from, to) {
    const a = from.attributes, b = to.attributes;
    for (let i = a.length - 1; i >= 0; i--) if (!to.hasAttribute(a[i].name)) from.removeAttribute(a[i].name);
    for (let i = 0; i < b.length; i++) if (from.getAttribute(b[i].name) !== b[i].value) from.setAttribute(b[i].name, b[i].value);
    const fc = from.childNodes, tc = to.childNodes;
    for (let i = 0; i < tc.length; i++) {
      const x = fc[i], y = tc[i];
      if (!x) { from.appendChild(y.cloneNode(true)); continue; }
      if (x.nodeType !== y.nodeType || x.nodeName !== y.nodeName || differentControl(x, y)) { from.replaceChild(y.cloneNode(true), x); continue; }
      if (x.nodeType === 1) morph(x, y);
      else if (x.nodeValue !== y.nodeValue) x.nodeValue = y.nodeValue;
    }
    while (fc.length > tc.length) from.removeChild(from.lastChild);
  }

  function syncControls() {
    root.querySelectorAll('[data-val]').forEach((el) => { const v = el.getAttribute('data-val'); if (el.value !== v && el !== document.activeElement) el.value = v; });
    root.querySelectorAll('[data-checked]').forEach((el) => { el.checked = el.getAttribute('data-checked') === 'true'; });
  }

  function render() {
    handlers.length = 0;
    const html = window.bsdaView(app.renderVals(), esc, reg);
    const next = document.createElement('div');
    next.innerHTML = html;
    morph(root, next);
    syncControls();
  }

  const dispatch = (type) => (e) => {
    const el = e.target.closest && e.target.closest('[data-' + type + ']');
    if (!el) return;
    const fn = handlers[Number(el.getAttribute('data-' + type))];
    if (fn) fn(e);
  };
  root.addEventListener('click', dispatch('click'));
  root.addEventListener('change', dispatch('change'));
  root.addEventListener('submit', dispatch('submit'));

  render();
  app.componentDidMount();
})();
