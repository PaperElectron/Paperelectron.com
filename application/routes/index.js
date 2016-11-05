/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Main routes
 * @module index
 */

module.exports = function(Router){
  Router.get('/', function(req, res){
    res.render('Frontpage');
  })

  return Router
};