const mongoose= require('mongoose');

const connection= mongoose.createConnection('mongodb+srv://djstsoftware260:djst1234@cluster0.aoihj.mongodb.net/').on('open',()=>{
    console.log("Mongodb connected");
}).on('error',()=>{
    console.log("Mongodb connection error");
});

module.exports = connection;