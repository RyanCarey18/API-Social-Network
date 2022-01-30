//thoughts/:thoughtID/reactions/

//post to create a reaction that stores within a thoughts reaction array

//delete to remove reaction within thoughts reaction array
const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

//api/thoughts
router.route("/").get(getThoughts).post(createThought);

//api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//api/thoughts/:thoughtId/reaction
router
  .route("/:thoughtId/reactions/")
  .put(createReaction)
  .delete(deleteReaction);
//post user to user friend list, delete user from user friend list
