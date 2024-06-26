import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
});

connectDB();
.then(()=>{
    app.on("error",(err)=>{
        console.log("Error: ",err);
        throw err;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("Mongodb connection failed!",err);
})