/**
* @Author: Justin Schieck
* @Date:   2017-03-15T12:32:25-04:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-03-15T13:40:02-04:00
*/



/**
 * Created by RFreeman on 2/8/2017.
 */

// array of global variables
module.exports = {
    // db: 'mongodb://localhost/comp2068-w2017' // local mongodb
    db: 'mongodb://JustinSchieck:Kiraanne1@ds147079.mlab.com:47079/comp2068',  // mlab
    facebook:{
      clientID: '1888027564815127',
      clientSecret:'db14241e519fab31c1d24a8bbf839059',
      callbackURL:'http://localhost:3000/facebook/callback'
    },
    google:{
      clientID: '701719418551-c76m09cqsut235sa2eis732kpaf8mjb0.apps.googleusercontent.com',
      clientSecret:'8KFYd137koFYzEKyDvIH9UX6',
      callbackURL:'http://localhost:3000/google/callback'
    }
};
