$('#go').click(function(){
    var cssSelector = anime({
        targets: '.line',
        translateX: 450,
        borderRadius: ['0em', '2em'],
        scale: 4,
        rotate: {
            value: 9000,
            duration: 1800,
            easing: 'easeInOutSine',
            delay: 800,
          },
        duration: 3000,
        direction: 'alternate',
        backgroundColor: [
            {value: '#FFF'}, // Or #FFFFFF
            {value: 'rgb(255, 0, 0)'},        
          ],
      });
})

$('#reset').click(function(){
    var cssSelector = anime({
        targets: '.line',
        translateX: 0,
        borderRadius: ['0em', '0em'],
        scale: 1,
        rotate: {
            value: 00,
            duration: 1800,
            easing: 'easeInOutSine'
          },
        duration: 3000
      });
})


var brojevi={vrednost:1}
var jsObject = anime({
    targets: brojevi,
    vrednost:1000,
    round: 1,
    easing: 'easeInOutExpo',
    duration:5000,
    update:function(){
        var el = document.querySelector('#JSobject');
        el.innerHTML = JSON.stringify(brojevi.vrednost);
    }
  });

//   var lineDrawing = anime({
//     targets: '#lineDrawing .lines path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 11500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
//   });

var letters = anime({
  targets: '.letter ',
  translateY: -350,
  duration: function(el, i, l) {
    return 1000 + (i * 1100);
  }
});

var letters = anime.timeline({
    direction:'alternate',
    loop: true
   
  });

   letters.add({
    targets: '.letter ',
    translateY: -350,
    duration: function(el, i, l) {
      return 1000 + (i * 100);
    },
  });
  letters.add({
    targets: '.letter ',
    translateY: -200,
    rotate: 360,
    duration: function(el, i, l) {
      return 8000 + (i * 600);
    }
  });

// letters.add({
//     targets: '.letter ',
//     translateY: -350,
//     scale: 2,
//     direction: 'alternate',
//     duration: function(el, i, l) {
//         return 1000 + (i * 100);
//       }
// });
// letters.add({
//     targets: '.letter ',
//     translateY: -350,
//     scale: 1,
//     duration: function(el, i, l) {
//         return 1000 + (i * 100);
//       }
// })
