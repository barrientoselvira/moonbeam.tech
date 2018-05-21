$(document).ready(function(){
      
      // Smooth scrolling for nav links
      $(".about-click").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 800);
    })

    $(".projects-click").click(function() {
        $("html, body").animate({
            scrollTop: $("#projects").offset().top
        }, 800);
    })
    $(".contact-click").click(function() {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 800);
    })

    $(".lead-in").fadeOut(function() {
        $(this).text("Web Developer & Designer")
      }).fadeIn({'opacity': 1}, 8000);

    $(".btn-contact").on("click", function() {
        console.log("buttonClick");
        window.location.href = "mailto:elviracbarrientos@gmail.com?subject=Subject&body=message%20goes%20here"; 
      });
      

});