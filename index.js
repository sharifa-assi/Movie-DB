const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('ok'));

// route
app.get('/test', (req, res) => { res.send({   status:200, 
                                              message:"ok" });
                                           })





app.listen(3000);


