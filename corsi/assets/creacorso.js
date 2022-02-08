// classe corsi
let mail = localStorage.getItem('mail');

class Corsi {
    nome;
    argomento;
    durata;
    constructor(_nome, _argomento,  _argomento1, _argomento2, _durata) {
        this.nome = _nome;
        this.argomento = _argomento;
        this.argomento1 = _argomento1;
        this.argomento2 = _argomento2;
        this.durata = _durata;
    }

    corsoIntero() {
        return `Complimenti, <strong>${mail}</strong>! Hai creato un corso di ${this.nome}, che durerà ${this.durata} e tratterà di: ${this.argomento} ${this.argomento1} ${this.argomento2}. <br>`
    }

}
$(() => {


    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'index.html';
    });
    //array con le materie (avrei voluto mettere con quelle già scritte ma avrei dovuto fare un extend e non sono stata capace ehehe)
    let materie = ['solfeggio', 'storia dello strumento', 'pratica', 'accompagnamento', 'musica d\'insieme', 'composizione'];

    for (i = 0; i < materie.length; i++) {
        $('#materieCorsoCustom').append(`<option value = "${i}">${materie[i]}</option>`);
        $('#materieCorsoCustom1').append(`<option value = "${i}">${materie[i]}</option>`);
        $('#materieCorsoCustom2').append(`<option value = "${i}">${materie[i]}</option>`);
    }

    $('#conferma').on('click', function () {
        //parto con il div sotto vuoto
        $('#corsoCustom').val('');
        //variabili per derivare i valori degli input
        let nomeCorso = $('#nomeCorsoCustom').val();
        let durataCorso = $('#durataCorsoCustom').val();

        let indice = $('#materieCorsoCustom').val();
        let indice1 = $('#materieCorsoCustom1').val();
        let indice2 = $('#materieCorsoCustom2').val();

        let voceScelta = materie[indice];
        let voceScelta1 = materie[indice1];
        let voceScelta2 = materie[indice2];
        //condizioni
        if (nomeCorso == '') {
            $('#condNome').removeClass('nascosto');
            $('#corsoCustom').empty();
            return;
        } else if(durataCorso == '') {
            $('#condNome').addClass('nascosto');
            $('#condMaterie').addClass('nascosto');
            $('#condDurata').removeClass('nascosto');
            $('#corsoCustom').empty();
            //lo script si ferma perché la condizione è bloccante ♥
            return;
        } else if($('#materieCorsoCustom').val() == '') {
            $('#condNome').addClass('nascosto');
            $('#condDurata').addClass('nascosto');
            $('#condMaterie').removeClass('nascosto');
            $('#corsoCustom').empty();
            return;
        } else {
            controllaCombo(); }

        function controllaCombo(){
        if ($('#materieCorsoCustom1').val() == '' && $('#materieCorsoCustom2').val() == '' ) {
            voceScelta1 = '';
            voceScelta2 = '';
            let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
            $('#corsoCustom').append(corso1.corsoIntero());
        } else if ($('#materieCorsoCustom1').val() == '') {
            voceScelta1 = '';
            let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
            $('#corsoCustom').append(corso1.corsoIntero());
        } else if ($('#materieCorsoCustom2').val() == '') {
            voceScelta2 = '';
            let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
            $('#corsoCustom').append(corso1.corsoIntero());
        } else {
        
        let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
        $('#corsoCustom').append(corso1.corsoIntero());} }

        //messaggio per l'utente che ha creato il corso

        //$('#corsoCreato').html('Corso creato da ' + mail + '!');
    
        //svuoto i campi dopo il click
        svuotaCampi();


        function svuotaCampi(){
            $('#nomeCorsoCustom').val('');
            $('#durataCorsoCustom').val('');
            $('#materieCorsoCustom').val('');
            $('#materieCorsoCustom1').val('');
            $('#materieCorsoCustom2').val('');
            $('#condNome').addClass('nascosto');
            $('#condDurata').addClass('nascosto');
            $('#condMaterie').addClass('nascosto');
           // $('#corsoCreato').empty();
        }

    });

});






