const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const shops = require("./routes/shops");

dotenv.config();
const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/shops", shops);

const port = process.env.PORT || 4444;

server = app.listen(port, () => console.log(`Server running on port ${port}`));
