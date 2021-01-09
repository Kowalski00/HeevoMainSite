function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/5966/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Obrigado por se cadastrar no nosso site, enviaremos descontos especiais e novidades sobre a plataforma por e-mail.")
        },
        error: function(){
            alert("Ocorreu um erro :(")
        }
    });
    window.location.href="http://heevo.life";
}
$('#user').ready(function () {
    $('.selPro,.selPac,.selCom,.selComNom').hide();

    // Paciente
    $('#user').change(function () {
        var selected = $('#user option:selected').text();
        $('.selPac').toggle(selected == "Paciente");
    });
    // Profissional
    $('#user').change(function () {
        var selected = $('#user option:selected').text();
        $('.selPro').toggle(selected == "Profissional de Saúde");
    });
    // Comércio
    $('#user').change(function () {
        var selected = $('#user option:selected').text();
        $('.selCom,.selComNom').toggle(selected == "Comercio de Saúde (Farmácia, Laboratório, Clínica de estética)");
    });
    // Hide outro
    $('#user').change(function () {
        var selected = $('#user option:selected').text();
        $('.selOtherProf').hide(selected != "Profissional de Saúde");
        $('.selOtherCom').hide(selected != "Comercio de Saúde (Farmácia, Laboratório, Clínica de estética)");

    });

});
$('#profession').ready(function () {
    $('.selOtherProf').hide();

    $('#profession').change(function () {
        var selected = $('#profession option:selected').text();
        $('.selOtherProf').toggle(selected == "Outro");
    });
});
$('#commerce').ready(function () {
    $('.selOtherCom').hide();

    $('#commerce').change(function () {
        var selected = $('#commerce option:selected').text();
        $('.selOtherCom').toggle(selected == "Outro");
    });
});