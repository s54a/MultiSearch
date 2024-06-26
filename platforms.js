const platforms = {
  col1: {
    Programming: [
      {
        name: "W3Schools",
        url: "https://www.w3schools.com",
      },
      {
        name: "MDN Docs",
        url: "https://developer.mozilla.org",
        queryParam: "/en-US/search?q=",
      },
      {
        name: "GeekForGeeks",
        url: "https://www.geeksforgeeks.org",
      },
      {
        name: "DevDocs",
        url: "https://devdocs.io",
      },
      {
        name: "CSS Tricks",
        url: "https://css-tricks.com",
        queryParam: "/?s=",
      },
      {
        name: "Codepen",
        url: "https://codepen.io",
        queryParam: "/your-work?search_term=",
      },
      {
        name: "JSfiddle",
        url: "https://jsfiddle.net",
      },
      {
        name: "CodeWars",
        url: "https://www.codewars.com",
      },
      {
        name: "StackExchange",
        url: "https://stackexchange.com",
        queryParam: "/search?q=",
      },
      {
        name: "Netlify",
        url: "https://www.netlify.com",
      },
      {
        name: "Vercel",
        url: "https://vercel.com",
      },
      {
        name: "FreeCodeCamp",
        url: "https://www.freecodecamp.org/learn/",
      },
      {
        name: "Dev.To",
        url: "https://dev.to",
        queryParam: "/search?utf8=%E2%9C%93&q=",
      },
    ],

    Finance: [
      {
        name: "GoogleFinance",
        url: "https://www.google.com/finance/",
      },
      {
        name: "Investopedia",
        url: "https://www.investopedia.com",
        queryParam: "/search?q=",
      },
      {
        name: "YahooFinance",
        url: "https://finance.yahoo.com",
        queryParam: "/quote/",
      },
      {
        name: "Moneycontrol",
        url: "https://www.moneycontrol.com",
        queryParam:
          "/stocks/cptmarket/compsearchnew.php?search_data=&cid=&mbsearch_str=&topsearch_type=1&search_str=",
      },
      {
        name: "TickerTape",
        url: "https://www.tickertape.in",
        queryParam: "/?q=",
      },
      {
        name: "TradingView",
        url: "https://www.tradingview.com",
        queryParam: "/chart/?symbol=",
      },
    ],

    Notes: [
      {
        name: "Notion",
        url: "https://www.notion.so",
      },
      {
        name: "Evernote",
        url: "https://www.evernote.com/client/web",
        queryParam:
          "?login=true#?n=f20a4cce-0ede-d5dc-61f3-a49593ad1c0f&query=view%3ASE%1E",
      },
      {
        name: "Google Keep",
        url: "https://keep.google.com",
      },
      {
        name: "OneNote",
        url: "https://www.onenote.com/",
      },
      {
        name: "AppleNotes",
        url: "https://www.icloud.com/notes/",
      },
      {
        name: "ZohoNotebook",
        url: "https://www.zoho.com/notebook/",
      },
      {
        name: "SimpleNote",
        url: "https://simplenote.com/",
      },
    ],

    "News & Articles": [
      {
        name: "Medium",
        url: "https://medium.com",
        queryParam: "/search?q=",
      },

      {
        name: "The Wire",
        url: "https://thewire.in/",
      },
      {
        name: "TheQuint",
        url: "https://www.thequint.com/",
      },
      {
        name: "NDTV",
        url: "https://www.ndtv.com/",
      },
      {
        name: "Times of India",
        url: "https://timesofindia.indiatimes.com/",
      },
      {
        name: "IndianExpress",
        url: "https://indianexpress.com/",
      },
      {
        name: "Firstpost",
        url: "https://www.firstpost.com/",
      },
      {
        name: "RepublicWorld",
        url: "https://www.republicworld.com/",
      },
      {
        name: "TimesNow",
        url: "https://www.timesnownews.com/",
      },
      {
        name: "ZeeNews",
        url: "https://zeenews.india.com/",
      },
      {
        name: "WION",
        url: "https://www.wionews.com/",
      },
      {
        name: "NY Times",
        url: "https://www.nytimes.com/",
      },
      {
        name: "CNN",
        url: "https://www.cnn.com/",
      },
      {
        name: "WashingtonPost",
        url: "https://www.washingtonpost.com/",
      },
      {
        name: "NPR",
        url: "https://www.npr.org/",
      },
      {
        name: "BBC",
        url: "https://www.bbc.com/news",
      },
      {
        name: "Reuters",
        url: "https://www.reuters.com/",
      },
      {
        name: "FoxNews",
        url: "https://www.foxnews.com/",
      },
      {
        name: "TheHindu",
        url: "https://www.thehindu.com/",
      },
      {
        name: "WallStreetJournal",
        url: "https://www.wsj.com/",
      },
    ],

    Podcasts: [
      {
        name: "Spotify",
        url: "https://open.spotify.com",
        queryParam: "/search/",
      },
      {
        name: "GooglePodcasts",
        url: "https://podcasts.google.com",
        queryParam: "/search/",
      },
      {
        name: "ApplePodcasts",
        url: "https://podcasts.apple.com",
        queryParam: "/us/search?term=",
      },
      {
        name: "iHeart",
        url: "https://www.iheart.com/",
      },
    ],

    Miscellaneous: [
      {
        name: "PDF Drive",
        url: "https://www.pdfdrive.com",
        queryParam: "/search?q=",
      },
      {
        name: "Z-library",
        url: "https://z-lib.io/",
      },
      {
        name: "Archive.org",
        url: "https://archive.org",
        queryParam: "/search.php?query=",
      },
    ],

    SocialMedia: [
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        queryParam: "/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        queryParam: "/search?q=",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        queryParam: "/search/results/all/?keywords=",
      },
      {
        name: "Discord",
        url: "https://www.discord.com",
        queryParam: "/channels/@me",
      },
      {
        name: "Twitch",
        url: "https://www.twitch.tv",
        queryParam: "/search?term=",
      },
      {
        name: "Telegram",
        url: "https://web.telegram.org",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com",
        queryParam: "/search/top/?q=",
      },
      {
        name: "Tumblr",
        url: "https://www.tumblr.com",
        queryParam: "/search/",
      },
      {
        name: "VK",
        url: "https://vk.com",
      },
      {
        name: "WhatsApp",
        url: "https://web.whatsapp.com",
      },
      {
        name: "Vimeo",
        url: "https://vimeo.com",
        queryParam: "/search?q=",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com",
        queryParam: "/search?q=",
      },
      {
        name: "Snapchat",
        url: "https://www.snapchat.com",
        queryParam: "/add/",
      },
      {
        name: "Pinterest",
        url: "https://in.pinterest.com",
        queryParam: "/search/pins/?q=",
      },
      {
        name: "IMDb",
        url: "https://www.imdb.com",
        queryParam: "/find?q=",
      },
      {
        name: "GoodReads",
        url: "https://www.goodreads.com",
        queryParam: "/search?q=",
      },
    ],
  },

  col2: [
    {
      name: "Google",
      url: "https://www.google.com",
      queryParam: "/search?q=",
    },
    {
      name: "DuckDuckGo",
      url: "https://duckduckgo.com",
      queryParam: "/?q=",
    },
    {
      name: "Bing",
      url: "https://www.bing.com",
      queryParam: "/search?q=",
    },
    {
      name: "Startpage",
      url: "https://www.startpage.com/",
      queryParam: "/do/search?q=",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      queryParam: "/results?search_query=",
    },
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/u/0/#search",
      queryParam: "/",
    },
    {
      name: "Google Maps",
      url: "https://www.google.com/maps/",
      queryParam: "search/",
    },
    {
      name: "Drive",
      url: "https://drive.google.com",
      queryParam: "/drive/search?q=",
    },
    {
      name: "Wikipedia",
      url: "https://en.wikipedia.org",
      queryParam: "/w/index.php?search=",
    },
    {
      name: "Pirate Bay",
      url: "https://thepiratebay.party",
      queryParam: "/s/?q=",
    },
    {
      name: "Accuweather",
      url: "https://www.accuweather.com",
      queryParam: "/en/search-locations?query=",
    },
    {
      name: "WolframAlpha",
      url: "https://www.wolframalpha.com",
      queryParam: "/input/?i=",
    },
    {
      name: "Hacker News",
      url: "https://hn.algolia.com",
      queryParam: "/?q=",
    },
    {
      name: "Github",
      url: "https://github.com",
      queryParam: "/search?q=",
    },
    {
      name: "StackOverflow",
      url: "https://stackoverflow.com",
      queryParam: "/search?q=",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      queryParam: "/problemset/all/?search=",
    },
    {
      name: "Quora",
      url: "https://www.quora.com",
      queryParam: "/search?q=",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com",
      queryParam: "/search/?q=",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      queryParam: "/search?q=",
    },
  ],

  col3: {
    Shopping: [
      {
        name: "Amazon",
        url: "http://www.amazon.in",
        queryParam: "/s?k=",
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com",
        queryParam: "/search?q=",
      },
      {
        name: "AliExpress",
        url: "https://www.aliexpress.com",
        queryParam: "/wholesale?SearchText=",
      },
      {
        name: "Myntra",
        url: "https://www.myntra.com",
        queryParam: "/fsa?rawQuery=",
      },
      {
        name: "eBay",
        url: "https://www.ebay.com",
        queryParam: "/sch/i.html?_from=R40&_nkw=",
      },
      {
        name: "Walmart",
        url: "https://www.walmart.com",
        queryParam: "/search?q=",
      },
      {
        name: "Target",
        url: "https://www.target.com",
        url: "https://www.target.com",
        queryParam: "/s?searchTerm=",
      },
      {
        name: "Ajio",
        url: "https://www.ajio.com",
        queryParam: "/search/?text=",
      },
      {
        name: "Nykaa",
        url: "https://www.nykaa.com",
        queryParam: "/search/result/?q=",
      },
      {
        name: "BigBasket",
        url: "https://www.bigbasket.com",
        queryParam: "/ps/?q=",
      },
      {
        name: "Blinkit",
        url: "https://blinkit.com",
        queryParam: "/s/?q=",
      },
    ],

    Design: [
      {
        name: "Canva",
        url: "https://www.canva.com",
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com",
        queryParam: "/search/",
      },
      {
        name: "Behance",
        url: "https://www.behance.net",
      },
      {
        name: "Figma",
        url: "https://www.figma.com",
      },
      {
        name: "Sketch",
        url: "https://www.sketch.com",
      },
      {
        name: "InVision",
        url: "https://www.invisionapp.com",
      },
      {
        name: "Adobe Color",
        url: "https://color.adobe.com",
      },
      {
        name: "Unsplash",
        url: "https://unsplash.com",
        queryParam: "/s/photos/",
      },
      {
        name: "Freepik",
        url: "https://www.freepik.com/",
      },
    ],

    "Search Engines": [
      {
        name: "Qwant",
        url: "https://www.qwant.com",
        queryParam: "/?l=en&q=",
      },
      {
        name: "Yandex",
        url: "https://yandex.com",
        queryParam: "/search/?text=",
      },
      {
        name: "Brave Search",
        url: "https://search.brave.com",
        queryParam: "/search?q=",
      },
      {
        name: "Ecosia",
        url: "https://www.ecosia.org",
        queryParam: "/search?method=index&q=",
      },
      {
        name: "Yahoo",
        url: "https://in.search.yahoo.com",
        queryParam: "/search?p=",
      },
    ],

    "Video Streaming": [
      {
        name: "YouTube",
        url: "https://www.youtube.com",
        queryParam: "/results?search_query=",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        queryParam: "/search?q=",
      },
      {
        name: "Prime",
        url: "https://www.primevideo.com",
        queryParam: "/search/ref=atv_nb_sr?phrase=",
      },
      {
        name: "Hotstar",
        url: "https://www.hotstar.com",
        queryParam: "/in/search?search_query=",
      },
      {
        name: "ZEE5",
        url: "https://www.zee5.com",
        queryParam: "/search?q=",
      },
      {
        name: "SonyLIV",
        url: "https://www.sonyliv.com",
        queryParam: "/search?query=",
      },
      {
        name: "Voot",
        url: "https://www.voot.com",
        queryParam: "/search?q=",
      },
      {
        name: "MX Player",
        url: "https://www.mxplayer.in",
        queryParam: "/?search=true&q=",
      },
      {
        name: "JioCinema",
        url: "https://www.jiocinema.com",
        queryParam: "/search?q=",
      },
      {
        name: "Disney+",
        url: "https://www.disneyplus.com",
        queryParam: "/search?q=",
      },
      {
        name: "Hulu",
        url: "https://www.hulu.com",
        queryParam: "/search?q=",
      },
      {
        name: "HBO Max",
        url: "https://www.hbomax.com",
        queryParam: "/search?q=",
      },
      {
        name: "AppleTV+",
        url: "https://tv.apple.com",
        queryParam: "/search?term=",
      },
    ],

    "Education & Learning": [
      {
        name: "MITOpenCourseWare",
        url: "https://ocw.mit.edu/index.htm",
      },
      {
        name: "Udemy",
        url: "https://www.udemy.com",
        queryParam: "/courses/search/?q=",
      },
      {
        name: "Edx",
        url: "https://www.edx.org",
      },
      {
        name: "KhanAcademy",
        url: "https://www.khanacademy.org",
        queryParam: "/search?page_search_query=",
      },
      {
        name: "Coursera",
        url: "https://www.coursera.org",
        queryParam: "/search?query=",
      },
      {
        name: "Udacity",
        url: "https://www.udacity.com",
      },
      {
        name: "LinkedInLearning",
        url: "https://www.linkedin.com/learning",
      },
      {
        name: "Duolingo",
        url: "https://www.duolingo.com",
      },
    ],

    "Productivity Tools": [
      {
        name: "MS ToDo",
        url: "https://to-do.microsoft.com/tasks",
      },
      {
        name: "Trello",
        url: "https://trello.com",
        // queryParam: "/search?q=",
      },
      {
        name: "Asana",
        url: "https://app.asana.com/0/search",
      },
      {
        name: "Todoist",
        url: "https://todoist.com/app/search",
      },
      {
        name: "Slack",
        url: "https://slack.com/search",
      },
      {
        name: "Zapier",
        url: "https://zapier.com/app/explore",
      },
    ],

    "Health & Fitness": [
      {
        name: "MyFitnessPal",
        url: "https://www.myfitnesspal.com",
      },
      {
        name: "Healthline",
        url: "https://www.healthline.com",
        queryParam: "/search?q=",
      },
      {
        name: "WebMD",
        url: "https://www.webmd.com",
        queryParam: "/search?query=",
      },
      {
        name: "Strava",
        url: "https://www.strava.com",
      },
      {
        name: "YogaJournal",
        url: "https://www.yogajournal.com",
      },
      {
        name: "MayoClinic",
        url: "https://www.mayoclinic.org",
      },
      {
        name: "VerywellHealth",
        url: "https://www.verywellhealth.com",
      },
      {
        name: "Livestrong",
        url: "https://www.livestrong.com",
      },
    ],

    "Travel & Accommodation": [
      {
        name: "Booking.com",
        url: "https://www.booking.com/search.html?aid=1833036&sb=1&src=search&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Faid%3D1833036%3Blabel%3Dnew_hotel%3Bsid%3Db6b7ae441a77b618b4c068f6b5b799c4%3Bsb_price_type%3Dtotal%26%3B&ss=",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com/s",
      },
      {
        name: "TripAdvisor",
        url: "https://www.tripadvisor.com/Search",
        queryParam: "?q=",
      },
      {
        name: "Expedia",
        url: "https://www.expedia.com",
      },
      {
        name: "Hotels.com",
        url: "https://www.hotels.com",
      },
      {
        name: "Agoda",
        url: "https://www.agoda.com",
      },
      {
        name: "Kayak",
        url: "https://www.kayak.com",
      },
      {
        name: "Trivago",
        url: "https://www.trivago.com",
      },
      {
        name: "Hostelworld",
        url: "https://www.hostelworld.com",
      },
    ],

    "Music & Audio Streaming": [
      {
        name: "YouTubeMusic",
        url: "https://music.youtube.com",
        queryParam: "/search?q=",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com",
        queryParam: "/search/",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com",
        queryParam: "/search?q=",
      },
      {
        name: "AppleMusic",
        url: "https://music.apple.com",
        queryParam: "/us/search?term=",
      },
      {
        name: "AmazonMusic",
        url: "https://music.amazon.com",
      },
      {
        name: "Tidal",
        url: "https://listen.tidal.com",
      },
      {
        name: "Deezer",
        url: "https://www.deezer.com",
      },
    ],
  },
};

export default platforms;
