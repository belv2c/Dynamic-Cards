console.log("Dynamic Cards");


var textHolder = document.getElementById('textarea');
var buttonSumbit = document.getElementById('btn');
var cardHolder = document.getElementById('card');
var newDomString = buildDomString();

function buildDomString(cards) {
	var domString = "";
		
		domString+=	`<textarea class="textarea"${textHolder.value}>`;
		domString+= `<btn class="buttonSubmit"${btn.value}>`;
		domString+= `<div class="cardHolder"${card.value}>`;
		domString+= `</div>`;
		return domString;
	}

cardHolder.innerHTML += newDomString;

/*function printToDom(cards){*/
	/*textHolder.innerHTML = cards;*/
/*}*/

buttonSubmit.addEventListener('click', function(event){

})