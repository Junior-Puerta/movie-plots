//função da controladora receber as informações das rotas e manejar as requisições
import MovieService from "../services/MovieServices.js";
import { formatMovieObject } from "../utils/helpers.js";
import { fetchTranslate } from "../utils/apiConnect.js";

class MovieController {
  static async getMoviePlot(req, res) {
    //static significa que não precisa instanciar MovieController, apenas chamando classe e método.
    const movieName = req.query.movie;

    try {
      const fullmovie = await MovieService.getMovieInfo(movieName);
      const titleandplot = formatMovieObject(fullmovie);
      const plottraduzido = await MovieService.getTranslation(titleandplot);
      res.status(200).json(plottraduzido.translatedText);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //   CÓDIGO SINCRONO //
  // MovieService.getMovieInfo(movieName)
  //   .then((fullmovie) => {
  //     const movieandplot = formatMovieObject(fullmovie);
  //     res.status(200).json(movieandplot);
  //   })
  //   .catch((erro) => {
  //     res.status(500).json({ message: erro.message });
  //   });
  // return;
}

export default MovieController;
