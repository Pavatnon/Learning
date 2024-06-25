import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/submit', (req, res) => {
  const streetName = req.body.street;
  const petName = req.body.pet;
  console.log(streetName);
  console.log(petName);
  res.send('<h1>Band Name is: </h1>' + `<h2>StreetName: ${streetName} </h2> <h2>PetName: ${petName} </h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
