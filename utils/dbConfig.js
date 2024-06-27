import mongoose from "mongoose";

const connectDB = (uri) => {
    mongoose
    .connect(uri, {dbName: "Movieapp"})
    .then((data) => console.log(`connect to DB: ${data.connection.host}`))
    .catch((err) => {
        console.log(err);
    })
}

export {connectDB};