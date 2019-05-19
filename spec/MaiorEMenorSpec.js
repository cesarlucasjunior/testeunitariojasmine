describe("Maior e Menor teste", function(){
	
	it("Deve testar números não sequenciais", function(){

		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,15,7,9]);

		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});
});