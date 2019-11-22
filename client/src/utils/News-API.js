// NEWS API 
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4499ded633c940b7885aca83297927c8');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  category: 'health',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});