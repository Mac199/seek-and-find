window.addEventListener('online', function(event){
    console.log("you are back online");
    console.log(challenge);
    if(challenge){
      saveActivity();
    }
    
});
if(localStorage.getItem("total")!=null){
  saveActivity();
}
function saveActivity(){
  //if localstorage has data
    //foreach in localstorage
      //$.post API call
        //callback remove from localstorage
  var data = {};
  // if(localStorage.getItem("time_bonus") != null){
  //   data.time_bonus = localStorage.getItem("time_bonus");
    
  // }
  if(localStorage.getItem("total")!=null ){
    data.total = localStorage.getItem("total");
    console.log(data.total);
  }
  // if(localStorage.getItem("time")!=null ){
  //   data.time = localStorage.getItem("time");
  // }
  // if(localStorage.getItem("correct_count")!=null ){
  //   data.correct_count = localStorage.getItem("correct_count");
    
  // }
  if(localStorage.getItem("scenario")!=null ){
    data.scenario = localStorage.getItem("scenario");  
    console.log(data.scenario); 
  }
  if(localStorage.getItem("time_remaining")!=null ){
    data.time_remaining = localStorage.getItem("time_remaining");
  }
  sendReportToServer(data.total,data.scenario);
}

function sendReportToServer(score,scenario){
    var localInfo = $.parseJSON(currentJSONString);
    var eventID = localInfo.TTInfoDictionary.TTInfo[0][1];
    var userID = localInfo.TTInfoDictionary.TTInfo[1][1];
    $.post("https://gsk.mc3tt.com/tabletop/activities/addactivitycompetition/", 
            { 
                activity_id: 182,
                user_id: userID,
                event_id: eventID,       
                score: score,
                question_id:scenario,
            }, function(data){
            localStorage.removeItem("total");
            localStorage.removeItem("scenario");
            localStorage.removeItem("time_remaining");
            localStorage.removeItem("correct_count");
            localStorage.removeItem("time_bonus");
            console.log('====== Successfully Reported ========', scenario, score);
            
        })
            .fail(function() {
                console.log('+++++++++ Error reporting testing result +++++');
            });
}


