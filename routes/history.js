var givefeedback = require('./givefeedback');
var data_f = givefeedback.data_f;

exports.view = function(req, res){
    res.render('history');
    console.log("hey");
    console.log(data_f);
};