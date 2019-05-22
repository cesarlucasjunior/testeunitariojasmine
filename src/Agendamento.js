function Agendamento(){

    var clazz = {

        agendamentoRetorno : function(consulta){
            //Pega a consulta e adiciona 20 dias à data.
            var vinteDiasEmMillisegundos = 1000 * 60 * 60 * 24 * 20;
            var dataMaisVinteDias = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);

            var novaConsultaAgendada = new Consulta(consulta.getPaciente(), consulta.getProcedimentos(),
                                                    consulta.isParticular(), consulta.isRetorno(),
                                                    dataMaisVinteDias);

            return novaConsultaAgendada;
        }
    }

    return clazz;
}