export const STORED_STATE_NAME = "blog-site-state";
export const IS_USER_ADMIN = true;
export const TAGS_COLOR_SET = [
  "bg-pink-100 text-pink-700",
  "bg-purple-100 text-purple-700",
  "bg-emerald-100 text-emerald-700",
  "bg-yellow-100 text-yellow-700",
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
];
export const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      isFeatured: true,
      title: "The Art of Wine Tasting",
      excerpt: "Wine tasting is an art that allows you to fully appreciate the flavors, aromas, and nuances of different wines.",
      author: {
        name: "Emily Davis",
        email: "emily.davis@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=1"
      },
      date: "2023-05-21",
      content: "<p>Wine tasting is an <em>art</em> that allows you to fully appreciate the flavors, aromas, and nuances of different wines. Join us on a journey to explore the intricacies of wine tasting and learn how to identify various <strong>tasting notes</strong>.</p><p>Whether you're a novice or a seasoned wine enthusiast, this guide will provide you with valuable insights and techniques to enhance your wine tasting experience. From the color and clarity of the wine to the intensity of its aromas and the complexity of its flavors, you'll discover how to engage all your senses to fully savor every sip.</p><img src='https://source.unsplash.com/300x300/?wine' alt='Wine Tasting Image'><p>During the wine tasting process, make sure to:</p><ul><li>Observe the wine's appearance, noting its color, clarity, and viscosity.</li><li>Swirl the wine gently in your glass to release its aromas.</li><li>Take short, quick sniffs to identify different scents, such as fruits, spices, or floral notes.</li><li>Sip the wine slowly, letting it coat your palate, and pay attention to its taste and texture.</li><li>Consider the wine's finish, which is the lingering impression it leaves in your mouth.</li></ul><p>By practicing these techniques and exploring different wine varietals, you'll develop a deeper understanding and appreciation for the art of wine tasting.</p>",
      featuredImage: "https://images.unsplash.com/photo-1598694398713-84f0f0429865?fit=crop&w=800&h=600",
      tags: [
        "wine",
        "tasting",
        "flavors",
        "aromas"
      ]
    },
    {
      id: 2,
      title: "Discovering Different Wine Varieties",
      isFeatured: false,
      author: {
        name: "John Roberts",
        email: "john.roberts@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=2"
      },
      date: "2023-06-02",
      excerpt: "Embark on a journey through the world of wine as we explore different wine varieties and their unique characteristics.",
      content: "<p>Embark on a journey through the world of wine as we explore different wine varieties and their unique characteristics. From reds to whites and everything in between, there's a wine for every palate.</p><img src='https://images.unsplash.com/photo-1581106047572-b22b8d26203a?fit=crop&w=800&h=600' alt='Different Wine Varieties'><p>Each wine variety offers a distinct profile of flavors, aromas, and textures. Whether you prefer the rich and robust notes of red wines or the crisp and refreshing qualities of white wines, the world of wine is full of delightful discoveries.</p><p>Some popular wine varieties include:</p><ul><li>Merlot</li><li>Cabernet Sauvignon</li><li>Pinot Noir</li><li>Chardonnay</li><li>Sauvignon Blanc</li></ul><p>Exploring different wine varieties allows you to expand your palate and find new favorites. Don't be afraid to experiment and try wines from different regions and grape varieties.</p>",
      featuredImage: "https://images.unsplash.com/photo-1581106047572-b22b8d26203a?fit=crop&w=800&h=600",
      tags: [
        "wine",
        "varieties",
        "red wine",
        "white wine"
      ]
    },
    {
      id: 3,
      title: "The Art of Wine Pairing",
      isFeatured: false,
      author: {
        name: "Sophia Anderson",
        email: "sophia.anderson@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=3"
      },
      date: "2023-07-15",
      excerpt: "Discover the secrets of wine pairing and learn how to match wines with different foods to enhance the overall dining experience.",
      content: "<p>Discover the secrets of wine pairing and learn how to match wines with different foods to enhance the overall dining experience. From classic pairings to unique combinations, we'll guide you through the art of harmonizing flavors.</p><img src='https://images.unsplash.com/photo-1556710808-a2bc27a448f2?fit=crop&w=800&h=600' alt='Wine Pairing'><p>When it comes to wine pairing, there are a few key principles to keep in mind:</p><ol><li>Consider the intensity of flavors: Pair lighter wines with delicate dishes and robust wines with bolder flavors.</li><li>Match the acidity: Acidic wines pair well with acidic foods, while sweeter wines complement richer, savory dishes.</li><li>Balance the weight: Light-bodied wines go well with lighter dishes, while fuller-bodied wines can stand up to heartier meals.</li><li>Experiment with contrasts: Sometimes, contrasting flavors can create interesting and delightful combinations.</li></ol><p>By understanding the fundamentals of wine pairing and exploring different options, you'll be able to elevate your dining experiences and create memorable moments.</p>",
      featuredImage: "https://images.unsplash.com/photo-1556710808-a2bc27a448f2?fit=crop&w=800&h=600",
      tags: [
        "wine",
        "pairing",
        "food",
        "flavors"
      ]
    },
    {
      id: 4,
      title: "Exploring Old World Wines",
      isFeatured: false,
      author: {
        name: "Michael Thompson",
        email: "michael.thompson@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=4"
      },
      date: "2023-08-10",
      excerpt: "Take a journey back in time as we explore the charm and elegance of Old World wines.",
      content: "<p>Take a journey back in time as we explore the charm and elegance of Old World wines. Old World refers to wine-producing regions with long-established traditions, such as Europe.</p><img src='https://images.unsplash.com/photo-1542043313868-3d0814070286?fit=crop&w=800&h=600' alt='Old World Wines'><p>Old World wines often exhibit characteristics that reflect their terroir, traditional winemaking techniques, and grape varieties indigenous to the region. From the earthy, complex flavors of French Bordeaux to the crisp and minerally Italian Chianti, each Old World wine tells a story.</p><p>Exploring Old World wines allows you to appreciate the history, culture, and craftsmanship behind each bottle. It's a delightful journey for wine enthusiasts and history buffs alike.</p>",
      featuredImage: "https://images.unsplash.com/photo-1558346489-19413928158b?fit=crop&w=800&h=600",
      tags: [
        "wine",
        "Old World",
        "Europe",
        "traditions"
      ]
    },
    {
      id: 5,
      title: "The Rise of Natural Wines",
      isFeatured: false,
      author: {
        name: "Olivia Baker",
        email: "olivia.baker@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=5"
      },
      date: "2023-09-05",
      excerpt: "Discover the fascinating world of natural wines and their unique winemaking philosophy.",
      content: "<p>Discover the fascinating world of natural wines and their unique winemaking philosophy. Natural wines are produced using minimal intervention, allowing the grapes to express themselves without additives or excessive technological manipulation.</p><img src='https://images.unsplash.com/photo-1562838507-c7534574478e?fit=crop&w=800&h=600' alt='Natural Wines'><p>The rise of natural wines reflects a growing interest in organic and sustainable practices in winemaking. These wines often exhibit vibrant flavors, distinct characteristics, and a connection to the land where they're grown.</p><p>Exploring natural wines is an opportunity to support environmentally conscious winemakers and experience wines that showcase the pure essence of the grape and the terroir in which it's cultivated.</p>",
      featuredImage: "https://images.unsplash.com/photo-1598306442837-613a3def54ff?fit=crop&w=800&h=600",
      tags: [
        "wine",
        "natural",
        "organic",
        "sustainability"
      ]
    },
    {
      id: 6,
      title: "The Art of Wine Collecting",
      isFeatured: false,
      author: {
        name: "David Johnson",
        email: "david.johnson@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=6"
      },
      date: "2023-10-20",
      excerpt: "Unlock the secrets of wine collecting and learn how to curate your own impressive wine cellar.",
      content: "<p>Unlock the secrets of wine collecting and learn how to curate your own impressive wine cellar. Wine collecting is a passion pursued by enthusiasts who appreciate the art of aging and the pleasure of savoring fine wines over time.</p><img src='https://images.unsplash.com/photo-1581106052603-921a57bfd4a5?fit=crop&w=800&h=600' alt='Wine Collecting'><p>Building a wine collection involves careful selection, proper storage, and a keen understanding of a wine's aging potential. From investing in age-worthy vintages to organizing your cellar and mastering the art of wine preservation, there's much to explore.</p><p>By delving into the world of wine collecting, you can create a personal collection that showcases your tastes, preferences, and the joy of discovering exceptional wines.</p>",
      featuredImage: "https://images.unsplash.com/photo-1594986138018-cb0b6c2609d2?fit=crop&w=800&h=600",
      tags: [
        "wine",
        "collecting",
        "cellar",
        "aging"
      ]
    },
    {
      id: 7,
      title: "The Art of Food Pairing",
      isFeatured: true,
      author: {
        name: "Sophia Evans",
        email: "sophia.evans@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=7"
      },
      date: "2023-11-15",
      excerpt: "Unleash your culinary creativity with the art of food and wine pairing.",
      content: "<p>Unleash your culinary creativity with the art of food and wine pairing. The right combination of food and wine can elevate your dining experience and create harmonious flavor profiles.</p><img src='https://images.unsplash.com/photo-1528137871618-6b1c0fb1c8f8?fit=crop&w=800&h=600' alt='Food Pairing'><p>Understanding the fundamental principles of food and wine pairing, such as matching intensity, balancing flavors, and considering regional pairings, allows you to create delightful combinations that complement and enhance each other.</p><p>Whether you're hosting a dinner party or simply enjoying a cozy meal at home, mastering the art of food pairing opens up a world of culinary possibilities.</p>",
      featuredImage: "https://images.unsplash.com/photo-1626881124332-b071464b4f5d?fit=crop&w=800&h=600",
      tags: [
        "food",
        "wine",
        "pairing",
        "flavors"
      ]
    },
    {
      id: 8,
      title: "Exploring New World Wines",
      isFeatured: false,
      author: {
        name: "Matthew Anderson",
        email: "matthew.anderson@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=8"
      },
      date: "2023-12-02",
      excerpt: "Embark on a tasting journey and discover the diverse flavors of New World wines.",
      content: "<p>Embark on a tasting journey and discover the diverse flavors of New World wines. Unlike Old World wines, New World wines come from regions with a more recent history of winemaking, such as North America, South America, Australia, and New Zealand.</p><img src='https://images.unsplash.com/photo-1526256262350-dac6e0c8f02b?fit=crop&w=800&h=600' alt='New World Wines'><p>New World wines are known for their fruit-forward profiles, bold expressions, and innovative winemaking techniques. From the rich and robust Californian Cabernet Sauvignon to the vibrant and aromatic New Zealand Sauvignon Blanc, there's a world of flavors to explore.</p><p>Exploring New World wines allows you to experience the dynamic and ever-evolving nature of the wine industry, as winemakers push boundaries and experiment with different grape varietals and styles.</p>",
      featuredImage: "https://images.unsplash.com/photo-1598112972608-341f65a9063c?fit=crop&w=800&h=600",
      tags: [
        "wine",
        "New World",
        "tasting",
        "flavors"
      ]
    },
    {
      id: 9,
      title: "The Magic of Champagne",
      isFeatured: false,
      author: {
        name: "Isabella Martinez",
        email: "isabella.martinez@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=9"
      },
      date: "2024-01-10",
      excerpt: "Delve into the enchanting world of Champagne and discover its rich history and allure.",
      content: "<p>Delve into the enchanting world of Champagne and discover its rich history and allure. Champagne is a sparkling wine produced exclusively in the Champagne region of France, renowned for its elegance, effervescence, and celebration.</p><img src='https://images.unsplash.com/photo-1561530325-9731f8a0c306?fit=crop&w=800&h=600' alt='Champagne'><p>From the prestigious houses to the small grower-producers, Champagne offers a wide range of styles, from the crisp and citrusy Non-Vintage Brut to the complex and toasty Vintage Prestige Cuvées.</p><p>Learn about the traditional Champagne production process, the art of disgorgement, and the perfect occasions to enjoy a glass of Champagne as you immerse yourself in the magic of this iconic sparkling wine.</p>",
      featuredImage: "https://images.unsplash.com/photo-1566995541428-f2246c17cda1?fit=crop&w=800&h=600",
      tags: [
        "Champagne",
        "sparkling",
        "France",
        "celebration"
      ]
    },
    {
      id: 10,
      title: "The Allure of Italian Wines",
      isFeatured: false,
      author: {
        name: "Giovanni Russo",
        email: "giovanni.russo@example.com",
        thumbnail: "https://i.pravatar.cc/300?img=10"
      },
      date: "2024-02-22",
      excerpt: "Journey through the vineyards of Italy and discover the captivating world of Italian wines.",
      content: "<p>Journey through the vineyards of Italy and discover the captivating world of Italian wines. Italy is a wine lover's paradise, offering a remarkable diversity of grape varietals, terroirs, and winemaking traditions.</p><img src='https://images.unsplash.com/photo-1515443225809-93884d5e07f7?fit=crop&w=800&h=600' alt='Italian Wines'><p>From the iconic Tuscan Sangiovese to the elegant Piedmontese Nebbiolo, Italian wines captivate with their regional expressions, food-friendly profiles, and long-standing heritage.</p><p>Explore the different wine regions of Italy, learn about indigenous grape varieties, and savor the enchanting flavors that have made Italian wines beloved around the world.</p>",
      featuredImage: "https://images.unsplash.com/photo-1620551172652-3cb211f80dc3?fit=crop&w=800&h=600",
      tags: [
        "Italian",
        "vineyards",
        "diversity",
        "flavors"
      ]
    }
  ]
};
export const DEFAULT_POST_OBJECT = {
  title: "",
  author: {
    name: "",
    email: "",
    thumbnail: ""
  },
  date: (new Date()).toISOString().split('T')[0],
  content: "",
  featuredImage: "https://images.unsplash.com/photo-1598694398713-84f0f0429865?fit=crop&w=800&h=600",
  tags: []
};