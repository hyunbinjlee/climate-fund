const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')  // Ensure this directory exists or is configured to be created
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

// POST endpoint for submitting donor data
router.post('/', upload.single('image'), (req, res) => {
  console.log(req.body); // Logs the non-file fields like 'name' and 'bio'
  console.log(req.file); // Logs the file uploaded
  res.status(201).send({ message: 'Donor profile submitted successfully!' });
});

router.get('/profiles', async (req, res) => {
  try {
      console.log("Fetching profiles...");
      // Placeholder: Fetch profiles from your storage
      const profiles = []; // This should be replaced with actual data fetching logic
      console.log("Profiles fetched:", profiles);
      res.json(profiles);
  } catch (error) {
      res.status(500).send({ message: "Failed to fetch profiles", error: error.message });
  }
});

module.exports = router;
