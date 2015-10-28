'use strict';

//Application Module
angular.module('GithubIssue', [
  'ngRoute', //routing angular app
  'GithubIssue.Common' // created module for common purpose
])
/*config block where we defined route related stuff and app configuration stuff*/
.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {

  $routeProvider
  .when('/github-issue', {
    templateUrl: 'app/github-issue/issue.html',
    controller: 'ListCtrl'
  })
  .otherwise({redirectTo: '/github-issue'});
}])

.constant('baseUrl','https://api.github.com/');;

