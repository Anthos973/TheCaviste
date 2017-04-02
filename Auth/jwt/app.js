var jwt = require('jsonwebtoken');

app.post('/handle-login', function(req, res, next) {

   var users = {
    wolfram: {
      username: 'wolfram',
      password: 'password'
    },
    chris: {
      username: 'chris',
      password: 'password'
    }
    // . . .
  }

  var user = users[req.body.username];

  if (!user) {
      res.status(403).send('Invalid User')
    } else {
      // check if password and username matches
      if (user.username != req.body.username || user.password != req.body.password) {
        res.status(403).send('Invalid Password')
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, 'abrakadabra');

        // return the information including token as JSON
        // set token to cookie using the httpOnly flag
        res.cookie('access_token', token, {httpOnly: true}).status(301).redirect('/');
      }   
    }
});