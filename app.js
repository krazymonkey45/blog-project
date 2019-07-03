const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [{taskItem: "Work on my portfolio" },{taskItem: "Code and watch anime"},{taskItem: "Sleep"}];

//settnig up
const app = express();
bodyParser.urlencoded({extended: false})
// setting template engine
app.set("view engine","ejs");

//use middleware to serve static filesl semiddleawre to serve static files use middle ware to server static files use middle ware to serve static files use middle ware to serve static files use middle eware to serve static files use middle ware to serve static filse use middle ware to serve use middleware to serve static files use middleware to serve statle use middle ware to serve static files use middleawre to serve tatic files use middle ware to server static file suse middle ware to serve static files use middle ware to serve static files use middle waer to srve 
app.use(express.static('./public'));

// GEt for tasks: returns all tasks
app.get('/homePage', function (req, res) {  
    console.log("hitting get route");
    // rendering tasks view and passing taskToDo data
    res.render('homePage', {taskToDo: dummyData});
});
 
// Post for tasks: posting a task
app.post('/homePage', urlEncoded, function(req, res){
    //formatting for incoming data to add to my data set
  console.log("hitting Post route");
  let incomingItem = {}
  incomingItem.taskItem = req.body.task
  dummyData.push(incomingItem)
  console.log(dummyData)
  res.redirect('/homePage')
});
// delete for task deleting specific task
app.delete("/homePage/:id", function(req, res){
    // deleting item from data set
    dummyData.splice(req.params.id, 1);
    // console.log(dummyData);
    res.json(dummyData)
});
  

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')  
})