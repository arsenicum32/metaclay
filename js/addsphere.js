(function(){
  var used = [[],[],[]];
  var number = 0;
  function addAtom(xf,yf, r){
    this.genpos = function(){
      var posY = Math.floor(Math.random()*3) - 1;
      var posX = Math.floor(Math.random()*5) - 2;
      if(used[posY+1] && used[posY+1].indexOf(posX)!=-1){
        return genpos();
      }else{
        used[posY+1].push(posX);
        return [posX,posY];
      }
    }
    if(xf && yf){
      used[yf +1].push(xf);
    }
    var atom = stage.append('circle').attr({
      "cx": x/2 - (xf=='undefined'?genpos()[0]:xf)*x/6,
      "cy": y/2 - (yf=='undefined'?genpos()[1]:yf)*x/6,
      "stroke": "#ddd",
      "stroke-width": "2",
      "fill": "#eee",
      "class": "otdel-items",
      "r": r || x/15
    });
    var tmrca = 0;
    var createanim  = setInterval(function(){
      tmrca<(r || x/15)?tmrca+=0.55:clearInterval(createanim);
      atom.attr('r', tmrca);
    },10);
    var timer = 0;
    var startx = parseInt(atom.attr("cx"));
    var starty = parseInt(atom.attr("cy"));
    function rf(){
      var stp = [Math.random(),Math.random(),Math.random()];
      return function(t){
        var sc = stp[0]>0.5?Math.sin(t):Math.cos(t);
        var fin = 0;
        for(var i=0;i<Math.floor(stp[1]*4+1);i++){
          fin+=sc*Math.floor(stp[2]*5);
        }
        return fin;
      };
    }
    var sxf = rf(); var syf = rf();
    number++;
    var inter = setInterval(function(){
      timer+=0.01;
      atom.attr({
        "cx": startx + sxf(timer),
        "cy": starty + syf(timer)
      });
      //drawPath.updatec(startx + sxf(timer),starty + sxf(timer), number);  //////////
    },10);
    return [atom, inter];
  }

  function drawlines(arr){
    var linesg = svg.append('g').attr('id','linesg');
    var fin = [];
    if(arr.length > 1){
      if(arr.length%2!==0) arr.slice(1);
      for(var n=0;n<arr.length-2;n++){
        fin.push(linesg.append("line")
                           .attr("x1", arr[n][0])
                           .attr("y1", arr[n][1])
                           .attr("x2", arr[n+1][0])
                           .attr("y2", arr[n+1][1])
                           .attr("stroke-width", 2)
                           .attr("stroke", "black"));
      }
      return fin;
    }else{
      return false;
    }
  }
    addAtom(-1,-1);
    addAtom(1,1);
    addAtom(0,0);
    addAtom(-1,1);


  $('.otdel-items').map(function(){
    console.log($(this));
  });

  $('.otdel-items').on({
    'mouseover': function(e){
      fullinfopanel.style("visibility", "visible");
      fullinfopanel.style("top", "0px").style("left",(e.pageX+ ( clickpos(e.pageX,e.pageY)[0]? -10-x/2: 10 ) )+"px");
    },
    'mouseout': function(){
      fullinfopanel.style("visibility", "hidden");
    }
  })
})();
