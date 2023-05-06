const mongoose=require("mongoose");

var uploadimg = mongoose.Schema({
    Picture : String
})
var uploadModel3 = mongoose.model('bracelets', uploadimg)


module.exports=uploadModel3;