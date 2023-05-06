const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://Rohit:26jIDkYY5IfwGcJR@cluster0.yugbopy.mongodb.net/jewellers?retryWrites=true&w=majority', {//mongodb://127.0.0.1:27017/guptajewellers
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(() => {
  console.log('Connection successful');
}).catch((e) => {
  console.log('Connection failed:', e.message);
});



