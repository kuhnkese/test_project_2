
var colors = require('colors');
 


 Array.prototype.random = function (length) {
       return this[Math.floor((Math.random()*length))];
 }

 var color = ['.yellow', '.cyan', '.magenta', '.red', '.green', '.blue', '.rainbow', '.zebra']
 var rcolor = color.random(color.length)

var printcolors = ('fuck' + rcolor)

console.log(printcolors)
