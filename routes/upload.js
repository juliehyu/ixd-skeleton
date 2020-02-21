var data = require('../userPosts.json');

exports.view = function(req, res){
    res.render('upload', data);
  };

  

exports.uploadPost = function(req, res){
  console.log(req.query);
    var newPost = {
      "no": "0",
			"userID": "julieyuu",
			"category": "photography",
			"image": "source/images/" + req.query.imageURL,
			"question": req.query.question,
			"prompt": "How is the layout?",
			"postID": 1
    }
    console.log(req.query.imageURL);
    data.userPosts.push(newPost);
    res.render('upload', data);
}