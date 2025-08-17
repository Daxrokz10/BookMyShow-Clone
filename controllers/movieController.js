const { getMovieDetails, getMovieCredits } = require("../services/tmdb");

exports.getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await getMovieDetails(movieId);
    const cast = await getMovieCredits(movieId);

    res.render("pages/movie", { movie, cast });
  } catch (err) {
    res.status(500).send("Error loading movie details");
  }
};