const express = require('express');

// express app
const app = express();

//
app.use(express.static(__dirname + '/static'));

// listen for requests
app.listen(8000);

app.get('/', (req, res)=>{
    res.sendFile('/views/index.html', {root: __dirname})  
});

// app.use((res, req)=>{
//     res.status(404).sendText("Not Matched!");
    
// });