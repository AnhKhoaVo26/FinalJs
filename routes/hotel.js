const hotelController = require("../controllers/hotelController");

const router=require("express").Router();
//Add hotel

router.post("/",hotelController.addHotel);
//GET ALL Hotels
router.get("/", hotelController.getAllHotels);

//GET A Hotel
router.get("/:id", hotelController.getAHotel);

//UPDATE A Hotel
router.put("/:id", hotelController.updateHotel);

//DELETE A Hotel
router.delete("/:id", hotelController.deleteHotel);
module.exports=router;