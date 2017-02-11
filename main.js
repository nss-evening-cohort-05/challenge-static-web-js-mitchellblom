var userHeight = document.getElementById("inputHeight").value;
var userChar = document.getElementById("inputCharacter");
var button = document.getElementById("showMe");
var treeStack = "";

button.addEventListener("click", showMe);

function showMe (clickEvent) {
	for (i = 0; i < userHeight; i++) {
  	treeStack += userChar;
  	console.log(treeStack);
  } 
}

showMe(treeStack);