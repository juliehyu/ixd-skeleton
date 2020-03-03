function requireUncached(module){
  delete require.cache[require.resolve(module)];
  return require(module);
}

exports.view = function(req, res){
  // TODO: for now, your own posts are also shown in the deck
  // TODO: all categories are shown in the same deck
  var data = requireUncached('../postData.json');
  res.render('main', data);
};