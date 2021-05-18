var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("shilpadb");
  var col = dbo.createCollection("register", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");

    var myobj = [{ name: "seema", address: "Bangalore 26" }, { name: "AJAY", address: "Hyderbad 45"}];
  dbo.collection("register").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");


    // var dbo = db.db("new");
    dbo.collection("register").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);


  var myquery = { address: "Hyderbad 45" };
  var newvalues = { $set: {name: "Anu", address: "ANDRA 456 " } };
  dbo.collection("register").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });

  dbo.collection("register").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });

  var myquery = { address: 'Bangalore 26' };
  dbo.collection("register").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
   });

   dbo.collection("register").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });

  });
});
});
//   db.close();

}); 