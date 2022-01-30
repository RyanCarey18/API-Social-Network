const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  updateFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

//api/users
router.route("/").get(getUsers).post(createUser);

//api/users/:userID
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

//api/users/:userId/friend/:freindId
router
  .route("/:userId/friend/:friendId")
  .put(updateFriend)
  .delete(deleteFriend);
