const mongoose=require("mongoose");

var uploadimg = mongoose.Schema({
    Picture : String
})
var uploadModel1= mongoose.model('rings', uploadimg)


module.exports=uploadModel1;