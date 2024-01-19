//import json-server library in index.js file
const jsonServer=require('json-server')

// create json-server
const productServer = jsonServer.create()

// CREATE path to json file
const router = jsonServer.router('db.json')

// middleware to convert json to js
const middleware= jsonServer.defaults()

//use middleware and router in server
productServer.use(middleware)
productServer.use(router)


// setup port for running server 
const port = 5000 || process.env.PORT


//to listen server resolving request from server
productServer.listen(port,()=>{
    console.log(`productserver started at ${port} and waiting for the request`);
}) 
