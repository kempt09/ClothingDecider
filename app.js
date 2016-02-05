var clothes = {
	casual : "jeans and a t-shirt",
	semiformal: "khakis and a polo",
	formal:"a suit or dress"
};

var temperatures = {
	cold: "wear some additional layers",
	warm: "take a jacket just incase",
	hot: "bring an A/C"
};

function decision(a, b){
    'use strict';
    var x,
        y,
        answer = document.getElementById('display');
	a = document.getElementById('temperature').value;
    if (a >= 70){
        x = temperatures.hot;
	} else if (a <= 54) {
        x = temperatures.cold;
    } else {
        x = temperatures.warm;
	}
    b = document.getElementById('type').value.toUpperCase().toString();
    if (b === 'CASUAL'){
        y = clothes.casual;
    } else if (b === 'SEMI-FORMAL' || 'semiformal') {
        y = clothes.semiformal;
    } else if (b === 'FORMAL'){
        y = clothes.formal;
    } else {
        y = 'you entered something invalid for event type';
    }
    answer.innerHTML = 'Since the temperature is '+ a  + ' degrees, you should ' + x + ' and the event is ' + b + ' you should wear ' + y;
}