const mongoose=require("mongoose")

const url="mongodb://localhost:27017/Academy"

mongoose.connect(url,(err,connection)=>{
    if(err)console.log(err);
     console.log("connected sucessfully");
})

const studentSchema = mongoose.Schema({             //creating a schema
    name:String,
    roll:Number,
    course:String, 
    batch:Number
})

const studentModel=mongoose.model("studentslists",studentSchema)    //creating model

var studentData1=new studentModel({
    name:"B",
    roll:"22",
    course:"mern",
    batch:6
})
studentData1.save((err,res)=>{
    if(err)console.log(err);
   else console.log(res);
})



































































































































































































































































