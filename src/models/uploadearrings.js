const mongoose=require("mongoose");

var uploadimg = mongoose.Schema({
    Picture : String
})
var uploadModel4 = mongoose.model('earrings', uploadimg)


module.exports=uploadModel4;