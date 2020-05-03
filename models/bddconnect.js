var mongoose = require('mongoose');


var options = { useUnifiedTopology: true,connectTimeoutMS: 150000, useNewUrlParser: true}

mongoose.connect("mongodb+srv://arnaud:tendrepromesse69@cluster0-4dmkv.mongodb.net/athena?retryWrites=true&w=majority", 
  options, 
  function(error){
    console.log('Connection BDD : OK');
  }
);