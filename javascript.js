
     
   
   var playing=false;
   var score;
   var action;
   var timeremaining;
   var correctanswer;
   document.getElementById("startreset").onclick=function(){
    if(playing==true){
        location.reload();
       
    }else{
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
         document.getElementById("timeremaining").style.display="block";
         timeremaining=60;
         document.getElementById("timeremainvalue").innerHTML=timeremaining;
         document.getElementById("gameover").style.display="none";
         document.getElementById("startreset").innerHTML="Reset Game";
    
    
     startcountdown();
     generateQnA();

   }
   }
   for(i=1;i<5;i++){
   document.getElementById("box"+i).onclick=function(){
    if(playing==true){
      if(this.innerHTML==correctanswer){
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("wrong").style.display="none";
       document.getElementById("correct").style.display="block";
       setTimeout(function(){
        document.getElementById("correct")="none";

       },1000);
       generateQnA();
      }else{
        document.getElementById("correct").style.display="none";
        document.getElementById("wrong").style.display="block";
        setTimeout(function(){
          document.getElementById("wrong")="none";

        },1000);
      }
    }
   }
  }
   function startcountdown(){
   action= setInterval(function(){
      timeremaining-=1;
      document.getElementById("timeremainvalue").innerHTML=timeremaining;
      if(timeremaining==0){
        stopcountdown();
        document.getElementById("gameover").style.display="block";
        //show("gameover")
        document.getElementById("gameover").innerHTML="<p>Game Over!</p><p>your score is "+score+" .</p>"
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing=false;
        document.getElementById("startreset").innerHTML="Start Game";
      
      } 
   },1000);
  

   }
   function stopcountdown(){
    clearInterval(action);
   }
   function hide(Id){
    document.getElementById(Id).style.display="none";
   

   }
   function show(){
    document.getElementById(Id).style.display="block";
   }
   function generateQnA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x+"*"+y;
    var correctposition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctanswer;
    // fill the other boxes with wrong answer
    var answers=[correctanswer];
    for( i=1;i<5;i++){
      if(i!==correctposition){
        var wronganswer;
        do{
          // we will run this code atleastonce and then we will amke our first check
        var wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        document.getElementById("box"+i).innerHTML=wronganswer;

        }while(answers.indexOf(wronganswer)>-1)
        document.getElementById("box"+i).innerHTML=wronganswer;
        answers.push(wronganswer);
      }
    }
    


   }
