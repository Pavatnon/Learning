import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "drakzone111";
const yourPassword = "drakzone222";
const yourAPIKey = "a423ff03-d205-44c7-9dfe-8dc0ae89494b";
const yourBearerToken = "80f2d169-be47-4cef-b023-fa9d85d9d896";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) =>{
  try {
    const result = await axios.get(`${API_URL}/random`);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
  try {
    const result = await axios.get(`${API_URL}/all?page=2`,{
      auth:{
        username:yourUsername,
        password:yourPassword
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async(req, res) => {
  try {
    const result = await axios.get(`${API_URL}/filter`,{
      params:{
        score:5,
        apiKey:yourAPIKey
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async(req, res) => {
  try {
    const result = await axios.get(`${API_URL}/secrets/2`,{
      headers:{
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
