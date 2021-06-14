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









app.listen(3000);


