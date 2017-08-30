// testing

console.log("Testing");

$(document).ready(function() {
    $(".faa-burst").hide();
    checkNav();
});


// Open and Close Navigation functions for Mobile
function openNav() {
    $("#mySidenav").css("width","246px");
    $(".closebtn").show();
    $("body").css("background-color","rgba(0,0,0,0.4)");
}

function closeNav() {
    $("#mySidenav").css("width","0");
    $("body").css("background-color","white");
    $(".closebtn").hide();
}

// To check if the navbar should be collapsed or fixed
function checkNav(){
    if (window.matchMedia('(max-width: 768px)').matches)
    {
        // do functionality on screens smaller than 768px
        closeNav();
    }
    else{
        $("#mySidenav").css("width","246px");
    }
}

$(window).on("resize", function () {
    checkNav();
});

// Clicking + Sign Animation
$(".search-input").click(function () {
    // Remove any old one
    $(".search-anim").removeClass("rot");
    // Add the class to show rotation animation
    $(".search-anim").addClass("rot");
  });
// On typing show ripple effect animation
$('.search-input').on('input', function() {
    $(".faa-burst").show();
    $(".search-anim").hide();

    setTimeout(function() {
        $(".faa-burst").hide();
        $(".search-anim").show();
    }, 1500);
});
