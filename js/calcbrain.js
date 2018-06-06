


function sum () {
	var display =  document.querySelector("#displayaritimetic");
	var savedata = document.querySelector("#save");

	N1 = display.textContent;
	N2 = savedata.textContent;
	Restult = parseInt(N1) +  parseInt(N2);
	console.log(Restult);
	display.textContent = Restult;
	
	
}

function save (){
	var display =  document.querySelector("#displayaritimetic");
	var savedata = document.querySelector("#save");

	savedata.textContent = display.textContent;
	console.log(savedata.textContent);
	display.textContent = "";

}