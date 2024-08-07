// Movie List Container
const container = document.querySelector('.container');

// Template Elements
const movieCardTemplate = document.querySelector('#movieCardTemplate'); // Template element itself
const movieCardTemplateMustache = document.querySelector('#movieCardTemplateMustache').innerHTML; // Template content as string
const movieCardListTemplateMustache = document.querySelector('#movieCardListTemplateMustache').innerHTML; // Template content as string

// Vanilla JS + Template Literal (Interpolation) Method
container.innerHTML = '';

fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7').then((resp) => resp.json()).then((data) => {
  const movies = data.Search;

  movies.forEach((movie) => {
    const movieHTML = `
    <div class='col-3'>
      <div class="card">
        <img src="${movie.Poster}" class="card-img-top" alt="Harry Potter and the Sorcerer's Stone poster">
        <div class="card-body">
          <h2 class="card-title">${movie.Title}</h2>
          <p class="card-text">${movie.Year}</p>
          <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
        </div>
      </div>
    </div>
    `;

    container.insertAdjacentHTML('beforeend', movieHTML);
  });
});

// Vanilla JS + Template Element Method
container.innerHTML = '';

fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7').then((resp) => resp.json()).then((data) => {
  const movies = data.Search;

  movies.forEach((movie) => {
    const movieNode = movieCardTemplate.content.cloneNode(true);

    movieNode.querySelector('h2').innerText = movie.Title;
    movieNode.querySelector('p').innerText = movie.Title;
    movieNode.querySelector('img').src = movie.Title;
    movieNode.querySelector('a').href = movie.Title;


    container.appendChild(movieNode);
  });
});

import Mustache from "mustachejs";
// Mustache Render Method
container.innerHTML = '';

fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7').then((resp) => resp.json()).then((data) => {
  const movies = data.Search;

  movies.forEach((movie) => {
    const movieCard = Mustache.render(movieCardTemplateMustache, movie);

    container.insertAdjacentHTML('beforeend', movieCard);
  });
});


// Mustache Render Method For List as WHole with Section Syntax (built in iteration)
container.innerHTML = '';

fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7').then((resp) => resp.json()).then((data) => {
  const movieData = { movies: data.Search };

  const moviesList = Mustache.render(movieCardListTemplateMustache, movieData);

  container.innerHTML = moviesList;
});


// Vue Demo (Unrelated to Movies Rendering)
import { createApp } from "vue";

createApp({
  data() {
    return {
      message: 'Hello 1770'
    };
  }
}).mount('#vueDemo');
