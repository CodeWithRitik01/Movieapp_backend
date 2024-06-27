import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    release_year:{
        type: String,
    },
    genre: {
        type: String,
    },
    imgUrl:{
        type: String
    },
    watched:{
        type: Boolean,
        default: true,
    },
    rating:{
          type: String
     },
 
})

export const Wishlist = mongoose.models.Wishlist || model("Wishlist", schema);