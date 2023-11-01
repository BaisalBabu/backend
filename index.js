const express=require("express")
const cors=require("cors")
const app=new express();
const studmodel=require('./model/product')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.listen(3005,(request,response)  => {
console.log("Port is running in 3005")
})


app.get('/',(request,response) =>{
    response.send("hai database")
})

app.post('/new',(request,response)=>{
    console.log(request.body)
    new studmodel(request.body).save();
    response.send("Record saved")
})

