// Authentic Nest & Nurture Play School and Child Care photography, organized by the uploaded photo roles.
export const IMAGES = {
  heroMain: '/images/hero/WhatsApp_Image_2026-08-07_at_12.50.23_PM.jpeg',
  heroTeacher: '/images/about/WhatsApp_Image_2026-08-07_at_12.50.26_PM.jpeg',
  heroPlay: '/images/activities/WhatsApp_Image_2026-08-07_at_12.50.25_PM.jpeg',
  heroRoleplay: '/images/programs/WhatsApp_Image_2026-08-07_at_12.50.24_PM.jpeg',

  aboutStory: '/images/about/WhatsApp_Image_2026-08-07_at_12.50.26_PM.jpeg',
  aboutPhilosophy: '/images/activities/WhatsApp_Image_2026-08-07_at_12.50.25_PM.jpeg',
  aboutTrust: '/images/why-choose-us/WhatsApp_Image_2026-08-07_at_12.50.27_PM_(1).jpeg',

  gallery: [
    { src: '/images/hero/WhatsApp_Image_2026-08-07_at_12.50.23_PM.jpeg', alt: 'Children engaged in a bright preschool activity', span: 'tall' },
    { src: '/images/programs/WhatsApp_Image_2026-08-07_at_12.50.24_PM.jpeg', alt: 'Young learners working together in the classroom', span: 'normal' },
    { src: '/images/activities/WhatsApp_Image_2026-08-07_at_12.50.25_PM.jpeg', alt: 'Kids enjoying a hands-on group activity', span: 'normal' },
    { src: '/images/about/WhatsApp_Image_2026-08-07_at_12.50.26_PM.jpeg', alt: 'Teacher supporting children with creative learning', span: 'normal' },
    { src: '/images/why-choose-us/WhatsApp_Image_2026-08-07_at_12.50.27_PM_(1).jpeg', alt: 'A welcoming preschool classroom with playful decor', span: 'tall' },
  ],

  activities: {
    art: '/images/activities/WhatsApp_Image_2026-08-07_at_12.50.25_PM.jpeg',
    painting: '/images/activities/WhatsApp_Image_2026-08-07_at_12.50.25_PM.jpeg',
    dance: '/images/hero/WhatsApp_Image_2026-08-07_at_12.50.23_PM.jpeg',
    music: '/images/programs/WhatsApp_Image_2026-08-07_at_12.50.24_PM.jpeg',
  },
};

export type Program = {
  id: string;
  name: string;
  age: string;
  timing: string;
  tagline: string;
  description: string;
  color: 'coral' | 'green' | 'blue' | 'yellow';
  illustration: string;
  curriculum: string[];
  activities: string[];
  outcomes: string[];
  extraBadge?: string;
  details?: { title: string; items: string[] }[];
};

export const PROGRAMS: Program[] = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    age: '1.5 – 2.5 years',
    timing: '9:00 AM – 12:00 PM',
    tagline: 'First steps into a world of wonder',
    description: 'A gentle, sensory-rich introduction to school where our youngest learners explore freely in a safe, loving environment designed just for them.',
    color: 'coral',
    illustration: IMAGES.heroPlay,
    curriculum: [
      'Sensory play & tactile exploration',
      'Rhymes, lullabies & music time',
      'Gross-motor play on soft equipment',
      'Bonding & secure attachment routines',
    ],
    activities: ['Sensory bins', 'Baby rhymes', 'Soft-block play', 'Story time', 'Outdoor strolls'],
    outcomes: [
      'Develops trust and comfort away from home',
      'Builds early motor coordination',
      'Responds to sounds, faces and colours',
      'Begins to interact with peers gently',
    ],
  },
  {
    id: 'daycare',
    name: 'Day Care',
    age: 'Preschool & school-going children',
    timing: 'Extended care available until 8:00 PM',
    tagline: 'A safe, caring place for your child beyond school hours',
    description: 'Our Day Care program provides a safe, caring and engaging environment for children who need extended care beyond regular school hours. Children can spend their time comfortably with caring staff while enjoying age-appropriate activities, play, rest and a structured daily routine.',
    color: 'yellow',
    illustration: IMAGES.heroTeacher,
    extraBadge: 'Extended Care • Until 8:00 PM',
    details: [
      {
        title: 'Care & Safety',
        items: [
          'Safe and supervised environment',
          'Caring and attentive staff',
          'Secure premises',
          'Comfortable environment for children',
        ],
      },
      {
        title: 'Daily Activities',
        items: [
          'Indoor and outdoor play',
          'Story time and creative activities',
          'Educational activities',
          'Free play and recreation',
          'Quiet/rest time',
        ],
      },
      {
        title: 'Child-Friendly Routine',
        items: [
          'Balanced daily routine',
          'Personal attention',
          'Age-appropriate activities',
          'Comfortable rest periods',
        ],
      },
      {
        title: 'Learning & Development',
        items: [
          'Builds independence and confidence',
          'Encourages social interaction',
          'Develops creativity through play',
          'Supports positive daily routines',
        ],
      },
    ],
    curriculum: [
      'Routine-based comfort and care',
      'Age-sensitive play and rest cycles',
      'Soft-skill growth through guided interaction',
      'Emotional well-being and social connection',
    ],
    activities: ['Quiet reading', 'Creative crafts', 'Relaxed group games', 'Outdoor play', 'Rest time'],
    outcomes: [
      'Builds independence and confidence',
      'Encourages social interaction',
      'Maintains calm, positive daily routines',
      'Supports healthy after-school transition',
    ],
  },
  {
    id: 'nursery',
    name: 'Nursery',
    age: '2.5 – 3.5 years',
    timing: '9:00 AM – 12:30 PM',
    tagline: 'Curiosity takes root',
    description: 'Where curiosity blooms through guided play, songs and stories — children begin to express themselves, make friends and discover the joy of learning.',
    color: 'green',
    illustration: IMAGES.aboutTrust,
    curriculum: [
      'Phonics & early language exposure',
      'Numbers through play-based counting',
      'Creative art & messy play',
      'Life skills & self-help routines',
    ],
    activities: ['Phonics songs', 'Finger painting', 'Pretend play', 'Puzzle solving', 'Garden time'],
    outcomes: [
      'Speaks in short, clear sentences',
      'Recognises colours, shapes and patterns',
      'Shares, takes turns and plays with peers',
      'Shows independence in self-help skills',
    ],
  },
  {
    id: 'lkg',
    name: 'LKG',
    age: '3.5 – 4.5 years',
    timing: '9:00 AM – 1:00 PM',
    tagline: 'Growing confident and capable',
    description: 'A structured-yet-playful year that builds strong foundations in literacy, numeracy and social-emotional skills — preparing children to think, question and create.',
    color: 'blue',
    illustration: IMAGES.heroRoleplay,
    curriculum: [
      'Reading readiness & sight words',
      'Number concepts 1–50 & patterns',
      'Environmental awareness & science',
      'Creative expression & storytelling',
    ],
    activities: ['Story sequencing', 'Number games', 'STEM tinkering', 'Role play', 'Nature walks'],
    outcomes: [
      'Reads simple CVC words and sentences',
      'Counts, compares and reasons with numbers',
      'Asks thoughtful questions about the world',
      'Works confidently in groups and solo',
    ],
  },
  {
    id: 'ukg',
    name: 'UKG',
    age: '4.5 – 5.5 years',
    timing: '9:00 AM – 1:30 PM',
    tagline: 'Ready to soar into big school',
    description: 'The final preschool year — a rich, immersive curriculum that makes children school-ready with strong academics, confident communication and joyful independence.',
    color: 'yellow',
    illustration: IMAGES.heroMain,
    curriculum: [
      'Fluent reading & sentence writing',
      'Addition, subtraction & number bonds',
      'General awareness & logical thinking',
      'Public speaking & leadership skills',
    ],
    activities: ['Reading circle', 'Math lab', 'Science experiments', 'Show & tell', 'Sports & yoga'],
    outcomes: [
      'Reads and writes short paragraphs',
      'Solves basic addition and subtraction',
      'Speaks confidently in front of groups',
      'Transition smoothly to primary school',
    ],
  },
];

export const WHY_CHOOSE_US = [
  { icon: 'ShieldCheck', title: 'Safe Environment', desc: 'Child-proofed campus, secure entry, and trained staff watching over every corner.' },
  { icon: 'GraduationCap', title: 'Qualified Teachers', desc: 'Certified early-childhood educators with a genuine love for teaching little ones.' },
  { icon: 'Puzzle', title: 'Activity-Based Learning', desc: 'We learn by doing — every concept comes alive through hands-on play and discovery.' },
  { icon: 'MonitorSmartphone', title: 'Smart Classrooms', desc: 'Age-appropriate interactive screens and audio-visual aids that enrich each lesson.' },
  { icon: 'Users', title: 'Low Student-Teacher Ratio', desc: 'A 8:1 ratio means every child gets the personal attention they deserve to thrive.' },
  { icon: 'Apple', title: 'Healthy Meals', desc: 'Nutritionist-designed, freshly cooked meals and snacks that fuel growing bodies.' },
  { icon: 'Bus', title: 'Transport', desc: 'GPS-tracked, attendant-supervised buses across the neighbourhood for safe pickup.' },
  { icon: 'MessageCircleHeart', title: 'Parent Communication', desc: 'Daily updates, photos and reports through our parent app — never miss a moment.' },
];

export const ACTIVITIES = [
  { icon: 'BookOpen', title: 'Learning', desc: 'Foundational literacy, numeracy and problem-solving woven into playful lessons.' },
  { icon: 'Palette', title: 'Art & Craft', desc: 'Painting, cutting, sticking and sculpting — where little hands create big wonders.' },
  { icon: 'Music', title: 'Dance', desc: 'Movement and rhythm that build coordination, confidence and pure joy.' },
  { icon: 'Drum', title: 'Music', desc: 'Singing, instruments and beats that spark a lifelong love for melody.' },
  { icon: 'Trophy', title: 'Sports', desc: 'Age-appropriate games and yoga that grow strong, healthy, happy bodies.' },
  { icon: 'BookMarked', title: 'Storytelling', desc: 'Puppets, props and drama that bring stories to life and grow imagination.' },
  { icon: 'FlaskConical', title: 'STEM', desc: 'Simple experiments and building challenges that nurture young problem-solvers.' },
  { icon: 'Trees', title: 'Nature Walk', desc: 'Outdoor exploration where children connect with plants, bugs and seasons.' },
];

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: "Mother of Aarav (Nursery)",
    rating: 5,
    text: "The warmth and care at Nest & Nurture is unmatched. Aarav went from crying at drop-off to running in excitedly every morning. The teachers truly know each child as an individual.",
    initials: 'PS',
  },
  {
    name: 'Rahul Verma',
    role: "Father of Myra (LKG)",
    rating: 5,
    text: "We toured five preschools before choosing here — and we are so glad we did. Myra reads short sentences at age four and, more importantly, loves going to school every single day.",
    initials: 'RV',
  },
  {
    name: 'Ananya Iyer',
    role: "Mother of Diya (UKG)",
    rating: 5,
    text: "The daily photos and updates through the parent app give me such peace of mind at work. Diya has grown so confident — she presented a whole show-and-tell by herself last week!",
    initials: 'AI',
  },
  {
    name: 'Arjun Mehta',
    role: "Father of Kabir (Playgroup)",
    rating: 5,
    text: "As first-time parents we were nervous, but the settling-in period was handled so gently. Kabir is safe, happy and learning more than we imagined a two-year-old could.",
    initials: 'AM',
  },
  {
    name: 'Meera Nair',
    role: "Mother of twins, Vihaan & Sara (Nursery)",
    rating: 5,
    text: "Managing twins is not easy, but the teachers gave each of them individual attention from day one. The campus is spotless, meals are healthy, and the CCTV access is reassuring.",
    initials: 'MN',
  },
  {
    name: 'Vikram Rao',
    role: "Father of Anika (UKG)",
    rating: 5,
    text: "Anika is more than ready for big school. The STEM activities and nature walks made her curious about everything around her. Worth every penny — a genuinely premium experience.",
    initials: 'VR',
  },
];

export const TIMELINE = [
  { year: '2012', title: 'A Dream Takes Root', desc: 'Founded by educator Dr. Lakshmi Nair with just 12 children and a simple belief: early years deserve extraordinary care.' },
  { year: '2015', title: 'Our Forever Campus', desc: 'Moved into our purpose-built, child-safe campus with gardens, smart classrooms and dedicated play zones.' },
  { year: '2018', title: 'Curriculum Evolves', desc: 'Launched our play-based, STEM-integrated curriculum developed with early-childhood specialists.' },
  { year: '2021', title: 'Parent App Launched', desc: 'Introduced real-time updates, photos and reports so parents never miss a milestone.' },
  { year: '2024', title: '500+ Happy Families', desc: 'Celebrated over 500 alumni stepping confidently into primary schools across the city.' },
  { year: '2026', title: 'Admissions Open', desc: 'Now welcoming the next generation of little minds to bloom with us.' },
];

export const TRUST_BADGES = [
  { icon: 'ShieldCheck', label: 'Safe Campus' },
  { icon: 'GraduationCap', label: 'Experienced Teachers' },
  { icon: 'Puzzle', label: 'Play-Based Learning' },
  { icon: 'Cctv', label: 'CCTV Monitoring' },
];

export const CONTACT = {
  phone: '+91 80158 12645',
  phoneHref: '+918015812645',
  whatsapp: '918015812645',
  email: 'srikavitha1792@gmail.com',
  address: 'No. 3, Plot No. C-319, Chandrasekaran Road, Periyar Nagar, Chennai – 600082',
  mapEmbed: 'https://www.google.com/maps?q=No.+3,+Plot+No.+C-319,+Chandrasekaran+Road,+Periyar+Nagar,+Chennai+600082&output=embed',
  hours: [
    { day: 'Monday – Friday', time: '8:30 AM – 4:30 PM' },
    { day: 'Saturday', time: '9:00 AM – 1:00 PM (Visits only)' },
    { day: 'Sunday', time: 'Closed' },
  ],
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Events', to: '/events' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact', to: '/contact' },
];
