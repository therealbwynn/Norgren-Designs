var path = require("path");

module.exports = function(app) {
  var admin = require('./controllers/admin');
  // server routes =============================================================
  // handle api calls
  // authentication routes

  // Home Routes
  // ADMIN & User ==============================================================

  // get
  app.get("/api/main", admin.getMain);

  // post - ADMIN This route creates a new home content object
  app.post("/api/main", admin.postMain);

  // put
  app.put('/api/main', admin.updateMain);

  // delete
  app.delete('/api/main', admin.deleteMain);

  // Employees Routes - ADMIN & user route =====================================

  // get
  app.get("/api/employees", admin.getEmployees);

  // post
  app.post('/api/employees', admin.addEmployee);
  // put
  app.put('/api/employees', admin.updateEmployee);
  // delete
  app.delete('/api/employees', admin.removeEmployee);

  // Services Routes - ADMIN & user route ======================================

  // get 
  app.get("/api/services", admin.getServices);

  // post - ADMIN - endpoint creates a new service item. This is responsible for the
  // title creation of a service item, leaving the items to be filled individually
  // via the front end
  app.post("/api/services", admin.addServices);

  // put - ADMIN - endpoint will update individual items within the items array
  app.put('/api/services/items', admin.addServiceItems);

  // delete - ADMIN -- endpoint removes item by id
  app.delete('/api/services', admin.removeService);

  // Messages Routes ===========================================================
  // this will handle the form data coming from inquiries
  // GET - for admin views
  app.get('/api/messages', admin.getMessages);

  // POST - from user input
  app.post('/api/messages', admin.postMessage);

  // DELETE - admin view
  app.delete('/api/messages', admin.deleteMessage);

// frontend routes
// =============================================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.get("/admin", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/views/admin/admin.html"));
})


};
