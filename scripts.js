// let links = document.getElementById("links");
// console.log(links.children)
// for(var i=0;i<links.children.length;i++){
//   links.children[i].addEventListener("mouseenter", function( event ) {
//   // unfade(ktoe)
//   $("#ktoe_guy").fadeIn()
//   // $("#ktoe_guy").css("display ","block")

//   // ktoe.style.display ="inline-block";
// }, false);
//   links.children[i].addEventListener("mouseleave", function( event ) {
//   $("#ktoe_guy").fadeOut()
//     // $("#ktoe_guy").css("display ","none")
//     console.log("what")
//   // setTimeout(function() {
//   //   ktoe.style.display ="none";
//   // }, 500);
// }, false);
// }

 var mrefreshinterval = 500; // update display every 500ms
 var lastmousex=-1; 
 var lastmousey=-1;
 var lastmousetime;
 var mousetravel = 0;
 var mousespeed = 0;
 var sparkling = false
 var timeout = false
 $('html').mousemove(function(e) {
     var mousex = e.pageX;
     var mousey = e.pageY;
     if (lastmousex > -1)
         mousetravel =  Math.abs(mousex-lastmousex)+Math.abs(mousey-lastmousey)
     lastmousex = mousex;
     lastmousey = mousey;
     console.log(sparkling)
     if(mousetravel>1 && !sparkling){
       console.log(mousetravel)
       $('html').unbind("mousemove");
          sparkle(mousetravel,"sparkle")
          sparkle(mousetravel,"sparkle1")
          sparkle(mousetravel,"sparkle2")
          sparkle(mousetravel,"sparkle3")

    }else{
      $('sparkle').hide()
      $('sparkle1').hide()
      $('sparkle2').hide()
      $('sparkle3').hide()
    }
 });

function sparkle(speed,element){
  sparkling = true
      var delay = getRandomInt(0,300)
      var left  = getRandomInt(0,100).toString() + "%"
      var top = getRandomInt(0,100).toString() + "%"
      $(this).css({top: top, left: left, position:'absolute',transform: "translate(-50%, -50%)"});
  $("#"+element).fadeOut(1000, function() {
      var left  = getRandomInt(0,100).toString() + "%"
      var top = getRandomInt(0,100).toString() + "%"
      $(this).css({top: top, left: left, position:'absolute',transform: "translate(-50%, -50%)"});
  }).delay(delay).fadeIn("fast", function () {
    $(this).fadeOut(1000,function() {
            // sparkling = false
          if(element=="sparkle3"){
            sparkling = false
          }
       $('html').mousemove(function(e) {
     var mousex = e.pageX;
     var mousey = e.pageY;
     if (lastmousex > -1)
         mousetravel =  Math.abs(mousex-lastmousex)+Math.abs(mousey-lastmousey)
     lastmousex = mousex;
     lastmousey = mousey;
     if(mousetravel>1 && !sparkling){
       $('html').unbind("mousemove");
        sparkle(mousetravel,"sparkle")
        sparkle(mousetravel,"sparkle1")
        sparkle(mousetravel,"sparkle2")
        sparkle(mousetravel,"sparkle3")
    } else{
      $('sparkle').hide()
      $('sparkle1').hide()
      $('sparkle2').hide()
      $('sparkle3').hide()
    }
 });
    })
  })

}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}