
var ajax = new XMLHttpRequest();
//var resposta = " ";
var i = 0;
var dataSon = " ";

ajax.open('GET', 'db.json'); //requisição do arquivo

ajax.responseType = 'json'; //Define o tipo de dado que irá receber

ajax.send();

//Verifica a resposta do arquivo
ajax.addEventListener('readystatechange', function() {

    if (ajax.readyState === 4 && ajax.status === 200) {
        // alert("Deu certo");
        //console.log(ajax.response);
        var resposta = ajax.response;
	    console.log(resposta);
    }
});
