$("#slideshow > figure:gt(0)").hide();

var aboutDiapoLength = $('#slideshow > figure').length;
var currentDiapo = 0;
setTimeout(function (){
  setInterval(function() {
    $('#slideshow > figure:first')
        .fadeOut(800)
        .next()
        .fadeIn(800)
        .end()
        .appendTo('#slideshow');
  }, 1600);
}, 2600)

$("#inspiration .slideshowInspi1 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('#inspiration .slideshowInspi1 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#inspiration .slideshowInspi1');
  }, 4000);
}, 1000)


$("#inspiration .slideshowInspi2 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('#inspiration .slideshowInspi2 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#inspiration .slideshowInspi2');
  }, 4000);
}, 1500)


$("#inspiration .slideshowInspi3 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('#inspiration .slideshowInspi3 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#inspiration .slideshowInspi3');
  }, 4000);
}, 2000)

$("#inspiration .slideshowInspi4 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('#inspiration .slideshowInspi4 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#inspiration .slideshowInspi4');
  }, 4000);
}, 2100)  

$("#inspiration .slideshowInspi5 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('#inspiration .slideshowInspi5 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#inspiration .slideshowInspi5');
  }, 4000);
}, 1600)  

$("#inspiration .slideshowInspi6 > figure:gt(0)").hide();

setTimeout(function(){
  setInterval(function() { 
    $('#inspiration .slideshowInspi6 > figure:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#inspiration .slideshowInspi6');
  }, 4000);
}, 1100)  



// DIAPO PROJETS

// Animate Projets images
function diapoTravaux(classeSection,  index) {
  var timeout;

    $('' + classeSection + ' .slideshowTravaux' + index + ' > figure:gt(0)').hide();

    setTimeout(function(){
      setInterval(function() {
        $(''+ classeSection +' .slideshowTravaux' + index + ' > figure:first')
            .fadeOut(1500)
            .next()
            .fadeIn(1500)
            .end()
            .appendTo(''+ classeSection + ' .slideshowTravaux' + index + '');
      }, 4000);
    }, 1000 + 500*(index%2));
  }

function diapoDiy(classeSection,  index) {

  $('' + classeSection + ' .slideshowDiy' + index + ' > figure:gt(0)').hide();

  setTimeout(function(){
    setInterval(function() {
      $(''+ classeSection +' .slideshowDiy' + index + ' > figure:first')
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo(''+ classeSection + ' .slideshowDiy' + index + '');
    }, 2600);
  }, 1000);
}

// Call to diapoTravaux function for each kmage block;
for (index = 1; index < document.querySelectorAll('.travaux.convention div').length; index++) {
  diapoTravaux('.travaux.convention', index);
}

for (index = 1; index < document.querySelectorAll('.travaux.saint-charles div').length; index++) {
  diapoTravaux('.travaux.saint-charles', index );
}

for (index = 1; index < document.querySelectorAll('.diy div').length; index++) {
  diapoDiy('.diy', index );
}
