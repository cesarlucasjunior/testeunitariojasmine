function PacienteBuilder(){

    var nome = 'César Júnior';
    var idade = 25;
    var peso = 90;
    var altura = 1.81;

    var clazz = {

        constroi : function(){
            return new Paciente(nome, idade, peso, altura);
        },

        alteraIdade : function(novaIdade){
            idade = novaIdade;
            return this;
        },

        alteraPeso : function(novoPeso){
            peso = novoPeso;
            return this;
        },

        alteraAltura : function(novaAltura){
            altura = novaAltura;
            return this;
        }
    }

    return clazz;
}