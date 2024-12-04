import express from 'express'; 
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';


const app = express();
const port = 5001;

// MongoDB Connection URI
const uri = "mongodb+srv://rubyalv:B2TkTyYI8xLrRj8T@berkeleybuzz.39vhg.mongodb.net/";

// Define flyer schema
const flyerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    organization: { type: String, required: true },
  }, {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  });

// Create Flyer model
const Flyer = mongoose.model('Flyer', flyerSchema);


// GET route to fetch all flyers
app.get('/flyers', async (req, res) => {
    try {
      // Mongoose method to get all documents in the collection
      const flyers = await Flyer.find(); 

      // Return the flyers in the response body
      res.status(200).json(flyers); 
    } catch (error) {
      console.error('Error fetching flyers:', error);
      res.status(500).send({ message: 'Failed to fetch flyers', error: error.message });
    }
  });

app.post('/', async (req, res) => {
    // Extract data.
    const { name, eventDate, location, description, organization } = req.body;
    // Make a new flyer.
    const newFlyer = new Flyer({
        name, 
        eventDate,
        location,
        description,
        organization,
    });

    try {
        // Save new flyer to database
        const savedFlyer = await newFlyer.save();
        res.status(201).send({ message: 'Flyer created successfully', flyer: savedFlyer });
    } catch (err) {
        console.error('Error creating flyer:', err);
        res.status(500).send({ message: 'Failed to create flyer', error: err.message });
    }  
});

app.delete('/flyers/:id', async (req, res) => {
    const flyerId = req.params.id;

    try {
        // Find and delete the flyer by ID
        const deletedFlyer = await Flyer.findByIdAndDelete(flyerId);

        if (!deletedFlyer) {
            return res.status(404).send({ message: 'Flyer not found' });
        }
        res.status(200).send({ message: 'Flyer deleted successfully', flyer: deletedFlyer });
    } catch (err) {
        console.error('Error deleting flyer:', err);
        res.status(500).send({ message: 'Failed to delete flyer', error: err.message });
    }

});

app.listen(port, () => {
    console.log('Server running on port 5001');
})

