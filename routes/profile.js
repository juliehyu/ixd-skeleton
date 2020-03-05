function requireUncached(module){
  delete require.cache[require.resolve(module)];
  return require(module);
}

exports.view = function(req, res){
    var data = requireUncached('../postData.json');
    var postsP = data.posts.filter(element => element.userID == "karen" && element.category == "photography");
    var postsI = data.posts.filter(element => element.userID == "karen" && element.category == "illustration");
    var postsG = data.posts.filter(element => element.userID == "karen" && element.category == "graphicdesign");
    var filteredData = {
      "userPostsP": postsP,
      "userPostsI": postsI,
      "userPostsG": postsG
    }
    res.render('profile', filteredData);
};