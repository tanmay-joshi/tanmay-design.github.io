$(document).ready(function(){
  $(".inactive").hide();
  $(".cross").hide();
  $("#active").show();
  $(".bar").click(function() {
    $(".inactive").fadeIn("fast");
    $(".bar").hide();
    $(".cross").show();
  });

  $(".cross").click(function() {
    $(".inactive").fadeOut("fast");
    $(".bar").show();
    $(".cross").hide();
  });

  $("button").hover(
    function(){
      $(".circlee1").animate({"animation-duration": "0.7s"},1);
      $(".circlee2").animate({"animation-duration": "0.7s"},1);
      $(".circlee3").animate({"animation-duration": "0.7s"},1);
    },
    function(){
      $(".circlee1").animate({"animation-duration": "1.5s"},1);
      $(".circlee2").animate({"animation-duration": "1.5s"},1);
      $(".circlee3").animate({"animation-duration": "1.5s"},1);
    });
});
