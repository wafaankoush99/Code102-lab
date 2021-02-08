


// var isintersted = true;
// console.log(FirstName + ',' + Age + 'years old, is interested' + isinterested)



var UserName = prompt ('Whats your name?');
console.log(UserName);

// show an alert with input feid 

alert('Welcome '+ UserName);
document.write('Welcome ' + UserName );

var isinterested = prompt('Are you intersted yes or no?');

if (isinterested== 'yes')
{
    alert('We hope this is useful for you ♥');
    var order = prompt("Do you want a weight loss program?");


    // while(order == "yes" ){
    //     order = prompt("Are you vegetarian or normal?");
    // }
    
    
    var itemOrder = prompt("Are you vegetarian or normal?");
    
    
    if (itemOrder == 'vegetarian')
    {
    itemOrder = '<img src="vegetarian.jpg"/>';
    }
    else if(itemOrder == "normal")
    {
    itemOrder = '<img src="normality.jpg"/>';
    }
    console.log(itemOrder)
    
    
    
    
    var programme = prompt("Write 1 if you want to take a programme")
    
    var result;
    for (var i=0; i<programme ; i++)
    {
    result = result + itemOrder;
    console.log(result)
    
    
    }
    console.log(result)
    document.write(result);
}

else{

alert('Thank you for visitng ♥');
}













