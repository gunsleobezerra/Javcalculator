
function validates() {

	var destiny = document.querySelector("#save2");

	

		if(destiny.textContent == 'a'){

		 sum();

		}

		if(destiny.textContent == 'b'){

		 sube();

		}

		if(destiny.textContent == 'c'){

		 mult();

		}

		if(destiny.textContent == 'd'){

		 div();

		}


	

}

function sum() {
	var display =  document.querySelector("#displayaritimetic");
	var savedata = document.querySelector("#save");

	N1 = display.textContent;
	N2 = savedata.textContent;
	Restult = parseInt(N1) +  parseInt(N2);
	console.log(Restult);
	display.textContent = Restult;
	
	
}

function sube() {
	var display =  document.querySelector("#displayaritimetic");
	var savedata = document.querySelector("#save");

	N1 = display.textContent;
	N2 = savedata.textContent;
	Restult = parseInt(N2) -  parseInt(N1);
	console.log(Restult);
	display.textContent = Restult;
	
	
}

function mult() {
	var display =  document.querySelector("#displayaritimetic");
	var savedata = document.querySelector("#save");

	N1 = display.textContent;
	N2 = savedata.textContent;
	Restult = parseInt(N1) *  parseInt(N2);
	console.log(Restult);
	display.textContent = Restult;
	
	
}

function div() {
	var display =  document.querySelector("#displayaritimetic");
	var savedata = document.querySelector("#save");

	N1 = display.textContent;
	N2 = savedata.textContent;
	Restult = parseInt(N2) /  parseInt(N1);
	console.log(Restult);
	display.textContent = Restult;
	
	
}

function save (operation){
	var display =  document.querySelector("#displayaritimetic");
	var savedata = document.querySelector("#save");
	var destiny = document.querySelector("#save2");

    destiny.textContent = operation;
    console.log(destiny.textContent);

	savedata.textContent = display.textContent;
	console.log(savedata.textContent);
	display.textContent = "";

}

