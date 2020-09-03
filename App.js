//Dependencies
const express = require('express')

// 'express' server called app
const app = express()

//The database will asign portnumber or Sets a port at 8080 
var PORT = process.env.PORT || 8080;



//Use a middleware to parse the JSON data
 app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//what folder the browser can see
app.use(express.static("public"));

// routes path
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT,()=>{console.log("App listening on PORT: " + PORT)})