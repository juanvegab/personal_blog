export const STORED_STATE_NAME = "blog-site-state";
export const IS_USER_ADMIN = true;
export const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      title: "The Art of Wine Tasting",
      author: {
        name: "Emily Davis",
        email: "emily.davis@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?portrait"
      },
      date: "2023-05-21",
      content: "<p>Wine tasting is an <em>art</em> that allows you to fully appreciate the flavors, aromas, and nuances of different wines. Join us on a journey to explore the intricacies of wine tasting and learn how to identify various <strong>tasting notes</strong>.</p>",
      featuredImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?fit=crop&w=1200&h=800",
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
      author: {
        name: "John Roberts",
        email: "john.roberts@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?man"
      },
      date: "2023-06-02",
      content: "<p>Embark on a journey through the world of wine as we explore different wine varieties and their unique characteristics. From reds to whites and everything in between, there's a wine for every palate.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?winebottle",
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
      author: {
        name: "Sophia Anderson",
        email: "sophia.anderson@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?woman"
      },
      date: "2023-07-15",
      content: "<p>Discover the secrets of wine pairing and learn how to match wines with different foods to enhance the overall dining experience. From classic pairings to unique combinations, we'll guide you through the art of harmonizing flavors.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?foodandwine",
      tags: [
        "wine",
        "pairing",
        "food",
        "flavors"
      ]
    },
    {
      id: 4,
      title: "Exploring Old World vs. New World Wines",
      author: {
        name: "Daniel Thompson",
        email: "daniel.thompson@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?man"
      },
      date: "2023-08-10",
      content: "<p>Journey through the vineyards of both the old world and the new world as we compare and contrast the distinct characteristics of wines from different regions. Uncover the traditions and innovations that shape the world of wine today.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?vineyard",
      tags: [
        "wine",
        "old world",
        "new world",
        "regions"
      ]
    },
    {
      id: 5,
      title: "The Science Behind Wine Making",
      author: {
        name: "Olivia Wilson",
        email: "olivia.wilson@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?woman"
      },
      date: "2023-09-18",
      content: "<p>Dive into the fascinating world of wine making and learn about the scientific processes involved in crafting exquisite wines. From grape cultivation to fermentation and aging, discover the secrets behind the art of winemaking.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?winery",
      tags: [
        "wine",
        "winemaking",
        "grapes",
        "fermentation"
      ]
    },
    {
      id: 6,
      title: "Wine and Health: Exploring the Benefits",
      author: {
        name: "Michael Davis",
        email: "michael.davis@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?man"
      },
      date: "2023-10-25",
      content: "<p>Delve into the relationship between wine and health as we explore the potential benefits of moderate wine consumption. From antioxidants to heart health, uncover the science behind the positive effects of wine on the human body.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?wineglass",
      tags: [
        "wine",
        "health",
        "moderate consumption",
        "antioxidants"
      ]
    },
    {
      id: 7,
      title: "Wine Regions of the World",
      author: {
        name: "Isabella Martinez",
        email: "isabella.martinez@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?woman"
      },
      date: "2023-11-30",
      content: "<p>Embark on a global wine tour as we journey through the renowned wine regions of the world. From the lush vineyards of France to the sun-kissed valleys of California, explore the terroir and diversity that shape exceptional wines.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?vineyard",
      tags: [
        "wine",
        "regions",
        "terroir",
        "vineyards"
      ]
    },
    {
      id: 8,
      title: "Wine Etiquette: Dos and Don'ts",
      author: {
        name: "William Johnson",
        email: "william.johnson@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?man"
      },
      date: "2023-12-12",
      content: "<p>Master the art of wine etiquette and enhance your wine tasting experiences. From proper glassware to serving temperatures, learn the dos and don'ts of enjoying wine and impress your guests with your knowledge.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?winebottle",
      tags: [
        "wine",
        "etiquette",
        "wine tasting",
        "serving"
      ]
    },
    {
      id: 9,
      title: "Wine and Cheese Pairing Guide",
      author: {
        name: "Sophie Anderson",
        email: "sophie.anderson@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?woman"
      },
      date: "2023-01-20",
      content: "<p>Unlock the secrets of wine and cheese pairing with our comprehensive guide. Discover the perfect combinations that elevate the flavors of both wine and cheese, and create delightful culinary experiences.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?wineandcheese",
      tags: [
        "wine",
        "cheese",
        "pairing",
        "flavors"
      ]
    },
    {
      id: 10,
      title: "The Rise of Organic and Natural Wines",
      author: {
        name: "Benjamin Wilson",
        email: "benjamin.wilson@example.com",
        thumbnail: "https://source.unsplash.com/300x300/?man"
      },
      date: "2023-02-08",
      content: "<p>Explore the growing trend of organic and natural wines as we delve into the world of sustainable and environmentally friendly winemaking practices. Learn about the principles behind these wines and their impact on both taste and the planet.</p>",
      featuredImage: "https://source.unsplash.com/800x600/?organicwine",
      tags: [
        "wine",
        "organic",
        "natural",
        "sustainable"
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
  featuredImage: "",
  tags: []
};