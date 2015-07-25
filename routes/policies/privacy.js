/**
 * @file privacy
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Renders the privacy policy page.
 * @module privacy
 */

module.exports = function(Router) {

  Router.get('/', function(req, res, next){
    res.render('policies/privacy', {title: 'Privacy Policy'})
  });

  return Router
};