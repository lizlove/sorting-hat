module.exports = function(app, express) {
  app.get("/", function(req, res) {
      res.render('index');
  });
  // main API route for sorting
  app.get("/:version/sort", function(req, res){

  });
};
