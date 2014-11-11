// http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background

// directive + services help: http://stackoverflow.com/questions/20756856/angularjs-accessing-service-methods-from-directives-link-function

instaPopApp.service('sharedFunctions', function () {
  return {
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