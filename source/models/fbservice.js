app
.service('FBService', function($window, $firebaseAuth, urls){
  var fb = this;
  console.log("service");
  this.db = new Firebase(urls.firebaseUrl);

  this.db.onAuth(function(authData) {
    console.log(authData);
    if (authData) {
      fb.currentUser = authData.twitter;
    }
  });

  this.twitterLogout = function() {
    fb.db.unauth();
  };

  this.twitterLogin = function() {
    fb.db.authWithOAuthRedirect("twitter", function(error) {
      if (error) {
        console.log("Login Failed!", error);
      }
    });
  };
});
