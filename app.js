
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
//  for JSON
var fs = require('fs');

var login = require('./routes/login');
var main = require('./routes/main');
var givefeedback = require('./routes/givefeedback');
var profile = require('./routes/profile');
var history = require('./routes/history');
var upload = require('./routes/upload');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// for JSON
app.use(express.static('public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/main', main.view);
app.get('/givefeedback/:itemNO', givefeedback.view);
// app.get('/givefeedback', givefeedback.addfeedback);
app.get('/profile', profile.view);
app.get('/history', history.view);
app.get('/upload', upload.view);
// app.get('/uploadPost', upload.uploadPost);
// app.get('/updateCategory', upload.updateCategory);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



app.get('/givefeedback', function(req, res) {
  //TODO: the user is always karen in this case

  var newFeedback = {
    no: req.query.no,           
    feedbackID: 0,   
    userID: req.query.userID,
    evaluatorID: "karen",
    category: req.query.category,
    image: req.query.image,
    questionResp: req.query.answer1,
    promptResp: req.query.answer2,
    stars: null
  }

  fs.readFile('./nextFeedbackID.json', 'utf8', function readFile(err, data){
    var parsedData = JSON.parse(data);
    
    console.log("Read out " + parsedData.nextFeedbackID);
    newFeedback.feedbackID = parsedData.nextFeedbackID;
    console.log("Psuh in " + newFeedback.feedbackID);


    var newObj = {
      nextFeedbackID: newFeedback.feedbackID + 1
    }
    console.log("New next " + newObj.nextFeedbackID);


    fs.writeFile('./nextFeedbackID.json', JSON.stringify(newObj), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
  });

  
  
  saveFeedbackToFile(newFeedback, function(err) {
    if (err) {
      res.status(404).send('Feedback not saved');
      return;
    }

    // res.send('/main', main.view);
    res.redirect('/main')
  });
});



function saveFeedbackToFile(newFeedback, callback) {
  fs.readFile('./feedbackData.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
      var parsedData = JSON.parse(data);
      parsedData.feedback.push(newFeedback);
      fs.writeFile('./feedbackData.json', JSON.stringify(parsedData), 'utf8', callback);
    }
  });
}




app.get('/uploadPost', function(req, res) {
  var newPost = {
    no: 0,
    userID: "karen",
    category: req.query.hiddenCategory,
    image: "source/images/" + req.query.imageURL,
    question: req.query.question,
    prompt: req.query.hiddenPrompt
  }

  fs.readFile('./nextPostID.json', 'utf8', function readFile(err, data){
    var parsedData = JSON.parse(data);
    
    console.log("Read out " + parsedData.nextPostID);
    newPost.no = parsedData.nextPostID;
    console.log("Psuh in " + newPost.no);


    var newObj = {
      nextPostID: newPost.no + 1
    }
    console.log("New next " + newObj.nextPostID);


    fs.writeFile('./nextPostID.json', JSON.stringify(newObj), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
  });



  savePostToFile(newPost, function(err) {
    if (err) {
      res.status(404).send('Post not saved');
      return;
    }
    console.log("here " + newPost.no);
    res.redirect('/upload')
  });
});


function savePostToFile(newPost, callback) {
  fs.readFile('./postData.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
      var parsedData = JSON.parse(data);
      parsedData.posts.push(newPost);
      console.log("hehe " + newPost.no);
      fs.writeFile('./postData.json', JSON.stringify(parsedData), 'utf8', callback);
    }
  });
}