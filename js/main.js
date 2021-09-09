$("#slideshow > figure:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > figure:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 1000);

$(".slideshowInspi1 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('.slideshowInspi1 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('.slideshowInspi1');
  }, 2500);
}, 1000)


$(".slideshowInspi2 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('.slideshowInspi2 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('.slideshowInspi2');
  }, 2500);
}, 1500)


$(".slideshowInspi3 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('.slideshowInspi3 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('.slideshowInspi3');
  }, 2500);
}, 2000)

$(".slideshowInspi4 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('.slideshowInspi4 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('.slideshowInspi4');
  }, 2500);
}, 2100)  

$(".slideshowInspi5 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('.slideshowInspi5 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('.slideshowInspi5');
  }, 2500);
}, 1600)  

$(".slideshowInspi6 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('.slideshowInspi6 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('.slideshowInspi6');
  }, 2500);
}, 1100)  

  