const mongoose=require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    number:{
        type:Number,
        
    },
    message:{
        type:String,
        

    }
})

// collection creation
const Customer=new mongoose.model("Customer",contactSchema);

module.exports=Customer;