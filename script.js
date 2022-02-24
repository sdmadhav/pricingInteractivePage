var slider = document.getElementById("myRange");
var output = document.getElementById("view-count");
const billOutput = document.getElementById("bill-id");
const toggleBtn = document.querySelector('input[type="checkbox"]');
let pageview, billAmount;
let data= [
		   ['10K',8],
		   ['50K',12],
		   ['100K',16],
		   ['500K',24],
		   ['1M',36]
		   ]

	pageview = data[slider.value][0];
	billAmount = data[slider.value][1];


	///change valuw of pageviews and bill when switch is toggled
toggleBtn.addEventListener('click',()=>{
	if(toggleBtn.checked==true){
	billAmount =Number(billAmount)- Number(billAmount)*0.25;
}
else{
	billAmount= data[slider.value][1];
}
	
output.innerHTML = pageview +`&nbsp; `; 
billOutput.innerHTML = billAmount.toFixed(2);

}) 


if(toggleBtn.checked==true){
	billAmount =Number(billAmount)- Number(billAmount)*0.25;
}

	
output.innerHTML = pageview +`&nbsp; `; // Display the default slider value
billOutput.innerHTML = billAmount.toFixed(2);

// Update the current slider value (each time you drag the slider handle)

slider.oninput = function() {

	billAmount = data[this.value][1];
	
if(toggleBtn.checked==true){
	billAmount =Number(billAmount)- Number(billAmount)*0.25;
}

	pageview = data[this.value][0];
  	output.innerHTML = pageview+`&nbsp;`;
	billOutput.innerHTML = billAmount.toFixed(2);;

}





const input = document.querySelector('input[name="pwd"]');

function setBackgroundSize(input) {
  input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
}

setBackgroundSize(input);

input.addEventListener("input", () => setBackgroundSize(input));

function getBackgroundSize(input) {
  const min = +input.min || 0;
  const max = +input.max || 100;
  const value = +input.value;

  const size = (value - min) / (max - min) * 100;

  return size;
}
