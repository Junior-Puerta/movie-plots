import express from "express";


const routes = (app) => {
    app.route("/").get((req,res)=>res.status(200).send("Rota inicial"));
    app.use(express)
}