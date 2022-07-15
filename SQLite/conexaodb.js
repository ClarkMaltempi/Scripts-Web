


var db = openDatabase("Meubanco", "2.0", "Mybase", 4048);
db.transaction(function(tx){
	tx.executeSql("CREATE TABLE users(ID PRIMARY KEY, nome TEXT, senha TEXT)");
});

function salvar(){
	/* Para a função atualizar pegar o id */
	var id = document.getElementById('field-id').value;
	
	var nome = document.getElementById('nome').value;
	var senha = document.getElementById('senha').value;
	/* Função para enviar os dados para o banco */
	
	db.transaction(function(tx){
		if(id){
			
			tx.executeSql('UPDATE users SET nome=?, senha=? WHERE id=?', [nome,senha,id]);
			
		}else{
		tx.executeSql("INSERT INTO users (nome, senha) Values(?,?)",[nome,senha])
		}
		
	});
	
	/* Slavando um elemento*/
	mostrar();
	
}


window.addEventListener('load', carregado);

function carregando(){
	document.getElementById('salvar').addEventListener('click', salvar);
	mostrar();
}

function mostrar(){
	var table = document.getElementById('body');
	
	db.transaction(function(tx){
		tx.executeSql('SELECT * users', [], function(tx, resultado){
			var rows = resultado.rows;
			var tr = '';
			/* Varre cada linha da tabela */
			for(var i=0; i<rows.length;i++){
				tr += '<tr>';
				tr += '<td onclick="atualizar('+ rows[i].id +')">' + rows[i].nome + '</td>';
				tr += '<td>' + rows[i].senha + '</td>';
				tr += '</tr>';
			}
			
			table.innerHTML = tr;
			
		});
	});
}

function atualizar(){
	
	var id = document.getElementById('id');
	var nome = document.getElementById('nome');
	var senha = document.getElementById('senha');
	
	id.value = _id;
	
	db.transaction(function(tx){
		tx.executeSql('SELECT* FROM users WHERE id=?',[_id], function(tx,resultado){
			var rows = resultado.rows[0];
			
			nome.value = rows.name;
			nome.senha = rows.senha;
		});
	});
}

function deletar(){
	var id = document.getElementById('id').value;
	db.transaction(function(tx){
		tx.executeSql('DELETE FROM users WHERE id=?',[id]);
	});
}




/*HTML*/

<form onsubmit="salvar()">
	<input type="text" id="nome" name="" placeholder="Nome"><br>
	<input type="password" id="senha" name="" placeholder="Senha" name=""><br>
	<input type="submit" value="Enviar"><br>
	<input type="submit" value="Salvar"><br>

</form>
