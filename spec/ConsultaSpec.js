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

    describe("TDD", function(){
        it("Realizar agendamento de retorno", function(){
            //Ambiente
            var agendamento = new Agendamento();
            var consulta = new Consulta(paciente, [], false, false, new Date(2019, 04, 03));
            //Ação
            var retornoConsulta = agendamento.agendamentoRetorno(consulta);
            //Teste
            expect(retornoConsulta.getData().toString()).toEqual(new Date(2019, 04, 23).toString());
        });

        it("Deve pular os finais de semana", function(){
            //Ambiente
            var agendamento = new Agendamento();
            var consulta = new Consulta(paciente, [], false, false, new Date(2019, 04, 06));
            //Ação
            var retornoConsultaNoFds = agendamento.agendamentoRetorno(consulta);
            //Teste
            expect(retornoConsultaNoFds.getData().toString()).toEqual(new Date(2019, 04, 27).toString());
        });
    });

    //describe("Testando números romanos", function(){

      //  it("Números romanos para números naturais", function(){
            //Ambiente
      //      var numerosRomanos = new NumerosRomanos();
            //Ação
      //      var numerosNaturais = numerosRomanos.passarParaNatural(["I", "IV", "XVI"]);
            //Teste
      //      expect(numerosNaturais.getRetornoNatural()).toEqual(1, 4, 16);
       // });
    //});
});