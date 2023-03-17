const express = require("express");
// const scss = require("node-sass");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
// import { engine } from "express-handlebars";
const port = 3000;
app.use(express.static(path.join(__dirname, "asset")))
//HTTP logger
app.use(morgan("combined"));
// Template engine
app.engine('hbs', engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resource/views"));

app.get('/', (req, res) => {
    //  res.render('home');
    res.json(require('./vi.json'))
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//nodemone - lắng nghe sự thay đổi của app mà không cần reload lại app
