const query = document.querySelector(".search"); 
function yt(){
  if(query.value == ""){
    window.open("https://www.youtube.com/");
  }
  else{
    window.open("https://www.youtube.com/results?search_query="+query.value);
  }
};
function moneycontrol(){
    if( query.value == ""){
      window.open("https://www.moneycontrol.com");
    }
    else{
      window.open("https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?search_data=&cid=&mbsearch_str=&topsearch_type=1&search_str="+query.value);
    }
  };
  function accuweather(){
    if(query.value == ""){
      window.open("https://www.accuweather.com");
    }
    else{
      window.open("https://www.accuweather.com/en/search-locations?query="+query.value ,"target" );
    }
  };
  function gmail(){
    if(query.value == ""){
      window.open("https://www.gmail.com/");
    }
    else{
      window.open("https://mail.google.com/mail/u/0/#search/"+query.value);
    }
  };
  function gmaps(){
    if(query.value == ""){
      window.open("https://www.google.com/maps");
    }
    else{
      window.open("https://www.google.com/maps/search/"+query.value);
    }
  };
  function drive(){
    if(query.value == ""){
      window.open("https://drive.google.com/drive/");
    }
    else{
      window.open("https://drive.google.com/drive/search?q="+query.value);
    }
  };
  function wiki(){
    if(query.value == ""){
      window.open("https://www.wikipedia.com/");
    }
    else{
      window.open("https://en.wikipedia.org/w/index.php?search="+ query.value +"&title=Special%3ASearch&go=Go&ns0=1");
    }
  };
  function bing(){
    if(query.value == ""){
      window.open("https://www.bing.com/");
    }
    else{
      window.open("https://www.bing.com/search?q="+query.value);
    }
  };
  
  function duckduckgo(){
    if(query.value == ""){
      window.open("https://www.duckduckgo.com/");
    }
    else{
      window.open("https://duckduckgo.com/?q="+query.value+"&t=ha&va=j&ia=web");
    }
  };  
  function ecosia(){
    if(query.value == ""){
      window.open("https://www.ecosia.com");
    }
    else{
      window.open("https://www.ecosia.org/search?method=index&q="+query.value);
    }
  };  
  function startpage(){
    if(query.value == ""){
      window.open("https://www.startpage.com/");
    }
    else{
      window.open("https://startpage.com/do/search?q="+query.value+"&segment=startpage.brave");
    }
  };  
  function yandex(){
    if(query.value == ""){
      window.open("https://www.yandex.com/");
    }
    else{
      window.open("https://yandex.com/search/?text="+query.value);
    }
  };  
  function qwant(){
    if(query.value == ""){
      window.open("https://www.qwant.com/");
    }
    else{
      window.open("https://www.qwant.com/?l=en&q="+query.value+"&t=web");
    }
  };  
  function stackoverflow(){
    if(query.value == ""){
      window.open("https://www.stackoverflow.com/");
    }
    else{
      window.open("https://stackoverflow.com/search?q="+query.value);
    }
  };  
  function piratebay(){
    if(query.value == ""){
      window.open("https://www.thepiratebay.party/");
    }
    else{
      window.open("https://thepiratebay.party/s/?q="+query.value+"&page=0&orderby=99");
    }
  }; 
  function devto(){
    if(query.value == ""){
      window.open("https://www.dev.to/");
    }
    else{
      window.open("https://dev.to/search?q="+query.value);
    }
  };  
  function github(){
    if(query.value == ""){
      window.open("https://www.github.com/");
    }
    else{
      window.open("https://github.com/search?q="+query.value);
    }
  };  
  function flipkart(){
    if(query.value == ""){
      window.open("https://www.flipkart.com/");
    }
    else{
      window.open("https://www.flipkart.com/search?q="+query.value);
    }
  };  
  function amazon(){
    if(query.value == ""){
      window.open("https://www.amazon.in/");
    }
    else{
      window.open("http://www.amazon.in//s?k="+query.value);
    }
  };  
  function csstricks(){
    if(query.value == ""){
      window.open("https://www.css-tricks.com/");
    }
    else{
      window.open("https://css-tricks.com/?s="+ query.value);
    }
  };  
  function medium(){
    if(query.value == ""){
      window.open("https://www.medium.com/");
    }
    else{
      window.open("https://medium.com/search?q="+query.value);
    }
  }; 
  function pdfdrive(){
    if(query.value == ""){
      window.open("https://www.pdfdrive.com/");
    }
    else{
      window.open("https://www.pdfdrive.com/search?q="+query.value);
    }
  };
  function zlibrary(){
    if(query.value == ""){
      window.open("https://www.z-lib.org/");
    }
    else{
      window.open("https://1lib.in/s/"+query.value+"?");
    }
  };
  function instagram(){
    if(query.value == ""){
      window.open("https://www.instagram.com/");
    }
    else{
      window.open("https://www.instagram.com/"+query.value);
    }
  };
  function twitter(){
    if(query.value == ""){
      window.open("https://www.twitter.com/");
    }
    else{
      window.open("https://twitter.com/search?q="+query.value+"&src=typed_query");
    }
  };
  function linkedin(){
    if(query.value == ""){
      window.open("https://www.linkedin.com/");
    }
    else{
      window.open("https://www.linkedin.com/search/results/all/?keywords="+query.value);
    }
  };
  function quora(){
    if(query.value == ""){
      window.open("https://www.quora.com/");
    }
    else{
      window.open("https://www.quora.com/search?q="+query.value);
    }
  };
  function reddit(){      
    if(query.value == ""){
      window.open("https://www.reddit.com/");
    }
    else{
      window.open("https://www.reddit.com/search/?q="+query.value);
    }
  };
  function twitch(){
    if(query.value == ""){
      window.open("https://www.twitch.com/");
    }
    else{
      window.open("https://www.twitch.tv/search?term="+query.value);
    }
  };
  function pinterest(){
    if(query.value == ""){
      window.open("https://www.pinterest.com/");
    }
    else{
      window.open("https://in.pinterest.com/search/pins/?q="+query.value);
    }
  };
  function vimeo(){
    if(query.value == ""){
      window.open("https://www.vimeo.com/");
    }
    else{
      window.open("https://vimeo.com/search?q="+query.value);
    }
  };
  function tumblr(){
    if(query.value == ""){
      window.open("https://www.tumblr.com/");
    }
    else{
      window.open("https://www.tumblr.com/search/"+query.value);
    }
  };
  function vk(){
    if(query.value == ""){
      window.open("https://www.vk.com/");
    }
    else{
      window.open("https://vk.com/search?c%5Bq%5D="+query.value);
    }
  };
  function tiktok(){
    if(query.value == ""){
      window.open("https://www.tiktok.com/");
    }
    else{
      window.open("https://www.tiktok.com/search?q="+query.value);
    }
  };
  function spotify(){
    if(query.value == ""){
      window.open("https://open.spotify.com");
    }
    else{
      window.open("https://open.spotify.com/search/"+query.value);
    }
  };
  function pocket(){
    if(query.value == ""){
      window.open("https://www.getpocket.com/");
    }
    else{
      window.open("https://getpocket.com/my-list/search?query="+query.value);
    }
  };
  function gpodcasts(){
    if(query.value == ""){
      window.open("https://www.podcasts.google.com/");
    }
    else{
      window.open("https://podcasts.google.com/search/"+query.value);
    }
  };
  function feedly(){
    if(query.value == ""){
      window.open("https://www.feedly.com/");
    }
    else{
      window.open("https://feedly.com/i/discover/sources/search/feed/"+query.value);
    }
  };
  function leetcode(){
    if(query.value == ""){
      window.open("https://www.leetcode.com/");
    }
    else{
      window.open("https://leetcode.com/problemset/all/?search="+query.value);
    }
  };
  function MDN(){
    if(query.value == ""){
      window.open("https://developer.mozilla.org/");
    }
    else{
      window.open("https://developer.mozilla.org/en-US/search?q="+query.value);
    }
  };
  function codepen(){
    if(query.value == ""){
      window.open("https://www.codepen.io/");
    }
    else{
      window.open("https://codepen.io/your-work?search_term="+query.value);
    }
  };
  function tickertape(){
    if(query.value == ""){
      window.open("https://www.tickertape.in/");
    }
    else{
      window.open("https://www.tickertape.in/?q="+query.value);
    }
  };
  function yfinance(){
    if(query.value == ""){
      window.open("https://www.finance.yahoo.com/");
    }
    else{
      window.open("https://finance.yahoo.com/quote/"+query.value+"?p");
    }
  };
  function evernote(){
    if(query.value == ""){
      window.open("https://www.evernote.com/client/web?login=true#?hm=true&");
    }
    else{
      window.open("https://www.evernote.com/client/web?login=true#?n=f20a4cce-0ede-d5dc-61f3-a49593ad1c0f&query=view%3ASE%1E"+query.value);
    }
  };
  function facebook(){
    if(query.value == ""){
      window.open("https://www.facebook.com/");
    }
    else{
      window.open("https://www.facebook.com/search/top/?q="+query.value);
    }
  };
  function myntra(){
    if(query.value == ""){
      window.open("https://www.myntra.com/");
    }
    else{
      window.open("https://www.myntra.com/"+query.value);
    }
  };
  function drubble(){
    if(query.value == ""){
      window.open("https://www.dribbble.com/");
    }
    else{
      window.open("https://dribbble.com/search/"+query.value);
    }
  };
  function google(){
    if(query.value == ""){
      window.open("https://www.google.com/");
    }
    else{
      window.open("https://www.google.com/search?q="+query.value+"&sxsrf=ALiCzsYKCQh7aklB0TrOODRWBWI5yegppw%3A1660845520128&source=hp&ei=0H3-YtCbBfXs2roP8Jq1kAs&iflsig=AJiK0e8AAAAAYv6L4McXsa9Z9umvYiJbkYM6xyzbnioz&ved=0ahUKEwjQw4Ha-9D5AhV1tlYBHXBNDbIQ4dUDCAY&uact=5&oq="+query.value+"&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyCwgAEIAEELEDEIMBMgUIABCABDIICAAQgAQQsQMyCAguEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgsIABCABBCxAxCDATIOCC4QgAQQsQMQxwEQ0QM6BwgjEOoCECc6BAgjECc6CAgAELEDEIMBOggILhCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BAgAEEM6CwguEIAEELEDEIMBOgoIABCxAxCDARBDOhAILhCxAxCDARDHARDRAxBDUMICWM8FYK4GaAFwAHgAgAGqAYgB9gSSAQMwLjSYAQCgAQGwAQo&sclient=gws-wiz");
    }
  };
  function yahoo(){
    if(query.value == ""){
      window.open("https://www.yahoo.com/");
    }
    else{
      window.open("https://in.search.yahoo.com/search;_ylt=AwrPpS0jgf5iUY0Naza7HAx.;_ylc=X1MDMjExNDcyMzAwMwRfcgMyBGZyA3NmcARmcjIDc2ItdG9wBGdwcmlkA1l6bFJuSHI0U0FhR3NsVlZzR1ZhQUEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNpbi5zZWFyY2gueWFob28uY29tBHBvcwMxBHBxc3RyAwRwcXN0cmwDMARxc3RybAM4BHF1ZXJ5A2phYmFscHVyBHRfc3RtcAMxNjYwODQ2NDIw?p="+query.value+"&fr2=sb-top&fr=sfp&vm=r");
    }
  };
  // function yt(){
  //   if(query.value == ""){
  //     window.open("https://www.youtube.com/");
  //   }
  //   else{
  //     window.open("https://www.youtube.com/results?search_query="+query.value);
  //   }
  // };
