
Evolution();



function Evolution () {

          star = '<img src="starr.jpg"/>'


var stars = prompt("How many stars would you give us from 1 to 10 ?");
    
var sum='';
for (var i=0 ; i<stars ; i++)
{
sum = sum + star;
}

document.write(sum);
}
