const express = require('express');
const app = express()

const port = '5000'

app.use(express.json());
app.get('/', (req, res)=> {
    res.send({ "slackUsername": 'adewunmi', "backend": true, "age": 27, 
                 "bio": 'A tech enthusiast that is always willing to profer solutions to problems' });
})

app.post('/', (req, res) => {
  let { operation_type, x, y } = req.body
  let result
  if (["addition", "plus", "add", "together"].includes(operation_type)){
    operation_type = "addition"
    result = x + y
  } else if (["subtraction", "minus", "remove", "difference", "subtract"].includes(operation_type)){
    operation_type = "subtraction"
    result = x - y
  } else if (["multiplication", "times", "multiply"].includes(operation_type)){
    operation_type = "multiplication"
    result = x * y
  } else {
    operation_type = 'I dont understand'
    result = null
  }
  res.send({
    slackUsername: "adewunmi",
    operation_type: operation_type,
    result: result,
  })
})



app.listen(port, () => {
    console.log(`HNGi9 Task-1 listening at http://localhost:${port}`);
  });