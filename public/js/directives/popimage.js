instaPopApp.directive('popImage', function () {
	return {
		restrict: 'E',
        scope: {
            post: "="
        },
        controller: function($scope) {
            console.log($scope.post)
        },
        link: function(scope, element, attrs) {
            console.log("This is what you want:", element)
            element.contents().eq(3).css({"border" : "5px solid black"})
        },
        replace: true,
		templateUrl: '/js/directives/partials/popimage.html'
	}
})