

var UserName = prompt ('Whats your name?');
console.log(UserName);



alert('Welcome '+ UserName  );
document.write('Welcome ' + UserName  );



var isinterested = prompt('Are you intersted yes or no?');

if ( isinterested== 'yes')

{
    alert('We hope this is useful for you ♥');

    var order = prompt("Do you want a weight loss program?");

    if (order == 'yes') {

        
        var order = prompt("Are you vegetarian or normal?");

        while(order !== "vegetarian" &&  order !== "normal")
        {
            order = prompt("Are you vegetarian or normal?");
        }
        
        
        var itemOrder = '';
        
        if (itemOrder == 'vegetarian')
        {
        itemOrder = '<img src="vegetarian.jpg"/>';
        }
        else if(itemOrder == "normal")
        {
        itemOrder = '<img src="normality.jpg"/>';
        }
        
    
    
    var programme = prompt("Write 1 if you want to take a programme")
    
    var result='';
    for (var i=0; i<programme ; i++)
    {
    result = result + itemOrder;
    console.log(result)
    
    
    }
    
    
    }
    
    


    else {
        alert('Thank you for visitng ♥');

    }

}



star = '<img src="star.jpg"/>'

var stars = prompt("How many stars you give us from 1 to 5 ?");
    
var sum='';
for (var i=0 ; i<stars ; i++)
{
sum = sum + star;



}

document.write(result);
document.write(sum);



