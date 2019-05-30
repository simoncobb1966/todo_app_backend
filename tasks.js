// Enter help for a list or the name of one of the first 10 James bond films 
//(Goldfinger, Thunderball as examples.)


const express = require("express")
const serverless = require("serverless-http")

const app = express()

app.get("/tasks", function (request, response) {
  const title = request.query.title

  var listOfTasks = [
    {description: "Stop Dr No blowing up the world", Taskid:1, Completed: true, UserId:1},
    {description: "Play golf with Goldfinger", Taskid:2, Completed: false, UserId:1},
    {description: "Stop the Russians doing Russiany things",  Taskid:3, Completed: true, UserId:1},
    {description: "Stop Mr Bigs drug cartel",  Taskid:4, Completed: true, UserId:1},
    {description: "Stop Smersh from capturing our submarines", Taskid:5, Completed: false, UserId:1}
  ]



  response.json({
    // message: `Title ${title} requested the task. ${returnData}`
    tasks: listOfTasks
  })

})

module.exports.handler = serverless(app)

// https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks?username=simon
// to deploy:- serverless deploy function --function tasks
// if just the tasks file has been update you can use 'serverless deploy' on its own