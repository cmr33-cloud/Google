const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());




app.get('/', (req, res) => res.send('Hello World'))







let port = 3000
// To do: Get the server running
app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})