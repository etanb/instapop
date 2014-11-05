var testing;

    
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

    var img1date;
    var img1likes;
    var img2date;
    var img2likes;
    var img3date;
    var img3likes;
    var img4date;
    var img4likes;
    var img5date;
    var img5likes;
    var img6date;
    var img6likes;
    var img7date;
    var img7likes;
    var img8date;
    var img8likes;
    var img9date;
    var img9likes;

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
                  
                  
                  var date = new Date($scope.userdatas[0].created_time * 1000)
                  img1date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img1likes = $scope.userdatas[0].likes.count

                  var date = new Date($scope.userdatas[1].created_time * 1000)
                  img2date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img2likes = $scope.userdatas[1].likes.count

                  var date = new Date($scope.userdatas[2].created_time * 1000)
                  img3date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img3likes = $scope.userdatas[2].likes.count

                  var date = new Date($scope.userdatas[3].created_time * 1000)
                  img4date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img4likes = $scope.userdatas[3].likes.count

                  var date = new Date($scope.userdatas[4].created_time * 1000)
                  img5date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img5likes = $scope.userdatas[4].likes.count

                  var date = new Date($scope.userdatas[5].created_time * 1000)
                  img6date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img6likes = $scope.userdatas[5].likes.count

                  var date = new Date($scope.userdatas[6].created_time * 1000)
                  img7date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img7likes = $scope.userdatas[6].likes.count

                  var date = new Date($scope.userdatas[7].created_time * 1000)
                  img8date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img8likes = $scope.userdatas[7].likes.count

                  var date = new Date($scope.userdatas[8].created_time * 1000)
                  img9date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
                  img9likes = $scope.userdatas[8].likes.count
                  $scope.$broadcast("Data_Ready");

                })
            }
            userMediaCall($scope.post.user.id)

        },
        link: function($scope, $element, $attrs) {

            $scope.$on("Data_Ready", function  () {

                var userLineOptions = {

                }
                
                var userLikeData = {
                    labels: [img1date, img2date, img3date, img4date, img5date, img6date, img7date, img8date, img9date],
                    datasets: [
                        {
                            label: "Like Data",
                            fillColor: "rgba(151,187,205,0.2)",
                            strokeColor: "rgba(151,187,205,1)",
                            pointColor: "rgba(151,187,205,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(151,187,205,1)",
                            data: [img1likes, img2likes, img3likes, img4likes, img5likes, img6likes, img7likes, img8likes, img9likes]
                        }

                    ]
                };
                var userLine = $element.contents()[5].getContext("2d");

                new Chart(userLine).Line(userLikeData, userLineOptions);
            })
            
        },
        replace: true,
        templateUrl: '/js/directives/partials/popuser.html'
    }
})

                //     // $scope.userdatas.forEach( function (value){
                // //     console.log("haaaaaay")
                // //     console.log(value)
                // // })
                // console.log("STUFFFFF")
                // // console.log($scope)
                // testing = $scope
                // console.log(img1date)
                

