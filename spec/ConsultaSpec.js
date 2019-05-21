describe("Testando consulta", function(){

    it("Consulta é retorno", function(){
        var consulta = new Consulta(new Paciente(), [], false, true);
        var precoFinal = consulta.preco();

        expect(precoFinal).toEqual(0);
    });
    
    it("Consulta procedimento comum", function(){
        var consulta = new Consulta(new Paciente(), ['procA', 'procB'], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it("Consulta procedimento comum e particular", function(){
        var consulta = new Consulta(new Paciente(), ['procA', 'procB'], true, false);

        expect(consulta.preco()).toEqual(100);
    });
    
    it("Consulta procedimentos especiais e particular", function(){
        var consulta = new Consulta(new Paciente(), ['raiox', 'gesso'], true, false);

        expect(consulta.preco()).toEqual(134);
    });
});