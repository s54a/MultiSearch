const query = document.querySelector(".search"); 
function yt(){
  if(query.value == ""){
    window.open("youtube.com/");
  }
  else{
    window.open("youtube.com/results?search_query="+query.value);
  }
};
function moneycontrol(){
    if( query.value == ""){
      window.open("moneycontrol.com");
    }
    else{
      window.open("moneycontrol.com/stocks/cptmarket/compsearchnew.php?search_data=&cid=&mbsearch_str=&topsearch_type=1&search_str="+query.value);
    }
  };
  function accuweather(){
    if(query.value == ""){
      window.open("accuweather.com");
    }
    else{
      window.open("accuweather.com/en/search-locations?query="+query.value);
    }
  };
  function gmail(){
    if(query.value == ""){
      window.open("gmail.com/");
    }
    else{
      window.open("mail.google.com/mail/u/0/#search/"+query.value);
    }
  };
  function gmaps(){
    if(query.value == ""){
      window.open("google.com/maps");
    }
    else{
      window.open("google.com/maps/search/"+query.value);
    }
  };
  function drive(){
    if(query.value == ""){
      window.open("drive.google.com/drive/");
    }
    else{
      window.open("drive.google.com/drive/search?q="+query.value);
    }
  };
  function wiki(){
    if(query.value == ""){
      window.open("wikipedia.com/");
    }
    else{
      window.open("en.wikipedia.org/w/index.php?search="+ query.value +"&title=Special%3ASearch&go=Go&ns0=1");
    }
  };
  function bing(){
    if(query.value == ""){
      window.open("bing.com/");
    }
    else{
      window.open("bing.com/search?q="+query.value);
    }
  };
  
  function duckduckgo(){
    if(query.value == ""){
      window.open("duckduckgo.com/");
    }
    else{
      window.open("duckduckgo.com/?q="+query.value+"&t=ha&va=j&ia=web");
    }
  };  
  function ecosia(){
    if(query.value == ""){
      window.open("ecosia.com");
    }
    else{
      window.open("ecosia.org/search?method=index&q="+query.value);
    }
  };  
  function startpage(){
    if(query.value == ""){
      window.open("startpage.com/");
    }
    else{
      window.open("startpage.com/do/search?q="+query.value+"&segment=startpage.brave");
    }
  };  
  function yandex(){
    if(query.value == ""){
      window.open("yandex.com/");
    }
    else{
      window.open("yandex.com/search/?text="+query.value);
    }
  };  
  function qwant(){
    if(query.value == ""){
      window.open("qwant.com/");
    }
    else{
      window.open("qwant.com/?l=en&q="+query.value+"&t=web");
    }
  };  
  function stackoverflow(){
    if(query.value == ""){
      window.open("stackoverflow.com/");
    }
    else{
      window.open("stackoverflow.com/search?q="+query.value);
    }
  };  
  function piratebay(){
    if(query.value == ""){
      window.open("thepiratebay.party/");
    }
    else{
      window.open("thepiratebay.party/s/?q="+query.value+"&page=0&orderby=99");
    }
  }; 
  function devto(){
    if(query.value == ""){
      window.open("dev.to/");
    }
    else{
      window.open("dev.to/search?q="+query.value);
    }
  };  
  function github(){
    if(query.value == ""){
      window.open("github.com/");
    }
    else{
      window.open("github.com/search?q="+query.value);
    }
  };  
  function flipkart(){
    if(query.value == ""){
      window.open("flipkart.com/");
    }
    else{
      window.open("flipkart.com/search?q="+query.value);
    }
  };  
  function amazon(){
    if(query.value == ""){
      window.open("amazon.in/");
    }
    else{
      window.open("http://www.amazon.in//s?k="+query.value);
    }
  };  
  function csstricks(){
    if(query.value == ""){
      window.open("css-tricks.com/");
    }
    else{
      window.open("css-tricks.com/?s="+ query.value);
    }
  };  
  function medium(){
    if(query.value == ""){
      window.open("medium.com/");
    }
    else{
      window.open("medium.com/search?q="+query.value);
    }
  }; 
  function pdfdrive(){
    if(query.value == ""){
      window.open("pdfdrive.com/");
    }
    else{
      window.open("pdfdrive.com/search?q="+query.value);
    }
  };
  function zlibrary(){
    if(query.value == ""){
      window.open("z-lib.org/");
    }
    else{
      window.open("1lib.in/s/"+query.value+"?");
    }
  };
  function instagram(){
    if(query.value == ""){
      window.open("instagram.com/");
    }
    else{
      window.open("instagram.com/"+query.value);
    }
  };
  function twitter(){
    if(query.value == ""){
      window.open("twitter.com/");
    }
    else{
      window.open("twitter.com/search?q="+query.value+"&src=typed_query");
    }
  };
  function linkedin(){
    if(query.value == ""){
      window.open("linkedin.com/");
    }
    else{
      window.open("linkedin.com/search/results/all/?keywords="+query.value);
    }
  };
  function quora(){
    if(query.value == ""){
      window.open("quora.com/");
    }
    else{
      window.open("quora.com/search?q="+query.value);
    }
  };
  function reddit(){      
    if(query.value == ""){
      window.open("reddit.com/");
    }
    else{
      window.open("reddit.com/search/?q="+query.value);
    }
  };
  function twitch(){
    if(query.value == ""){
      window.open("twitch.com/");
    }
    else{
      window.open("twitch.tv/search?term="+query.value);
    }
  };
  function pinterest(){
    if(query.value == ""){
      window.open("pinterest.com/");
    }
    else{
      window.open("in.pinterest.com/search/pins/?q="+query.value);
    }
  };
  function vimeo(){
    if(query.value == ""){
      window.open("vimeo.com/");
    }
    else{
      window.open("vimeo.com/search?q="+query.value);
    }
  };
  function tumblr(){
    if(query.value == ""){
      window.open("tumblr.com/");
    }
    else{
      window.open("tumblr.com/search/"+query.value);
    }
  };
  function vk(){
    if(query.value == ""){
      window.open("vk.com/");
    }
    else{
      window.open("vk.com/search?c%5Bq%5D="+query.value);
    }
  };
  function tiktok(){
    if(query.value == ""){
      window.open("tiktok.com/");
    }
    else{
      window.open("tiktok.com/search?q="+query.value);
    }
  };
  function spotify(){
    if(query.value == ""){
      window.open("open.spotify.com");
    }
    else{
      window.open("open.spotify.com/search/"+query.value);
    }
  };
  function pocket(){
    if(query.value == ""){
      window.open("getpocket.com/");
    }
    else{
      window.open("getpocket.com/my-list/search?query="+query.value);
    }
  };
  function gpodcasts(){
    if(query.value == ""){
      window.open("podcasts.google.com/");
    }
    else{
      window.open("podcasts.google.com/search/"+query.value);
    }
  };
  function feedly(){
    if(query.value == ""){
      window.open("feedly.com/");
    }
    else{
      window.open("feedly.com/i/discover/sources/search/feed/"+query.value);
    }
  };
  function leetcode(){
    if(query.value == ""){
      window.open("leetcode.com/");
    }
    else{
      window.open("leetcode.com/problemset/all/?search="+query.value);
    }
  };
  function MDN(){
    if(query.value == ""){
      window.open("developer.mozilla.org.com/");
    }
    else{
      window.open("developer.mozilla.org/en-US/search?q="+query.value);
    }
  };
  function codepen(){
    if(query.value == ""){
      window.open("codepen.io/");
    }
    else{
      window.open("codepen.io/your-work?search_term="+query.value);
    }
  };
  function tickertape(){
    if(query.value == ""){
      window.open("tickertape.in/");
    }
    else{
      window.open("tickertape.in/?q="+query.value);
    }
  };
  function yfinance(){
    if(query.value == ""){
      window.open("finance.yahoo.com/");
    }
    else{
      window.open("finance.yahoo.com/quote/"+query.value+"?p");
    }
  };
  function evernote(){
    if(query.value == ""){
      window.open("evernote.com/client/web?login=true#?hm=true&");
    }
    else{
      window.open("evernote.com/client/web?login=true#?n=f20a4cce-0ede-d5dc-61f3-a49593ad1c0f&query=view%3ASE%1E"+query.value);
    }
  };
  function facebook(){
    if(query.value == ""){
      window.open("facebook.com/");
    }
    else{
      window.open("facebook.com/search/top/?q="+query.value);
    }
  };
  function myntra(){
    if(query.value == ""){
      window.open("myntra.com/");
    }
    else{
      window.open("myntra.com/"+query.value);
    }
  };
  function drubbble(){
    if(query.value == ""){
      window.open("dribbble.com/");
    }
    else{
      window.open("dribbble.com/search/"+query.value);
    }
  };