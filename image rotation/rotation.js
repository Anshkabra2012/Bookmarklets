javascript:(function(){document.querySelectorAll('img').forEach(function(img){var deg=0;img.style.transition='transform 0.1s';setInterval(function(){deg=(deg+10)%360;img.style.transform='rotate('+deg+'deg)';},100);});})();