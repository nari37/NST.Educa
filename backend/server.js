const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!...');
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});

const userModel = mongoose.model('students', userSchema);
app.post('/register', (req, res) => {
  console.log("Received registration data:", req.body);
  const { email, phone } = req.body;

  // Check if a user with the same email or phone already exists
  userModel.findOne({ $or: [{ email }, { phone }] })
    .then((existingStudent) => {
      if (existingStudent) {
        // If a student with the same email or phone is found, send an error message
        return res.status(400).json({ message: 'You are already registered.' });
      } else {
        // If no student is found, create a new student
        userModel.create(req.body)
          .then((student) =>
            res
              .status(200)
              .json({ message: 'You are registered successfully.', student })
          )
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get("/",(req,res)=>{
res.send("server is running")
})


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
