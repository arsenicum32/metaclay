(function() {
  window.x = $(window).width();
  window.y = $(window).height();
  window.svg = d3.select('body').append('svg').attr({
    width: x,
    height: y
  });

  window.objs = [];
  window.planets = [];
  window.intervals = [];

  $(window).on('resize load', function() {
    x = $(window).width();
    y = $(window).height();
    svg.attr("width", x).attr("height", y);
    logog.attr('transform','translate('+(x/2  - 45)+','+(y/2 - 45)+')');
    for(var i in planets){
      planets[i]();
    }
  });

})();
