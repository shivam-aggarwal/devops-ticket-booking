const express = require('express')
const server = express()

const Show_Details = require('./db').Show_Details

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.get('/', function(req, res, next) { res.send("Theater Booking System API") })

// Routes
server.use('/new_user', require('./routes/new_user').route)

server.use((req, res) => res.send("404 Invalid API Call"))
server.listen(1611, () => console.log("Server Started At : http://localhost:1611/"))