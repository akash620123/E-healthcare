var express = require("express")
var bodyparser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/Database')
var db = mongoose.connection
db.on('error',() => console.log("connection error:"))
db.once('open',() => console.log("connected to database"))

app.post("/appointment",(req,res) => {
    var name = req.body.name
    var email = req.body.email
    var phone = req.body.phone
    var date = req.body.date
    var time = req.body.time
    var service = req.body.service
    var age = req.body.age

    var data = {
        "name": name,
        "email": email,
        "phone": phone,
        "date": date,
        "time": time,
        "service": service,
        "age": age,
        "gender":gender

    }    
    db.collection('appointment').insertOne(data,(err,collection) => {
        if(err) {throw err;}
        console.log("record inserted")
    })
    return res.redirect('/appointment.html')
})
app.get("/", (req,res) => {
    res.set({
        "Allow-access-Allow-origin":'*'
    })
    return res.redirect('/appointment.html')
}).listen(3000);

console.log("listening on port 3000")