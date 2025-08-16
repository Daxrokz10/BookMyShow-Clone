const axios = require("axios");

const API_KEY = "c1d218a9cfc45879f43b4fa2812994f4";  // replace with your key
const BASE_URL = "https://api.themoviedb.org/3";

async function getNowPlaying() {
  try {
    const res = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: { api_key: API_KEY, language: "en-US", page: 1 }
    });
    return res.data.results;
  } catch (err) {
    console.error("Error fetching now playing movies:", err.message);
    return [];
  }
}

async function getMovieDetails(movieId) {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY, language: "en-US" }
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching movie details:", err.message);
    return null;
  }
}

module.exports = { getNowPlaying, getMovieDetails };
