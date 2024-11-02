//função da controladora receber as informações das rotas e manejar as requisições
import MovieService from "../services/MovieServices.js";
import { formatMovieObject } from "../utils/helpers.js";

class MovieController {
  static async getMoviePlot(req, res) {
    //static significa que não precisa instanciar MovieController, apenas chamando classe e método.
    const movieName = req.query.movie;
    try {
      const movieplot = await MovieService.getMovieInfo(movieName);
      const response = formatMovieObject(movieplot);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default MovieController;
