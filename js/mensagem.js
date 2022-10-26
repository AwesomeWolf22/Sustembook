$(function(){

    $('a.chamar').click(function(e){

        e.preventDefault();

        var number = '5511966042868'
        //! Numero deve seguir o formato 
        //! +55 (11) 9 0000-0000 ---> 5511900000000
        var link = 'https://wa.me/' + number + '?text='

        var nome = $('#nome').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        
        var emailMsg = 'E-mail: ' + $('#email').val();
        var intro = "Olá eu sou " + nome;

        if(nome){
            $('#nome').css('border','1px solid #ccc');
        }

        if(email){
            $('#email').css('border','1px solid #ccc');
        }

        if(msg){
            $('#msg').css('border','1px solid #ccc');
        }

        if(nome && email && msg){

            location.href = link + emailMsg + '%0A%0A' + intro + '%0A%0A' + msg;

        }else{

            if(!nome){
                $('#nome').css('border','1px solid red');
            }

            if(!email){
                $('#email').css('border','1px solid red');
            }

            if(!msg){
                $('#msg').css('border','1px solid red');
            }

        }

    });

});

