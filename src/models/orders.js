const mongoose=require("mongoose");

const customerSchema = new mongoose.Schema({
    fname:{
        type:String,
        
    },
    cnumber:{
        type:Number,
        
    },
    email:{
        type:String,
        
    },
    badd:{
        type:String

    },
    sadd:{
        type:String
    },
    typej:{
        type:String,
        
    },
    metal:{
        type:String,
        
    },
    size:{
        type:Number,
        
    },
    budget:{
        type:Number,
        
    },
    special_requests:{
        type:String,
        
    }
})

// collection creation
const Users=new mongoose.model("UsersList",customerSchema);

module.exports=Users;