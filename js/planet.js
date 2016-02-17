(function(){
  window.planets = [];
  function addPlanet(orb , pla){
    var orbit = svg.append('circle').attr({
      "cx": x/2,
      "cy": y/2,
      "stroke": "#eee",
      "stroke-width": "3",
      "fill": "white",
      "r": orb.r
    });

    planets.push(function(){
      orbit.attr({
        "cx": x/2,
        "cy": y/2,
        "r": orb.r
      });
    });
    var timer = 0;
    var intervalRotation;

    var planet = svg.append('circle').attr({
      "cx": x/2,
      "cy": y/2 + orb.r,
      "stroke": "#333",
      "stroke-width": "3",
      "fill": "#ccc",
      "r": pla.r || 30
    });

    function setRotation(){
      intervalRotation = setInterval(function(){
        timer+=0.01;
        planet.attr({
          "cx": x/2 + Math.cos(timer*(pla.speed||1))*orb.r,
          "cy": y/2 + Math.sin(timer*(pla.speed||1))*orb.r
        });
      }, 10);
    }

    setRotation();

    planet.on('mouseover', function(){
      clearInterval(intervalRotation);
      planet.attr({
        "r": pla.r*1.4 || 50
      });
    });
    planet.on('mouseout', function(){
      setRotation();
      planet.attr({
        "r": pla.r || 30
      });
    });

  }

  addPlanet({r: x/4} , {r: 14, speed: 0.5});
  addPlanet({r: x/5} , {r: 15, speed: 0.35});
  addPlanet({r: x/6.5} , {r: 20, speed: -0.65});
  addPlanet({r: x/9} , {r: 16, speed: 1.25});

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
