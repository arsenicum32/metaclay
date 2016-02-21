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

    for(var i in planet){
      planet[i].on('mouseover', function(){
        var current = pla[i].r || 30;
        clearInterval(intervalRotation);
        $(this).attr({
          "r": current*1.4
        });

      });
      planet[i].on('click', function(){
        var i=1;
        var inter = setInterval( function(){
          i>0.35?i-=0.05:clearInterval(inter);
          navpanel.attr({
            "transform": "scale( "+i+" "+i+") translate(0 0)"
          });
        },10);
      });
      planet[i].on('mouseout', function(){
        var current = pla[i].r || 30;
        setRotation();
        $(this).attr({
          "r": current
        });
      });
    }

  }

  var pi = 3.14;
  addPlanet({r: x/6 , draw: true} ,
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
