

const express = require("express")
const serverless = require("serverless-http")

const mysql=require("mysql")

const app = express()

const connection=mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // host: "todoapplication.cfwgd2eitm3t.eu-west-2.rds.amazonaws.com",
  // user:"root",
  // password:"bradford1",
  database:"todoapplication"
})

connection.connect()

app.get("/tasks", function (request, response) {
 


  connection.query("SELECT * FROM Tasks", function(err,result,fields) {
 if (err!==null) {
   console.log("error fetching tasks", err)
   // respond with suitable response
   response.send(500)
 }
    response.json({ tasks:result })
  })
})

  // response.json({
  //   // message: `Title ${title} requested the task. ${returnData}`
  //   tasks: "test"
  // })



module.exports.handler = serverless(app)

// https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks?username=simon
// to deploy:- serverless deploy function --function tasks
// if just the tasks file has been update you can use 'serverless deploy' on its own