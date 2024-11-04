import { fetchMovie, fetchTranslate } from "../utils/apiConnect.js";

class MovieService {
  static async getMovieInfo(movieName) {
    //fetch API
    const movie = await fetchMovie(movieName);
    return movie;
  }

  static async getTranslation(moviePlot) {
    const plottranslate = await fetchTranslate(moviePlot.plot);
    return plottranslate;
  }
}

export default MovieService;
