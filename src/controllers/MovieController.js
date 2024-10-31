class MovieController {
  static async getMoviePlot(req, res) {
    const movieName = req.query.movie;
        try {
      //pegar o nome do json através do parametro
      res.status(200).json(movieName);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default MovieController;
