'use strict';

angular.module('GithubIssue').controller('ListCtrl', ['$scope','CommonFactory','$filter',function($scope, CommonFactory,$filter) {

    $scope.getIssues = function(search,type,form) {
      //api call for issue list.
      if(form.$valid){
        var urlsComonent = search.url.split('/');
        search.userName = urlsComonent[3];
        search.repo = urlsComonent[4];

          CommonFactory.getIssue(search)
            .then(function(data){
              /*here we filter issue based on time period.*/
                if(type){
                  $scope.issueList = $filter('filteredIssue')(type, data.data);
                }
                /*here we are showing all issue*/
                else{
                  $scope.issueList=data.data;
                }
                
            })
            .catch(function(err){
              console.log('error in fetching Issue Information.')
            }) 
        }
    }

}]);


