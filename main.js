var button = document.getElementById("showMe");
var userChar = document.getElementById("inputCharacter");
var userHeight = document.getElementById("inputHeight");

console.log("User chooses this height: ", userHeight);

var symbol = [userChar];
var treeStack = "";

console.log("User chooses this character: ", userChar);

button.addEventListener("click", showMe);


function createTree () {
  for (i = 0; i < symbol.length; i++) {
  	treeStack += symbol[i];
  	console.log(treeStack);
  } 
 }




createTree(treeStack);