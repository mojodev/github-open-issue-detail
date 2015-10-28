'use strict';

angular.module('GithubIssue.Common',[])
.factory('CommonFactory',['$http','baseUrl', function($http,baseUrl){
    return {
        getIssue : function (apiComp) {
        	var url = baseUrl+'repos/'+apiComp.userName+'/'+apiComp.repo+'/issues?state=open';
        	// https://api.github.com/repos/shidhincr/LookAround/issues?state=open
            return $http.get(url);
        }
    }
}]);
