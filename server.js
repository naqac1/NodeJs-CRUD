const express = require('express')
const app = express()
// Using Node.js `require()`
const mongoose = require('mongoose');
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb+srv://admin:pass@cluster0.le0mieu.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to database')
}).catch(()=>{
    console.log(error)
})