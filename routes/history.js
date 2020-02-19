var data = require('../feedbackData.json');

exports.view = function(req, res){

    var givenData = data.feedback.filter(element => element.evaluatorID == "karen");
    var receivedData = data.feedback.filter(element => element.userID == "karen");
    console.log("given feedback");
    var feedbackData = {
        "given": givenData,
        "received": receivedData
    }
    console.log(feedbackData);
    res.render('history', feedbackData);
};