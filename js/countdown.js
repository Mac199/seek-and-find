var play_again = false;
function timer() {
  var timer2 = $("#timer").text();
  var interval = setInterval(function() {
  var timer = timer2.split(':');
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  $('.countdown').html(minutes + ':' + seconds);
  //********* loccalStorage *************//
  localStorage.setItem("time", $("#timer").text());
  

  if (minutes < 0) {
    clearInterval(interval);
  };

  if ( (seconds <= 0) && (minutes <= 0) || ($("#correct_count").text() == 15)){
    congrats(interval, seconds);
    if(!play_again){
      saveActivity();
    }
    
}
  timer2 = minutes + ':' + seconds;
  
}, 1000);
} 

function congrats(interval, seconds){
    clearInterval(interval);
    $point = $("#point").text();
    $("#app").css('background-image',"url('images/congrats.png')");
    $('#resource .page, .resource').remove();
    $("#final_point").html($point).css('display','inherit');
    $("#correct_count").css('display','inherit');
    $("#total").css("display","inherit");
    $("#time_remaining").css("display", "inherit");
    $("#time_bonus").css("display","inherit");
    $("#time_remaining").html($("#timer").text());
    localStorage.setItem("time_remaining",$("#timer").text());
    $("footer").html("<div class='play_again_footer'><img src='images/Buttons/play_again.png' class='play_again'></div>").css("display","inherit");
    if(seconds>0){
      $("#time_bonus").html(seconds*100);
      localStorage.setItem("time_bonus", $("#time_bonus").html(seconds*100));
    }else{$("#time_bonus").html("0")}
    var total = parseInt($("#time_bonus").text())+parseInt($("#final_point").text());
    $("#total").html(total);
    localStorage.setItem("total", total)
  }

  $("footer").on('click', '.play_again', function(){
    $("#app").css("background-image","url('images/seek_find_welcome.png')");
    $(".grow").css("display","inherit");
    $(".grow").css("background-image","url('images/pi_launch.png')");
    $("#final_point").empty();
    $("#correct_count").empty();
    $("#correct_count").css("display","none");
    $("#total").empty();
    $("#time_remaining").empty();
    $("#time_bonus").empty();
    $("#questions").empty();
    $(this).remove();
    $("#timer").text("4:00");
    $("#point").empty();
    $("#point").text("0");
    $("#question_counter span").text("0");
    play_again = true;
  })