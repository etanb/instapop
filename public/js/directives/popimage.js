instaPopApp.directive('popImage', function () {
	return {
		restrict: 'E',
        scope: {
            post: "="
        },
        // controller: function($scope) {
        //     console.log("Likes: ", $scope.post.likes.count)
        //     console.log("Comments: ", $scope.post.comments.count)
        // },
        link: function(scope, element, attrs) {
            // console.log("This is what you want:", element)
            element.contents().eq(3).css({"border" : "5px solid black"})
        },
        replace: true,
		templateUrl: '/js/directives/partials/popimage.html'
	}
})

instaPopApp.directive('popChart', function () {
        var barOptions = {
            animation: true,
            scaleOverride: true,
            scaleSteps: 25,
            scaleStepWidth: 20,
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
                    labels : ["Likes"],
                    datasets : [
                        {
                            fillColor : "green",
                            data : [$scope.post.likes.count]
                        }

                    ]
                }

                var commentBarData = {
                    labels : ["Comments"],
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

                new Chart(likeBar).Bar(likeBarData, barOptions);
                new Chart(commentBar).Bar(commentBarData, barOptions);
                
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

