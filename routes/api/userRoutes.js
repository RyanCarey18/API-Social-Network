const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

//api/users
router.route("/").get(getUsers).post(createUser);

//api/users/:userID
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

//api/users/:userId/friend/:freindId
router.route("/:userId/friend/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;
