const mongoose =require("mongoose");

const planeSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    
    sdt:{
        type:String,
        
    },
    DateGo:{
        type:String,
        
    },
    DayBack:{
        type:String,
        
    },
    planes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Plane",
        },
      ],
});

let Plane=mongoose.model("Plane",planeSchema);
module.exports={Plane};