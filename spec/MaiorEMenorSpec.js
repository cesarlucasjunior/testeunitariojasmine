describe("Maior e Menor teste", function(){
	
	it("Deve testar números não sequenciais", function(){

		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,15,7,9]);

		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

	it("Deve testar números em ordem decrescente", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([15,14,13,12]);

		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(12);
	});

	it("Deve testar números em ordem crescente", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([7,8,9,10]);

		expect(algoritmo.pegaMaior()).toEqual(10);
		expect(algoritmo.pegaMenor()).toEqual(7);
	});

	it("Deve testar uma lista com apenas um registro", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([3]);

		expect(algoritmo.pegaMaior()).toEqual(3);
		expect(algoritmo.pegaMenor()).toEqual(3);
	});
});