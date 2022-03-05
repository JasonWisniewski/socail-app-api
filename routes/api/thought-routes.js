const router = require('express').Router();

const {
  getAllThought,
  addThought,
  getThoughtById,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,

} = require('../../controllers/thought-controller');
const { get } = require('../../models/Reaction');

// /api/Thought
router
  .route('/')
  .get(getAllThought)

router
  .route('/user/:userId')
  .post(addThought)

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)

router
  .route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction)

module.exports = router;