describe("Testando consulta", function(){

    var paciente;

    beforeEach(function(){
        paciente = new Paciente("César Júnior", 25, 90, 1.81);
    });

    describe("Consulta que é retorno", function(){
        it("Consulta é retorno", function(){
            var consulta = new Consulta(paciente, [], false, true);
            var precoFinal = consulta.preco();

            expect(precoFinal).toEqual(0);
        });
    });

    describe("Consulta que é procedimento comum", function(){
        
        it("Consulta procedimento comum", function(){
            var consulta = new Consulta(paciente, ['procA', 'procB'], false, false);

            expect(consulta.preco()).toEqual(50);
        });
        
        it("Consulta procedimento comum e particular", function(){
            var consulta = new Consulta(paciente, ['procA', 'procB'], true, false);
    
            expect(consulta.preco()).toEqual(100);
        });
    });

    describe("Consulta procedimento especial", function(){
                
        it("Consulta procedimentos especiais e particular", function(){
            var consulta = new Consulta(paciente, ['raiox', 'gesso'], true, false);

            expect(consulta.preco()).toEqual(134);
        });
    });
});