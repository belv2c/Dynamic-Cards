console.log("Dynamic Cards");


//Create variables to hold HTML elements
var textHolder = document.getElementById('textarea');
var buttonSubmit = document.getElementById('btn');
var cardHolder = document.getElementById('card');
var buttonDelete = document.getElementById('btnDelete');


//Build Dom String
function buildDomString() {
	var domString = "";
		
		domString+=	`<textarea id="textarea">${textHolder.value}</textarea>`;
	/*	domString+= 	`<btn class="buttonSubmit">Create</button>`;*/
		domString+=		`<button id="buttonDelete">Delete</button>`;
		domString+= 	`<div id="cardHolder">`;
		domString+= `</div>`;
		//Calling the function
		writeToDom(domString);
		//Prints out the domString to the js console
		console.log(domString);
	}

//Adding click event to Create button
buttonSubmit.addEventListener('click', buildDomString);

//Function calling writeToDom and inserting cardHolder into HTML
function writeToDom (domString){
	cardHolder.innerHTML+=domString;
}

//Adding click event to delete button 
cardHolder.addEventListener('click', buttonDelete);

//Function that deletes the cardHolder from the DOM when the delete button is clicked
function buttonDelete (event){
	console.log(event);
	if(event.target.className === 'btnDelete'){
		event.target.parentNode.remove();
	}
}

