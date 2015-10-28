'use strict';

angular.module('GithubIssue.Common')
.controller('MainCtrl', ['$scope', function($scope) {
  /*code for angular bootstrap alert*/
  $scope.alerts = [];
  
  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
 
}]);