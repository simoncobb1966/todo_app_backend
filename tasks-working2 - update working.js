const express = require("express")
const serverless = require("serverless-http")
const mysql=require("mysql")
const app = express()
// const cors = require('cors')

//app.use(cors())
app.use(express.json())


const connection=mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:"todoapplication"
})

//connection.connect()

app.post("/tasks", function(request, response){

  const taskToBeSaved = request.body

  connection.query('INSERT INTO Tasks SET?', taskToBeSaved, function (error, results, fields){
    if (error) {
      console.log("Error saving new task",error)
      response.status(500).json({
        error: error
      })
    }
    else {
      response.json({
        taskId: results.insertId
      })
    }
  })
})

app.get("/tasks", function (request, response) {
// "/tasks" - is because the url has "/tasks" after the endpoint.

  connection.query("SELECT * FROM Tasks", function(err,result,fields) {
 if (err!==null) {
   console.log("error fetching tasks", err)
   // respond with suitable response
   response.send(500)
 } else
    response.json({ tasks:result })
  })
})

// app.put("/tasks/:id", function (request, response) {
//   const taskId=request.params.id
//   console.log(taskId)
//   connection.query('UPDATE Tasks SET description="Kill baddies", completed=0, userid=1 WHERE TaskId = ?',[4], function(err, result, fields) {
//     if (err!==null){
//       console.log("Something went wrong updating the task", err)
//       response.send(500)
//     } else {
//       respond.send("Item Updated")}
//     })
// })

app.put("/tasks/:id", function (request, response) {
  const taskId=request.params.id
  console.log(taskId)
  connection.query('UPDATE Tasks SET description="Kill baddies", completed=0, userid=1 WHERE TaskId = ?', [taskId], function(err, result, fields) {
    if (err!==null) {
      console.log("Something went wrong updating the task", err)
      response.send(500)
    } else {
    response.send ("Item Updated")
    }
  })
})

app.delete("/tasks/:id", function (request, response) {
  const taskId=request.params.id
  console.log(taskId)
  connection.query("DELETE FROM Tasks WHERE TaskId = ?", [taskId], function(err, result, fields) {
    if (err!==null) {
      console.log("Something went wrong deleting the task", err)
      response.send(500)
    } else {
    response.send ("Item Deleted")
    }
  })
})


module.exports.handler = serverless(app)

// https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks?username=simon
// to deploy:- serverless deploy function --function tasks
// if just the tasks file has been update you can use 'serverless deploy' on its own
  // host: "todoapplication.cfwgd2eitm3t.eu-west-2.rds.amazonaws.com",
  // user:"root",
  // password:"bradford1",