const express = require('express');

// express app
const app = express();
const port = process.env.PORT || 8000;

//
app.use(express.static(__dirname + '/static'));

// listen for requests
app.listen(port);

app.get('/', (req, res)=>{
    res.sendFile('/views/index.html', {root: __dirname})  
});

// app.use((res, req)=>{
//     res.status(404).sendText("Not Matched!");
    
// });