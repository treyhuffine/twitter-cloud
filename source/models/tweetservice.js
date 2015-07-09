app
.service('TweetService', function($http, urls, FBService) {
  var twitter = this;
  console.log("service");

  var withTokens = function(obj) {
    obj.access_token_key = FBService.currentUser.accessToken;
    obj.access_token_secret = FBService.currentUser.accessTokenSecret;
    return obj;
  };

  this.search = function(words) {
    var data = withTokens({ words: words });
    console.log(data);
    return $http.post(urls.apiUrl + '/search', data);
  };
  this.sendTweet = function(tweet) {
    var data = withTokens({ tweet: tweet });
    return $http.post(urls.apiUrl + '/sendtweet', data);
  };
});
