//third party module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");


app.use("cors");
app.use("/",(req,res) => 
{
   res.json("Hi Friends Subscribe");
})
app.use(morgan("dev"));
app.use(express.json());

//Router 
const infoRouter = require("./router");
app.use("/info",infoRouter);

//listen port
app.listen(5000,() => {
    console.log("Server started on 5000");
})

//Db connections
mongoose.connect('mongodb+srv://demo:hBjdsP9rTQaau7X@cluster0.jrdfh.mongodb.net/crud?retryWrites=true&w=majority',
                 {useNewUrlParser: true,
                     useUnifiedTopology: true}
                     
                     );
