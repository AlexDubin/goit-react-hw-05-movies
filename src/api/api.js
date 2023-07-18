import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmZmODdlYTc0ZWYxZmJmMGJmYjdhZGU3YzdiZDk0NSIsInN1YiI6IjY0N2FlYTVlZTMyM2YzMDE0ODE2NzFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HtSLvTv1oDeijdRgMi5Rh9U8e_cWAWckdBgXCNEDm7M',
  },
};

async function fetchTrendingMovies() {
  const response = await axios.get('/trending/all/day?language=en-US', options);
  return response.data.results;
}

async function fetchMovieSearch(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
}
async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function fetchAddition(id, param) {
  const response = await axios.get(
    `movie/${id}/${param}?language=en-US`,
    options
  );
  return response.data;
}

export {
  fetchTrendingMovies,
  fetchMovieSearch,
  fetchMovieDetails,
  fetchAddition,
};
