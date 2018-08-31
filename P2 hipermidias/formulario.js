function validar()
{
	var er_letra = "^[ a-zA-Z áéàèíìóòúùçôâêîûãõü]*$";
	var er_numero = "^[0-9]*$";
	
	txt_nome = document.getElementById("nome").value;
	if (txt_nome == "")
	{
		alert("O campo nome deve ser preenchido");
	}
	else if(txt_nome.match(er_letra) == null)
	{
		alert("O campo nome deve conter apenas letras");
	}

	txt_sobrenome = document.getElementById("sobrenome").value;
	if (txt_sobrenome == "")
	{
		alert("O campo sobrenome deve ser preenchido");
	}
	else if(txt_sobrenome.match(er_letra) == null)
	{
		alert("O campo sobrenome deve conter apenas letras");
	}

	txt_dia = document.getElementById("dia").value;
	txt_mes = document.getElementById("mes").value;
	txt_ano = document.getElementById("ano").value;
	if (txt_dia == "" || txt_mes== "" || txt_ano == "")
	{
		alert("O campo data deve ser preenchido");
	}

	txt_rg = document.getElementById("rg").value;
	if(txt_rg == "")
	{
		alert("O campo rg deve ser preenchido");
	}
	else if (txt_rg.match(er_numero) == null) 
	{
		alert("O campo RG deve conter apenas números.");
	}
	txt_cpf = document.getElementById("cpf").value;
	txt_digito = document.getElementById("digito").value;
	if(txt_cpf == "" || txt_digito == "") 
	{
		alert("O campo cpf deve ser preenchido");
	}
	if(txt_cpf.match(er_numero) == null || txt_digito.match(er_numero) == null)
	{
		alert("O campo CPF deve conter apenas números");
	}
	
	




	txt_rua = document.getElementById("rua").value;
	if(txt_rua == "")
	{
		alert("O campo rua deve ser preenchido");
	}

	txt_numero = document.getElementById("numero").value;
	if(txt_numero == "")
	{
		alert("O campo número deve ser preenchido");
	}
	else if(txt_numero.match(er_numero) == null)
	{
		alert("O campo número deve conter apenas números");
	}

	txt_bairro = document.getElementById("bairro").value;
	if(txt_bairro == "")
	{
		alert("O campo bairro deve ser preenchido");
	}
	else if(txt_bairro.match(er_letra) == null)
	{
		alert("O campo bairro deve conter apenas letras");
	}
	selected_uf = document.getElementById("estado");
	if (selected_uf.selectedIndex == 0)
	{
		alert("Um estado deve ser selecionado");
	}

	txt_cidade = document.getElementById("cidade").value;
	if(txt_cidade == "")
	{
		alert("O campo cidade deve ser preenchido");
	}
	else if(txt_cidade.match(er_letra) == null)
	{
		alert("O campo cidade deve conter apenas letras");
	}
	txt_cep = document.getElementById("cep").value;
	txt_digito_cep = document.getElementById("digito-cep").value;
	if(txt_cep == "" || txt_digito_cep == "")
	{
		alert("O campo cep deve ser preenchido");
	}
	if ((txt_cep.match(er_numero) == null || txt_digito_cep.match(er_numero) == null)) 
	{
		alert("O campo CEP deve conter apenas números");
	}
	











	txt_email = document.getElementById("email").value;
	if(txt_email == "")
	{
		alert("O campo email deve ser preenchido");
	}
	txt_conf_email = document.getElementById("conf_email").value;
	if(txt_conf_email == "")
	{
		alert("O campo confirmação de email deve ser preenchido");
	}
	if(txt_email != txt_conf_email)
	{
		alert("Os campos e-mail e confirmação de e-mail devem possuir o mesmo valor");
	}
	txt_nome_usu = document.getElementById("nome_usuario").value;
	if(txt_nome_usu == "")
	{
		alert("O campo nome de usuário deve ser preenchido");
	}
	txt_senha = document.getElementById("senha").value;
	if(txt_senha == "")
	{
		alert("O campo senha deve ser preenchido");
	}
	txt_conf_senha = document.getElementById("conf_senha").value;
	if(txt_conf_senha == "")
	{
		alert("O campo confirmação de senha deve ser preenchido");
	}
	if(txt_senha != txt_conf_senha)
	{
		alert("Os campos senha e confirmação de senha devem ter o mesmo valor");
	}
	



	if(document.formulario.opcoes_radio[0].checked == false && document.formulario.opcoes_radio[1].checked == false && document.formulario.opcoes_radio[2].checked == false && document.formulario.opcoes_radio[3].checked == false)
	{
		alert("Responda se deseja participar da pesquisa de interesse");
	}

	if(document.formulario.ling1.checked == false && document.formulario.ling2.checked == false && document.formulario.ling3.checked == false && document.formulario.ling4.checked == false)
	{
		alert("Nenhuma linguagem foi selecionada");
	}

	txt_comentario = document.getElementById("coment").value;
	if(/*document.formulario.comentario.value*/txt_comentario == "")
	{
		alert("Um comentário deve ser inserido");
	}
}
