const mongoose =require("mongoose");
const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    hotline:{
        type:String,
        
    },
    streetaddress:{
        type:String,
        
    },
    image:{
        type:String,

    },
    hotels: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Hotel",
        },
      ],
});

let Hotel=mongoose.model("Hotel",hotelSchema);
module.exports={Hotel};