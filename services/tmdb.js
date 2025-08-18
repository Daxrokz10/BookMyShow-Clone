const axios = require("axios");
require('dotenv').config();

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
    const imagesRes = await axios.get(`${BASE_URL}/movie/${movieId}/images`, {
      params: { api_key: API_KEY }
    });

    // Return both movie details and backdrops (array)
    return { 
      movie: res.data, 
      backdrops: imagesRes.data.backdrops // this is an array
    };
  } catch (err) {
    console.error("Error fetching movie details:", err.message);
    return null;
  }
}

async function getMovieCredits(movieId) {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: { api_key: API_KEY, language: "en-US" }
    });
    return res.data.cast; // returns cast array
  } catch (err) {
    console.error("Error fetching credits:", err.message);
    return [];
  }
}

// Example using axios
async function fetchNowPlaying() {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: { api_key: process.env.API_KEY }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching now playing movies:', error.message);
        // Optionally, handle specific error codes here
        return null;
    }
}

module.exports = { getNowPlaying, getMovieDetails, getMovieCredits };
