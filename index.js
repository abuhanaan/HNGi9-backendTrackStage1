const express = require('express');
const app = express()

const port = '3000'

app.get('/', (req, res)=> {
    res.send({ "slackUsername": 'adewunmi', "backend": true, "age": 27, 
                 "bio": 'A tech enthusiast that is always willing to profer solutions to problems' });
})

app.listen(port, () => {
    console.log(`HNGi9 Task-1 listening at http://localhost:${port}`);
  });