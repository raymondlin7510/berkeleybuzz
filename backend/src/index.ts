import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;


const forecastSchema = new mongoose.Schema({
  max: { type: Number, required: true },
  min: { type: Number, required: true },
  current: { type: Number, required: true },
  date: { type: String, required: true },
  condition: { type: String, required: true },
  description: { type: String, required: true },
  icon: {type: String, required: false }
});

const Forecast = mongoose.model("Forecast", forecastSchema);

const MONGO_URI = "mongodb://localhost:27017/forecast";

app.get('/weather', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const weatherData = await fetch(API_CALL).then((response) => response.json());
  const data = [];
  for (let day = 0; day < 5; day += 1) {
    const temp = weatherData['list'][day * 8 + 3];
    const main = temp['main'];
    const weather = temp['weather'][0];
    const new_data = {max: main['temp_max'], min: main['temp_min'], current: main['temp'], date: temp['dt_txt'], condition: weather['main'], description: weather['description'], icon: ''};
    data.push(new_data);
  }
  try {
    await mongoose.connect(MONGO_URI);
    await Forecast.deleteMany({});
    await Forecast.insertMany(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
