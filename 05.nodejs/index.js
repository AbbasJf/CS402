const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())


let users = [
    {
        id : 3,
        name : "Abbas",
    },
    {
        id : 2,
        name : "Heyder",
    },
    {
        id : 4,
        name : "Heyder",
    },
   
]
 
app.get('/code/users', (req, res) => {
    res.json(users)
})

app.delete('/code/users/:id', (req, res) =>{
    const{id} = req.params
    users = users.filter((item) => item.id != id)
    res.json('User Deleted Successfully!')
}) 

app.post('/code/users/', (req, res) => {
    const userBody = req.body
    users.push(userBody)
    res.send('User Added Successfully!')
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`.green.bold))