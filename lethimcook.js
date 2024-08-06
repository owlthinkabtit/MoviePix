//properly use the IMBd API like this https://www.omdbapi.com/?t=House&apikey=ef4c3159
//using the api on themoviedatabase.org instead

const API_KEY = 'api_key=e87a0dde459d4dbbc77f2e6343e3cfc8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById(' movies');

getMovies(API_URL);


function getMovies(url) {

  fetch(url).then(res => res.json()).then(data => {
    showMovies(data.results);
  })
}


function showMovies(data) {
  movies.innerHTML = "";

  data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img class="movie-img" src="${IMG_URL+poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
            <span class=${getColor(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
          <h4 class="synopsis">Synopsis</h4>
            ${overview};
        </div>
      `
      movies.appendChild(movieEl);
  })

}

function getColor(vote) {
  if(vote >= 8){
    return 'green'
  }else if(vote >= 5){
    return "orange"
  }else{
    return 'red'
  }
}