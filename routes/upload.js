

exports.view = function(req, res){
  var data = require('../userPosts.json');
    res.render('upload', data);
  };

  

exports.uploadPost = function(req, res){
  var data = require('../userPosts.json');
    var newPost = {
      "no": "0",
			"userID": "julieyuu",
			"category": "photography",
			"image": "source/images/" + req.query.imageURL,
			"question": req.query.question,
      "prompt": "",
			"postID": 1
    }
    data.userPosts.push(newPost);
    res.render('upload', data);
}

exports.updateCategory = function(req, res){
  console.log("submit");
  this.category = req.query.value;
  console.log(this.category);
}