
/*
 * GET results page.
 */

exports.results = function(req, res){
  res.render('results', { appTitle: 'Test Results'});
};
