function saveActivity(){
  if(navigator.onLine){
    //if localstorage has data
      //foreach in localstorage
        //$.post API call
          //callback remove from localstorage
    var data = {};
    if(localStorage.getItem("time_bonus") != null){
      data.time_bonus = localStorage.getItem("time_bonus");
      localStorage.removeItem("time_bonus");
    }
    if(localStorage.getItem("total")!=null ){
      data.total = localStorage.getItem("total");
      localStorage.removeItem("total");
    }
    if(localStorage.getItem("time")!=null ){
      data.time = localStorage.getItem("time");
      localStorage.removeItem("time");
    }
    if(localStorage.getItem("correct_count")!=null ){
      data.correct_count = localStorage.getItem("correct_count");
      localStorage.removeItem("correct_count");
    }
    if(localStorage.getItem("scenario")!=null ){
      data.scenario = localStorage.getItem("scenario");
      localStorage.removeItem("scenario");
    }
    if(localStorage.getItem("time_remaining")!=null ){
      data.time_remaining = localStorage.getItem("time_remaining");
      localStorage.removeItem("time_remaining");
    }
    sendReportToServer(data.total,data.scenario,data.time_remaining,data.time,data.time_bonus);
  }
}


function sendReportToServer(score,scenario,time_remaining,time,time_bonus){
    let localInfo = $.parseJSON(currentJSONString);
    let eventID = localInfo.TTInfoDictionary.TTInfo[0][1];
    let userID = localInfo.TTInfoDictionary.TTInfo[1][1];
    $.post("https://gsk.mc3tt.com/tabletop/activities/addactivitycompetition/", 
            { 
                activity_id: 124,
                user_id: userID,
                event_id: eventID,       
                score: score,
                question_id:scenario,
                time_remaining:time_remaining,
                time:time,
                time_bonus:time_bonus
            }, function(data){

            console.log('====== Successfully Reported ========', scenario, score);
            
        })
            .fail(function() {
                console.log('+++++++++ Error reporting testing result +++++');
            });
}



