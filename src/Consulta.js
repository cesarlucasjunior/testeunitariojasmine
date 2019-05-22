function Consulta(paciente, procedimentos, particular, retorno, dataConsulta){

    var clazz = {

        preco : function(){
            if(retorno) return 0;

            var precoFinal = 0;

            procedimentos.forEach(function(procedimento){
                if("raiox" == procedimento) precoFinal += 35;
                else if("gesso" == procedimento) precoFinal += 32;
                else precoFinal += 25;
            });

            if(particular) precoFinal *= 2;

            return precoFinal;
        },

        getPaciente : function(){return paciente;},
        
        getProcedimentos : function(){return procedimentos;},

        isParticular : function(){return particular;},

        isRetorno : function(){return retorno;},

        getData : function(){return dataConsulta;}
        
    }

    return clazz;

}