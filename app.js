/*var userName = prompt("Whats your name ?");
alert("welocme back " + userName );

var favColor = prompt("Whats your favourite color ?");
alert(favColor  +"its nice color ");

var age = prompt('What is your age?');
if (age < 18){
alert('you cant take this course');
}
else if(age >= 18){
alert('you cant take this course');
}
else{
  document.write("please enter your age");
}
*/
var userName = prompt("Please enter your name ");
while(userName === ' ' || !isNaN(userName)){
  userName = prompt("Please enter your name ");
}
var userNumber = prompt("Enter the number of the images do you want to see ");
for(var i=0 ; i<userNumber; i++){
  document.write('<img src= "https://i2.wp.com/www.annuair.ma/wp-content/uploads/2021/03/html-cours-gratuit.jpg?fit=590%2C320&ssl=1"/>');
}