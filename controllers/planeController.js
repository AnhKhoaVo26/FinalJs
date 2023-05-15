const{Plane}=require("../models/plane");

const planeController = {
    //add user
    addPlane:async(req,res)=>{
        try {
            const newPlane=new Plane(req.body);
            const savePlane=await newPlane.save();
            if (req.body.Plane) {
                const plane = Plane.findById(req.body.plane);
                await plane.updateOne({ $push: { planes: savePlane._id } });
              }
            res.status(200).json(savePlane);

        }catch(err){
          console.log(err);
            res.status(500).json(err);
        }

    },
    //GET ALL BOOKS
  getAllPlanes: async (req, res) => {
    try {
      const allPlanes = await Plane.find();
      res.status(200).json(allPlanes);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A BOOK
  getAPlane: async (req, res) => {
    try {
      const plane = await Plane.findById(req.params.id).populate("plane");
      res.status(200).json(plane);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  updatePlane: async (req, res) => {
    try {
      const plane = await Plane.findById(req.params.id);
      await plane.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE BOOK
  deletePlane: async (req, res) => {
    try {
      await Plane.updateMany(
        { planes: req.params.id },
        { $pull: { users: req.params.id } }
      );
      await Plane.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
module.exports=planeController;