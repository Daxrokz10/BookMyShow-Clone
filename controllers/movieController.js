const { getMovieDetails, getMovieCredits } = require("../services/tmdb");

exports.getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const { movie, backdrops } = await getMovieDetails(movieId);
    const cast = await getMovieCredits(movieId);

    // Pass both to your EJS template
    res.render("pages/movie", { movie, cast, backdrops,session:req.session });
  } catch (err) {
    res.status(500).send("Error loading movie details");
  }
};