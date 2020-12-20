const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const History = require('../../models/History');

// @route POST api/history
// @desc Test route
// @access Private
router.post(
  '/',
  [auth, [check('result', 'Result is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newHistory = new History({
        user: req.user.id,
        title: req.body.title,
        location: req.body.location,
        date: req.body.date,
        result: req.body.result,
        comments: req.body.comments,
      });

      const history = await newHistory.save();

      res.json(history);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    // Newest first
    const posts = await History.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Could add get post by id, I don't think it's necessary...

// @route    DELETE api/histories/:id
// @desc     Delete a history
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const history = await History.findById(req.params.id);

    if (!history) {
      return res.status(404).json({ msg: 'History not found' });
    }

    // Check user
    if (history.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await history.remove();

    res.json({ msg: 'History removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
