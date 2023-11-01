const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://gauthamsajus686:2003@cluster0.btg6bil.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log("database connected")
})
.catch(err =>
    
        console.log(err)
    )


    let sc=mongoose.Schema;
        const studschema = new sc(
            {
                admno:Number,
                sname:String,
                age:Number
            }
        );

        var studmodel=mongoose.model("stud",studschema)
        module.exports=studmodel;

