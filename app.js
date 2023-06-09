const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");

const apiKey = 'api_key=29f37feef706d974e95a396f508a6b4d';
const baseUrl = 'https://api.themoviedb.org/3';
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+apiKey;
const imgUrl = 'http://image.tmdb.org/t/p/w500';
const searchUrl = baseUrl + '/search/movie?'+apiKey;

const posters = [];
const titles = [];

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>{

  https.get(apiUrl,(response)=>{
    response.on("data",(data)=>{
      const movieData = JSON.parse(data);
      for(var i = 0 ; i < 6 ; i++){
        const currObj = movieData.results[i];
        titles.push(currObj.title);
        posters.push(imgUrl + currObj.backdrop_path);
      }
    });
    res.render('home',{
    titles:titles,
    poster_path : posters,
  });
  })
});

app.listen(3000,()=>{
  console.log("Server running on port 3000");
})

