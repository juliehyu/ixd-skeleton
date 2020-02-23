

exports.view = function(req, res){
  var data = require('../postData.json');
  res.render('main', data);
};