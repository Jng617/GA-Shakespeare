
// Select the li elements at the second level of the nested list - Declare variable listElem
var listElem = document.querySelectorAll("#selected-plays > li > ul > li");

// Add class "special"
for(var i = 0; i < mylis.length; i++){
	listElem[i].classList.add("special");

}

// Select all the table cells in the third column of a table - Declare variable tdElem
var tdElem = document.querySelectorAll("table td:nth-child(3n+3)");

// Add class "year"
for(var i = 0; i < mytd.length; i++){
	tdElem[i].classList.add("year");

}

// Select every other row in the table - Declare variable rowElem
var rowElem = document.querySelectorAll("table tr:nth-child(even)");

// Add background color gray
for(var i = 0; i < myrow.length; i++){
	rowElem[i].setAttribute("style", "background-color:grey;");

}

// Select anchor tag that has a link to a pdf file
var anchorTag = document.querySelector('#selected-plays a[href$=".pdf"]');

// Change color to blue and increase font size
anchorTag.style.color = "blue";
anchorTag.style.fontSize = "15px";

// Select anchor tag that has an href attribute containing the substring "asyoulikeit"
var myhref = document.querySelector("#selected-plays a[href=\"/asyoulikeit/\"]");

// Change color to orange
myhref.style.color = "orange";
