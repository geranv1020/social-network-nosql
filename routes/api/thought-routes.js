const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
  } = require('../../controllers/thought-controller');
  

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;