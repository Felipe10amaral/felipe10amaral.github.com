function validar()
{
	var letra = "^[ a-zA-Z áéàèíìóòúùçôâêîûãõü]*$";
	var numero = "^[0-9]*$";

	nome = document.getElementById("nome").value;
	if (nome == "")
	{
		alert("O campo nome deve ser preenchido");
		form.nome.focus();
	}
	else if(nome.match(letra) == null)
	{
		alert("O campo nome deve conter apenas letras");
		form.nome.focus();
	}


	email = document.getElementById("email").value;
	email2 = document.getElementById("email2").value;
	if(email != email2)
	{
		alert("Os campos e-mail e confirmação de e-mail devem possuir o mesmo valor");
		
	}


	hospede = document.getElementById("hospede").value;
	if(hospede == "") 
	{
		alert("O campo hospede deve ser preenchido");
		form.hospede.focus();
	}
	if(hospede.match(numero) == null)
	{
		alert("O campo hospede deve conter apenas números");
		form.hospede.focus();
	}

	
}

	function calcula() {    

		dias = document.getElementById("dia2").value - document.getElementById("dia1").value;

		diaria = dias * 149;

		

	document.write("Escreva");

}



