var button = document.getElementById("showMe");
var treeStack = "";
var space = " ";

button.addEventListener("click", showMe);

function showMe (clickEvent) {
	var userHeight = document.getElementById("inputHeight").value;
	var userChar = document.getElementById("inputCharacter").value;
		for (i = 0; i < userHeight; i++) {
  			// treeStack += parseInt(userHeight/2) * space + userChar;
  			treeStack += userChar;
  			console.log(treeStack);
  } 
}


// showMe(userChar);







// function inputKeyUp(e) {
//     e.which = e.which || e.keyCode;
//     if(e.which == 13) {
//         // submit
//     }
// }