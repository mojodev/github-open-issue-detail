'use strict';

angular.module('GithubIssue').controller('ListCtrl', ['$scope','CommonFactory','$filter',function($scope, CommonFactory,$filter) {

    $scope.getIssues = function(search,type) {
      //api call for issue list.
        CommonFactory.getIssue(search.url)
          .then(function(data){
              if(type){
                $scope.issueList = $filter('filteredIssue')(type, data.data);
              }
              else{
                $scope.issueList=data.data;
              }
              
          })
          .catch(function(err){
            $scope.alerts.push({msg: 'error in fetching Issue Information.', type:'danger'});
          }) 
    }

}]);


angular.module('GithubIssue')
.filter('filteredIssue', function () {
    return function (input, states) {
      var filtredIssue = [];
        if(input =='1'){
          var epocTime = new Date().getTime() - 24*60*60*1000
          for (var i = 0; i < states.length; i++) {
            if (new Date(states[i].created_at).getTime() >= epocTime) {
                 filtredIssue.push(states[i]);
            }
          }
        }
        else if(input =='1-7'){
          var startEpocTime = new Date().getTime() - 24*60*60*1000
          var endEpocTime = new Date().getTime() - 7*24*60*60*1000

          for (var i = 0; i < states.length; i++) {
            if (new Date(states[i].created_at).getTime() >= endEpocTime &&new Date(states[i].created_at).getTime() <= startEpocTime) {
                 filtredIssue.push(states[i]);
            }
          }
        }
        else if(input =='7'){
          var epocTime = new Date().getTime() - 7*24*60*60*1000
          for (var i = 0; i < states.length; i++) {
            if (new Date(states[i].created_at).getTime() <= epocTime) {
                 filtredIssue.push(states[i]);
            }
          }
        }
        
        return filtredIssue;
    };
})
