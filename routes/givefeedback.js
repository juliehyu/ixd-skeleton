var data = require('../postData.json');
var data_f = require('../feedbackData.json');

var itemToShow;
exports.view = function(req, res){
    
    itemToShow = req.params.itemNO;
    console.log(itemToShow);
    console.log(data.posts[itemToShow]);
    var currentData = data.posts[itemToShow];
    currentData.image = "../" + currentData.image;
    res.render('givefeedback', currentData); 
};

exports.addfeedback = function(req, res){
    var currentData = data.posts[itemToShow];
    var newFeedback = {
      "userID": currentData.userID,
      "postID": currentData.no,
      "evaluatorID": "karen",
      "questionResp": req.query.answer1,
      "promptResp": req.query.answer2,
      "stars": null
    }
    console.log("BEFORE");
    console.log(data_f.feedback);
    data_f.feedback.push(newFeedback);
    console.log("-----------------------");
    console.log("AFTER");
    console.log(data_f.feedback);
}