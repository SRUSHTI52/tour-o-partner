// import paris from '/paris.png';
// import tokyo from '/tokyo.png';
// import sydney from '/sydney.png';
// import dubai from '/dubai.png';
// import rome from '/rome.png';
// import brazil from '/brazil.png';
// import singapore from '/singapore.png';
// import ny from '/ny.png';


const placesDesc = [
  {
    image: '/paris.png',
    name: "Paris",
    heading: "Enchanting Paris",
    description: "Paris, the capital of France, is famed for its café culture, art museums including the Louvre, and landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Arc de Triomphe.",
    link: "#",
    bestTimeToVisit: "April to June and October to early November",
    importantDestinations: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Arc de Triomphe",
      "Champs-Élysées",
      "Sacré-Cœur",
      "Palace of Versailles"
    ],
    overallInfo: "Paris is known for its fashion, art, and gastronomy. It is a global center for art, fashion, gastronomy, and culture. The city is home to numerous iconic landmarks and museums, offering visitors a rich historical and cultural experience. Paris is also renowned for its romantic ambiance, beautiful architecture, and vibrant street life.",
    temperature: {
      averageHigh: "16°C (60.8°F)",
      averageLow: "7°C (44.6°F)"
    }
  },
  {
    image: '/tokyo.png',
    name: "Tokyo",
    heading: "Vibrant Tokyo",
    description: "Tokyo, Japan's bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. It's known for its vibrant food scene, shopping, and cutting-edge technology.",
    link: "#",
    bestTimeToVisit: "March to May and September to November",
    importantDestinations: [
      "Tokyo Tower",
      "Senso-ji Temple",
      "Shibuya Crossing",
      "Meiji Shrine",
      "Tokyo Disneyland",
      "Tokyo Skytree",
      "Imperial Palace"
    ],
    overallInfo: "Tokyo is famous for its skyscrapers, shopping, and vibrant pop culture. It is a mix of traditional and modern culture. Visitors can experience a unique blend of ancient temples and shrines alongside futuristic technology and bustling urban life. Tokyo's neighborhoods, such as Shibuya, Shinjuku, and Akihabara, offer diverse attractions and experiences.",
    temperature: {
      averageHigh: "18°C (64.4°F)",
      averageLow: "10°C (50°F)"
    }
  },
  {
    image: '/sydney.png',
    name: "Sydney",
    heading: "Stunning Sydney",
    description: "Sydney, the capital of New South Wales, Australia, is known for its stunning harborfront Sydney Opera House, with a distinctive sail-like design, and the Sydney Harbour Bridge.",
    link: "#",
    bestTimeToVisit: "September to November and from March to May",
    importantDestinations: [
      "Sydney Opera House",
      "Sydney Harbour Bridge",
      "Bondi Beach",
      "Taronga Zoo",
      "The Rocks",
      "Royal Botanic Garden",
      "Darling Harbour"
    ],
    overallInfo: "Sydney is known for its harbor, stunning beaches, and vibrant culture. It is a major international gateway to Australia. The city offers a mix of outdoor and cultural activities, with beautiful beaches, parks, and historic sites. Sydney's diverse neighborhoods, such as Darling Harbour and The Rocks, provide a rich tapestry of experiences for visitors.",
    temperature: {
      averageHigh: "22°C (71.6°F)",
      averageLow: "14°C (57.2°F)"
    }
  },
  {
    image: '/moscow.png',
    name: "Moscow",
    heading: "Majestic Moscow",
    description: "Moscow, the capital of Russia, is a city of great historical and cultural significance, known for its iconic Red Square and Kremlin, as well as its vibrant arts and theater scenes.",
    link: "#",
    bestTimeToVisit: "April to June and September to October",
    importantDestinations: [
      "Red Square",
      "Kremlin",
      "St. Basil's Cathedral",
      "Bolshoi Theatre",
      "Gorky Park",
      "Tretyakov Gallery",
      "Arbat Street"
    ],
    overallInfo: "Moscow is a city of contrasts, with its blend of historic architecture and modern skyscrapers. It is a cultural and political center, offering a rich array of museums, theaters, and historical landmarks. The city's diverse cultural heritage and vibrant urban life make it a fascinating destination for travelers.",
    temperature: {
      averageHigh: "10°C (50°F)",
      averageLow: "2°C (35.6°F)"
    }
  },
  {
    image: '/dubai.png',
    name: "Dubai",
    heading: "Dazzling Dubai",
    description: "Dubai, a city in the United Arab Emirates, is known for its ultramodern architecture, luxury shopping, and vibrant nightlife. The city boasts iconic landmarks like the Burj Khalifa and Palm Jumeirah.",
    link: "#",
    bestTimeToVisit: "November to March",
    importantDestinations: [
      "Burj Khalifa",
      "Dubai Mall",
      "Palm Jumeirah",
      "Burj Al Arab",
      "Dubai Marina",
      "Jumeirah Beach",
      "Dubai Creek"
    ],
    overallInfo: "Dubai is a city of superlatives, known for its towering skyscrapers, luxury resorts, and cutting-edge attractions. It offers a unique blend of traditional and modern experiences, from bustling souks to futuristic architecture. The city's dynamic and cosmopolitan atmosphere attracts millions of tourists each year.",
    temperature: {
      averageHigh: "30°C (86°F)",
      averageLow: "20°C (68°F)"
    }
  },
  {
    image: '/rome.png',
    name: "Rome",
    heading: "Historic Rome",
    description: "Rome, the capital of Italy, is a city steeped in history, known for its ancient ruins, including the Colosseum and Roman Forum, as well as its vibrant culture and cuisine.",
    link: "#",
    bestTimeToVisit: "April to June and late September to October",
    importantDestinations: [
      "Colosseum",
      "Roman Forum",
      "Vatican City",
      "Pantheon",
      "Trevi Fountain",
      "Piazza Navona",
      "Spanish Steps"
    ],
    overallInfo: "Rome is a living museum, with its ancient ruins, Renaissance art, and Baroque architecture. It offers a rich cultural experience, with world-class museums, historic sites, and a lively culinary scene. The city's timeless charm and historical significance make it a must-visit destination.",
    temperature: {
      averageHigh: "20°C (68°F)",
      averageLow: "10°C (50°F)"
    }
  },
  {
    image: '/brazil.png',
    name: "Brazil",
    heading: "Beautiful Brazil",
    description: "Brazil is known for its tropical beaches, vibrant culture, and the Amazon rainforest. It is home to the famous Carnival festival and iconic landmarks such as the Christ the Redeemer statue.",
    link: "#",
    bestTimeToVisit: "December to March",
    importantDestinations: [
      "Christ the Redeemer",
      "Amazon Rainforest",
      "Iguaçu Falls",
      "Copacabana",
      "Sugarloaf Mountain",
      "Salvador's Pelourinho",
      "Pantanal"
    ],
    overallInfo: "Brazil is the largest country in South America and the fifth largest in the world. Known for its diverse ecosystems, it boasts the Amazon Rainforest, stunning beaches, and the Pantanal wetlands. The country is famous for its vibrant culture, music, and dance, including samba and bossa nova. Brazil's cities, such as Rio de Janeiro and São Paulo, offer a mix of modernity and tradition.",
    temperature: {
      averageHigh: "30°C (86°F)",
      averageLow: "20°C (68°F)"
    }
  },
  {
    image: '/singapore.png',
    name: "Singapore",
    heading: "Spectacular Singapore",
    description: "Singapore is a global financial hub with a tropical climate and multicultural population. It's famous for its cleanliness, safety, and attractions like Marina Bay Sands and Gardens by the Bay.",
    link: "#",
    bestTimeToVisit: "February to April",
    importantDestinations: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Sentosa Island",
      "Universal Studios Singapore",
      "Merlion Park",
      "Orchard Road",
      "Chinatown"
    ],
    overallInfo: "Singapore is a sovereign city-state and island country in Southeast Asia. It is renowned for its rapid economic growth and is one of the world's major commercial hubs. The city is known for its cleanliness, efficient public transportation, and a wide range of attractions. Singapore offers a blend of modern skyscrapers and heritage sites, with diverse culinary experiences reflecting its multicultural population.",
    temperature: {
      averageHigh: "31°C (88°F)",
      averageLow: "24°C (75°F)"
    }
  },
  {
    image: '/ny.png',
    name: "New York",
    heading: "New York, The Big Apple",
    description: "New York City is known for its iconic skyline, bustling Times Square, and cultural landmarks like Broadway, Central Park, and the Statue of Liberty.",
    link: "#",
    bestTimeToVisit: "April to June and September to November",
    importantDestinations: [
      "Times Square",
      "Central Park",
      "Statue of Liberty",
      "Broadway",
      "Empire State Building",
      "Brooklyn Bridge",
      "Metropolitan Museum of Art"
    ],
    overallInfo: "New York City, often simply called New York, is the most populous city in the United States. It is known as a global hub for culture, finance, media, and entertainment. The city offers diverse neighborhoods, world-class museums, and endless dining options. NYC is a melting pot of cultures and a center for arts, fashion, and theater, making it a top destination for travelers worldwide.",
    temperature: {
      averageHigh: "18°C (64°F)",
      averageLow: "10°C (50°F)"
    }
  }
];

export default placesDesc;
