const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let users = [
    {
        id: 1,
        username: 'Abbas',
        age: 17
    },
    {
        id: 2,
        username: 'Nazrin',
        age: 20
    },
    {
        id: 3,
        username: 'Isa',
        age: 18
    },
]


app.get('/code/users', (req, res) => {
    res.json(users)
})

app.delete('/code/users/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((item) => item.id != id)
    res.json('User deleted successfully!')
})

app.put('/code/users/:id', (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    const index = users.findIndex(user => user.id == id);

    if (index !== -1) {
        users[index].username = username;
        res.json('Data updated successfully!');
    } 
});

app.post('/code/users', (req, res) => {
    const userBody = req.body
    users.push(userBody)
    res.send('User added successfully!')
})


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`.green.bold))