
// Problem 1 Write a JavaScript program to display the current day and time in the following format. 

var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(day);

var days = ["Monday", "Teusday", "Wedensday", "Thursday", "Friday", "Saturday", "Sunday"]


	if (day === 1) {
		document.getElementById('day').textContent = "Today is : " + days[0];
	}
	if (day === 2) {
		document.getElementById('day').textContent = "Today is : " + days[1];
	}
	if (day === 3) {
		document.getElementById('day').textContent = "Today is : " + days[2];
	}
	if (day === 4) {
		document.getElementById('day').textContent = "Today is : " + days[3];
	}
	if (day === 5) {
		document.getElementById('day').textContent = "Today is : " + days[4];
	}
	if (day === 6) {
		document.getElementById('day').textContent = "Today is : " + days[5];
	}
	if (day === 7) {
		document.getElementById('day').textContent = "Today is : " + days[6];
	}

	document.getElementById('time').textContent = "Current time is: " + hour + " : " + minutes + " : " + seconds;


	// Or do this for the first part
	/* var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + "."); */

// this function allows you to print whats on the screen. Use window.print()
function print_me() {
	window.print();
}



/* Problem 2  
Write a JavaScript program to rotate the string 'w3resource' in right 
direction by periodically removing one letter from the end of the string and attaching it to the front.*/

function animate_string(target) 
{
    var element = document.getElementById('target');
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () {
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


// Problem 3 
/* Write a JavaScript program where the program takes a random 
integer between 1 to 10, the user is then prompted to input a guess 
umber. If the user input matches with guess number, the program 
will display a message "Good Work" otherwise display a message 
"Not matched". */


document.getElementById('btn').addEventListener('click', function() {
	var guess = document.getElementById('guess').value;
	var rando = Math.ceil(Math.random()*10);
	if (guess == rando) {
		console.log("Good Job");
	} else {
		console.log("Wrong Bitch");
	}
	console.log(rando);
})


// Problem 4 
/*Write a JavaScript program to calculate multiplication and division 
of two numbers (input from user).*/

function mult() {
	var num1 = document.getElementById('input1').value;
	var num2 = document.getElementById('input2').value;
	var multiply = num1*num2;
	console.log(multiply);
}

// Gets document URL
// alert(document.URL);


// Problem 5
/* Write a JavaScript program to get the difference between 
a given number and 13, if the number is greater than 13 
return double the absolute difference. */


function calc() {
	var numput = document.getElementById('number').value;
	var diff = numput-13;

	if (numput > 13) {
		var absolute = Math.abs(diff)*2;
		console.log(absolute);
	} else 

	console.log(diff);
} 

// Problem 6
/* Write a JavaScript program to check two given numbers and return 
true if one of the number is 50 or if their sum is 50. */

document.getElementById('checker').addEventListener('click', function() {
	var check1 = document.getElementById('check1').value
	var check2 = document.getElementById('check2').value
	var answer = null;
	var sum = Number(check1) + Number(check2);

	if ((check1 == 50 || check2 == 50) || (sum == 50) ) {
		var answer = true;
		console.log(answer);
		console.log(sum);
	}  else if (check1 == 50 || check2 != 50) {
		var answer = false;
		console.log(answer);
	}
	
})

// Problem 7 
/*  Write a JavaScript program to create a new string adding 
"Py" in front of a given string. If the given string begins with
"Py" then return the original string.*/















