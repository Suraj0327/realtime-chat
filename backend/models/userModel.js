const mongooe=require("mongoose");
const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    pic:{type:String,require:true,default:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F09%2Fe2%2Fcd%2F09e2cd8d3a83b6e9cd4dc5d0d703a575.png&tbnid=UJoop_lC0jpSRM&vet=12ahUKEwjvgaOd-YWAAxU05TgGHQL8CLwQMygKegUIARD6AQ..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fchat-app-ios-icon--544020829958263929%2F&docid=q_R7nP_x6OHGeM&w=800&h=600&q=pic%20for%20chat%20app&ved=2ahUKEwjvgaOd-YWAAxU05TgGHQL8CLwQMygKegUIARD6AQ"},

},{
    timestamps:true
})
const User=mongoose.model("User",userSchema);
module.exports=User;