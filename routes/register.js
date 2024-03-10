const express = require('express'),
      validator = require("validator"),
      router = express.Router();

const User = require('../database/schema/user.js');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {    
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    try {
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;