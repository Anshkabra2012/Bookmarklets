javascript:(function(){function randomColor(){return 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';}document.querySelectorAll('p').forEach(function(el){el.style.color=randomColor();});})();
