// $(document).ready(function() {

$("h1").css("color", "red");

$("button").html("<em>hey</em>");


$("a").attr("href", "https://www.yahoo.com");


$("h1").click(function() {
  $("h1").css("color", "purple");
 });

//  for (var i = 0; i<5; i++) {
//    document.querySelectorAll("button")[i].addEventListener("click", function (){
//      document.querySelector("h1").style.color = "purple";
    
//    });
//  }


// $("input").keypress (function(event){
//   $("h1").text(event.key);
// });


$("h2").on("mouseover", function() {
  $("h2").css("color", "blue");
})

$("h1").before("<button>Click Me</button>");
$("h1").after("<button>Click Me</button>");
$("h1").prepend("<button>Click Me</button>");
$("h1").append("<button>Click Me</button>");


//remove
// $("button").remove();

//hide
$("h1").show();
//$("h2").hide();

//fade 
// $("button").on ("click", function() {
//   $("h3").fadeToggle();
// });

//slide In Out
// $("button").on ("click", function() {
//   $("h3").slideToggle();
// });


//animate
$("h3").on ("click", function() {
  $("h3").animate({opacity: 0.5, margin: 20});
});