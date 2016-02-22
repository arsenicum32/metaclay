(function(){
  window.tooltip = d3.select("body")
    .append("div").attr('class', 'tooltip')
    .text("a simple tooltip");

  window.fullinfopanel = d3.select("body")
    .append("div").attr('class', 'fullinfopanel')
    .text("helllo");

  window.clickpos = function(x, y) {
    var w = $(window).width(),
        h = $(window).height();
    return [Math.round(x / w), Math.round(y / h)];
  }
})();
