function MaiorEMenor(){
	var menor;
	var maior;

	var clazz = {

		encontra : function(numeros) {

			menor = Number.MAX_VALUE,
			maior = Number.MIN_VALUE,

			numeros.forEach(function(numero){
				if(numero < menor) menor = numero;
				if(numero > maior) maior = numero;
			});
		},

		pegaMenor : function(){ return menor; },
		pegaMaior : function(){ return maior;}
	};

	return clazz;
}