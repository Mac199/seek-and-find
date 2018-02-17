$(document).ready(function(){
  var $footer = $('footer');
  var scenario;
  var $resource;
  var correct_count;
  $laucn = $("#laucn");
  $app = $("#app");
  var points;
  var scenario_collect;
  $laucn.on("touchstart",function(){
    $laucn.css("background-image","url(images/pi_launch_down.png)");
  }).on("touchend", function(){
    $("#resource").css("display",'inherit');
    $point = $("#point");
    $("#app").css('background-image',"url('images/Select_Resource.png')");
    $(".grow").css("display","none");
    $app.append("<img src='images/pi/nucala_pi_01.jpg' alt='pi' class='resource'>"+"<img src='images/mirra_pages/mirra_page_1.jpg' alt='mirra' class='resource'>");
    event.preventDefault();
    timer();
    scenario = Math.floor((Math.random() * 15) + 1);
    scenario_collect = [];
    scenario_collect.push(scenario);
    correct_count = 0;
    $("#questions").html(activityJSON["question"+scenario]['question']);
    //$("#question_counter span").html(scenario_collect.length);
    points = 0;
    });

   //**************** CHOOSE THE CORRECT RESOURCE *****************//
  $('body').on('click','.resource',function(){    
    $resource = $(this).attr("alt");  
    $footer.css('display','inherit');
    $resource_select = $(this);
    if($resource == activityJSON['question'+scenario]["answer1"]){
      if( !$resource_select.hasClass("correct") ){
          points = points + 50;
          $point.html(points);
          localStorage.setItem("points",points); 
          $resource_select.addClass("correct");
      }


      if($("#next_question").length ==0 ){
        $footer.html("<img src='images/Screens/correct_resource.png'><div id='next_question'><img src='images/Buttons/continue_step_3.png'></div>");
      }else{$footer.css('display','inherit')};
      
      
      $('#next_question').on("touchstart", function(){

        $("#next_question img").attr("src", "images/Buttons/continue_step_3_down.png");

      }).on("touchend", function(){
        $(".resource").css('display', 'none');
        $footer.css('display', 'none');
        if($resource == "mirra"){
          $("#resource").append("<div class='page'><img src='images/mirra_pages/mirra_page_1.jpg' alt='mirra1'>"+
              //********* first page
              "<img src='images/mirra_pages/M1_TP1_c.png' alt='m1_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M1_TP1_incorrect.png' alt='m1_tp1_inc' class='answer'>"+"<img src='images/Buttons/touchpoint.png' id='m1_tp1_c' class='touchpoint'>"+
              
              "<img src='images/mirra_pages/M1_TP2_c.png' alt='m1_tp2_c' class='answer'>"+"<img src='images/mirra_pages/M1_TP2_incorrect.png' alt='m1_tp2_inc' class='answer'>"+"<img src='images/Buttons/touchpoint2.png' id='m1_tp2_c' class='touchpoint'>"+
              
              "<img src='images/mirra_pages/M1_TP3_c.png' alt='m1_tp3_c' class='answer'><img src='images/mirra_pages/M1_TP3_incorrect.png' alt='m1_tp3_inc' class='answer'>"+"<img src='images/Buttons/touchpoint2.png' id='m1_tp3_c' class='touchpoint'>"+"</div>"+
              
              //************ seconde page
              "<div class='page'><img src='images/mirra_pages/mirra_page_2.jpg' alt='mirra2'>"+
              
              "<img src='images/mirra_pages/M2_TP1_c.png' alt='m2_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M2_TP1_incorrect.png' alt='m2_tp1_inc' class='answer'>"+"<img src='images/Buttons/touchpoint2.png' id='m2_tp1_c' class='touchpoint'>"+
              
              "<img src='images/mirra_pages/M2_TP2_c.png' alt='m2_tp2_c' class='answer'>"+"<img src='images/mirra_pages/M2_TP2_incorrect.png' alt='m2_tp2_inc' class='answer'>"+"<img src='images/Buttons/touchpoint.png' id='m2_tp2_c' class='touchpoint'>"+

              "<img src='images/mirra_pages/M2_TP3_c.png' alt='m2_tp3_c' class='answer'><img src='images/mirra_pages/M2_TP3_incorrect.png' alt='m2_tp3_inc' class='answer'>"+"<img src='images/Buttons/touchpoint2.png' id='m2_tp3_c' class='touchpoint'>"+
              "</div>"+
              
              
              //*********** third page
              "<div class='page'><img src='images/mirra_pages/mirra_page_3.jpg' alt='mirra3'>"+
              "<img src='images/mirra_pages/M3_TP1_c.png' alt='m3_tp1_c' class='answer'>"+
              "<img src='images/mirra_pages/M3_TP1_incorrect.png' alt='m3_tp1_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint2.png' id='m3_tp1_c' class='touchpoint'>"+
              "</div>"+
              
              
              //************ fouth page
              "<div class='page'><img src='images/mirra_pages/mirra_page_4.jpg' alt='mirra4'></div>"+
              
              
              //************ 5 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_5.jpg' alt='mirra5'>"+
              "<img src='images/mirra_pages/M5_TP1_c.png' alt='m5_tp1_c' class='answer'>"+
              "<img src='images/mirra_pages/M5_TP1_incorrect.png' alt='m5_tp1_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint2.png' id='m5_tp1_c' class='touchpoint'>"+
              "</div>"+
              
              

              //************ 6 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_6.jpg' alt='mirra6'>"+
              "<img src='images/mirra_pages/M6_TP1_c.png' alt='m6_tp1_c' class='answer'>"+
              "<img src='images/mirra_pages/M6_TP1_incorrect.png' alt='m6_tp1_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint2.png' id='m6_tp1_c' class='touchpoint'>"+
              "</div>"+
              
              
              //************ 7 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_7.jpg' alt='mirra7'></div>"+
              
              
              //************ 8 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_8.jpg' alt='mirra8'>"+
              "<img src='images/mirra_pages/M8_TP1_c.png' alt='m8_tp1_c' class='answer'>"+
              "<img src='images/mirra_pages/M8_TP1_incorrect.png' alt='m8_tp1_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint.png' id='m8_tp1_c' class='touchpoint'>"+
              
              "<img src='images/mirra_pages/M8_TP2_c.png' alt='m8_tp2_c' class='answer'>"+
              "<img src='images/mirra_pages/M8_TP2_incorrect.png' alt='m8_tp2_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint.png' id='m8_tp2_c' class='touchpoint'>"+
              
              "<img src='images/mirra_pages/M8_TP3_c.png' alt='m8_tp3_c' class='answer'>"+
              "<img src='images/mirra_pages/M8_TP3_incorrect.png' alt='m8_tp3_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint2.png' id='m8_tp3_c' class='touchpoint'>"
              

              +"<img src='images/mirra_pages/M8_TP4_c.png' alt='m8_tp4_c' class='answer'>"+
              "<img src='images/mirra_pages/M8_TP4_incorrect.png' alt='m8_tp4_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint.png' id='m8_tp4_c' class='touchpoint'>"+
              "</div>"+
              
              
              //************ 9 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_9.jpg' alt='mirra9'>"+
              "<img src='images/mirra_pages/M9_TP1_c.png' alt='m9_tp1_c' class='answer'>"+
              "<img src='images/mirra_pages/M9_TP1_incorrect.png' alt='m9_tp1_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint2.png' id='m9_tp1_c' class='touchpoint'>"+
              "</div>"+
              
              
              //************ 10 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_10.jpg' alt='mirra10'>"+
              "<img src='images/mirra_pages/M10_TP1_c.png' alt='m10_tp1_c' class='answer'>"+
              
              "<img src='images/mirra_pages/M10_TP1_incorrect.png' alt='m10_tp1_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint2.png' id='m10_tp1_c' class='touchpoint'>"+

              "<img src='images/mirra_pages/M10_TP2_c.png' alt='m10_tp2_c' class='answer'>"+
              "<img src='images/mirra_pages/M10_TP2_incorrect.png' alt='m10_tp2_inc' class='answer'>"+
              "<img src='images/Buttons/touchpoint.png' id='m10_tp2_c' class='touchpoint'>"+
              "</div>"+
              
              
              //************ 11 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_11.jpg' alt='mirra11'></div>"+
              
              
              //************ 12 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_12.jpg' alt='mirra12'></div>");
        }
        
        else if($resource == "pi"){
              $("#resource").append("<div class='page'><img src='images/pi/nucala_pi_01.jpg' alt='pi1' ></div>"+

                              //********* 2 page
                              "<div class='page'><img src='images/pi/nucala_pi_02.jpg' alt='pi2'>"+
                              "<img src='images/pi/P2_TP1_c.png' alt='pi2_tp1_c' class='answer'>"+
                              "<img src='images/pi/P2_TP1_incorrect.png' alt='pi2_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi2_tp1_c' class='touchpoint'>"+
                              
                              "<img src='images/pi/P2_TP2_c.png' alt='pi2_tp2_c' class='answer'>"+
                              "<img src='images/pi/P2_TP2_incorrect.png' alt='pi2_tp2_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi2_tp2_c' class='touchpoint'>"+
                              
                              "<img src='images/pi/P2_TP3_c.png' alt='pi2_tp3_c' class='answer'>"+
                              "<img src='images/pi/P2_TP3_incorrect.png' alt='pi2_tp3_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi2_tp3_c' class='touchpoint'>"+
                              "</div>"+
                              
                              //********* 3 page
                              "<div class='page'><img src='images/pi/nucala_pi_03.jpg' alt='pi3'>"+
                              "<img src='images/pi/P3_TP1_c.png' alt='pi3_tp1_c' class='answer'>"+
                              "<img src='images/pi/P3_TP1_incorrect.png' alt='pi3_tp1_inc' class='answer' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi3_tp1_c' class='touchpoint'>"+
                              
                              "<img src='images/pi/P3_TP2_c.png' alt='pi3_tp2_c' class='answer'>"+
                              "<img src='images/pi/P3_TP2_incorrect.png' alt='pi3_tp2_inc' class='answer' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi3_tp2_c' class='touchpoint'>"+
                              "</div>"+
                              
                              //********* 4 page
                              "<div class='page'><img src='images/pi/nucala_pi_04.jpg' alt='pi4'>"+
                              "<img src='images/pi/P4_TP1_c.png' alt='pi4_tp1_c' class='answer'>"+
                              "<img src='images/pi/P4_TP1_incorrect.png' alt='pi4_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi4_tp1_c' class='touchpoint'>"+

                              "<img src='images/pi/P4_TP2_c.png' alt='pi4_tp2_c' class='answer'>"+
                              "<img src='images/pi/P4_TP2_incorrect.png' alt='pi4_tp2_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi4_tp2_c' class='touchpoint'>"+
                              "</div>"+
                              
                              //********* 5
                              "<div class='page'><img src='images/pi/nucala_pi_05.jpg' alt='pi5'>"+
                              "<img src='images/pi/P5_TP1_c.png' alt='pi5_tp1_c' class='answer'>"+
                              "<img src='images/pi/P5_TP1_incorrect.png' alt='pi5_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi5_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 6
                              "<div class='page'><img src='images/pi/nucala_pi_06.jpg' alt='pi6'>"+
                              "<img src='images/pi/P6_TP1_c.png' alt='pi6_tp1_c' class='answer'>"+
                              "<img src='images/pi/P6_TP1_incorrect.png' alt='pi6_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi6_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 7
                              "<div class='page'><img src='images/pi/nucala_pi_07.jpg' alt='pi7'>"+
                              "<img src='images/pi/P7_TP1_c.png' alt='pi7_tp1_c' class='answer'>"+
                              "<img src='images/pi/P7_TP1_incorrect.png' alt='pi7_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi7_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 8
                              "<div class='page'><img src='images/pi/nucala_pi_08.jpg' alt='pi8'>"+
                              "<img src='images/pi/P8_TP1_c.png' alt='pi8_tp1_c' class='answer'>"+
                              "<img src='images/pi/P8_TP1_incorrect.png' alt='pi8_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi8_tp1_c' class='touchpoint'>"+

                              "<img src='images/pi/P8_TP2_c.png' alt='pi8_tp2_c' class='answer'>"+
                              "<img src='images/pi/P8_TP2_incorrect.png' alt='pi8_tp2_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi8_tp2_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 9
                              "<div class='page'><img src='images/pi/nucala_pi_09.jpg' alt='pi9'>"+
                              "<img src='images/pi/P9_TP1_c.png' alt='pi9_tp1_c' class='answer'>"+
                              "<img src='images/pi/P9_TP1_incorrect.png' alt='pi9_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi9_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 10
                              "<div class='page'><img src='images/pi/nucala_pi_10.jpg' alt='pi10'>"+
                              "<img src='images/pi/P10_TP1_c.png' alt='pi10_tp1_c' class='answer'>"+
                              "<img src='images/pi/P10_TP1_incorrect.png' alt='pi10_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi10_tp1_c' class='touchpoint'>"+
                              
                              "<img src='images/pi/P10_TP2_c.png' alt='pi10_tp2_c' class='answer'>"+
                              "<img src='images/pi/P10_TP2_incorrect.png' alt='pi10_tp2_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi10_tp2_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 11
                              "<div class='page'><img src='images/pi/nucala_pi_11.jpg' alt='pi11'></div>"+
                              

                              //********* 12
                              "<div class='page'><img src='images/pi/nucala_pi_12.jpg' alt='pi12'></div>"+
                              

                              //********* 13
                              "<div class='page'><img src='images/pi/nucala_pi_13.jpg' alt='pi13'>"+
                              "<img src='images/pi/P13_TP1_c.png' alt='pi13_tp1_c' class='answer'>"+
                              "<img src='images/pi/P13_TP1_incorrect.png' alt='pi13_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi13_tp1_c' class='touchpoint'>"
                              +"</div>"+
                              

                              //********* 14
                              "<div class='page'><img src='images/pi/nucala_pi_14.jpg' alt='pi14'>"+
                              "<img src='images/pi/P14_TP1_c.png' alt='pi14_tp1_c' class='answer'>"+
                              "<img src='images/pi/P14_TP1_incorrect.png' alt='pi14_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi14_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 15
                              "<div class='page'><img src='images/pi/nucala_pi_15.jpg' alt='pi15'>"+
                              "<img src='images/pi/P15_TP1_c.png' alt='pi15_tp1_c' class='answer'>"+
                              "<img src='images/pi/P15_TP1_incorrect.png' alt='pi15_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi15_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 16
                              "<div class='page'><img src='images/pi/nucala_pi_16.jpg' alt='pi16'></div>"+
                              

                              //********* 17
                              "<div class='page'><img src='images/pi/nucala_pi_17.jpg' alt='pi17'>"+
                              "<img src='images/pi/P17_TP1_c.png' alt='pi17_tp1_c' class='answer'>"+
                              "<img src='images/pi/P17_TP1_incorrect.png' alt='pi17_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi17_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 18
                              "<div class='page'><img src='images/pi/nucala_pi_18.jpg' alt='pi18'>"+
                              "<img src='images/pi/P18_TP1_c.png' alt='pi18_tp1_c' class='answer'>"+
                              "<img src='images/pi/P18_TP1_incorrect.png' alt='pi18_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi18_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 19
                              "<div class='page'><img src='images/pi/nucala_pi_19.jpg' alt='pi19'>"+
                              "<img src='images/pi/P19_TP1_c.png' alt='pi19_tp1_c' class='answer'>"+
                              "<img src='images/pi/P19_TP1_incorrect.png' alt='pi19_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi19_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 20
                              "<div class='page'><img src='images/pi/nucala_pi_20.jpg' alt='pi20'>"+
                              "<img src='images/pi/P20_TP1_c.png' alt='pi20_tp1_c' class='answer'>"+
                              "<img src='images/pi/P20_TP1_incorrect.png' alt='pi20_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi20_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 21
                              "<div class='page'><img src='images/pi/nucala_pi_21.jpg' alt='pi21'>"+
                              "<img src='images/pi/P21_TP1_c.png' alt='pi21_tp1_c' class='answer'>"+
                              "<img src='images/pi/P21_TP1_incorrect.png' alt='pi21_tp1_inc' class='answer'>"+
                              "<img src='images/Buttons/touchpoint.png' id='pi21_tp1_c' class='touchpoint'>"+
                              "</div>"+
                              

                              //********* 22
                              "<div class='page'><img src='images/pi/nucala_pi_22.jpg' alt='pi22'></div>"+
                              

                              //********* 23
                              "<div class='page'><img src='images/pi/nucala_pi_23.jpg' alt='pi23'></div>"+
                              

                              //********* 24
                              "<div class='page'><img src='images/pi/nucala_pi_24.jpg' alt='pi24'></div>");

            }
        })
    }
        else{
          $footer.html("<img src='images/Screens/incorrect_resource.png'>");
        } 
  });
  //**************** CHOOSE THE CORRECT RESOURCE ENDS*****************//

  $("body").on("touchstart", ".load_next_scenario", function() {  
      $(".load_next_scenario").attr("src","images/Buttons/load_next_scenario_down.png");
  }).on("touchend", ".load_next_scenario", function(){
       

       scenario = Math.floor((Math.random() * 15) + 1);
       while( $.inArray(scenario, scenario_collect) !=-1 ){
        scenario = Math.floor((Math.random() * 15) + 1);
       }

       scenario_collect.push(scenario);

       $(".resource").removeClass("correct");
       localStorage.setItem("scenario", scenario);
      // $("#question_counter span").html(scenario_collect.length);
       $("#questions").html(activityJSON['question'+scenario]["question"]);
       $footer.css('display', 'none');
       $("#resource .page").remove();
       $(".resource").css('display','inherit');
       $(".answer").removeClass("correct");
  })

   $('#resource').on('click','.answer',function(){    
   var result = $(this).attr('alt');
   if(result == activityJSON['question'+scenario]["answer2"]){
      $(this).css("opacity","inherit");

      if( !$(this).hasClass("correct_answer")  ){
        points = points + 50;
        $point.html(points);
        localStorage.setItem("points", points);
        $(this).addClass("correct_answer");
      }
      $("#"+result).css("display","none");
      $time = $("#timer").text();
      $footer.css('display', 'inherit');
      $("#next_question").remove();
      correct_count++;
      console.log(correct_count);
      $("#correct_count").html(correct_count);
      localStorage.setItem("correct_count", correct_count);
      $footer.html("<img src='images/Screens/correct_datapoint.png'><img src='images/Buttons/load_next_scenario.png' class = 'load_next_scenario'>");
   }
   else{
     $footer.html("<img src='images/Screens/incorrect_datapoint.png' class='incorrect_datapoint'>");
     $footer.css('display','inherit');
     $(this).next().css("opacity","inherit");
     $(this).next().css("display","inherit");
     $("#"+result).css("display","none");
     $(this).next().removeClass("answer");
   }
  }) 
  $("#return").click(function(event) {
        window.location.href="../index.html";      

  });       


});// ********** Document ready ends ***********//




