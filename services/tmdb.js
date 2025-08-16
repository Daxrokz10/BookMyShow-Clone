const axios = require("axios");
require('dotenv').config();
console.log("API_KEY from env:", process.env.API_KEY); // Add this line

const API_KEY = process.env.API_KEY 
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
