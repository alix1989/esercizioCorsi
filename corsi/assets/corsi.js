// classe corsi
class Corsi {
    nome;
    argomento1;
    argomento2;
    argomento3;
    durata;
    constructor(_nome, _argomento1, _argomento2, _argomento3, _durata){
        this.nome = _nome;
        this.argomento1 = _argomento1;
        this.argomento2 = _argomento2;
        this.argomento3 = _argomento3;
        this.durata = _durata;
    }

    corsoIntero() {
        return `<img src="assets/img/${this.nome}.png" width="50px"><br><br>Il corso di <strong>${this.nome}</strong> tratterà, fra le altre cose, di ${this.argomento1}, di ${this.argomento2} e di ${this.argomento3}. Avrà una durata di ${this.durata}.` 
    }

}

$(() => {
    // alla progress bar poi ci pensiamo.
    // local storage che collega dalla pagina precedente!
    let mail = localStorage.getItem('mail');
    $('#benvenuto').append('Benvenuto ' + mail + '!');
    $('#logout').on('click', function(){
        localStorage.clear();
        location.href = 'index.html';
    });

    // variabili per richiamare le classi
    var pianoforte = new Corsi('pianoforte', 'pratica con lo strumento', 'solfeggio', 'composizione', '6 mesi');
    var chitarra = new Corsi ('chitarra', 'arpeggi', 'fingerpicking', 'accompagnamento', '12 mesi');
    var violino = new Corsi('violino', 'pratica con l\'archetto', 'pizzicato', 'teoria musicale', '5 mesi');

    // eventi on click per far comparire i corsi
    $('#pianoforte').on('click', function() {
        $('#corsoPiano').removeClass('corsoprima').html(pianoforte.corsoIntero());
        $('#chiudi_pianoforte').removeClass('nascosto');
    });

    $('#chitarra').on('click', function() {
        $('#corsoChitarra').removeClass('corsoprima').html(chitarra.corsoIntero());
        $('#chiudi_chitarra').removeClass('nascosto');
    });

    $('#violino').on('click', function() {
        $('#corsoViolino').removeClass('corsoprima').html(violino.corsoIntero());
        $('#chiudi_violino').removeClass('nascosto');
    });

    //eventi per far scomparire i corsi

    $('#chiudi_pianoforte').on('click', function() {
        $('#corsoPiano').addClass('corsoprima').empty();
        $('#chiudi_pianoforte').addClass('nascosto');
        return;
    });

    $('#chiudi_chitarra').on('click', function() {
        $('#corsoChitarra').addClass('corsoprima').empty();
        $('#chiudi_chitarra').addClass('nascosto');
        return;
    });

    $('#chiudi_violino').on('click', function() {
        $('#corsoViolino').addClass('corsoprima').empty();
        $('#chiudi_violino').addClass('nascosto');
        return;
    });


});