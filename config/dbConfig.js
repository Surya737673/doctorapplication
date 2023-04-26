const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://Surya:Captain9170@cluster0.dt1waul.mongodb.net/test")
  .then(() => {
    console.log("💿 Database connected ");
  })
  .catch((err) => { console.log('Failed to connect Database ⚠️', err.stack);});


  const connect = mongoose