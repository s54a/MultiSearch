const platforms = {
  col1: {
    Programming: [
      {
        name: "GeekForGeeks",
        url: "https://www.geeksforgeeks.org",
      },
      {
        name: "W3Schools",
        url: "https://www.w3schools.com",
      },
      {
        name: "MDN Docs",
        url: "https://developer.mozilla.org/en-US/search?q=",
      },
      {
        name: "DevDocs",
        url: "https://devdocs.io",
      },
      {
        name: "CSS Tricks",
        url: "https://css-tricks.com/?s=",
      },
      {
        name: "Codepen",
        url: "https://codepen.io/your-work?search_term=",
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
        url: "https://stackexchange.com/search?q=",
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
        url: "https://dev.to/",
      },
    ],

    Finance: [
      {
        name: "Google Finance",
        url: "https://www.google.com/finance",
      },
      {
        name: "Investopedia",
        url: "https://www.investopedia.com/search?q=",
      },
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/",
      },
      {
        name: "Moneycontrol",
        url: "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?search_data=&cid=&mbsearch_str=&topsearch_type=1&search_str=",
      },
      {
        name: "TickerTape",
        url: "https://www.tickertape.in/?q=",
      },
      {
        name: "TradingView",
        url: "https://www.tradingview.com/search/",
      },
    ],

    Notes: [
      {
        name: "Notion",
        url: "https://www.notion.so",
      },
      {
        name: "Evernote",
        url: "https://www.evernote.com/client/web?login=true#?n=f20a4cce-0ede-d5dc-61f3-a49593ad1c0f&query=view%3ASE%1E",
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
        name: "Apple Notes",
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
        url: "https://medium.com/search?q=",
      },

      {
        name: "The Wire",
        url: "https://thewire.in/",
      },
      {
        name: "The Quint",
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
        name: "Indian Express",
        url: "https://indianexpress.com/",
      },
      {
        name: "Firstpost",
        url: "https://www.firstpost.com/",
      },
      {
        name: "Republic World",
        url: "https://www.republicworld.com/",
      },
      {
        name: "Times Now",
        url: "https://www.timesnownews.com/",
      },
      {
        name: "Zee News",
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
        name: "BBC News",
        url: "https://www.bbc.com/news",
      },
      {
        name: "Reuters",
        url: "https://www.reuters.com/",
      },
      {
        name: "Fox News",
        url: "https://www.foxnews.com/",
      },
      {
        name: "WallStreetJournal",
        url: "https://www.wsj.com/",
      },
      {
        name: "The Hindu",
        url: "https://www.thehindu.com/",
      },
    ],

    Podcasts: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/search/",
      },
      {
        name: "GooglePodcasts",
        url: "https://podcasts.google.com/search/",
      },
      {
        name: "Apple Podcasts",
        url: "https://podcasts.apple.com/us/search?term=",
      },
      {
        name: "iHeartRadio",
        url: "https://www.iheart.com/",
      },
    ],

    Miscellaneous: [
      {
        name: "PDF Drive",
        url: "https://www.pdfdrive.com/search?q=",
      },
      {
        name: "Z-library",
        url: "https://1lib.in/s/",
      },
      {
        name: "Archive.org",
        url: "https://archive.org/search.php?query=",
      },
    ],

    "Social Media": [
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/search?q=",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/search/results/all/?keywords=",
      },
      {
        name: "Discord",
        url: "https://www.discord.com/channels/@me",
      },
      {
        name: "Twitch",
        url: "https://www.twitch.tv/search?term=",
      },
      {
        name: "Telegram",
        url: "https://web.telegram.org/z/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/search/top/?q=",
      },
      {
        name: "Tumblr",
        url: "https://www.tumblr.com/search/",
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
        url: "https://vimeo.com/search?q=",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/search?q=",
      },
      {
        name: "Snapchat",
        url: "https://www.snapchat.com/add/",
      },
      {
        name: "Pinterest",
        url: "https://in.pinterest.com/search/pins/?q=",
      },
      {
        name: "IMDb",
        url: "https://www.imdb.com/find?q=",
      },
      {
        name: "GoodReads",
        url: "https://www.goodreads.com/search?q=",
      },
    ],
  },
  col2: [
    {
      name: "Google",
      url: "https://www.google.com/search?q=",
    },
    {
      name: "DuckDuckGo",
      url: "https://duckduckgo.com/?q=",
    },
    {
      name: "Bing",
      url: "https://www.bing.com/search?q=",
    },
    {
      name: "Startpage",
      url: "https://startpage.com/do/search?q=",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/results?search_query=",
    },
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/u/0/#search/",
    },
    {
      name: "Google Maps",
      url: "https://www.google.com/maps/search/",
    },
    {
      name: "Drive",
      url: "https://drive.google.com/drive/search?q=",
    },
    {
      name: "Wikipedia",
      url: "https://en.wikipedia.org/w/index.php?search=",
    },
    {
      name: "Pirate Bay",
      url: "https://thepiratebay.party/s/?q=",
    },
    {
      name: "Accuweather",
      url: "https://www.accuweather.com/en/search-locations?query=",
    },
    {
      name: "WolframAlpha",
      url: "https://www.wolframalpha.com/input/?i=",
    },
    {
      name: "Hacker News",
      url: "https://hn.algolia.com/?q=some",
    },
    {
      name: "Github",
      url: "https://github.com/search?q=",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/search?q=",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/problemset/all/?search=",
    },
    {
      name: "Quora",
      url: "https://www.quora.com/search?q=",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/search/?q=",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/search?q=",
    },
  ],

  col3: {
    Shopping: [
      {
        name: "Amazon",
        url: "http://www.amazon.in/s?k=",
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com/search?q=",
      },
      {
        name: "AliExpress",
        url: "https://www.aliexpress.com/wholesale?SearchText=",
      },
      {
        name: "Myntra",
        url: "https://www.myntra.com",
      },
      {
        name: "eBay",
        url: "https://www.ebay.com",
      },
      {
        name: "Walmart",
        url: "https://www.walmart.com",
      },
      {
        name: "Target",
        url: "https://www.target.com",
      },
      {
        name: "Ajio",
        url: "https://www.ajio.com",
      },
      {
        name: "Nykaa",
        url: "https://www.nykaa.com",
      },
      {
        name: "BigBasket",
        url: "https://www.bigbasket.com",
      },
      {
        name: "Grofers",
        url: "https://grofers.com",
      },
    ],

    Design: [
      {
        name: "Canva",
        url: "https://www.canva.com",
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/search/",
      },
      {
        name: "Behance",
        url: "https://www.behance.net/",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
      },
      {
        name: "Sketch",
        url: "https://www.sketch.com/",
      },
      {
        name: "InVision",
        url: "https://www.invisionapp.com/",
      },
      {
        name: "Adobe Color",
        url: "https://color.adobe.com/",
      },
      {
        name: "Unsplash",
        url: "https://unsplash.com/",
      },
      {
        name: "Freepik",
        url: "https://www.freepik.com/",
      },
    ],

    "Search Engines": [
      {
        name: "Qwant",
        url: "https://www.qwant.com/?l=en&q=",
      },
      {
        name: "Yandex",
        url: "https://yandex.com/search/?text=",
      },
      {
        name: "Brave Search",
        url: "https://search.brave.com/search?q=",
      },
      {
        name: "Ecosia",
        url: "https://www.ecosia.org/search?method=index&q=",
      },
      {
        name: "Yahoo",
        url: "https://in.search.yahoo.com/search?p=",
      },
    ],

    "Video Streaming": [
      {
        name: "YouTube",
        url: "https://www.youtube.com/results?search_query=",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com/search?q=",
      },
      {
        name: "Amazon Prime",
        url: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=",
      },
      {
        name: "Disney+Hotstar",
        url: "https://www.hotstar.com/in/search?q=",
      },
      {
        name: "ZEE5",
        url: "https://www.zee5.com/movies?query=",
      },
      {
        name: "SonyLIV",
        url: "https://www.sonyliv.com/search?query=",
      },
      {
        name: "Voot",
        url: "https://www.voot.com/search?q=",
      },
      {
        name: "MX Player",
        url: "https://www.mxplayer.in/search/all?query=",
      },
      {
        name: "JioCinema",
        url: "https://www.jiocinema.com/search?q=",
      },
      {
        name: "Disney+",
        url: "https://www.disneyplus.com/search?q=",
      },
      {
        name: "Hulu",
        url: "https://www.hulu.com/search?q=",
      },
      {
        name: "HBO Max",
        url: "https://www.hbomax.com/search?q=",
      },
      {
        name: "Apple TV+",
        url: "https://tv.apple.com/search?q=",
      },
    ],

    "Education & Learning": [
      {
        name: "MITOpenCourseWare",
        url: "https://ocw.mit.edu/index.htm",
      },
      {
        name: "KhanAcademy",
        url: "https://www.khanacademy.org/search?page_search_query=",
      },
      {
        name: "Coursera",
        url: "https://www.coursera.org/search?query=",
      },
      {
        name: "Udemy",
        url: "https://www.udemy.com/courses/search/?q=",
      },
      {
        name: "Duolingo",
        url: "https://www.duolingo.com",
      },
      {
        name: "Edx",
        url: "https://www.edx.org/",
      },
      {
        name: "LinkedInLearning",
        url: "https://www.linkedin.com/learning/",
      },
      {
        name: "Udacity",
        url: "https://www.udacity.com/",
      },
      {
        name: "Codecademy",
        url: "https://www.codecademy.com/",
      },
    ],

    "Productivity Tools": [
      {
        name: "Microsoft ToDo",
        url: "https://to-do.microsoft.com/tasks/",
      },
      {
        name: "Trello",
        url: "https://trello.com/search?q=",
      },
      {
        name: "Asana",
        url: "https://app.asana.com/0/search/",
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
        url: "https://www.myfitnesspal.com/",
      },
      {
        name: "Healthline",
        url: "https://www.healthline.com/search?q=",
      },
      {
        name: "WebMD",
        url: "https://www.webmd.com/search/search_results/default.aspx?query=",
      },
      {
        name: "Strava",
        url: "https://www.strava.com/",
      },
      {
        name: "Yoga Journal",
        url: "https://www.yogajournal.com/",
      },
      {
        name: "Mayo Clinic",
        url: "https://www.mayoclinic.org/",
      },
      {
        name: "Verywell Health",
        url: "https://www.verywellhealth.com/",
      },
      {
        name: "Livestrong",
        url: "https://www.livestrong.com/",
      },
    ],

    "Travel & Accommodation": [
      {
        name: "Booking.com",
        url: "https://www.booking.com/search.html?aid=1833036&sb=1&src=search&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Faid%3D1833036%3Blabel%3Dnew_hotel%3Bsid%3Db6b7ae441a77b618b4c068f6b5b799c4%3Bsb_price_type%3Dtotal%26%3B&ss=",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com/s/",
      },
      {
        name: "TripAdvisor",
        url: "https://www.tripadvisor.com/Search?q=",
      },
      {
        name: "Expedia",
        url: "https://www.expedia.com/",
      },
      {
        name: "Hotels.com",
        url: "https://www.hotels.com/",
      },
      {
        name: "Agoda",
        url: "https://www.agoda.com/",
      },
      {
        name: "Kayak",
        url: "https://www.kayak.com/",
      },
      {
        name: "Trivago",
        url: "https://www.trivago.com/",
      },
      {
        name: "Hostelworld",
        url: "https://www.hostelworld.com/",
      },
    ],

    "Music & Audio Streaming": [
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/search/",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/search?q=",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/search",
      },
      {
        name: "Amazon Music",
        url: "https://music.amazon.com/",
      },
      {
        name: "Tidal",
        url: "https://listen.tidal.com/",
      },
      {
        name: "Deezer",
        url: "https://www.deezer.com/",
      },
    ],
  },
};

export default platforms;
