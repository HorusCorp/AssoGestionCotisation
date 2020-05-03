// Pour "cacher" ses identifiants API
// require('dotenv').config();

var express = require('express');
var router = express.Router();
// Pour accéder aux fichiers
var cloudinary = require('cloudinary').v2


var userModel = require('../models/users');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// ROUTE SIGNUP

router.post('/signup', async function(req, res) {
  
  var error = []
  var result = false
  var saveUser = null

  const data = await userModel.findOne({
    nom: req.body.nom, prenom: req.body.prenom
  })


  if(data != null){
    error.push('User already exist')
  }
  
  if(req.body.nom == ''
  || req.body.prenom == ''
  ){
    result = false
    error.push('One ore more field is empty')
  }

  if(error.length == 0){
 
  var newUser = new userModel ({
    nom:req.body.nom,
    prenom:req.body.prenom,
    url:req.body.url,
    admin:false,
    bureau: false,
    cotisation:false,
    password:'',
    tel:req.body.tel,
    asso:req.body.asso,
    datepayment:'',
    dateToUse:null,
   })

   console.log(newUser);
   
   var userSaved = await newUser.save()

   if(userSaved){
    result = true
    console.log('UTILISATEUR ENREGISTRE');
    
   }else{
     result = false
    error.push('PAS D ENREGISTREMENT')
   }
   
  }
  res.json({result,saveUser,error});
});



// ROUTE SIGNIN

router.post('/signin', async function(req, res) {
  var error = []
  var result = false
  var user = null

  if(error.length === 0){
    const user = await userModel.findOne({ nom: req.body.nom }) 
    console.log(user)
    
    if(user){
      
      if (req.body.password === user.password) {
        result = true
      } else {
        result = false
        error.push('Wrong Username or Password')
      }
    }else{
      error.push('Wrong Username or Password')
    }

  res.json({result, user, error})

}});

// ROUTE GET ADERANTS

router.get('/getList', async function(req, res, next) {
  var aderantList= await userModel.find({admin:false})
  console.log(aderantList)
  res.json(aderantList)
})

router.delete('/deleteAderant/:adherantToSupress', async function(req, res, next) {
  const deleteUser = await userModel.deleteOne({_id:req.params.adherantToSupress})
  console.log(deleteUser)
  res.json({result:true})
})

router.put('/updateAderant', async function(req, res, next) {
  const updateUser = await userModel.updateOne({_id:req.body.id},{cotisation:true, datepayment:req.body.date, dateToUse:req.body.dateToUse})
  console.log(updateUser)

  res.json({result:true})
})

router.put('/updateAderantPhone', async function(req, res, next) {
  const updateUser = await userModel.updateOne({_id:req.body.id},{tel:req.body.phone})
  console.log(updateUser)

  res.json({result:true})
})

/////////////////////////////////
// BACK
/////////////////////////////////
// Installer :
// cloudinary
// express-form-data
// cors (peut-être déjà installé)
// body-parser (peut-être déjà installé)
// dotenv (recommandé)
/////////////////////////////////
const CLOUD_NAME = 'dzqfghzga'
const CLOUD_API_KEY = '933516614374948'
const CLOUD_API_SECRET = 'FdG1vI1G5J59Wl9M3zJ5d5P2dak'
// Setup cloudinary/////////////////////////
var cloudinary = require('cloudinary').v2;
cloudinary.config({
	cloud_name: CLOUD_NAME,
	api_key: CLOUD_API_KEY,
	api_secret:CLOUD_API_SECRET
});



// [...]

// ROUTE EN POST POUR UPLOAD PROFILE PICTURE
router.post('/upload-picture', async function(req, res, next) {
	const values = Object.values(req.files);
	const promises = values.map((image) => cloudinary.uploader.upload(image.path));

	// Option 1 avec crop
	Promise.all(promises).then((results) =>
		res.json({
			// Option 1 avec crop
			pictureURL: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_300,h_300,c_thumb/v${results[0].version}/${results[0].public_id}.${results[0].format}`
		
			// pictureURL: results[0].secure_url
		})
	);
});



module.exports = router;
