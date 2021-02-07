const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Test = require('../../models/Test');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://crescentech.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// @route POST api/test
// @desc Create post
// @access Private
router.post(
  '/',
  [auth, [check('result', 'Result is required').not().isEmpty()]],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, location, date, result, comments } = req.body;

    try {

      let newTest = new Test({
        user: req.user.id,
        title,
        location,
        date,
        result,
        comments
      });

      const test = await newTest.save();
      res.json(test);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// @route    GET api/tests
// @desc     Get all tests
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    // Newest first
    const tests = await Test.find().sort({ date: -1 });
    res.json(tests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Could add get test by id, I don't think it's necessary...

// @route    DELETE api/tests/:id
// @desc     Delete a test
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);

    if (!test) {
      return res.status(404).json({ msg: 'Test not found' });
    }

    // Check user
    if (test.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await test.remove();

    res.json({ msg: 'Test removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
