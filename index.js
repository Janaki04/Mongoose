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

var studentData1=new studentModel({           //creating collection
    name:"B",
    roll:"22",
    course:"mern",
    batch:6
})
var studentData2=new studentModel({
    name:"C",
    roll:"33",
    course:"mern",
    batch:7
})
var studentData3=new studentModel({
    name:"D",
    roll:"44",
    course:"mern",
    batch:9
})
studentData1.save((err,res)=>{          //inserting one
    if(err)console.log(err);
   else console.log(res);
})

studentModel.insertMany([studentData2,studentData3],(err,result)=>{    //inserting many
    if(err)console.log(err);
   else console.log(result);
})

const preData={batch:7}
const newData={batch:8}
studentModel.updateOne(preData,newData,(err,result)=>{         //updating values
    if(err)console.log(err);
   else console.log(result);
})

const teacherSchema = mongoose.Schema({     //creating a Schema Validation        
    name:{
        type:String,
        required:true
    },
    age:{
       type:Number,
       required:true
    },
    course:{
        type:String,
        require:true
    }
})
const teacherModel=mongoose.model("teacherlists",teacherSchema)    

var teacherData=new teacherModel({
    name:"AA",
    age:33,
    course:"mern"
    
})
var teacherData1=new teacherModel({
    name:"BB",
    age:32,
    course:"mern"
    
})
var teacherData2=new teacherModel({
    name:"CC",
    age:9,
    course:"mern"
    
})
teacherData.save((err,res)=>{
    if(err)console.log(err);
   else console.log(res);
})

teacherModel.insertMany([teacherData1,teacherData2],(err,res)=>{
    if(err)console.log(err);
   else console.log(res);
})

teacherModel.find({age:{$gt:10}},(err,res)=>{      //query
    if(err)console.log(err);
       else console.log(res);
})
const deleteData={name:"CC"}
teacherModel.deleteOne(deleteData,(err,res)=>{   //deleting collection
    if(err)console.log(err);
       else console.log(res);
})








































































































































































































































































