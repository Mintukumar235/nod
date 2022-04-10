const express = require("express");
//const res = require("express/lib/response");
const path = require("path");
const app = express();
require("./db/conn");
const hbs = require("hbs");
const Register = require("./models/registers");
const async = require("hbs/lib/async");
const { constants } = require("buffer");


const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public" );
const template_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partial" );
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
});

hbs.registerPartials(partials_path);
app.get("/logine", (req, res) => {
    res.render("logine")
});


hbs.registerPartials(partials_path);
app.get("/register", (req, res) => { 
    console.log("regiter page open")
    res.render("register")
});
app.post("/register", async(req,res) =>{
    console.log("post data")
try{
    console.log(req.body.firstname);
    res.send(req.body.firstname);

    const password = req.body.password;
    const cpassword = req.body.repassword;
    if(password === cpassword){
        const registerNew = new Register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            repassword: req.body.repassword,
        })
        const registed = await registerNew.save();
        res.status(201).render("index");

    }
    else{
        res.send("password are not same ")

    } 
}catch (error) {
        res.status(400).send(error)
    }

})

app.listen(port,() => {
    console.log('server at port no 3000');

})