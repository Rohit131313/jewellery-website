const mongoose=require("mongoose");

var uploadimg = mongoose.Schema({
    Picture : String
})
var uploadModel2 = mongoose.model('necklace', uploadimg)


module.exports=uploadModel2;