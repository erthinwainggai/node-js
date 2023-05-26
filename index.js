const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const radius = req.query.radius || 0; // Mengambil nilai radius dari query parameter
  const area = Math.PI * Math.pow(radius, 2); // Menghitung luas lingkaran

  res.send(`Luas lingkaran dengan radius ${radius} adalah ${area}`);
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000/");
});
