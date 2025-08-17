const { getNowPlaying } = require("../services/tmdb");

exports.index = async (req, res) => {
  try {
    let movies = await getNowPlaying();
    movies = movies.slice(0,10);  // fetch from TMDb
    res.render("index", { movies });
  } catch (err) {
    console.error("Error loading homepage:", err.message);
    res.render("index", { movies: [] });
  }
};
