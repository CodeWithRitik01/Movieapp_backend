import "./env.js"

import express from "express";
import {createServer} from "http"
import cors from "cors";
import { corsOptions } from "./constants/config.js";
import { connectDB } from "./utils/dbConfig.js";
import multer from 'multer'
import wishlistRoute from "./routes/wishlist.routes.js"


const PORT = process.env.PORT || 4000;
const mongoUrl = process.env.MONGODB_URL;


connectDB(mongoUrl);
const app = express();
const server = createServer(app);

const upload = multer()
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use(cors(corsOptions));

app.use("/api/v1/watchlist",upload.none(), wishlistRoute);


app.get("/", (req, res) => {
    res.send("Home")
})


server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
