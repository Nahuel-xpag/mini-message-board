const express = require('express');
const app = express();

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require('./routes/newMessageRouter');
const brolyRouter = require('./routes/brolyRouter');
const path = require("node:path");


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/broly", brolyRouter);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`My second express app listening on ${PORT}`)
})