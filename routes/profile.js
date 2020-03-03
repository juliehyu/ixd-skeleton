function requireUncached(module){
  delete require.cache[require.resolve(module)];
  return require(module);
}

exports.view = function(req, res){
    var data = requireUncached('../postData.json');
    var posts = data.posts.filter(element => element.userID == "karen");
    var filteredData = {
      "userPosts": posts
    }
    res.render('profile', filteredData);
};