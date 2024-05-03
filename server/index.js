const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Species = require('./model/Species');

const app = express();
const port = 4000;

// Connect to MongoDB
mongoose.connect('mongodb://connorearneybs3221:IwT3a5xY75iviD3407DWDJBUPzcMYZPyCK6rdkSvhPPKnnkNDdHKNh9aVVwScgnBz6Es4EfTr1pxACDbg8AbXw==@connorearneybs3221.mongo.cosmos.azure.com:10255/universitywork?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@connorearneybs3221@')
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Fetches Species details using species name
app.get('/api/:species', async (req, res) =>{
    try {
      // Find species in database using species name
      const species = await Species.findOne({ species: req.params.species });
  
      // If there is no result, return error
      if (!species) {
        return res.status(404).json({ error: 'Species not found' });
      }
      res.json(species);
    } catch (error) {
      console.error('Error occurred while fetching species:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });