const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('ok'));

//for test route

app.get('/test', (req, res) => { res.send({   status:200, 
    message:"ok" });
 })


//for time 

app.get("/time", (req, res) => {
const t = new Date();
const timeset = `${t.getHours()}:${t.getSeconds()}`;
const time = {
status : 200,
message : timeset
}
res.send(time);
})

//for Hello route


    
app.get("/hello/:id", (req, res) => {
    const m = `Hello, ${req.params.id}`
    const hi = {
        status: 200,
        message: m
    }
    res.send(hi)
})


// Search 

app.get("/search", (req, res) => {
    let status, message, data, search, error
    if(req.query.s){
        status = 200;
        message = "ok";
        data = req.query.s;
        search = {
            status: status,
            message: message,
            data: data
        }
    } else {
        status = 500;
        message = "you have to provide a search";
        error = true;
        search = {
            status: status,
            message: message,
            error: error
        }
    }
    res.send(search);
})


app.listen(3000);


