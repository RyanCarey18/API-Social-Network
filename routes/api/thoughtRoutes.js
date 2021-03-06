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
router.route("/:thoughtId/reactions/").post(createReaction);

// api/thoughts/:thoughtId/reaction/:reactionId

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
