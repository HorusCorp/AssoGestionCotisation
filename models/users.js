var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
        nom:String,
        prenom:String,
        url:String,
        password:String,
        admin:Boolean,
        bureau: Boolean,
        cotisation: Boolean,
        tel:String,
        asso:String,
        datepayment:String,
        dateToUse:Number,
   });

   var userModel = mongoose.model('users',UserSchema)

   module.exports = userModel;