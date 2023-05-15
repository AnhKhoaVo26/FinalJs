const planeController = require("../controllers/planeController");

const router=require("express").Router();
//Add user

router.post("/",planeController.addPlane);
//GET ALL BOOKS
router.get("/", planeController.getAllPlanes);

//GET A BOOK
router.get("/:id", planeController.getAPlane);

//UPDATE A BOOK
router.put("/:id", planeController.updatePlane);

//DELETE A BOOK
router.delete("/:id", planeController.deletePlane);
module.exports=router;