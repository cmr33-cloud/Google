const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());


results = [
    {headline:'Rasool has quit futureproof', main:"damn"},
    {headline:'Arafath has quit futureproof', main:"damn"},
    {headline:'Ria has quit futureproof', main:"damn"},
    {headline:'Callum has quit futureproof', main:"damn"},
    {headline:'Ben has quit futureproof', main:"damn"},
    {headline:'Dim has quit futureproof', main:"damn"},
    {headline:'Sansi has quit futureproof', main:"damn"},
    {headline:'Brodie has quit futureproof', main:"damn"},
    {headline:'Velin has quit futureproof', main:"damn"},
    {headline:'Claire has quit futureproof', main:"damn"}
]

app.get('/', (req, res) => res.send('Hello World'))

app.get('/results', (req, res) => {
    const headlines = results.map(story => story.headline); 
    res.send(headlines)

}
)

let port = 3000
// To do: Get the server running
app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})