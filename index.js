$(document).ready(function () {
  $('#slogan').fadeIn(2700);
  $(this).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 360) {
      $('#slogan').fadeOut(0.3);
    } else {
      $('#slogan').fadeIn();
    }
  });
  bar1 = new ProgressBar.Circle('#circ1', {
    color: '#212F3D',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: {
      display: 'block'
    },
    text: {
      value: '100%',
    },

    from: { color: '#229954', width: 1 },
    to: { color: '#212F3D', width: 4 },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
    }
  });
  bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar1.text.style.fontSize = '2rem';

  bar2 = new ProgressBar.Circle('#circ2', {
    color: '#660033',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: {
      display: 'block'
    },
    text: {
      value: '100%',
    },

    from: { color:'#229954', width: 1 },
    to: { color: '#660033', width: 4 },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
    }
  });
  bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar2.text.style.fontSize = '2rem';

  bar3 = new ProgressBar.Circle('#circ3', {
    color: '#FFF176',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: {
      display: 'block'
    },
    text: {
      value: '100%'
    },
    from: { color: '#0000CC', width: 1 },
    to: { color: '#FFF176', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
    }
  });
  bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar3.text.style.fontSize = '2rem';
  $(window).scroll(function () {
    sc = $(window).scrollTop();

    let a = $('#circ1').offset().top;
    if (sc > (a - 300) && !progressDisplayed) {
      progressDisplayed = true;

      bar1.animate(1.0);
      setTimeout(() => {
        bar2.animate(1.0);
      }, 250);
      setTimeout(() => {

        bar3.animate(1.0);
      }, 500);
    }
  });
});
let sc = 0;
let bar1, bar2, bar3;
let progressDisplayed = false;

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});