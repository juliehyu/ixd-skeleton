function requireUncached(module){
  delete require.cache[require.resolve(module)];
  return require(module);
}

exports.view = function(req, res){
  res.render('upload');
};