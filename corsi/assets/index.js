$(() => {
    //svuotati
    localStorage.clear();
    $('#entra').on('click', function(){
        $('#messaggio').empty();
        let mail = $('#mail').val();
        let password = $('#password').val();
        if (mail == '' || password == '') {
        $('#messaggio').append('Devi inserire E-Mail e Password!');
        } else if (validateEmail($('#mail').val()) == false){
        $('#messaggio').append('Inserisci una mail valida!');
        } else if (validatePsw($('#password').val()) == false) {
            $('#messaggio').append('La password deve essere di almeno 6 caratteri e contenere un numero!');
        } else {
            //memorizzati
            localStorage.setItem('mail', mail);
            partenza();
        }

        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }

        function validatePsw($password) {
            var pswReg = /^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
            return pswReg.test($password);
        }

        function partenza() {
            let progressBar = document.getElementById('progress');
            let larghezza = 1;
            let intervallo = setInterval(cresci, 10);
            function cresci(){
                if(larghezza > 350) {
                    clearInterval(intervallo);
                    location.href = 'corsi.html';
                } else {
                    larghezza++;
                    progressBar.style.width = larghezza + 'px';
                }
            }
        }
    })
});