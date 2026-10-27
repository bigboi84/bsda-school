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

// ---------- enrollment form ----------
// Mirrors the online application on the current bsda.school. Left out on purpose: Social Security numbers,
// card payment, IEP file upload and drawn signatures (none can be handled safely until the platform is connected).
const YES_NO = ['Yes', 'No'];
const APPLY_GRADES = ['Pre-K', 'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'];
const APPLY_STEPS = [
  { label: 'Student', title: 'About the student', fields: [
    { k:'firstName', label:'First name', type:'text', req:'Student first name is required.', ph:'Amara' },
    { k:'middleName', label:'Middle name', type:'text', ph:'Optional' },
    { k:'lastName', label:'Last name', type:'text', req:'Student last name is required.', ph:'Charles' },
    { k:'dob', label:'Date of birth', type:'date', req:'Please enter a date of birth.' },
    { k:'gender', label:'Gender', type:'text', ph:'Optional' },
    { k:'studentEmail', label:'Student email', type:'email', ph:'Only if the student has one' },
    { k:'address', label:'Street address', type:'text', req:'Please enter a home address.', ph:'1260 Ocean Avenue', span:2 },
    { k:'apt', label:'Apartment, suite, etc.', type:'text', ph:'Apt 4B' },
    { k:'city', label:'City', type:'text', req:'Please enter a city.', ph:'Brooklyn' },
    { k:'state', label:'State', type:'text', req:'Please enter a state.', ph:'NY' },
    { k:'zip', label:'ZIP code', type:'text', req:'Please enter a ZIP code.', ph:'11230' },
    { k:'homePhone', label:'Home phone', type:'tel', ph:'(718) 555-0100' },
    { k:'mobilePhone', label:'Mobile phone', type:'tel', req:'Please enter a mobile phone number.', ph:'(718) 555-0123' }
  ] },
  { label: 'Health & school', title: 'Health & school', fields: [
    { k:'physician', label:'Student physician’s name', type:'text', ph:'Primary physician' },
    { k:'physicianPhone', label:'Physician’s phone', type:'tel', ph:'(718) 555-0150' },
    { k:'disabilities', label:'Any physical disabilities?', type:'radio', req:'Please choose yes or no.', options:YES_NO, help:'Does the student have any physical disability the school needs to accommodate?', span:2 },
    { k:'disabilitiesNotes', label:'Please explain', type:'textarea', ph:'Describe the disability and any accommodation needed', showIf:['disabilities','Yes'], span:2 },
    { k:'allergies', label:'Any allergies?', type:'radio', req:'Please choose yes or no.', options:YES_NO, span:2 },
    { k:'allergiesNotes', label:'Please explain', type:'textarea', ph:'List the allergies and any medical response needed', showIf:['allergies','Yes'], span:2 },
    { k:'specialNeeds', label:'Any special needs?', type:'radio', req:'Please choose yes or no.', options:YES_NO, help:'For example, a learning disability. If your child has an IEP, bring a copy to your meeting with administration.', span:2 },
    { k:'specialNeedsNotes', label:'Please explain', type:'textarea', ph:'Describe the need and any support your child receives', showIf:['specialNeeds','Yes'], span:2 },
    { k:'gradeApplying', label:'Grade applying for', type:'select', req:'Choose the grade you are applying for.', options:APPLY_GRADES, ph:'Select a grade' },
    { k:'attendedPrevious', label:'Attended a previous school?', type:'radio', req:'Please choose yes or no.', options:YES_NO },
    { k:'previousSchool', label:'Previous school name', type:'text', req:'Please enter the previous school’s name.', ph:'School name', showIf:['attendedPrevious','Yes'], span:2 },
    { k:'unpaidTuition', label:'Unpaid tuition?', type:'radio', req:'Please choose yes or no.', options:YES_NO, help:'Does the family have an unpaid school account?', span:2 },
    { k:'unpaidSchool', label:'Name of school', type:'text', req:'Please enter the school’s name.', ph:'School with the unpaid account', showIf:['unpaidTuition','Yes'] },
    { k:'unpaidAddress', label:'School address', type:'text', ph:'Street, city, state, ZIP', showIf:['unpaidTuition','Yes'] }
  ] },
  { label: 'Family', title: 'Parent or guardian', fields: [
    { k:'prefix', label:'Prefix', type:'select', options:['Mr.', 'Mrs.', 'Ms.', 'Mx.', 'Miss', 'Dr.', 'Prof.'], ph:'Select one' },
    { k:'guardianFirst', label:'First name', type:'text', req:'Please enter a first name.', ph:'Jean' },
    { k:'guardianMiddle', label:'Middle name', type:'text', ph:'Optional' },
    { k:'guardianLast', label:'Last name', type:'text', req:'Please enter a last name.', ph:'Charles' },
    { k:'relationship', label:'Relation to child', type:'select', req:'Select a relationship.', options:['Mother', 'Father', 'Grandfather', 'Grandmother', 'Legal Guardian', 'Other'], ph:'Select one' },
    { k:'email', label:'Email address', type:'email', req:'Please enter a valid email address.', ph:'you@email.com' },
    { k:'phone', label:'Phone', type:'tel', req:'Please enter a phone number.', ph:'(718) 555-0199' },
    { k:'emergency', label:'Emergency contact?', type:'radio', options:YES_NO, help:'Is this an emergency contact number for the student?' },
    { k:'sameAddress', label:'Same address as the student', type:'checkbox', span:2 },
    { k:'gAddress', label:'Street address', type:'text', req:'Please enter an address.', ph:'Street address', showIf:['sameAddress', false], span:2 },
    { k:'gApt', label:'Apartment, suite, etc.', type:'text', ph:'Apt', showIf:['sameAddress', false] },
    { k:'gCity', label:'City', type:'text', req:'Please enter a city.', ph:'City', showIf:['sameAddress', false] },
    { k:'gState', label:'State', type:'text', req:'Please enter a state.', ph:'State', showIf:['sameAddress', false] },
    { k:'gZip', label:'ZIP code', type:'text', req:'Please enter a ZIP code.', ph:'ZIP', showIf:['sameAddress', false] },
    { k:'church', label:'Church affiliation', type:'text', ph:'Church name' },
    { k:'language', label:'Primary language at home', type:'text', ph:'English' },
    { k:'marital', label:'Marital status', type:'select', options:['Married', 'Widowed', 'Separated', 'Divorced', 'Single'], ph:'Select one' },
    { k:'occupation', label:'Occupation', type:'text', ph:'Occupation' },
    { k:'heard', label:'How did you hear about us?', type:'select', options:['Family or friend', 'Our church', 'Search or social media', 'School event', 'Other'], ph:'Select one' }
  ] },
  { label: 'Sign & finish', title: 'Review & sign', fields: [
    { k:'studentType', label:'New or returning student?', type:'radio', req:'Please choose one.', options:['New student', 'Returning student'], span:2 },
    { k:'consentRules', label:'I agree to the school’s rules and regulations.', type:'checkbox', req:'Please confirm before submitting.', span:2 },
    { k:'consentInternet', label:'I agree to the school’s Internet User Policy.', type:'checkbox', req:'Please confirm before submitting.', span:2 },
    { k:'consentPhoto', label:'Optional: I give permission to use my child’s photo on the school website, in school or conference publications and on social media.', type:'checkbox', span:2 },
    { k:'agree', label:'I understand the $60 application fee is non-refundable, and that admission also requires a meeting with administration and a placement test.', type:'checkbox', req:'Please confirm before submitting.', span:2 },
    { k:'parentSignature', label:'Parent or guardian signature', type:'text', req:'Type your full name to sign.', ph:'Type your full name to sign' },
    { k:'studentSignature', label:'Student signature', type:'text', ph:'Optional: student types their name' }
  ] }
];
const APPLY_LAST = APPLY_STEPS.length - 1;
const applyVisible = (fd, form) => !fd.showIf || form[fd.showIf[0]] === fd.showIf[1];
const blankForm = () => {
  const form = {};
  APPLY_STEPS.forEach((s) => s.fields.forEach((fd) => { form[fd.k] = fd.type === 'checkbox' ? false : ''; }));
  form.sameAddress = true;
  return form;
};

class Component extends DCLogic {
  state = {
    route: 'home', menuOpen: false, slide: 0,
    grade: '3', clubCat: 'All', room: 'stem', evFilter: 'All',
    step: 0, submitted: false, submittedName: '', contactSent: false,
    errors: {}, barReady: false, countUp: 0,
    form: blankForm()
  };

  routes = ['home','about','faculty','admissions','academics','apply','life','events','news','fundraisers','give','yearbooks','store','portals','contact'];

  componentDidMount() {
    this.onHash();
    window.addEventListener('hashchange', this.onHash);
    this._bar = setTimeout(() => { this.state.barReady = true; this.updateLive(); }, 260);
    this.startCount();
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

  // ---------- homepage ----------
  // asset file names do not match their content; these alts describe what each photo really shows
  heroPhotos = [
    { img:'assets/students-worship.jpg', alt:'Students in uniform leading worship', pos:'50% 40%' },
    { img:'assets/classroom.jpg', alt:'Kindergarten class with their teacher', pos:'50% 60%' },
    { img:'assets/class-kindergarten.jpg', alt:'Students carolling in the neighborhood', pos:'40% 40%' },
    { img:'assets/building-front.jpg', alt:'The school at 1260 Ocean Avenue', pos:'50% 50%' }
  ];
  heroWords = ['grow in faith', 'dream bigger', 'build their future', 'serve others'];
  marquee = ['Christ-centered', 'Pre-K to Grade 8', 'STEM & robotics', 'Music & choir', 'Regents in middle school', 'After-school until 6:15', 'Accredited', 'Flatbush since 1938'];
  proof = [
    { n:60, suffix:'%', label:'ELA proficiency', sub:'New York State average: 48% (2025–26).', bar:'#8CC63F' },
    { n:100, suffix:'%', label:'High school acceptance', sub:'Our graduates get in.', bar:'#4A6FD0' },
    { n:11, suffix:' of 12', label:'Seventh graders', sub:'passed the English Regents, a high-school exam, in June 2026.', bar:'#FFD24A' },
    { n:1938, static:true, suffix:'', label:'Serving Brooklyn since', sub:'Generations of Christian education in Flatbush.', bar:'#131A2E' }
  ];
  why = [
    { kicker:'Faith', title:'Faith at the center', body:'Daily worship, Bible class and weeks of prayer help every child know Jesus personally and grow in character.', img:'assets/students-worship.jpg', alt:'Students in uniform leading worship with microphones', key:'about', cta:'Our mission', accent:'#4A6FD0' },
    { kicker:'Excellence', title:'Results you can see', body:'English scores above the New York State average, and seventh graders already passing high-school Regents exams.', img:'assets/students-service.jpg', alt:'Elementary students at their desks', key:'academics', cta:'Academics', accent:'#8CC63F' },
    { kicker:'Community', title:'A day that works for families', body:'After-school program Monday to Thursday until 6:15 PM, with homework help, test prep, robotics and coding.', img:'assets/building-front.jpg', alt:'The school entrance at 1260 Ocean Avenue', key:'academics', cta:'After-school program', accent:'#FFD24A' }
  ];
  bands = [
    { grades:'Pre-K & K', title:'Where little minds grow', body:'Phonics, early math, Bible stories and hands-on discovery in a warm, Christ-centered classroom.', img:'assets/classroom.jpg', alt:'Kindergarten class with their teacher', bg:'#FFD24A', color:'#2E2306', key:'academics' },
    { grades:'Grades 1–4', title:'Confident readers & thinkers', body:'Strong foundations in reading, writing and math, plus music, art, PE and STEM.', img:'assets/students-service.jpg', alt:'Elementary students in their classroom', bg:'#4A6FD0', color:'#ffffff', key:'life' },
    { grades:'Grades 5–8', title:'Ready for high school', body:'Lab science, Algebra I and Regents exams, robotics, leadership and service before graduation.', img:'assets/class-kindergarten.jpg', alt:'Students carolling and handing out gifts in the neighborhood', bg:'#8CC63F', color:'#16240A', key:'life' }
  ];
  growth = [
    { subject:'English Language Arts', from:47.5, to:60, state:48, delta:'+12.5 points in four years', note:'12 points above New York State' },
    { subject:'Mathematics', from:45, to:57, state:57, delta:'+12 points in four years', note:'Matching New York State' },
    { subject:'Science', from:26, to:50, state:47, delta:'+24 points in one year', note:'3 points above New York State' }
  ];
  joinSteps = [
    { n:'01', title:'Apply', body:'Fill in the application online or on paper.' },
    { n:'02', title:'Meet & test', body:'Meet the principal, in person or by video, and sit a placement test.' },
    { n:'03', title:'Register', body:'Bring the required documents to the school office.' },
    { n:'04', title:'Enroll', body:'Sign the contract and get your welcome packet, uniform info and supply list.' }
  ];
  visitOptions = [
    { title:'Visit the school', body:'Tour the classrooms at 1260 Ocean Avenue and meet our teachers.', cta:'Request a tour', key:'contact', bg:'#8CC63F', color:'#16240A',
      svg:'<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/>' },
    { title:'Video call', body:'Meet the admissions team online, from home or work.', cta:'Book a call', key:'contact', bg:'#4A6FD0', color:'#ffffff',
      svg:'<path d="M3 7h12v10H3z"/><path d="m15 10 6-3v10l-6-3"/>' },
    { title:'Email us', body:'Ask about grades, tuition, uniforms or after-school care.', cta:'admissions@bsda.school', href:'mailto:admissions@bsda.school', bg:'#FFD24A', color:'#2E2306',
      svg:'<path d="M3 5h18v14H3z"/><path d="m3 6 9 7 9-7"/>' },
    { title:'Call the office', body:'Talk to someone at the school office.', cta:'(718) 859-1313', href:'tel:+17188591313', bg:'#ffffff', color:'#131A2E',
      svg:'<path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2z"/>' }
  ];
  principalQuote = {
    quote: 'Behind every number is a child who persevered.',
    body: 'When our children are rooted in Christ, they can grow with confidence, meet challenges with courage, and rise to become everything God has called them to be.',
    name: 'Loris F. LaBorde', role: 'Principal'
  };

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
    { label:'4', sub:'Approvals and accreditations \u2014 NYSED, the North American Division, NCPS and CITA.', cols:2, rows:1, bg:'#F4F2ED', color:'#131A2E', subColor:'#5A6180', size:'44px' }
  ];

  results = [
    { value:'60%', label:'ELA proficiency', sub:'New York State: 48%', bg:'#4A6FD0', color:'#ffffff', subColor:'#D9E2FA' },
    { value:'57%', label:'Math proficiency', sub:'New York State: 57%', bg:'#FFD24A', color:'#2E2306', subColor:'#453712' },
    { value:'50%', label:'Science proficiency', sub:'New York State: 47%', bg:'#8CC63F', color:'#16240A', subColor:'#2C4212' },
    { value:'100%', label:'High school acceptance', sub:'Our graduates get in.', bg:'#F4F2ED', color:'#131A2E', subColor:'#5A6180' },
    { value:'92%', label:'English Regents pass rate', sub:'Taken in middle school.', bg:'#1B2340', color:'#ffffff', subColor:'#8A93B6' },
    { value:'67%', label:'Biology Regents pass rate', sub:'Life Science: Biology.', bg:'#1B2340', color:'#ffffff', subColor:'#8A93B6' },
    { value:'46%', label:'Algebra 1 Regents pass rate', sub:'High-school math before high school.', bg:'#1B2340', color:'#ffffff', subColor:'#8A93B6' },
    { value:'14 → 8', label:'Baptismal decisions', sub:'2025 and 2026.', bg:'#1B2340', color:'#8CC63F', subColor:'#8A93B6' }
  ];
  vision = {
    statement: 'To inspire every student to know Jesus personally, pursue academic excellence without compromise, develop exemplary character, discover their God-given purpose, and transform their communities through lives of faith, service, and leadership.',
    motto: 'Excellence in Learning. Excellence in Character. Excellence for Eternity.'
  };
  bsdas = [
    { letter:'B', word:'Believe', bg:'#4A6FD0', color:'#ffffff' },
    { letter:'S', word:'Serve', bg:'#FFD24A', color:'#2E2306' },
    { letter:'D', word:'Disciple', bg:'#8CC63F', color:'#16240A' },
    { letter:'A', word:'Achieve', bg:'#131A2E', color:'#8CC63F' },
    { letter:'S', word:'Shine', bg:'#F4F2ED', color:'#131A2E' }
  ];
  accreditation = {
    text: 'Brooklyn Seventh-day Adventist School is approved by the New York State Education Department. It is accredited by the North American Division of Seventh-day Adventists, the National Council for Private Schools and the Commission on International and Trans-Regional Accreditation.',
    courses: ['Art','Bible','Technology','Foreign language','Mathematics','Language arts','Physical education','Science','Social studies','Music','STEM'],
    regents: 'Students are encouraged to take the Algebra 1, Life Science: Biology, English Language Arts and US Government Regents classes and state exams in grades 3–8.'
  };
  eceAreas = [
    { title:'English language arts & early literacy', body:'Phonemic awareness, phonics, letter recognition, vocabulary and listening comprehension. Storytelling and guided reading turn children into confident young readers and writers.', bar:'#4A6FD0', barText:'#ffffff' },
    { title:'Mathematics & problem-solving', body:'Counting, number recognition, addition and subtraction, shapes, patterns, measurement and sorting, with manipulatives and games that build number sense.', bar:'#FFD24A', barText:'#2E2306' },
    { title:'Science & discovery', body:'Plants, animals, weather, seasons and living things. Children observe, question and explore God’s creation.', bar:'#8CC63F', barText:'#16240A' },
    { title:'Social studies & community', body:'Families, school, community helpers, citizenship, cultural diversity and the importance of respecting and caring for others.', bar:'#131A2E', barText:'#8CC63F' },
    { title:'Social-emotional learning & character', body:'Recognizing emotions, building friendships, cooperating, resolving conflict peacefully and growing in independence and self-confidence.', bar:'#4A6FD0', barText:'#ffffff' },
    { title:'Creative arts, music & movement', body:'Singing, movement, drawing and painting build coordination, imagination and fine and gross motor skills.', bar:'#FFD24A', barText:'#2E2306' }
  ];
  afterSchool = {
    when: 'Monday–Thursday · 3:45–6:15 PM · Pre-K–Grade 12',
    items: ['Homework support','Study hall and academic support','Test prep: Regents, PSAT, SAT, ACT','Robotics, coding and gaming']
  };
  stonesFacts = [
    'Access to quality, Christ-centered education for children whose families face financial hardship.',
    'Support for qualified, dedicated Christian educators.',
    'Strong academic programs and innovative learning opportunities.',
    'Educational resources, technology, music and enrichment programs.',
    'Greater financial stability, so the school can focus on its mission.'
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
  // 2026-27 calendar (school office, "BSDAS CALENDAR 2027 finale") plus the events preview from the principal.
  // [start, end or null, title, body, category, featured]
  calendar = [
    ['2026-08-24', null, 'First day of school', 'The first marking period begins.', 'School life'],
    ['2026-09-07', null, 'Labor Day', 'School closed.', 'Closed'],
    ['2026-09-10', null, 'Parent orientation', '3:15 PM.', 'School life'],
    ['2026-09-11', null, 'Special chapel on bullying & harassment', 'A whole-school chapel.', 'Faith'],
    ['2026-09-18', null, 'Dress down day', '$5.00.', 'School life'],
    ['2026-09-19', null, 'Consecration service', '11:00 AM.', 'Faith'],
    ['2026-09-30', null, 'Apple picking', 'Class trip, $70.', 'School life'],
    ['2026-10-06', '2026-10-09', 'MAP testing', 'Measures of Academic Progress for all grades.', 'Exams'],
    ['2026-10-12', null, 'Columbus Day', 'School closed.', 'Closed'],
    ['2026-10-16', null, 'Dress down day', '$5.00.', 'School life'],
    ['2026-10-19', '2026-10-23', 'Fall Week of Prayer', 'Theme: Rooted in Christ.', 'Faith', true],
    ['2026-10-26', '2026-10-30', 'First marking period exams', 'The first marking period ends October 30.', 'Exams'],
    ['2026-10-30', null, 'Breast Cancer Awareness Walk', 'A school and community walk.', 'School life'],
    ['2026-11-02', null, 'Second marking period begins', '', 'School life'],
    ['2026-11-05', null, 'Professional development day', 'School closed.', 'Closed'],
    ['2026-11-08', null, 'Grade 8 Walk-a-Thon', 'Every Step Matters.', 'School life'],
    ['2026-11-10', null, 'Parent-teacher conferences', '3:45–7:00 PM, followed by the Parent Teacher Association meeting at 7:30 PM.', 'School life'],
    ['2026-11-11', null, 'Veterans Day', 'School closed.', 'Closed'],
    ['2026-11-20', null, 'Dress down day', '$5.00.', 'School life'],
    ['2026-11-24', null, 'Thanksgiving program & awards ceremony', 'First marking period awards, the Thanksgiving program and Pastor’s Appreciation.', 'School life', true],
    ['2026-11-25', '2026-11-27', 'Thanksgiving break', 'School closed.', 'Closed'],
    ['2026-12-07', '2026-12-11', 'Health Emphasis Week', '', 'School life'],
    ['2026-12-13', null, 'Christmas play', '', 'School life', true],
    ['2026-12-18', null, 'Dress down day', '$5.00.', 'School life'],
    ['2026-12-21', '2026-12-31', 'Christmas break', 'School closed.', 'Closed'],
    ['2027-01-18', null, 'Martin Luther King Jr. Day', 'School closed.', 'Closed'],
    ['2027-01-19', '2027-01-22', 'Second marking period exams', 'The second marking period ends January 22.', 'Exams'],
    ['2027-01-26', null, 'English Language Arts Regents', '9:15 AM.', 'Exams'],
    ['2027-01-27', null, 'Algebra I Regents', '1:15 PM.', 'Exams'],
    ['2027-01-29', null, 'Life Science: Biology Regents', '9:15 AM.', 'Exams'],
    ['2027-02-01', '2027-02-05', 'Spirit of Prophecy Week', '', 'Faith', true],
    ['2027-02-09', '2027-02-12', 'MAP testing', '', 'Exams'],
    ['2027-02-12', null, 'Dress down day', '$5.00.', 'School life'],
    ['2027-02-13', null, 'Art auction & tea party', '', 'School life', true],
    ['2027-02-15', '2027-02-19', 'Mid-winter break', 'School resumes February 22.', 'Closed'],
    ['2027-02-24', null, 'Medieval Times', 'Class trip.', 'School life'],
    ['2027-03-04', null, 'Career Day', '', 'School life'],
    ['2027-03-16', '2027-03-19', 'Third marking period exams', 'The third marking period ends March 24.', 'Exams'],
    ['2027-03-19', null, 'Dress down day', '$5.00.', 'School life'],
    ['2027-03-24', null, 'Sight & Sound trip', 'Class trip, $140.', 'School life'],
    ['2027-03-25', '2027-03-31', 'Spring break', 'Runs through April 2. School resumes April 5.', 'Closed'],
    ['2027-04-05', '2027-05-14', 'New York State exams', 'State testing window, April 5 to May 14.', 'Exams'],
    ['2027-04-15', '2027-04-16', 'Dress down days', '$5.00.', 'School life'],
    ['2027-04-19', '2027-04-23', 'Spring Week of Prayer', '', 'Faith', true],
    ['2027-04-24', null, 'Education Day', '', 'School life'],
    ['2027-05-01', null, 'Teachers’ commissioning', '', 'Faith'],
    ['2027-05-04', '2027-05-08', 'Teacher Appreciation Week', '', 'School life'],
    ['2027-05-10', null, 'National Junior Honor Society program', '', 'School life'],
    ['2027-05-21', null, 'Dress down day', '$5.00.', 'School life'],
    ['2027-05-24', '2027-05-28', 'Grade 8 finals', '', 'Exams'],
    ['2027-05-25', null, 'Science Fair', '', 'School life', true],
    ['2027-05-26', null, 'Teachers’ professional development', 'School closed.', 'Closed'],
    ['2027-05-31', null, 'Memorial Day', 'School closed.', 'Closed'],
    ['2027-06-01', null, 'Grade 8 banquet', '', 'School life'],
    ['2027-06-03', null, 'Kindergarten graduation', '', 'School life', true],
    ['2027-06-05', null, 'Baccalaureate service', '', 'Faith'],
    ['2027-06-06', null, 'Grade 8 commencement', '', 'School life', true],
    ['2027-06-07', '2027-06-10', 'MAP testing & final exams', 'Fourth marking period exams.', 'Exams'],
    ['2027-06-11', null, 'Last day of classes', '', 'School life'],
    ['2027-06-14', null, 'Field Day', '', 'School life'],
    ['2027-06-15', null, 'Award ceremony', 'Last day of school, 5:00 PM.', 'School life'],
    ['2027-06-15', '2027-06-17', 'June Regents', 'ELA on the 15th, Global History and Algebra I on the 16th, Biology on the 17th.', 'Exams'],
    ['2027-06-28', null, 'Summer school begins', '', 'School life']
  ];
  eventColors = { 'School life':['#4A6FD0','#ffffff'], 'Faith':['#FFD24A','#2E2306'], 'Exams':['#8CC63F','#16240A'], 'Closed':['#131A2E','#8CC63F'] };
  buildEvents() {
    const mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const pad = (n) => (n < 10 ? '0' : '') + n;
    return this.calendar.map(([start, end, title, body, cat, featured]) => {
      const a = new Date(start + 'T00:00:00'), b = new Date((end || start) + 'T00:00:00');
      const c = this.eventColors[cat];
      return {
        title: title, body: body, cat: cat, bar: c[0], barText: c[1], featured: !!featured,
        day: end ? pad(a.getDate()) + '–' + pad(b.getDate()) : pad(a.getDate()), month: mon[a.getMonth()],
        label: end ? mon[a.getMonth()] + ' ' + a.getDate() + ' – ' + (b.getMonth() === a.getMonth() ? '' : mon[b.getMonth()] + ' ') + b.getDate() : mon[a.getMonth()] + ' ' + a.getDate(),
        endISO: end || start
      };
    });
  }
  events = this.buildEvents();
  upcomingEvents() {
    const t = new Date(); const iso = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
    const up = this.events.filter((e) => e.endISO >= iso);
    return up.length ? up : this.events.slice(-4);
  }
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
    { title:'12 Stones Fund', tag:'Flagship', tagBg:'#8CC63F', tagColor:'#16240A', img:'assets/12stones-logo.png', fit:'contain', body:'A community-funded foundation so a family\u2019s finances never decide a child\u2019s education. Become a monthly partner for about $1 a day.', raised:18400, goal:55000 },
    { title:'55 in 25 for the 12 Stones Fund', tag:'Campaign', tagBg:'#FFD24A', tagColor:'#2E2306', img:'assets/stones.jpg', fit:'cover', body:'A focused push toward the 12 Stones goal. Campaign copy and targets to be confirmed by the school office.', raised:9200, goal:25000 },
    { title:'Fruit Fundraiser', tag:'Seasonal', tagBg:'#4A6FD0', tagColor:'#ffffff', img:'assets/summer-blast.jpg', fit:'cover', body:'The annual fruit sale run by students and families. Ordering details and dates to be confirmed each season.', raised:4600, goal:12000 }
  ];
  giving = [
    { amount:'$30/mo', title:'Monthly partner', bar:'#FFD24A', barText:'#2E2306', body:'About $1 a day. Your gift joins the gifts of other supporters. 54 people giving $30 a month raise $19,440 a year.' },
    { amount:'Any gift', title:'One-time donation', bar:'#4A6FD0', barText:'#ffffff', body:'Give what you are able. The size of your gift does not decide its significance; your willingness to participate does.' },
    { amount:'Groups', title:'Church or corporate sponsor', bar:'#8CC63F', barText:'#16240A', body:'Churches and businesses can sponsor groups of students or make larger commitments.' }
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
    academics:  { kicker:'Academics', title:'Rooted in Christ, rising in excellence', img:'assets/class-kindergarten.jpg', blurb:'Pre-K through grade 8 in a Christ-centered classroom, aligned with North American Division standards and the New York State learning standards.' },
    apply:      { kicker:'Enrollment form', title:'Apply to BSDA', img:'assets/classroom.jpg', blurb:'Four short steps. You can save the $60 application fee for the end \u2014 nothing is submitted until you review it.' },
    life:       { kicker:'Student life', title:'What it\u2019s like to go here', img:'assets/hero-stem.jpg', blurb:'Rigorous classrooms, plus clubs, performing arts, athletics and events. Here\u2019s the whole day, grade by grade, room by room.' },
    events:     { kicker:'Calendar', title:'School events', img:'assets/calendar.jpg', blurb:'Upcoming dates from the 2026\u20132027 school calendar: exams, weeks of prayer, programs and closures.' },
    news:       { kicker:'News', title:'From the school', img:'assets/calendar.jpg', blurb:'Announcements, programs and stories from 1260 Ocean Avenue.' },
    fundraisers:{ kicker:'Fundraisers', title:'Every gift builds a student', img:'assets/stones.jpg', blurb:'Three active campaigns keep tuition affordable, classrooms stocked and the building on Ocean Avenue ready for the next generation.' },
    give:       { kicker:'12 Stones Fund', title:'Every gift builds a future', img:'assets/stones.jpg', blurb:'Building a legacy of faith, investing in excellence, transforming lives. A community-funded foundation so a family\u2019s finances never decide a child\u2019s education.' },
    yearbooks:  { kicker:'Archive', title:'Yearbooks', img:'assets/students-worship.jpg', blurb:'Every class, every year. Flip through past editions.' },
    store:      { kicker:'Store', title:'Uniforms & spirit wear', img:'assets/classroom.jpg', blurb:'Everything on the supply list, plus gear for game day.' },
    portals:    { kicker:'Portals', title:'Sign in', img:'assets/building-front.jpg', blurb:'Secure portals for students, parents and the school board. Coming soon.' },
    contact:    { kicker:'Contact', title:'Say hello', img:'assets/building-front.jpg', blurb:'Connect with Brooklyn Seventh-day Adventist School in a number of different ways.' }
  };

  navTree = [
    { label:'About', key:'about', items:[['Faculty & Staff','faculty'],['Our mission','about'],['History','about'],['Privacy policy','about']] },
    { label:'Academics', key:'academics', items:[['Pre-K & Kindergarten','academics'],['After-school program','academics'],['Accreditation','academics'],['Grade explorer','life']] },
    { label:'Admissions', key:'admissions', items:[['Enrollment form','apply'],['Tuition & fees','admissions'],['Placement dates','events']] },
    { label:'Student Life', key:'life', items:[['A day in the life','life'],['Grade explorer','life'],['Clubs & activities','life'],['Campus map','life']] },
    { label:'Events', key:'events', items:[['Full calendar','events'],['Event management','events'],['Add new event','events']] },
    { label:'Fundraisers', key:'fundraisers', items:[['12 Stones Fund','give'],['55 in 25','fundraisers'],['Fruit Fundraiser','fundraisers'],['Donate now','give'],['Donor dashboard','portals']] },
    { label:'News', key:'news', items:[['All posts','news']] },
    { label:'Store', key:'store', items:[['Uniforms','store'],['Spirit wear','store'],['Yearbooks','yearbooks']] },
    { label:'Portals', key:'portals', items:[['Students (coming soon)','portals'],['Parents (coming soon)','portals'],['School Board (coming soon)','portals'],['Contact us','contact']] }
  ];

  // ---------- form ----------
  setField = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const errors = Object.assign({}, this.state.errors); delete errors[k];
    this.setState({ form: Object.assign({}, this.state.form, { [k]: v }), errors: errors });
  };
  validate = (step) => {
    const form = this.state.form, errors = {};
    APPLY_STEPS[step].fields.forEach((fd) => {
      if (!applyVisible(fd, form)) return;
      const v = form[fd.k];
      if (fd.type === 'checkbox') { if (fd.req && !v) errors[fd.k] = fd.req; return; }
      const s = String(v || '').trim();
      if (!s) { if (fd.req) errors[fd.k] = fd.req; return; }
      if (fd.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) errors[fd.k] = 'Please enter a valid email address.';
      if (fd.type === 'tel' && s.replace(/\D/g, '').length < 10) errors[fd.k] = 'Please enter a 10-digit phone number.';
    });
    this.setState({ errors: errors });
    return Object.keys(errors).length === 0;
  };
  onNext = () => { if (this.validate(this.state.step)) this.setState({ step: Math.min(APPLY_LAST, this.state.step + 1) }); };
  onBack = () => this.setState({ step: Math.max(0, this.state.step - 1), errors: {} });
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.step < APPLY_LAST) { this.onNext(); return; }
    if (!this.validate(APPLY_LAST)) return;
    const f = this.state.form;
    this.setState({ submitted: true, submittedName: f.guardianFirst || f.firstName });
  };
  onReset = () => this.setState({ submitted: false, step: 0, errors: {}, form: blankForm() });
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
    const upcoming = this.upcomingEvents();

    const form = this.state.form, errors = this.state.errors;
    const applyStep = APPLY_STEPS[this.state.step];
    const isLastStep = this.state.step === APPLY_LAST;
    const applyFields = applyStep.fields.filter((fd) => applyVisible(fd, form)).map((fd) => ({
      k: fd.k, label: fd.label, type: fd.type, required: !!fd.req, ph: fd.ph || '', help: fd.help || '', span: fd.span === 2,
      value: form[fd.k], checked: form[fd.k] === true, error: errors[fd.k] || '', onChange: this.setField(fd.k),
      isInput: fd.type === 'text' || fd.type === 'email' || fd.type === 'tel' || fd.type === 'date',
      isSelect: fd.type === 'select', isRadio: fd.type === 'radio', isTextarea: fd.type === 'textarea', isCheckbox: fd.type === 'checkbox',
      options: (fd.options || []).map((o) => ({ label: o, checked: form[fd.k] === o }))
    }));
    const sum = (label, v) => ({ label: label, value: v || '—' });

    return {
      isHome: r === 'home', isInner: r !== 'home',
      isAbout: r === 'about', isAcademics: r === 'academics', isFaculty: r === 'faculty', isAdmissions: r === 'admissions', isApply: r === 'apply',
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

      // homepage
      goAcademics: this.go('academics'),
      heroPhotos: this.heroPhotos.map((x, i) => Object.assign({ i: i }, x)),
      heroWords: this.heroWords.map((w, i) => ({ label: w, i: i })),
      marquee: this.marquee.map((m) => ({ label: m })),
      proof: this.proof,
      why: this.why.map((x) => Object.assign({}, x, { href: '#' + x.key, onClick: this.go(x.key) })),
      bands: this.bands.map((x) => Object.assign({}, x, { href: '#' + x.key, onClick: this.go(x.key) })),
      growth: this.growth,
      regents: this.results.slice(4, 7),
      joinSteps: this.joinSteps,
      visitOptions: this.visitOptions.map((x) => Object.assign({}, x, {
        href: x.href || '#' + x.key, onClick: x.key ? this.go(x.key) : null
      })),
      principalQuote: this.principalQuote,

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
      homeEvents: upcoming.slice(0, 3).map((e) => ({ day: e.day, month: e.month, title: e.title, meta: e.cat })),
      yearbooks: this.yearbooks,
      products: this.products,
      giving: this.giving,
      results: this.results, vision: this.vision, bsdas: this.bsdas, accreditation: this.accreditation,
      courses: this.accreditation.courses.map((x) => ({ label: x })), eceAreas: this.eceAreas, afterSchool: this.afterSchool,
      afterItems: this.afterSchool.items.map((x) => ({ label: x })), stonesFacts: this.stonesFacts.map((x) => ({ label: x })),
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

      eventCats: ['All','School life','Faith','Exams','Closed'].map((c) => ({
        label: c, onClick: () => this.setState({ evFilter: c }),
        bg: evFilter === c ? '#131A2E' : 'transparent',
        color: evFilter === c ? '#ffffff' : '#131A2E'
      })),
      visibleEvents: upcoming.filter((e) => evFilter === 'All' || e.cat === evFilter),
      featured: upcoming.filter((e) => e.featured)[0] || null,

      rooms: this.roomList.map((x) => Object.assign({}, x, {
        onClick: () => this.setState({ room: x.id }),
        bg: this.state.room === x.id ? '#4A6FD0' : 'transparent',
        border: this.state.room === x.id ? '#4A6FD0' : 'rgba(255,255,255,.22)',
        color: '#ffffff'
      })),
      activeRoom: room,

      footerCols: [
        { title: 'Quick links', items: [['About','about'],['Faculty & Staff','faculty'],['Academics','academics'],['Admissions','admissions'],['Enrollment form','apply'],['Student life','life'],['Events','events'],['News','news']] },
        { title: 'Giving & shop', items: [['Fundraisers','fundraisers'],['12 Stones Fund','give'],['55 in 25','fundraisers'],['Fruit Fundraiser','fundraisers'],['Donor dashboard','portals'],['Store','store'],['Yearbooks','yearbooks']] },
        { title: 'Portals & legal', items: [['Students (soon)','portals'],['Parents (soon)','portals'],['School Board (soon)','portals'],['Contact','contact'],['Privacy policy','about'],['Legal notice','about'],['Cookies','about']] }
      ].map((col) => ({
        title: col.title,
        items: col.items.map(([label, key]) => ({ label: label, href: '#' + key, onClick: this.go(key), color: '#B9C0DA', size: '15px', indent: '0px' }))
      })),

      applyStep: applyStep, applyFields: applyFields, isLastStep: isLastStep,
      stepTabs: APPLY_STEPS.map((st, i) => ({
        n: i + 1, label: st.label,
        bg: this.state.step === i ? '#131A2E' : '#F4F2ED',
        rule: this.state.step === i ? '#8CC63F' : (this.state.step > i ? '#8CC63F' : '#DCD8CE'),
        color: this.state.step === i ? '#ffffff' : '#131A2E',
        muted: this.state.step === i ? '#8A93B6' : '#8A90A8'
      })),
      atFirstStep: this.state.step === 0,
      backOpacity: this.state.step === 0 ? 0.35 : 1,
      notLastStep: !isLastStep,
      submitted: this.state.submitted, notSubmitted: !this.state.submitted, submittedName: this.state.submittedName,
      summary: [
        sum('Student', [form.firstName, form.middleName, form.lastName].join(' ').replace(/\s+/g, ' ').trim()),
        sum('Date of birth', form.dob),
        sum('Grade applying for', form.gradeApplying),
        sum('Student address', [form.address, form.apt, form.city, form.state, form.zip].filter(Boolean).join(', ')),
        sum('Parent or guardian', [form.prefix, form.guardianFirst, form.guardianLast].filter(Boolean).join(' ')),
        sum('Relation to child', form.relationship),
        sum('Email', form.email),
        sum('Phone', form.phone),
        sum('Previous school', form.attendedPrevious === 'Yes' ? form.previousSchool : (form.attendedPrevious === 'No' ? 'None' : '')),
        sum('Home church', form.church)
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
    (x.getAttribute('data-field') !== y.getAttribute('data-field') || x.getAttribute('placeholder') !== y.getAttribute('placeholder') || x.getAttribute('type') !== y.getAttribute('type') || x.getAttribute('data-change') !== y.getAttribute('data-change') && x.hasAttribute('data-val') !== y.hasAttribute('data-val'));

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
