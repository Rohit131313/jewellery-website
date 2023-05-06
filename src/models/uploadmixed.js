const mongoose=require("mongoose");

var uploadimg = mongoose.Schema({
    Picture : String
})
var uploadModel5 = mongoose.model('mixed_collection', uploadimg)


module.exports=uploadModel5;