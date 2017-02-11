var button = document.getElementById("showMe");
var treeStack = "";

button.addEventListener("click", showMe);

function showMe (clickEvent) {
	var userHeight = document.getElementById("inputHeight").value;
	var userChar = document.getElementById("inputCharacter").value;
	console.log(userHeight);
	console.log(userChar);
}

// function showMe (clickEvent) {
// 	for (i = 0; i < userHeight; i++) {
//   	treeStack += userChar;
//   	console.log(treeStack);
//   } 
// }

// showMe(userChar);







// function inputKeyUp(e) {
//     e.which = e.which || e.keyCode;
//     if(e.which == 13) {
//         // submit
//     }
// }