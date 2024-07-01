import { Wishlist } from "../models/wishlist.js";

const getMovies = async(req, res, next) =>{
    try {
        const movies = await Wishlist.find();

        res.json(movies);

    } catch (error) {
        console.log(err);
    }
}

const AddMovie = async(req, res, next) =>{
    try{
        const {title, description, release_year, genre, imgUrl} = req.body;

        await Wishlist.create({
            title, 
            description, 
            release_year, 
            genre, 
            imgUrl,
            rating:0,
            watched:false
        })

        return res.status(201).json({
            success: true,
            message:"Movie added"
        })
    }catch(err){
        console.log(err);
    }
}

const editDetail = async(req, res, next) =>{
     try{
         const movieId = req.params.id;
         const {title, description, release_year, genre, imgUrl} = req.body;

         const movie = await Wishlist.findById(movieId);
         if(!movie) return next(console.log("error"));

         movie.title = title;
         movie.description = description;
         movie.release_year = release_year;
         movie.genre = genre;
         movie.imgUrl = imgUrl;

         await movie.save();

         return res.status(200).json({
            success:true,
            message:"details changed"
         })

     }catch(err){
        console.log(err);
     }
}


const deleteMovie = async(req, res, next) => {
    try {
        const movieId = req.params.id;

        await Wishlist.deleteOne({_id: movieId});
         
        return res.status(200).json({
           success:true,
           message:"deleted"
        })
    } catch (error) {
        console.log(error)
    }

}

const toggleWatched  = async(req, res, next) =>{
    try{
        const movieId = req.params.id;

        const movie = await Wishlist.findById(movieId);
        if(!movie) return next(console.log("error"));

        movie.watched = !movie.watched;

        await movie.save();

        return res.status(200).json({
           success:true,
           message:"details changed"
        })
    }catch(err){
       console.log(err);
    }
}

const rateMovie  = async(req, res, next) =>{
    try{
        const ID = req.params.id;
        const {rating} = req.body;

        const movie = await Wishlist.findById(ID);
        if(!movie) return next(console.log("error"));

        movie.rating = rating;

        await movie.save();

        return res.status(200).json({
           success:true,
           message:"details changed"
        })
    }catch(err){
       console.log(err);
    }
}

export {AddMovie, editDetail, deleteMovie, toggleWatched, rateMovie, getMovies};