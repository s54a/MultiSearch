const platforms = {
  col1: {
    Programming: [
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
        url: "https://www.devdocs.io",
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
        url: "https://www.jsfiddle.net",
      },
      {
        name: "Netlify",
        url: "https://www.netlify.com",
      },
      {
        name: "Vercel",
        url: "https://vercel.com",
      },
    ],
    Finance: [
      {
        name: "Google Finance",
        url: "https://www.google.com/finance",
      },
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/",
      },
      {
        name: "TickerTape",
        url: "https://www.tickertape.in/?q=",
      },
      {
        name: "Moneycontrol",
        url: "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?search_data=&cid=&mbsearch_str=&topsearch_type=1&search_str=",
      },
    ],
    "Notes & Organizers": [
      {
        name: "Notion",
        url: "https://www.notion.so",
      },
      {
        name: "EverNote",
        url: "https://www.evernote.com/client/web?login=true#?n=f20a4cce-0ede-d5dc-61f3-a49593ad1c0f&query=view%3ASE%1E",
      },
    ],
    "News & Articles": [
      {
        name: "Medium",
        url: "https://medium.com/search?q=",
      },
      {
        name: "BBC News",
        url: "https://www.bbc.com/news/search?q=",
      },
      {
        name: "NY Times",
        url: "https://www.nytimes.com/search?query=",
      },
      {
        name: "CNN",
        url: "https://www.cnn.com/search?q=",
      },
    ],
    Podcasts: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/search/",
      },
      {
        name: "Google Podcasts",
        url: "https://podcasts.google.com/search/",
      },
      {
        name: "Pocket",
        url: "https://getpocket.com/my-list/search?query=",
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
        name: "Quora",
        url: "https://www.quora.com/search?q=",
      },
      {
        name: "Reddit",
        url: "https://www.reddit.com/search/?q=",
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
        name: "Pinterest",
        url: "https://in.pinterest.com/search/pins/?q=",
      },
      {
        name: "Telegram",
        url: "https://www.web.telegram.org/z/",
      },
      {
        name: "Whatsapp",
        url: "https://www.web.whatsapp.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/search/top/?q=",
      },
      {
        name: "Vimeo",
        url: "https://vimeo.com/search?q=",
      },
      {
        name: "Tumblr",
        url: "https://www.tumblr.com/search/",
      },
      {
        name: "VK",
        url: "https://vk.com/search?c%5Bq%5D=",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/search?q=",
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
      name: "Yahoo",
      url: "https://in.search.yahoo.com/search?p=",
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
      title: "Google Maps",
    },
    // {
    //   name: "G Img Search",
    //   url: "https://www.google.com/imghp?",
    // },
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
  ],
  col3: {
    Shopping: [
      {
        name: "Amazon",
        url: "http://www.amazon.in//s?k=",
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com/search?q=",
      },
      {
        name: "Myntra",
        url: "https://www.myntra.com/",
      },
      {
        name: "Ebay",
        url: "",
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
        name: "Ecosia",
        url: "https://www.ecosia.org/search?method=index&q=",
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
    ],
    "Education & Learning": [
      {
        name: "Khan Academy",
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
        name: "Edx",
        url: "https://www.edx.org/",
      },
    ],
    "Productivity Tools": [
      {
        name: "Google Drive",
        url: "https://drive.google.com/drive/search?q=",
      },
      {
        name: "Trello",
        url: "https://trello.com/search?q=",
      },
      {
        name: "Evernote",
        url: "https://www.evernote.com/client/web?login=true#?n=f20a4cce-0ede-d5dc-61f3-a49593ad1c0f&query=view%3ASE%1E",
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
    ],
    "Music & Audio Streaming": [
      {
        name: "Spotify",
        url: "https://open.spotify.com/search/",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/search?q=",
      },
      {
        name: "Pandora",
        url: "https://www.pandora.com/search/",
      },
    ],
  },
};

export default platforms;
