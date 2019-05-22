function Agendamento(){

    var clazz = {

        agendamentoRetorno : function(consulta){
            //Pega a consulta e adiciona 20 dias à data.
            var umDiaEmMilissegundo = 1000 * 60 * 60 * 24;
            var vinteDiasEmMillisegundos = umDiaEmMilissegundo * 20;

            var dataMaisVinteDias = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);

            while(dataMaisVinteDias.getDay()==0 || dataMaisVinteDias.getDay()==6) //Se for Sábado ou Domingo
            dataMaisVinteDias = new Date(dataMaisVinteDias.getTime() + umDiaEmMilissegundo);
            
            var novaConsultaAgendada = new Consulta(consulta.getPaciente(), consulta.getProcedimentos(),
                                                    consulta.isParticular(), consulta.isRetorno(),
                                                    dataMaisVinteDias);
            return novaConsultaAgendada;
        }
    }

    return clazz;
}