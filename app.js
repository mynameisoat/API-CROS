const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  // กำหนด URL ปลายทาง
  const url =
    "https://rguard.ntdigitalsolutions.com/api/province/Chiang Mai/hourly-aqi";
  const headers = {
    apikey: "DjZXKQP5F7vH9A8CSOHtVUB5trVeR9Un", 
  };
  

  // ส่ง Request ไปยัง URL ปลายทาง
  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error.message));
});

app.get("/Chom-Thong", (req, res) => {
  // กำหนด URL ปลายทาง
  const url =
    "https://rguard.ntdigitalsolutions.com/api/province/Chiang Mai/district/Chom Thong/hourly-aqi";
  const headers = {
    apikey: "DjZXKQP5F7vH9A8CSOHtVUB5trVeR9Un", 
  };
  

  // ส่ง Request ไปยัง URL ปลายทาง
  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error.message));
});

app.get("/Chiang-Dao", (req, res) => {
  // กำหนด URL ปลายทาง
  const url =
    "https://rguard.ntdigitalsolutions.com/api/province/Chiang Mai/district/Chiang Dao/hourly-aqi";
  const headers = {
    apikey: "DjZXKQP5F7vH9A8CSOHtVUB5trVeR9Un", 
  };
  

  // ส่ง Request ไปยัง URL ปลายทาง
  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(4000, () => {
  console.log("Proxy server is listening on port 4000");
});
