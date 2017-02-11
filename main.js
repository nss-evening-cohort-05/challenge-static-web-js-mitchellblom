var button = document.getElementById("showMe");
var treeStack = "";
button.addEventListener("click", showMe);

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   showMe();
 } 
}

function showMe (clickEvent) {
	var userHeight = document.getElementById("inputHeight").value;
	var userChar = document.getElementById("inputCharacter").value;
	var space = " ";

		for (j = 0; j < userHeight; j++) {
			var spaceLoop = "";
			spaceLoop += space.repeat((userHeight-[j])/2);
  			treeStack += userChar;
  			console.log(spaceLoop + treeStack);
  } 
}