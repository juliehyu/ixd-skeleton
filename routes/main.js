function requireUncached(module){
  delete require.cache[require.resolve(module)];
  return require(module);
}

exports.view = function(req, res){
  // TODO: for now, your own posts are also shown in the deck
  // TODO: all categories are shown in the same deck
  var data = requireUncached('../postData.json');
  var postsP = data.posts.filter(element => element.userID != "karen" && element.category == "photography");
  var postsI = data.posts.filter(element => element.userID != "karen" && element.category == "illustration");
  var postsG = data.posts.filter(element => element.userID != "karen" && element.category == "graphicdesign");
  var filteredData = {
    "PostsP": postsP,
    "PostsI": postsI,
    "PostsG": postsG
  }
  res.render('main', filteredData);
};