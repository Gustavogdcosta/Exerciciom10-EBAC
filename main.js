$('#telefoneusuario').mask('(00) 00000-0000', {placeholder: '(00) 00000-0000'});
$('#CPFusuario').mask('000.000.000-00', {placeholder: '000.000.000-00'});
$('#CEPusuario').mask('00000-000', {placeholder: '00000-000'});

$('form').validate({
    rules: {
        username: {required: true},
        useremail: {required: true, email:true},
        usertel: {required: true},
        userCPF: {required: true},
        useraddress: {required: true},
        userCEP: {required: true},
    },

    messages: {
        username: 'Por favor, digite o nome corretamente',
        useremail: 'Por favor, digite o email corretamente',
        usertel: 'Por favor, digite o telefone corretamente',
        userCPF: 'Por favor, digite o CPF corretamente',
        useraddress: 'Por favor, digite o endereço corretamente',
        userCEP: 'Por favor, digite o endereço corretamente',
    }
})