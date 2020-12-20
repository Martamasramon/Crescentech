const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile
// @desc Test route
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/', auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure the request
   const {
     location,
     job
   } = req.body;

   // build a profile
  const profileFields = {}
  profileFields.user = req.user.id;
  if(location) profileFields.location = location;
  if(job) profileFields.job = job;

  try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOne({ user: req.user.id });

      if(profile){
        // Update profile
        await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true, upsert: true, setDefaultsOnInsert: true }
        );
      } else {
        // Create profile
        profile = new Profile(profileFields);
        await profile.save();
      }
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & history
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user history
    // await History.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
