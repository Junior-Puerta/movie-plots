import express from "express";
import MovieController from "../controllers/MovieController.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Rota inicial"));
  app.use(express.json());
  app.get("/movie/search", MovieController.getMoviePlot);
};

export default routes;
