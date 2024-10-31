import "dotenv/config";
import express from "express";
import route from "./src/routes/index.js";

const PORT = 3000

const app = express();
route(app);

app.listen(PORT, () =>{
    console.log("servidor escutando")
})

