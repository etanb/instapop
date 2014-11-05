instaPopApp.directive('popImage', function () {
	return {
		restrict: 'E',
        scope: {
            post: "="
        },
        controller: function($scope) {
            // console.log("Likes: ", $scope.post.likes.count)
            // console.log("Comments: ", $scope.post.comments.count)

        },
        link: function(scope, element, attrs) {
            // console.log("This is what you want:", element)
            element.contents().eq(3).css({"border" : "5px solid black"})

            angular.element(document).ready(function() {
                $(".user-info-icon").click( function() {
                var elementToHide = $(this).parents().eq(2).attr("id")
                    $("#" + elementToHide).hide()
                })
            })
        },
        replace: true,
		templateUrl: '/js/directives/partials/popimage.html'
	}
})

instaPopApp.directive('popChart', function () {
        var likeBarOptions = {
            animation: true,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStepWidth: 10000,
            scaleStartValue: 0
        }

        var commentBarOptions = {
            animation: true,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStepWidth: 100,
            scaleStartValue: 0
        }

        return {
            restrict: 'E',
            scope: {
                post: "="
            },
            templateUrl: '/js/directives/partials/popchart.html',
            controller: function($scope) {
                console.log($scope.post)
                console.log("Likes: ", $scope.post.likes.count)
                console.log("Comments: ", $scope.post.comments.count)
            },
            link: function($scope, $element, $attrs) {
                var likeBarData = {
                    labels : ["Likes: " + $scope.post.likes.count],
                    datasets : [
                        {
                            fillColor : "green",
                            data : [$scope.post.likes.count]
                        }

                    ]
                }

                var commentBarData = {
                    labels : ["Comments: " + $scope.post.comments.count],
                    datasets : [
                        {
                            fillColor : "blue",
                            data : [$scope.post.comments.count]
                        }

                    ]
                }
                var likeID = $scope.post.user.username + "Likes"
                var commentID = $scope.post.user.username + "Comments"

                var likeBar = $element.contents()[0].getContext("2d");
                var commentBar = $element.contents()[2].getContext("2d");

                new Chart(likeBar).Bar(likeBarData, likeBarOptions);
                new Chart(commentBar).Bar(commentBarData, commentBarOptions);
                
            }
            
        }

})

instaPopApp.directive('popNav', function () {
    return {
        restrict: 'E',
        scope: {
            post: "="
        },
        link: function(scope, element, attrs) {
            // console.log("This is what you want:", element)
        },
        replace: true,
        templateUrl: '/js/directives/partials/popnav.html'
    }
})

instaPopApp.directive('popUser', function () {
    return {
        restrict: 'E',
        controller: function($scope, $http) {
            function userMediaCall (userid) {
                $http.jsonp('https://api.instagram.com/v1/users/' + userid + '/media/recent', {
                  params: {
                    client_id: '4d5374af01d74b18a3ff5372cdb42567',
                    count: 9,
                    callback: 'JSON_CALLBACK'
                  }
                }).success(function(data) {
                  $scope.userdatas = data.data
                  console.log($scope.userdatas)
                })
            }

            userMediaCall($scope.post.user.id)
        },
        link: function($scope, $element, $attrs) {

        },
        replace: true,
        templateUrl: '/js/directives/partials/popuser.html'
    }
})

//     var barOptions = {
//         animation: true,
//         scaleOverride: true,
//         scaleSteps: 25,
//         scaleStepWidth: 20,
//         scaleStartValue: 0
//     }

//     var likeBarData = {
//         labels : ["Likes"],
//         datasets : [
//             {
//                 fillColor : "green",
//                 data : [456]
//             }

//         ]
//     }

//     var commentBarData = {
//         labels : ["Comments"],
//         datasets : [
//             {
//                 fillColor : "blue",
//                 data : [456]
//             }

//         ]
//     }

    // var likeBar = document.getElementById("income").getContext("2d");
    // var commentBar = document.getElementById("income").getContext("2d");
    // new Chart(likeBar).Bar(likeBarData, barOptions);
    // new Chart(commentBar).Bar(commentBarData, barOptions);

