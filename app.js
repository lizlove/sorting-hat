var express = require("express")
, bodyParser = require("body-parser");

var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add success and fail methods to response
express.response.success = function(data) {
  this.json({success: true, "data": data});
};
express.response.fail = function(code, message) {
  this.json({success: false, "code": code, "message": message});
};
 
var routes = require("./routes/routes.js")(app);
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
