import express from "express";
import { AddMovie, deleteMovie, editDetail, getMovies, rateMovie, toggleWatched } from "../controllers/wishlist.controller.js";

const app = express.Router();

app.get('/get', getMovies)
app.post('/addmovie', AddMovie);
app.put('/edit/:id', editDetail);
app.delete('/:id', deleteMovie);
app.put('/toggle/:id', toggleWatched)
app.put('/rate/:id', rateMovie)

export default app;