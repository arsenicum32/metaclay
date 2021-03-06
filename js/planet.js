(function(){
  function addPlanet(orb , pla){
    var nav = navpanel.append('g');
    if(orb.draw){
      var orbit = nav.append('circle').attr({
        "cx": x/2,
        "cy": y/2,
        "stroke": "#eee",
        "stroke-width": "3",
        "fill": "none",
        "r": orb.r
      });

      planets.push(function(){
        orbit.attr({
          "cx": x/2,
          "cy": y/2,
          "r": orb.r
        });
      });
    }
    var timer = [];
    var intervalRotation;
    var planet = [];

    for(var i in pla){
      timer.push((pla[i].start || 0));

      planet.push(nav.append('circle').attr({
        "cx": x/2,
        "cy": y/2 + orb.r,
        "stroke": "#333",
        "stroke-width": "3",
        "fill": "#ccc",
        "name": "planet"+i,
        "class": "planet",
        "r": pla[i].r || 30
      }));
    }

    function setRotation(set){
      intervalRotation = setInterval(function(){
        for(var n in planet){
          timer[n]+=0.001;
          planet[n].attr({
            "cx": x/2 + Math.cos(timer[n]*(pla[n].speed||1))*orb.r,
            "cy": y/2 + Math.sin(timer[n]*(pla[n].speed||1))*orb.r
          });
        }
      }, 10);
    }

    setRotation();

    var clickcount = 0;

    for(var i in planet){
      planet[i].on('mouseover', function(){
        var current = pla[i].r || 30;
        clearInterval(intervalRotation);
        $(this).attr({
          "r": current*2.4
        });

        return tooltip.style("visibility", "visible");
      });

      planet[i].on('click', function(){
        clickcount++;
        if(clickcount===1){
          var scale=1;
          var inter = setInterval( function(){
            scale>0.35?scale-=0.05:clearInterval(inter);
            navpanel.attr({
              "transform": "scale( "+scale+" "+scale+") translate(0 0)"
            });
            stage.attr('visibility',"visible");
          },10);
        }else{
          var tmr = 0;
          var inter = setInterval( function(){
            tmr<0.5?tmr+=0.005:clearInterval(inter);
            for(var n in timer){
              timer[n]+=tmr;
            }
          },10);
        }

        //drawPath.draw([[$(this).attr('cx'),$(this).attr('cy')],[200,200],[300,300]]); /////////////////////////////////////////
      });
      planet[i].on('mousemove', function(){
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      });
      planet[i].on('mouseout', function(){
        var current = pla[i].r || 30;
        setRotation();
        $(this).attr({
          "r": current
        });

        return tooltip.style("visibility", "hidden");
      });
    }

  }


  var pi = 3.14;
  addPlanet({r: 100 , draw: true} ,  // r = x/6
    [{r: 16, speed: 0.25, start: pi*2},
     {r: 16, speed: 0.25, start: pi*4},
     {r: 16, speed: 0.25, start: pi*6},
     {r: 16, speed: 0.25, start: pi*8}
    ]);


  // window.orbit = svg.append('circle').attr({
  //   "cx": x/2,
  //   "cy": y/2,
  //   "stroke": "#eee",
  //   "stroke-width": "3",
  //   "fill": "white",
  //   "r": x/7
  // });
  // window.orbit.timer1 = 0;
  // function appendInterval(){
  //   window.orbit.timerintr = setInterval(function(){
  //     orbit.timer1+=0.01;
  //     orbit.planet.attr({
  //       "cx": x/2 + Math.cos(orbit.timer1)*x/7,
  //       "cy": y/2 + Math.sin(orbit.timer1)*x/7
  //     });
  //   }, 10);
  // }
  // appendInterval();
  //
  // window.orbit.planet = svg.append('circle').attr({
  //   "cx": x/2,
  //   "cy": y/2 + x/7,
  //   "stroke": "#333",
  //   "stroke-width": "3",
  //   "fill": "#ccc",
  //   "r": "30"
  // });
  //
  // orbit.planet.on('mouseover', function(){
  //   clearInterval(orbit.timerintr);
  //   orbit.planet.attr({
  //     "r": "50"
  //   });
  // });
  // orbit.planet.on('mouseout', function(){
  //   appendInterval();
  //   orbit.planet.attr({
  //     "r": "30"
  //   });
  // });

})();
