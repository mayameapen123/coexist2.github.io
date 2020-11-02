$(".pop_up").hide();
$(".pop_up2").hide();
$(".pop_up3").hide();
var rand = Math.random()*20;
console.log(rand);
var rand2 = (Math.random()*20)*-1;
console.log(rand);
  
 var count = 1;
$(".tog").click(function() {
  if (count == 1) {
    $("h2").css("font-family","freight-sans-pro");
       $("h2").css("font-style","italic");}
else {

        $("h2").css("font-family","Rajdhani");
        $("h2").css("font-style","normal");
  }
count = count*-1;
});


$(".hom2").hide();
$(".hom3").hide();
$(".hom4").hide();
$("a").css("color","white");

$(".emptys").css('transform', 'rotate('+rand+'deg)');

$(".handys").css('transform', 'rotate('+rand2+'deg)');


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if(scroll<700){
      $("h2").css("color","white");
      $("a").css("color","white");
      $(".vline").css("background-color","white")};

      if(scroll>700& scroll<1500){
      $("h2").css("color","black");
      $("a").css("color","black");
      $(".vline").css("background-color","black");
     
      };
      if(scroll>1500& scroll<2200){
      $("h2").css("color","white");
        $("a").css("color","white");
      $(".vline").css("background-color","white")};
       if(scroll>2200& scroll<2900){
      $("h2").css("color","black");
        $("a").css("color","black");
      $(".vline").css("background-color","black")};
       if(scroll>3000){
      $("h2").css("color","white");
        $("a").css("color","white");
      $(".vline").css("background-color","white")};

      if(scroll>2400 & scroll <3000){
         $(".hom").show(500);
$(".hom2").show(800);
$(".hom3").show(1000);
$(".hom4").show(1200);
      }


      
});

$(".emptys").mouseenter(function(){
 $(".pop_up").show();

}); 

$(".emptys").mouseleave(function(){
 $(".pop_up").hide();

}); 



$(".handys").mouseenter(function(){
$(".pop_up2").show();
$(".pop_up3").show(10);
}); 

$(".handys").mouseleave(function(){
$(".pop_up2").hide();
$(".pop_up3").hide(10);
}); 

$(".c1").click(function() {
   
  window.location.href='https://mayameapen123.github.io/Coexist1.github.io/';
});

$(".c2").click(function() {
   
  window.location.href='https://mayameapen123.github.io/coexist2.github.io/';
});

$(".c3").click(function() {
   
  window.location.href='https://mayameapen123.github.io/coexist3.github.io/';
});

//added NOW!!!1

$(".c1").on("mouseenter",function(){
  $(".a1").css("opacity","0.2");

});

$(".c1").on("mouseleave",function(){
  $(".a1").css("opacity","0.5");

});

$(".c3").on("mouseenter",function(){
  $(".a3").css("opacity","0.2");

});

$(".c3").on("mouseleave",function(){
  $(".a3").css("opacity","0.5");

});


