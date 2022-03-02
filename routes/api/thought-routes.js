const router = require('express').Router();

const {
  getAllThought,
  addThought,
  addReply,
  removeThought,
  removeReply
} = require('../../controllers/thought-controller');

// /api/Thought
router
  .route('/')
  .get(getAllThought)
  .post(addThought)


module.exports = router;