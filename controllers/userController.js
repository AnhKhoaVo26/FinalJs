const{User}=require("../models/user");

const userController = {
    //add user
    addUser:async(req,res)=>{
        try {
            const newUser=new User(req.body);
            const saveUser=await newUser.save();
            if (req.body.user) {
                const user = User.findById(req.body.user);
                await user.updateOne({ $push: { users: saveUser._id } });
              }
            res.status(200).json(saveUser);

        }catch(err){
            res.status(500).json(err);
        }

    },
    //GET ALL BOOKS
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A BOOK
  getAUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate("user");
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE BOOK
  deleteUser: async (req, res) => {
    try {
      await Author.updateMany(
        { users: req.params.id },
        { $pull: { users: req.params.id } }
      );
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
module.exports=userController;