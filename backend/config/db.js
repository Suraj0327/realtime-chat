const mongoose=require("mongoose");
const dotenv=require("dotenv");
const connectDB=async()=>{
    try{
        const conn = await mongoose.connect(process.env.Mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          
    console.log(`mongodb connected: ${conn.connection.host}`);
}catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
}

}
module.exports=connectDB;