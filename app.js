var express = require("express")
,  compression = require('compression')
, bodyParser = require("body-parser")
;

var app = express();

var oneDay = 86400000;

app.use(compression());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

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

var server = app.listen(1717, function () {
    console.log("Listening on port %s...", server.address().port);
});
