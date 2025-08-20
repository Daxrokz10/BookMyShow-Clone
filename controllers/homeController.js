const { getNowPlaying , getGenres } = require("../services/tmdb");

exports.index = async (req, res) => {
  try {
    let movies = await getNowPlaying();
    movies = movies.slice(0,10);  
    const genres = await getGenres(); 
    res.render("index", { movies,genres, query: req.query, session: req.session });
  } catch (err) {
    console.error("Error loading homepage:", err.message);
    res.render("index", { movies: [],genres:[], query: req.query, session: req.session });
  }
};
