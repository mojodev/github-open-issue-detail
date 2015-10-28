'use strict';

//Application Module
angular.module('GithubIssue', [
  'ngRoute',
  'ui.bootstrap',
  'GithubIssue.Common'
])
.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {

  $routeProvider
  .when('/github-issue', {
    templateUrl: 'app/github-issue/issue.html',
    controller: 'ListCtrl'
  })
  .otherwise({redirectTo: '/github-issue'});
  //$httpProvider.interceptors.push('authInterceptor');
}])

.constant('baseUrl','https://api.github.com/repos/shidhincr/LookAround/issues?state=open')

// .factory('authInterceptor', function($location, $q, $window) {
// return {
//     request: function(config) {
//       config.headers = config.headers || {};

//       config.headers['X-Mashape-Key']  = 'Jz8ocTfd8vmshj09dx8HXu7Zm5UPp1TQFjRjsnHTrIyhMp7XMf';
//       config.headers['Accept'] = 'application/json';
//       return config;
//     }
//   };
// })
