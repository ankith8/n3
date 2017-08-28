// testing

console.log("Testing");

$(document).ready(function() {
    init();
});


function openNav() {
    $("#mySidenav").css("width","246px");
    $(".closebtn").show();
    $("body").css("background-color","rgba(0,0,0,0.4)");
    console.log("open");
}

function closeNav() {
    $("#mySidenav").css("width","0");
    $("body").css("background-color","white");
    $(".closebtn").hide();
    console.log("close");
}

function init(){
    checkNav();
}

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
    

