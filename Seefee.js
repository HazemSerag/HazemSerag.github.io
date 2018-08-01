$("img.IconH").on("mouseover", function(){$("img.IconH").attr("src", "HTML C.png")});
$("img.IconH").on("mouseleave", function(){$("img.IconH").attr("src", "HTML.png")});

$("img.IconC").on("mouseover", function(){$("img.IconC").attr("src", "CSS3 C.png")});
$("img.IconC").on("mouseleave", function(){$("img.IconC").attr("src", "CSS3.png")});

$("img.IconJ").on("mouseover", function(){$("img.IconJ").attr("src", "Javascript C.png")});
$("img.IconJ").on("mouseleave", function(){$("img.IconJ").attr("src", "Javascript.png")});

$("img.IconB").on("mouseover", function(){$("img.IconB").attr("src", "Bootstrap C.png")});
$("img.IconB").on("mouseleave", function(){$("img.IconB").attr("src", "Bootstrap.png")});

$("img.IconA").on("mouseover", function(){$("img.IconA").attr("src", "AngularJS C.png")});
$("img.IconA").on("mouseleave", function(){$("img.IconA").attr("src", "AngularJS.png")});

$("img.IconCP").on("mouseover", function(){$("img.IconCP").attr("src", "C++ C.png")});
$("img.IconCP").on("mouseleave", function(){$("img.IconCP").attr("src", "C++.png")});

$("img.IconP").on("mouseover", function(){$("img.IconP").attr("src", "Python C.png")});
$("img.IconP").on("mouseleave", function(){$("img.IconP").attr("src", "Python.png")});

$("img.IconPH").on("mouseover", function(){$("img.IconPH").attr("src", "PHP C.png")});
$("img.IconPH").on("mouseleave", function(){$("img.IconPH").attr("src", "PHP.png")});

$("img.IconG").on("mouseover", function(){$("img.IconG").attr("src", "Git C.png")});
$("img.IconG").on("mouseleave", function(){$("img.IconG").attr("src", "Git.png")});

$("img.IconF").on("mouseover", function(){$("img.IconF").attr("src", "Facebook C.png")});
$("img.IconF").on("mouseleave", function(){$("img.IconF").attr("src", "Facebook.png")});

$("img.IconY").on("mouseover", function(){$("img.IconY").attr("src", "Youtube C.png")});
$("img.IconY").on("mouseleave", function(){$("img.IconY").attr("src", "Youtube.png")});

$("img.IconGH").on("mouseover", function(){$("img.IconGH").attr("src", "GitHub C.png")});
$("img.IconGH").on("mouseleave", function(){$("img.IconGH").attr("src", "GitHub.png")});

/* Scrolling Buttons */

let Scrol1 = function() {
    $('html,body').animate({
        scrollTop: $(".About").offset().top},
        'slow');
};

let Scrol2 = function() {
    $('html,body').animate({
        scrollTop: $(".Education").offset().top},
        'slow');
};

let Scrol3 = function() {
    $('html,body').animate({
        scrollTop: $(".Skills").offset().top},
        'slow');
};

let Scrol4 = function() {
    $('html,body').animate({
        scrollTop: $(".Music").offset().top},
        'slow');
};

let Scrol5 = function() {
    $('html,body').animate({
        scrollTop: $(".Hobbies").offset().top},
        'slow');
};