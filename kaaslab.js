var Eerste = prompt ('is kaas geel?')


//vragen
	var vraag

if(Eerste == "ja"){

vraag = 1

}else{

vraag = 8
}

						//


if(vraag == 1){


var vraag1 = prompt('zitten er gaten in?')

}

if (vraag1 == "ja"){

vraag = 2

}
else if(vraag1 =="nee"){

	vraag = 7
}

						//


if(vraag == 2){


var vraag2 = prompt('is de kaas erg duur?')

}

if (vraag2 == "ja"){

alert("Emmenthaler")

}
else if(vraag2 =="nee"){

alert("Leerdammer")
}

						//


if(vraag == 7){


var vraag7 = prompt('is de kaas hard als steen?')

}

if (vraag7 == "ja"){

alert("Pamigiano Reggiano")

}
else if (vraag7 == "nee"){

alert("Goudse kaas")

}

						//


if(vraag == 8){


var vraag8 = prompt('Heeft de kaas blauwe schimmel?')

}

if (vraag8 == "ja"){

vraag = 12

}
else if(vraag8 =="nee"){

	vraag = 9
}

						//


if(vraag == 12){


var vraag12 = prompt('Heeft de kaas en korst?')

}

if (vraag12 == "ja"){

alert("bleu de rochbaron")

}
else if(vraag12 =="nee"){

alert("Fomme d'ambert")
}

						//


if(vraag == 9){


var vraag9 = prompt('Heeft de kaas en korst?')

}

if (vraag9 == "ja"){

alert("camabert")

}
else if(vraag9 =="nee"){

alert("mozzerella")
}
 


