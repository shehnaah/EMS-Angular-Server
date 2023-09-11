// steps to generate json server

// 1.import json-server
const jsonServer = require('json-server')

// 2.create our own server to run json file
const server = jsonServer.create()

// 3.generate a middleware to use in jsonserver
const middleware = jsonServer.defaults()

// 4.setup path for db.json
const router = jsonServer.router("db.json")

// 5.set up port for server
const port = 3000 || process.env.PORT

// 6.use middleware,router to server
server.use(middleware)
server.use(router)

// server listen/ run to request
server.listen(port,()=>{
    console.log("Employee portal server started at port No: "+port);
})