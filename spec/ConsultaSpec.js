describe("Testando consulta", function(){

    it("Consulta é retorno", function(){
        var consulta = new Consulta(new Paciente(), [], false, true);
        var precoFinal = consulta.preco();

        expect(precoFinal).toEqual(0);
    });
});