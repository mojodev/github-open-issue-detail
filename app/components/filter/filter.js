angular.module('GithubIssue')
.filter('filteredIssue', function () {
    return function (input, states) {
      var filtredIssue = [];
      /*filtering for Number of open issues that were opened in the last 24 hours*/
        if(input =='1'){
          var epocTime = new Date().getTime() - 24*60*60*1000
          for (var i = 0; i < states.length; i++) {
            if (new Date(states[i].created_at).getTime() >= epocTime) {
                 filtredIssue.push(states[i]);
            }
          }
        } 
        /*filtering for Number of open issues that were opened more than 24 hours ago but less than 7 days ago*/
        else if(input =='1-7'){
          var startEpocTime = new Date().getTime() - 24*60*60*1000
          var endEpocTime = new Date().getTime() - 7*24*60*60*1000

          for (var i = 0; i < states.length; i++) {
            if (new Date(states[i].created_at).getTime() >= endEpocTime &&new Date(states[i].created_at).getTime() <= startEpocTime) {
                 filtredIssue.push(states[i]);
            }
          }
        }
        /*filtering for Number of open issues that were opened more than 7 days ago*/
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
