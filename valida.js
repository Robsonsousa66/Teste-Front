$(document).ready(function(){
  $("#dData").datepicker({
        showOn: "button",
        showButtonPanel:true,
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
  });
  $.validator.addMethod("dateBR", function(value, element) {
    if(value.length!=10) return false;
    // verificando data
    var data  = value;
    var dia  = data.substr(0,2);
    var barra1 = data.substr(2,1);
    var mes  = data.substr(3,2);
    var barra2  = data.substr(5,1);
    var ano = data.substr(6,4);
    if(data.length!=10||barra1!="/"||barra2!="/"||isNaN(dia)||isNaN(mes)||isNaN(ano)||dia>31||mes>12)return false;
    if((mes==4||mes==6||mes==9||mes==11) && dia==31)return false;
    if(mes==2  &&  (dia>29||(dia==29 && ano%4!=0)))return false;
    if(ano < 1900)return false;
    return true;
   }, "Informe uma data válida");  // Mensagem padrão


  $("form").validate({
    debug: true,
    rules: {
      nNome:{
        required: true,
      },
      dData: {
        required: true,
        dateBR: true
       },
      nCPF:{
        required: true,
        max: 99999999999,
      },
      nRG:{
        required: true,
        max: 9999999,
      },
      txtLog: {
        required: true,
      },
      nNum: {
        required: true,
        min: 0,
        max: 999,
      },
      txtComp:{
        required: true,
      },
      txtCid:{
        required: true,
      },
      txtEst:{
        required: true,
      },
      txtEm: {
        required: true,
        email: true,
      },
      nCel: {
        required: true,
      },
      txtCur: {
        required: true,
        minlength: 1,
        maxlength: 50,
      },
      txtCam: {
        required: true,
        minlength: 1,
        maxlength: 50,
      },
    },
  });
  $(function(){
    $("#form").submit(function(){
      var vazios = $("input[type= text]").filter(function(){
        return !this.value
      }).get();

      if(vazios.length){
        $(vazios).addClass('error');
        alert("Todos os campos devem ser preenchidos")
        return false
      }else{
        alert("Aluno Cadastrado")
        window.location.reload();
      }
    })
  })
   
});
