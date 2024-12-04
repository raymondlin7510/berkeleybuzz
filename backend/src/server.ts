const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://rubyalv:B2TkTyYI8xLrRj8T@berkeleybuzz.39vhg.mongodb.net/?retryWrites=true&w=majority&appName=BerkeleyBuzz";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
        // Connect to the server.
        await client.connect();

        // Send a ping to confirm a successful connection.
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Perform database operations here.
        const database = client.db("events");
        const collection = database.collection("flyers");
        const result = await collection.insertOne({ name: "test", value: 42 });
        console.log("Inserted document:", result.insertedId);

        } catch (err) {
        console.error("An error occurred:", err);
        } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        }
    }

// Call the run function
run().catch(console.dir);