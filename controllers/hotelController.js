const{Hotel}=require("../models/hotel");

const hotelController = {
    //add hotel
    addHotel:async(req,res)=>{
        try {
            const newHotel=new Hotel(req.body);
            const saveHotel=await newHotel.save();
            if (req.body.hotel) {
                const hotel = Hotel.findById(req.body.hotel);
                await hotel.updateOne({ $push: { hotels: saveHotel._id } });
              }
            res.status(200).json(saveHotel);

        }catch(err){
          console.log(err);
            res.status(500).json(err);
        }

    },
    //GET ALL Hotel
  getAllHotels: async (req, res) => {
    try {
      const allHotels = await Hotel.find();
      res.status(200).json(allHotels);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A Hotel
  getAHotel: async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id).populate("hotel");
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE Hotel
  updateHotel: async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      await hotel.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE Hotel
  deleteHotel: async (req, res) => {
    try {
      await Hotel.updateMany(
        { hotels: req.params.id },
        { $pull: { users: req.params.id } }
      );
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
module.exports=hotelController;