
var itemToShow;
exports.view = function(req, res){
    var data = require('../postData.json');
    itemToShow = req.params.itemNO;
    console.log(itemToShow);
    console.log(data.posts[itemToShow]);
    var currentData = data.posts[itemToShow];
    currentData.image = "../" + currentData.image;
    res.render('givefeedback', currentData); 
};