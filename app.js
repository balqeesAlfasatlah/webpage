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


function done(){


var userName = prompt("Please enter your name ");
while(userName === ' ' || !isNaN(userName)){
  userName = prompt("Please enter your name ");
}



var userNumber = prompt("Enter the number of the images do you want to see about the amazing  places in jordan ");
for(var i=0 ; i<userNumber; i++){
  document.write('<img src= "https://universes.art/fileadmin/_migrated/gridelement_uploads/mobile/Petra-Ad-Deir-IMG_0609-800-700-2_01.jpg"/>');
}
}

done();