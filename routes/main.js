var data = require('../postData.json');

exports.view = function(req, res){
  res.render('main', data);
};