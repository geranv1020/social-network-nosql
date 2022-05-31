const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
  } = require('../../controllers/thought-controller');

router.route("/").get(getAllThoughts);

router.route("/:userId").post(addThought);

router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:id/reaction").put(addReaction);

router.route("/:id/reaction/:reactionId").delete(removeReaction);

module.exports = router;