const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const fullResults = require('./data')



app.get('/', (req, res) => res.send('Hello World'))

app.get('/results', (req, res) => {
    res.send(fullResults)
    // const headlines = fullResults.map(story => story.headline); 
    // res.send(headlines)


    
    }
)

let port = 3000

app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})