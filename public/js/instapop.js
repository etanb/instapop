$( document ).ready(function() {
    console.log($("body"))
        /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function(){
      $('body,html').animate({scrollTop:0},800);
    })
    /* smooth scrolling for scroll down */
    $('.scroll-down').click(function(){
      $('body,html').animate({scrollTop:$(window).scrollTop()+800},1000);
    })

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({ target: '#navbar' })

    // $(".user-info-icon").click( function() {
    //     var elementToHide = $(this).parents().eq(2).attr("id")
    //     console.log(elementToHide)
    // })
    
});