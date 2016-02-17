(function() {
  window.x = $(window).width();
  window.y = $(window).height();
  window.svg = d3.select('body').append('svg').attr({
    width: x,
    height: y
  });

  $(window).on('resize load', function() {
    x = $(window).width();
    y = $(window).height();
    svg.attr("width", x).attr("height", y);
    logog.attr('transform','translate('+(x/2  - 45)+','+(y/2 - 45)+')');
    for(var i in planets){
      planets[i]();
    }

    // orbit.attr({
    //   "cx": x/2,
    //   "cy": y/2,
    //   "r": x/7
    // });
    // orbit.planet.attr({
    //   "cx": x/2,
    //   "cy": y/2+x/7
    // });
  });

})();
