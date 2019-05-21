describe("Teste Paciente", function(){

    it("Testando imc", function(){
        var paciente = new Paciente('César Júnior', 25, 90, 1.81);
        var imc = paciente.imc();

        expect(imc).toEqual(90 / (1.81 * 1.81));
    });

    it("Testando batimentos", function(){
        var paciente = new Paciente('César Júnior', 25, 90, 1.81);
        expect(paciente.batimentos()).toEqual(25 * 365 * 24 * 60 * 80);
    });
});