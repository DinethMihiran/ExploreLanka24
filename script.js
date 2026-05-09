/* ═══════════════════════════════════════════════
   EXPLORE SRI LANKA — script.js
   ═══════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────
   DATA
─────────────────────────────────────────*/

const PLACES = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    tag: 'UNESCO World Heritage',
    category: 'Ancient Wonder',
    description: 'The legendary Lion Rock fortress rising 200m from the jungle floor — one of the most dramatic archaeological sites in Asia.',
    history: 'Built by King Kashyapa I in the 5th century AD, Sigiriya served as a royal palace and fortress. The rock summit houses ruins of an ancient palace complex, and its sheer walls bear stunning frescoes of celestial maidens. Declared a UNESCO World Heritage Site in 1982, it stands as one of the finest examples of ancient urban planning.',
    bestTime: 'December to April (dry season). Early mornings (before 7am) offer cooler temperatures and fewer crowds.',
    duration: '4–6 hours for a full visit; plan a full day trip from Kandy or Dambulla.',
    location: '7.9570° N, 80.7603° E',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3!2d80.76!3d7.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca6d7027f1d85%3A0x1f7e9e8b5c3e0a1!2sSigiriya!5e0!3m2!1sen!2slk!4v1699000000',
    img: 'https://images.unsplash.com/photo-1566312922674-5f6b9c594601?w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586105030735-5fd0c7dd56e5?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542647584-3a960f6e5f37?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&auto=format&fit=crop',
    ],
  },
  {
    id: 'kandy',
    name: 'Kandy',
    tag: 'Cultural Capital',
    category: 'City & Temple',
    description: "Sri Lanka's cultural heart, home to the sacred Temple of the Tooth and vibrant Kandyan dance traditions.",
    history: 'Kandy was the last capital of the ancient kings of Sri Lanka, finally falling to British colonial rule in 1815. The city is dominated by the Sacred Temple of the Tooth Relic (Sri Dalada Maligawa), which houses a tooth relic of the Buddha and is one of the most venerated places of worship in the Buddhist world. Listed as a UNESCO World Heritage Site in 1988.',
    bestTime: 'January to April and August (for the Esala Perahera festival). The city is beautiful year-round.',
    duration: '2–3 days recommended to explore the temple, Royal Botanical Gardens, and surrounding tea country.',
    location: '7.2906° N, 80.6337° E',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8!2d80.63!3d7.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1699000001',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1601921004897-b7d582836990?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&auto=format&fit=crop',
    ],
  },
  {
    id: 'galle',
    name: 'Galle',
    tag: 'Colonial Fort',
    category: 'Coastal History',
    description: "A perfectly preserved 17th-century Dutch colonial fort on the southern tip, blending European architecture with South Asian culture.",
    history: "The Galle Fort was originally built by the Portuguese in 1588 and later strengthened by the Dutch VOC during the 17th and 18th centuries. It represents the interaction between South Asian and European cultures over four centuries, with its fortified walls enclosing churches, mosques, a lighthouse, and quaint colonial streets. UNESCO World Heritage Site since 1988.",
    bestTime: 'November to April (dry season on the south coast). The Galle Literary Festival in January is world-famous.',
    duration: '1–2 days to wander the fort, explore galleries, boutiques, and the ramparts at sunset.',
    location: '6.0328° N, 80.2170° E',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2!2d80.22!3d6.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173c6a5c38c83%3A0x1c5826b2e0d98b1f!2sGalle%20Fort!5e0!3m2!1sen!2slk!4v1699000002',
    img: 'https://images.unsplash.com/photo-1583425423928-83e21ba2a9b8?w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f11?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583425423928-83e21ba2a9b8?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop',
    ],
  },
  {
    id: 'ella',
    name: 'Ella',
    tag: 'Mountain Village',
    category: 'Nature & Adventure',
    description: 'A charming hill village surrounded by waterfalls, tea estates, and the iconic Nine Arch Bridge — a photographer\'s paradise.',
    history: "Ella became a popular hill station during British colonial times, prized for its cool climate and magnificent views across the southern plains. The famous Nine Arch Bridge, built entirely of stone and brick without steel during WWI (due to metal shortages), is an engineering marvel and the most photographed railway bridge in Sri Lanka.",
    bestTime: 'January to March (dry season in the hills). The scenic train journey from Kandy to Ella is one of the world\'s great train rides.',
    duration: '2–4 days to hike Ella Rock, visit Little Adam\'s Peak, explore tea factories, and enjoy the laid-back village atmosphere.',
    location: '6.8667° N, 81.0466° E',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0!2d81.05!3d6.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4a3deba67e2c7%3A0x9dcfbb20c2a4e1e4!2sElla!5e0!3m2!1sen!2slk!4v1699000003',
    img: 'https://images.unsplash.com/photo-1625498542672-d3c5e42c2da2?w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579762593131-b8945254345a?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=400&auto=format&fit=crop',
    ],
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    tag: 'Little England',
    category: 'Tea Country',
    description: "Sri Lanka's highest city, nestled at 1,868m, with misty tea plantations, colonial bungalows, and a cool Scottish Highland feel.",
    history: "Founded by British Governor Sir Samuel Baker in 1846, Nuwara Eliya became the favourite hill retreat of British planters and colonial administrators. Its Victorian-era architecture, rose gardens, and manicured golf course gave it the nickname 'Little England.' The surrounding Uva and Nuwara Eliya provinces produce Ceylon tea renowned worldwide.",
    bestTime: 'March to May for the strawberry season. January–April is driest. April brings the vibrant April Season festivities.',
    duration: '2–3 days to visit tea factories, explore the town\'s colonial charm, hike Pidurutalagala, and taste freshly brewed Ceylon tea.',
    location: '6.9497° N, 80.7891° E',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1!2d80.79!3d6.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae381aa2d91e695%3A0x504a66a2bc7ac24b!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1699000004',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&auto=format&fit=crop',
    ],
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee',
    tag: 'East Coast Gem',
    category: 'Beach & Marine',
    description: "Pristine turquoise bays, whale watching, and ancient Hindu temples perched on dramatic sea cliffs — the east coast hidden gem.",
    history: "Trincomalee boasts one of the finest natural harbours in the world and has been prized by colonisers from the Portuguese, Dutch, and British. The ancient Koneswaram Temple, one of five ancient Shiva temples in Sri Lanka, stands dramatically on Swami Rock cliff overlooking the sea. The bay is famous for blue whale sightings from March to August.",
    bestTime: 'May to September (dry season on the east coast, ideal for diving and whale watching).',
    duration: '3–5 days for whale watching trips, snorkelling at Pigeon Island, exploring the fort, and relaxing on Nilaveli Beach.',
    location: '8.5874° N, 81.2152° E',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2!2d81.22!3d8.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb520f7ba24fd1%3A0x504a66a2bc7ac24b!2sTrincomalee!5e0!3m2!1sen!2slk!4v1699000005',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop',
    ],
  },
];

const GUIDES = [
  {
    id: 1,
    name: 'Chaminda Perera',
    specialty: 'Cultural & Heritage Tours',
    rating: 4.9,
    reviews: 312,
    languages: ['English', 'German', 'Sinhala'],
    price: 85,
    bio: 'With 15 years of experience guiding through ancient kingdoms and sacred temples, Chaminda is your ideal companion for a culturally immersive Sri Lanka experience.',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&auto=format&fit=crop',
    whatsapp: '+94771234567',
    specialities: ['Sigiriya', 'Kandy', 'Polonnaruwa', 'Anuradhapura'],
  },
  {
    id: 2,
    name: 'Dilani Jayawardena',
    specialty: 'Adventure & Nature',
    rating: 4.8,
    reviews: 198,
    languages: ['English', 'French', 'Tamil'],
    price: 75,
    bio: 'A passionate trekker and wildlife enthusiast, Dilani leads unforgettable adventures through Sri Lanka\'s jungles, mountains, and national parks.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
    whatsapp: '+94772345678',
    specialities: ['Ella', 'Yala', 'Horton Plains', 'Knuckles Range'],
  },
  {
    id: 3,
    name: 'Rajan Krishnaswamy',
    specialty: 'Beach & Marine Life',
    rating: 4.7,
    reviews: 145,
    languages: ['English', 'Tamil', 'Japanese'],
    price: 70,
    bio: 'Certified dive master and marine guide with intimate knowledge of Sri Lanka\'s east and south coast beaches, coral reefs, and whale watching routes.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
    whatsapp: '+94773456789',
    specialities: ['Trincomalee', 'Mirissa', 'Unawatuna', 'Pigeon Island'],
  },
  {
    id: 4,
    name: 'Amaya Fernando',
    specialty: 'Food & Culture Tours',
    rating: 5.0,
    reviews: 87,
    languages: ['English', 'Italian', 'Sinhala'],
    price: 65,
    bio: 'A professional chef turned guide, Amaya takes visitors on a mouth-watering journey through Sri Lankan cuisine, spice gardens, and traditional cooking.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop',
    whatsapp: '+94774567890',
    specialities: ['Colombo', 'Galle', 'Spice Gardens', 'Local Markets'],
  },
  {
    id: 5,
    name: 'Nuwan Silva',
    specialty: 'Luxury & Private Tours',
    rating: 4.9,
    reviews: 264,
    languages: ['English', 'Chinese', 'Arabic'],
    price: 150,
    bio: 'Nuwan specialises in curating exclusive private itineraries for discerning travellers — luxury vehicles, boutique hotels, private access to heritage sites.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
    whatsapp: '+94775678901',
    specialities: ['Island-wide', 'Luxury Resorts', 'Private Experiences'],
  },
  {
    id: 6,
    name: 'Senuri Dissanayake',
    specialty: 'Tea Plantation Tours',
    rating: 4.8,
    reviews: 173,
    languages: ['English', 'Dutch', 'Sinhala'],
    price: 60,
    bio: "Born in the hill country, Senuri grew up surrounded by tea estates and shares her insider knowledge of Sri Lanka's world-famous Ceylon tea heritage.",
    avatar: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop',
    whatsapp: '+94776789012',
    specialities: ['Nuwara Eliya', 'Haputale', 'Ella', 'Tea Factories'],
  },
];

const EVENTS = [
  {
    id: 1,
    title: 'Esala Perahera',
    type: 'Cultural Festival',
    typeColor: 'rgba(201,162,39,0.15)',
    typeTextColor: '#c9a227',
    date: 'August 7–16, 2025',
    location: 'Kandy',
    description: "One of Asia's greatest pageants — thousands of costumed dancers, acrobats, fire breathers, and magnificently adorned elephants parade through Kandy's streets over 10 nights.",
    img: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Kandy,Sri+Lanka',
  },
  {
    id: 2,
    title: 'Galle Literary Festival',
    type: 'Arts & Literature',
    typeColor: 'rgba(124,58,237,0.15)',
    typeTextColor: '#a78bfa',
    date: 'January 18–22, 2026',
    location: 'Galle Fort',
    description: 'An internationally acclaimed festival inside the UNESCO fort, bringing together world-renowned authors, poets, and thinkers for readings, discussions, and cultural exchange.',
    img: 'https://images.unsplash.com/photo-1583425423928-83e21ba2a9b8?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Galle+Fort,Sri+Lanka',
  },
  {
    id: 3,
    title: 'Arugam Bay Surf Festival',
    type: 'Beach & Sports',
    typeColor: 'rgba(0,212,170,0.15)',
    typeTextColor: '#00d4aa',
    date: 'July 5–7, 2025',
    location: 'Arugam Bay',
    description: "Sri Lanka's premier surf competition at one of the top surf breaks in Asia. Professionals and amateurs compete on world-class waves, accompanied by beach parties and live music.",
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Arugam+Bay,Sri+Lanka',
  },
  {
    id: 4,
    title: 'Vesak Festival of Light',
    type: 'Religious & Cultural',
    typeColor: 'rgba(251,191,36,0.15)',
    typeTextColor: '#fbbf24',
    date: 'May 12, 2025',
    location: 'Island-wide',
    description: "Celebrating the birth, enlightenment, and passing of the Buddha, Sri Lanka transforms into a magical landscape of lanterns, illuminated pandals, and free food stalls.",
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Colombo,Sri+Lanka',
  },
  {
    id: 5,
    title: 'Colombo Music Festival',
    type: 'Music & Entertainment',
    typeColor: 'rgba(255,107,107,0.15)',
    typeTextColor: '#ff6b6b',
    date: 'October 10–12, 2025',
    location: 'Colombo',
    description: 'A multi-stage international music festival in the capital city featuring top regional and international artists across genres — pop, EDM, jazz, and traditional fusion.',
    img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Colombo,Sri+Lanka',
  },
  {
    id: 6,
    title: 'Sinhala & Tamil New Year',
    type: 'Traditional Festival',
    typeColor: 'rgba(34,197,94,0.15)',
    typeTextColor: '#22c55e',
    date: 'April 13–14, 2026',
    location: 'Island-wide',
    description: "Sri Lanka's most celebrated traditional new year, marking the end of the harvest season. Experience traditional games, oil-lighting ceremonies, cooking of the first meal, and community celebrations.",
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Sri+Lanka',
  },
];

const PRODUCTS = [
  { id: 1, name: 'Blue Ceylon Sapphire Ring', category: 'gems', price: 380, originalPrice: 450, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop', isNew: true },
  { id: 2, name: 'Handwoven Batik Sarong', category: 'clothes', price: 45, originalPrice: null, img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop', isNew: false },
  { id: 3, name: 'Premium Ceylon Orange Pekoe', category: 'tea', price: 28, originalPrice: 35, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop', isNew: false },
  { id: 4, name: 'Wooden Elephant Sculpture', category: 'crafts', price: 95, originalPrice: null, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop', isNew: true },
  { id: 5, name: 'Moonstone Pendant Necklace', category: 'gems', price: 120, originalPrice: 160, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop', isNew: false },
  { id: 6, name: 'Traditional Kandyan Mask', category: 'crafts', price: 75, originalPrice: null, img: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&auto=format&fit=crop', isNew: false },
  { id: 7, name: 'Silver Lace Tea Collection', category: 'tea', price: 55, originalPrice: 70, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop', isNew: true },
  { id: 8, name: 'Handpainted Lacquer Box', category: 'souvenirs', price: 38, originalPrice: null, img: 'https://images.unsplash.com/photo-1586195831850-7da6e00c8e9e?w=400&auto=format&fit=crop', isNew: false },
  { id: 9, name: 'Silk Saree — Kandy Style', category: 'clothes', price: 185, originalPrice: 240, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop', isNew: false },
  { id: 10, name: 'Ruby Gemstone Earrings', category: 'gems', price: 220, originalPrice: null, img: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&auto=format&fit=crop', isNew: true },
  { id: 11, name: 'Coir Craft Basket Set', category: 'crafts', price: 32, originalPrice: null, img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&auto=format&fit=crop', isNew: false },
  { id: 12, name: 'Sri Lanka Miniature Set', category: 'souvenirs', price: 22, originalPrice: 28, img: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&auto=format&fit=crop', isNew: false },
];

const AI_RECOMMENDATIONS = {
  history: [
    { icon: '🏰', name: 'Sigiriya Rock Fortress', desc: 'A 5th-century royal citadel with ancient frescoes and breathtaking views.' },
    { icon: '🕌', name: 'Anuradhapura Sacred City', desc: 'Ancient capitals with massive stupas dating back 2,300 years.' },
    { icon: '🏛️', name: 'Polonnaruwa Ruins', desc: 'Well-preserved medieval kingdom with impressive stone carvings.' },
  ],
  beaches: [
    { icon: '🏖️', name: 'Mirissa Beach', desc: 'Pristine crescent beach perfect for whale watching and surfing.' },
    { icon: '🌊', name: 'Unawatuna', desc: 'A sheltered bay with calm turquoise waters and vibrant coral reefs.' },
    { icon: '🐚', name: 'Nilaveli Beach', desc: 'Remote east coast paradise with white sand and crystal-clear waters.' },
  ],
  nature: [
    { icon: '🌿', name: "Sinharaja Rain Forest", desc: 'Sri Lanka\'s last remaining tropical rain forest, a UNESCO Biosphere Reserve.' },
    { icon: '🏔️', name: "Horton Plains", desc: 'Surreal highland plateau with the dramatic World\'s End precipice.' },
    { icon: '🌺', name: 'Peradeniya Botanical Gardens', desc: "One of Asia's finest botanical gardens with 4,000 plant species." },
  ],
  adventure: [
    { icon: '🧗', name: 'Ella Rock Trek', desc: "A challenging hike rewarded with panoramic views of Sri Lanka's hill country." },
    { icon: '🚂', name: 'Kandy–Ella Train Ride', desc: "Rated one of the world's most scenic railway journeys through tea country." },
    { icon: '🤿', name: 'Pigeon Island Diving', desc: 'World-class snorkelling and diving amid coral gardens and reef sharks.' },
  ],
  culture: [
    { icon: '💃', name: 'Kandyan Dance Performance', desc: 'Vibrant traditional dance art form with elaborate costumes and drumming.' },
    { icon: '🥘', name: 'Colombo Food Tour', desc: 'Explore street food stalls and colonial-era restaurants in the capital.' },
    { icon: '🎨', name: 'Galle Fort Artisan Walk', desc: 'Discover boutiques, galleries, and workshops in a living UNESCO fort.' },
  ],
  wildlife: [
    { icon: '🐘', name: 'Minneriya National Park', desc: "Home to the famous 'Gathering' — hundreds of wild elephants at the reservoir." },
    { icon: '🐆', name: 'Yala National Park', desc: "One of the world's best places to spot leopards in the wild." },
    { icon: '🐋', name: 'Mirissa Whale Watching', desc: 'Blue and sperm whale sightings in the warm Indian Ocean waters.' },
  ],
  food: [
    { icon: '🍛', name: 'Colombo Culinary Tour', desc: 'Hoppers, kottu roti, string hoppers, and freshly ground spice curries.' },
    { icon: '☕', name: 'Tea Factory Nuwara Eliya', desc: 'Witness Ceylon tea production and taste straight from the estate.' },
    { icon: '🦐', name: 'Negombo Seafood Market', desc: "Sri Lanka's largest fish market — fresh catch cooked by beachside chefs." },
  ],
  luxury: [
    { icon: '🏨', name: 'Heritance Ahungalla', desc: 'Award-winning 5-star beachfront resort with Geoffrey Bawa architecture.' },
    { icon: '🛥️', name: 'Private Catamaran Cruise', desc: 'Sail the southern coast in style, stopping at secluded bays and beaches.' },
    { icon: '🧖', name: 'Ayurveda Retreat, Beruwela', desc: "A transformative wellness escape using 5,000-year-old healing traditions." },
  ],
};

/* ────────────────────────────────────────
   CART STATE
─────────────────────────────────────────*/
let cart = [];

/* ────────────────────────────────────────
   UTILITY
─────────────────────────────────────────*/
function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* ────────────────────────────────────────
   NAVBAR
─────────────────────────────────────────*/
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightNavLink();
});

function highlightNavLink() {
  const sections = ['home', 'places', 'guides', 'events', 'shop', 'ai'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 150) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

/* ────────────────────────────────────────
   SIDEBAR (MOBILE)
─────────────────────────────────────────*/
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

/* ────────────────────────────────────────
   AUTH MODAL
─────────────────────────────────────────*/
const authModal = document.getElementById('authModal');
const openAuthBtn = document.getElementById('openAuth');
const openAuthSidebarBtn = document.getElementById('openAuthSidebar');
const authModalClose = document.getElementById('authModalClose');

function openAuth() {
  authModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  closeSidebar();
}
function closeAuth() {
  authModal.classList.remove('active');
  document.body.style.overflow = '';
}
openAuthBtn && openAuthBtn.addEventListener('click', openAuth);
openAuthSidebarBtn && openAuthSidebarBtn.addEventListener('click', openAuth);
authModalClose && authModalClose.addEventListener('click', closeAuth);
authModal.addEventListener('click', (e) => { if (e.target === authModal) closeAuth(); });

function switchTab(tab) {
  document.getElementById('signinForm').classList.toggle('hidden', tab !== 'signin');
  document.getElementById('signupForm').classList.toggle('hidden', tab !== 'signup');
  document.getElementById('signinTab').classList.toggle('active', tab === 'signin');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
}

function handleSignIn() {
  const email = document.getElementById('loginEmail').value;
  if (!email) { showToast('⚠️ Please enter your email.'); return; }
  closeAuth();
  showToast(`✅ Welcome back! Signed in as ${email}`);
}
function handleSignUp() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  if (!name || !email) { showToast('⚠️ Please fill in all required fields.'); return; }
  closeAuth();
  showToast(`🎉 Welcome to Explore Sri Lanka, ${name}!`);
}

/* ────────────────────────────────────────
   SCROLL REVEAL
─────────────────────────────────────────*/
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ────────────────────────────────────────
   PLACES
─────────────────────────────────────────*/
function renderPlaces() {
  const grid = document.getElementById('placesGrid');
  grid.innerHTML = PLACES.map((p, i) => `
    <div class="place-card reveal" style="transition-delay:${i * 80}ms" onclick="openPlaceModal('${p.id}')">
      <div class="place-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="place-overlay">
        <div class="place-tag">${p.tag}</div>
        <div class="place-name">${p.name}</div>
        <div class="place-desc">${p.description}</div>
        <div class="place-cta">Explore ➔</div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

function openPlaceModal(id) {
  const p = PLACES.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById('placeModal');
  const body = document.getElementById('placeModalBody');
  body.innerHTML = `
    <div class="place-modal-hero">
      <img src="${p.img}" alt="${p.name}" />
    </div>
    <div class="place-modal-tag">${p.category}</div>
    <h2 class="place-modal-title">${p.name}</h2>
    <div class="place-modal-meta">
      <div class="meta-badge">📍 ${p.location}</div>
      <div class="meta-badge">🕐 ${p.duration}</div>
      <div class="meta-badge">☀️ Best: ${p.bestTime.split('.')[0]}</div>
    </div>
    <div class="place-modal-section">
      <h4>About</h4>
      <p>${p.description}</p>
    </div>
    <div class="place-modal-section">
      <h4>Historical Importance</h4>
      <p>${p.history}</p>
    </div>
    <div class="place-modal-section">
      <h4>Best Time to Visit</h4>
      <p>${p.bestTime}</p>
    </div>
    <div class="place-modal-section">
      <h4>Recommended Duration</h4>
      <p>${p.duration}</p>
    </div>
    <div class="place-modal-section">
      <h4>Photo Gallery</h4>
      <div class="place-gallery">
        ${p.gallery.map(g => `<img src="${g}" alt="Gallery" loading="lazy" />`).join('')}
      </div>
    </div>
    <div class="place-modal-section">
      <h4>Location on Map</h4>
      <div class="map-embed">
        <iframe
          src="${p.mapUrl}"
          allowfullscreen loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

document.getElementById('placeModalClose').addEventListener('click', () => {
  document.getElementById('placeModal').classList.remove('active');
  document.body.style.overflow = '';
});
document.getElementById('placeModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('placeModal')) {
    document.getElementById('placeModal').classList.remove('active');
    document.body.style.overflow = '';
  }
});

/* ────────────────────────────────────────
   GUIDES
─────────────────────────────────────────*/
function renderGuides() {
  const grid = document.getElementById('guidesGrid');
  grid.innerHTML = GUIDES.map((g, i) => `
    <div class="guide-card glass-card reveal" style="transition-delay:${i * 80}ms">
      <img class="guide-avatar" src="${g.avatar}" alt="${g.name}" loading="lazy" />
      <div class="guide-name">${g.name}</div>
      <div class="guide-specialty">${g.specialty}</div>
      <div class="guide-stars">${stars(g.rating)}</div>
      <div class="guide-rating-text">${g.rating} (${g.reviews} reviews)</div>
      <div class="guide-langs">
        ${g.languages.map(l => `<span class="lang-tag">${l}</span>`).join('')}
      </div>
      <div class="guide-price">$${g.price}<span>/day</span></div>
      <button class="guide-btn" onclick="openGuideModal(${g.id})">Contact & Book</button>
    </div>
  `).join('');
  observeReveal();
}

function openGuideModal(id) {
  const g = GUIDES.find(x => x.id === id);
  if (!g) return;
  const modal = document.getElementById('guideModal');
  const body = document.getElementById('guideModalBody');
  body.innerHTML = `
    <div class="guide-modal-header">
      <img class="guide-modal-avatar" src="${g.avatar}" alt="${g.name}" />
      <div class="guide-modal-info">
        <h2>${g.name}</h2>
        <p style="color:var(--teal);font-weight:600;margin-bottom:.3rem">${g.specialty}</p>
        <p>${g.rating} ★ · ${g.reviews} reviews · <strong style="color:var(--gold)">$${g.price}/day</strong></p>
        <div class="guide-langs" style="justify-content:flex-start;margin-top:.6rem">
          ${g.languages.map(l => `<span class="lang-tag">${l}</span>`).join('')}
        </div>
      </div>
    </div>
    <div class="place-modal-section">
      <h4>About This Guide</h4>
      <p style="color:var(--text-muted);font-size:.92rem;line-height:1.7">${g.bio}</p>
    </div>
    <div class="place-modal-section">
      <h4>Specialities</h4>
      <div class="guide-langs" style="justify-content:flex-start">
        ${g.specialities.map(s => `<span class="lang-tag" style="border-color:rgba(201,162,39,0.3);color:var(--gold)">${s}</span>`).join('')}
      </div>
    </div>
    <div class="place-modal-section">
      <h4>Send a Message</h4>
      <div class="guide-contact-form">
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="John Smith" id="msgName" />
        </div>
        <div class="form-group">
          <label>Travel Dates</label>
          <input type="text" placeholder="e.g. 15 Mar – 22 Mar 2026" id="msgDates" />
        </div>
        <div class="form-group">
          <label>Number of Travellers</label>
          <select id="msgPeople">
            <option>1 person</option>
            <option>2 people</option>
            <option>3–5 people</option>
            <option>6+ people</option>
          </select>
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea placeholder="Tell ${g.name.split(' ')[0]} about your trip plans, interests, and any special requests..."></textarea>
        </div>
        <div style="display:flex;gap:1rem;flex-wrap:wrap">
          <button class="btn-primary" onclick="sendGuideMessage('${g.name}')">📩 Send Message</button>
          <a href="https://wa.me/${g.whatsapp.replace('+','')}" target="_blank" class="btn-ghost" style="display:inline-flex;align-items:center;gap:.4rem;text-decoration:none">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function sendGuideMessage(name) {
  showToast(`✉️ Message sent to ${name}! They'll respond within 24h.`);
  closeGuideModal();
}

function closeGuideModal() {
  document.getElementById('guideModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('guideModalClose').addEventListener('click', closeGuideModal);
document.getElementById('guideModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('guideModal')) closeGuideModal();
});

/* ────────────────────────────────────────
   EVENTS
─────────────────────────────────────────*/
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  grid.innerHTML = EVENTS.map((ev, i) => `
    <div class="event-card glass-card reveal" style="transition-delay:${i * 80}ms">
      <img class="event-card-img" src="${ev.img}" alt="${ev.title}" loading="lazy" />
      <div class="event-card-body">
        <div class="event-type-badge" style="background:${ev.typeColor};color:${ev.typeTextColor};border:1px solid ${ev.typeTextColor}33">
          ${ev.type}
        </div>
        <div class="event-title">${ev.title}</div>
        <div class="event-meta">
          <div class="event-meta-item">📅 ${ev.date}</div>
          <div class="event-meta-item">📍 ${ev.location}</div>
        </div>
        <div class="event-desc">${ev.description}</div>
        <a class="event-map-btn" href="${ev.mapLink}" target="_blank">
          🗺️ View on Map
        </a>
      </div>
    </div>
  `).join('');
  observeReveal();
}

/* ────────────────────────────────────────
   SHOP
─────────────────────────────────────────*/
let currentFilter = 'all';

function renderShop(filter = 'all') {
  const grid = document.getElementById('shopGrid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card glass-card reveal" style="transition-delay:${i * 60}ms">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.isNew ? '<span class="product-badge-new">New</span>' : ''}
      </div>
      <div class="product-body">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          $${p.price}
          ${p.originalPrice ? `<span class="orig-price">$${p.originalPrice}</span>` : ''}
        </div>
        <button class="add-cart-btn" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
      </div>
    </div>
  `).join('');
  observeReveal();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderShop(currentFilter);
  });
});

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
  showToast(`✅ "${product.name}" added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
}

function updateCart() {
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
  const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  countEl.textContent = totalItems;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:2rem 0">Your cart is empty.</p>';
    totalEl.innerHTML = '';
  } else {
    itemsEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <img src="${c.img}" alt="${c.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-price">$${c.price} × ${c.qty}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${c.id})">✕</button>
      </div>
    `).join('');
    totalEl.innerHTML = `Total: <span style="float:right">$${totalPrice.toFixed(2)}</span>`;
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar.classList.toggle('open');
}

document.getElementById('cartIcon').addEventListener('click', toggleCart);

/* ────────────────────────────────────────
   AI RECOMMENDATION
─────────────────────────────────────────*/
document.querySelectorAll('.tag-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('selected');
  });
});

function generateRecommendations() {
  const selected = [...document.querySelectorAll('.tag-btn.selected')].map(b => b.dataset.interest);
  const resultEl = document.getElementById('aiResult');

  if (selected.length === 0) {
    showToast('⚠️ Please select at least one interest!');
    return;
  }

  // Show typing
  resultEl.innerHTML = `
    <div class="typing-indicator">
      <span></span><span></span><span></span>
      <span style="margin-left:.5rem;color:var(--text-muted);font-size:.85rem">AI is crafting your perfect itinerary...</span>
    </div>
  `;

  setTimeout(() => {
    let recs = [];
    selected.forEach(interest => {
      const items = AI_RECOMMENDATIONS[interest] || [];
      recs = [...recs, ...items];
    });

    // Deduplicate by name and shuffle
    const seen = new Set();
    recs = recs.filter(r => {
      if (seen.has(r.name)) return false;
      seen.add(r.name); return true;
    });
    recs = recs.sort(() => Math.random() - 0.5).slice(0, Math.min(6, recs.length));

    if (recs.length === 0) {
      resultEl.innerHTML = '<p style="color:var(--text-muted)">No recommendations found. Please try different interests.</p>';
      return;
    }

    const interestLabel = selected.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');
    resultEl.innerHTML = `
      <div style="margin-bottom:1.2rem">
        <div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--teal);margin-bottom:.4rem">
          ✨ Personalised for: ${interestLabel}
        </div>
        <p style="font-size:.88rem;color:var(--text-muted)">Here are your top Sri Lanka recommendations based on your interests:</p>
      </div>
      ${recs.map((r, i) => `
        <div class="ai-result-item" style="animation-delay:${i * 80}ms">
          <div class="ai-result-icon">${r.icon}</div>
          <div class="ai-result-info">
            <h4>${r.name}</h4>
            <p>${r.desc}</p>
          </div>
        </div>
      `).join('')}
      <button class="btn-ghost" style="margin-top:1rem;font-size:.85rem" onclick="smoothScroll('guides')">
        🧭 Find a guide for this trip →
      </button>
    `;
  }, 1800);
}

/* ────────────────────────────────────────
   INTRO CARD STAGGER REVEAL
─────────────────────────────────────────*/
function initIntroCards() {
  document.querySelectorAll('.intro-card').forEach(card => {
    card.classList.add('reveal');
    const delay = card.dataset.delay || 0;
    card.style.transitionDelay = delay + 'ms';
    revealObserver.observe(card);
  });
}

/* ────────────────────────────────────────
   INIT
─────────────────────────────────────────*/
document.addEventListener('DOMContentLoaded', () => {
  renderPlaces();
  renderGuides();
  renderEvents();
  renderShop();
  initIntroCards();
  updateCart();
  observeReveal();
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartIcon = document.getElementById('cartIcon');
  if (cartSidebar.classList.contains('open') &&
      !cartSidebar.contains(e.target) &&
      !cartIcon.contains(e.target)) {
    cartSidebar.classList.remove('open');
  }
});

// Keyboard ESC closes modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('placeModal').classList.remove('active');
    document.getElementById('guideModal').classList.remove('active');
    closeAuth();
    document.body.style.overflow = '';
  }
});
