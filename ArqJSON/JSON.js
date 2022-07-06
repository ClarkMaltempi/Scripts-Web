


var usuario = {
	id: 1,
	nome: "Jose",
	perfil:2,
	dn: new Date()
};


JSON.stringify(usuario);//Transformar em uma string

var usuarioConvertido = JSON.parse(usuario);//Converter usuário para o formato

//Visualização
console.log(usuarioConvertido);
console.table(usuarioConvertido);

//Exemplo de um Array
var usuario = [
{
	id: 1,
	nome: "Jose",
	perfil:2,
	dn: new Date()
}

{
	id: 2,
	nome: "Jose",
	perfil:2,
	dn: new Date()
}


];