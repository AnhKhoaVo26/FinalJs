const express =require("express");
const cors =require("cors");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const morgan =require("morgan");
const dotenv =require("dotenv");

const app =express();
const userRoute=require("./routes/user");

dotenv.config();
//connect database 
mongoose.connect((process.env.MONGODB_URL),
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/v1/user",userRoute);

app.listen(8000,()=>{
    console.log("Server Is running......");
});