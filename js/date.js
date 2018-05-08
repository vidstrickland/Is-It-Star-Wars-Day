var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var singleDayArray = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
var preDayArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Thir", "Four", "Fif", "Six", "Seven", "Eigh", "Nine"];
var monthDisplay = monthArray[month];
var dayDisplay;
var dayString = String(day);

if(day < 12){
	dayDisplay = singleDayArray[day-1];
}else if(day < 20){
	dayDisplay = preDayArray[day-1] + "teenth";
}else if(day == 20){
	dayDisplay = "Twentieth";
}else if(day == 30){
	dayDisplay = "Thirtieth";
}else if(day == 31){
	dayDisplay = "Thirty-First";
}else if(dayString[0] == 2){
	dayDisplay = "Twenty" + "-" + singleDayArray[dayString.charAt(1)-1];
}

document.getElementById("date").innerHTML = monthDisplay + " the " + dayDisplay + " be with you!";