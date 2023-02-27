const express = require("express");
const {accessControl,defaultMiddleware} =require("./middleware");
const users =[
    {id:1, name: "Celalcan Hacıahsanoğlu", place: "Trabzon"},
    {id:2, name: "Yakup Bayrak", place: "Mersin"}
]

const app = express();

const PORT = 5000;

app.use(express.json());
//app.use(accessControl); //Uygulama Kapsamı
//GET Request
//localhost:5000/users

// app.get("/users", [accessControl,defaultMiddleware],(req,res,next)=>{
//     // res.send("<h1>Hello Express</h1>");
//     res.json(users);
// });

// app.get("/Products", (req,res,next)=>{
//     // res.send("<h1>Hello Express</h1>");
//     res.send("Products");
// });

app.get("/users", (req,res,next)=>{
    res.json({
        success:true,
        data:users
    });
});

app.post("/users", (req,res,next)=>{
    const user = req.body;
    users.push(user);
    res.json({
        success:true,
        data:users
    });
});

app.put("/users/:id", (req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i=0; i<users.length; i++) {
        if(users[i].id === id) {
            users[i]={
                ...users[i],
                ...req.body
            };
        }
    }
    console.log(req.params.id);
    res.json({
        success:true,
        data:users
    });
});
//users/1
app.delete("/users/:id", (req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i=0; i<users.length; i++) {
        if(users[i].id === id) {
            users.splice(i,1);
        }
    }
    res.json({
        success:true,
        data:users
    });
});

app.listen(PORT, () =>{
    console.log("Server Started PORT:"+ PORT);
});