var button = document.getElementById("showMe");
var treeStack = "";
button.addEventListener("click", showMe);
// document.addEventListener("keypress", showMe);

// function enterKeyPressed(keypress){
//  if (keypress.which === 13) {
//    showMe();
//  } 
// }

function showMe (clickEvent) {
	var userHeight = document.getElementById("inputHeight").value;
	var userChar = document.getElementById("inputCharacter").value;
	var space = "_";

  		for (i = userHeight; i >= 0 ; i--) {
  			var spaceLoop = "";
			spaceLoop += space[i];
  } 
			console.log(spaceLoop);

		for (j = 0; j < userHeight; j++) {
			treeStack += spaceLoop;
  			treeStack += userChar;
  			console.log(treeStack);
  } 

// console.log(spaceLoop + treeStack)

}

