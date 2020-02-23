function requireUncached(module){
    delete require.cache[require.resolve(module)];
    return require(module);
}

exports.view = function(req, res){
    var data = requireUncached('../feedbackData.json');

    var givenDataP = data.feedback.filter(element => element.evaluatorID == "karen" && element.category == "photography");
    var givenDataI = data.feedback.filter(element => element.evaluatorID == "karen" && element.category == "illustration");
    var givenDataG = data.feedback.filter(element => element.evaluatorID == "karen" && element.category == "graphicdesign");
    var receivedDataP = data.feedback.filter(element => element.userID == "karen" && element.category == "photography");
    var receivedDataI = data.feedback.filter(element => element.userID == "karen" && element.category == "illustration")
    var receivedDataG = data.feedback.filter(element => element.userID == "karen" && element.category == "graphicdesign");
    var feedbackData = {
        "givenP": givenDataP,
        "givenI": givenDataI,
        "givenG": givenDataG,
        "receivedP": receivedDataP,
        "receivedI": receivedDataI,
        "receivedG": receivedDataG
    }
    res.render('history', feedbackData);
};