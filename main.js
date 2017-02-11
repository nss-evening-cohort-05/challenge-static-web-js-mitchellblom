var button = document.getElementById("showMe");
var treeStack = "";
button.addEventListener("click", validateInput);

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   validateInput();
 } 
}

function validateInput(e) {
	var userInput = {
		userHeight: document.getElementById("inputHeight").value,
		userChar: document.getElementById("inputCharacter").value
	}
	if (userInput.userHeight === "" || userInput.userChar === "") {
		alert("Both fields must have a value!")
	} else {
		showMe(userInput);
	}
}

function showMe (userInputObject) {
	
	var space = " ";
	var tree = "";
	
	for (j = 0; j < userInputObject.userHeight; j++) {
		var spaceLoop = "";
		spaceLoop = space.repeat(userInputObject.userHeight-j+1);
		treeStack = userInputObject.userChar.repeat(j*2+1);
		tree += spaceLoop + treeStack;
		tree += "\n";
 	}
  	console.log(tree);
}