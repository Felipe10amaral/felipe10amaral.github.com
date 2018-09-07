function validar()
{
	var letra = "^[a-zA-Z] *$";
	var numero = "^[0-9]*$";

	var nome = document.getElementById("nome");
	var tel = document.getElementById("tel");


	if( nome == "")
  {
  	alert("deve ser preenchido");

  }
  else if(nome.match(letra) == null)
  {
  	alert("O campo nome deve conter apenas letras");
  }

	

	crian = document.getElementById("crian").value;
	if(quarto == "") 
	{
		alert("O campo criancas deve ser preenchido");
		form.crian.focus();
	}
	if(crian.match(numero) == null)
	{
		alert("O campo hospede deve conter apenas números");
		form.crian.focus();
	}



	


	function calcula() {    

	

  		var datachegada =  new  Date(document.getElementById("data-chegada").value);
  		var datasaida =  new  Date(document.getElementById("data-saida").value);
  		var aux_datasaida = datasaida.getTime ();
  		var aux_datachegada = datachegada.getTime ();
  		var aux_datachegada = aux_datachegada / ( 1000  *  3600  *  24 );
  		var aux_datasaida = aux_datasaida / ( 1000  *  3600  *  24 );
  		var dias =  0 ;
  		var dias = aux_datasaida - aux_datachegada;
  		var crian =  document.getElementById("crian");
  		var quarto =  document.getElementById("quartos");
  		var tipo = quarto;
  		
  		var aux =  0 ;
  		var total =  0 ;
  		
  		if (crian >= 1){
      aux = crian * 30;
  		}
  
  
   if (tipo ==1){
    	total = aux + (quarto * 130) * dias;
    	alert(total);
  	}
  	
  	 if (tipo ==2){
    	total = aux + (quarto * 220) * dias;
    	alert(total);
  	}	

  	 if (tipo ==3){
    	total = aux + (quarto * 340) * dias;
    	alert(total);
  	}



}



