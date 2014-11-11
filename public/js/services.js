// http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background

// directive + services help: http://stackoverflow.com/questions/20756856/angularjs-accessing-service-methods-from-directives-link-function

instaPopApp.factory('CustomFunctions', function () {
  return {

    $scope.userView = false

    $scope.specificUser = $scope.post.user.username


    $scope.toggleUser = function() {
        // var userView = false
        console.log($scope)

        console.log($scope.specificUser)
        console.log($scope)
        if ($scope.userView === false) {
            // $("#" + specificUser + "-post-section").hide()
            // $("#" + specificUser + "-user-section").show()
            $scope.userView = !$scope.userView;
        } else if ($scope.userView === true) {
            // $("#" + specificUser + "-post-section").show()
            // $("#" + specificUser + "-user-section").hide()
            $scope.userView = !$scope.userView;
        }
    }




    getUser: function () {
      var specificUser = $(this).attr("id")
      $(specificUser + "-post-section").hide()
      $(specificUser + "-user-section").show()
    },

    cancelUser: function () {
      var specificUser = $(this).attr("id")
      $(specificUser + "-user-section").hide()
      $(specificUser + "-post-section").show()
    }
  }
})