const { getNowPlaying } = require("../services/tmdb");

exports.index = async (req, res) => {
  try {
    const movies = await getNowPlaying();  // fetch from TMDb
    res.render("index", { movies });
  } catch (err) {
    console.error("Error loading homepage:", err.message);
    res.render("index", { movies: [] });
  }
};
