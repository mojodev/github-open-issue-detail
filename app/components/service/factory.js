'use strict';

angular.module('GithubIssue.Common',[])
.factory('CommonFactory',['$http','baseUrl', function($http,baseUrl){
    return {
        getIssue : function (api) {
        	var url = baseUrl+'';
            return $http.get(url);
        }
    }
}]);
