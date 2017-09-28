
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
document.getElementById('h1').style.opacity = "0";
document.getElementById('credit').style.opacity = "0";
document.getElementById('circle').style.top = (h/2 - 100) + "px";
document.getElementById('circle').style.left = (w/2 - 100) + "px";
document.getElementById('circletimer1').style.top = (h/2 - 100) + "px";
document.getElementById('circletimer1').style.left = (w/2 - 100) + "px";
document.getElementById('circletimer2').style.top = (h/2 - 100) + "px";
document.getElementById('circletimer2').style.left = (w/2 - 100) + "px";
document.getElementById('circletimer3').style.top = (h/2 - 100) + "px";
document.getElementById('circletimer3').style.left = (w/2 - 100) + "px";
document.getElementById('circletimer4').style.top = (h/2 - 100) + "px";
document.getElementById('circletimer4').style.left = (w/2 - 100) + "px";
document.getElementById('title').style.top = (h/2 - 60) + "px";
document.getElementById('title').style.left = (w/2 - 78) + "px";
document.getElementById('wcircle').style.top = (h/2 - 75) + "px";
document.getElementById('wcircle').style.left = (w/2 - 75) + "px";
document.getElementById('purpbox').style.top = (h/2 - 85) + "px";
document.getElementById('purpbox').style.left = (w/2 - 85) + "px";
document.getElementById('line').style.top = (h/2 ) + "px";
document.getElementById('line').style.left = (w/2 - 150) + "px";
document.getElementById('line2').style.top = (h/2 ) + "px";
document.getElementById('line2').style.left = (w/2 - 150) + "px";
setTimeout(function(){
  document.getElementById('wcircle').style.transform = "translate(15px,15px)";
  document.getElementById('wcircle').style.width = "120px";
  document.getElementById('wcircle').style.height = "120px";

},100);
setTimeout(function(){
  document.getElementById('wcircle').style.transform = "translate(-50px,-50px)";
  document.getElementById('wcircle').style.width = "250px";
  document.getElementById('wcircle').style.height = "250px";
  document.getElementById('line').style.top = (h/2 - 100) + "px";
  document.getElementById('line').style.left = (w/2 - 50) + "px";
  document.getElementById('line2').style.top = (h/2 +100) + "px";
  document.getElementById('line2').style.left = (w/2 - 50) + "px";
  document.getElementById('title').style.opacity = "1";
},1000);
setTimeout(function(){
  document.getElementById('wcircle').style.transform = "translate(-475px,-475px)";
  document.getElementById('wcircle').style.width = "1000px";
  document.getElementById('wcircle').style.height = "1000px";
  document.getElementById('line').style.top = (h/2 - 100) + "px";
  document.getElementById('line').style.left = (w/2 - 50) + "px";
  document.getElementById('line2').style.top = (h/2 +100) + "px";
  document.getElementById('line2').style.left = (w/2 - 50) + "px";
  document.getElementById('title').style.opacity = "1";
},3000);
setTimeout(function(){
  document.getElementById('one').style.transform = "translate(0px , 100vh)";
  document.getElementById('time').style.opacity = "1";
  document.getElementById('h1').style.opacity = "1";
  document.getElementById('credit').style.opacity = "1";
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10){
  minutes = "0" + minutes
  }
  document.getElementById('time').innerHTML = hours + ":" + minutes + " ";
},5000);/*here*/
setInterval(function(){
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10){
  minutes = "0" + minutes
  }
  document.getElementById('time').innerHTML = hours + ":" + minutes + " ";

},60000)
var n = 0;
function Nature(){
  if(n==0){
    n=1;
    document.getElementById('circletimer1').style.background = "rgba(255, 51, 51, 0.3)";
      document.getElementById('circletimer1').style.color = "#fff";
  }else{
    n=0;
    document.getElementById('circletimer1').style.background = "rgba(255,255,255,0.3)";
    document.getElementById('circletimer1').style.color = "black";
  }
}
