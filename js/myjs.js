var rodada = 1;
var matriz = Array(3);

$(document).ready(function(){
	
	$("#btn_iniciar_jogo").click(function(){

		var jogador1 = $('#entrada_jogador1').val();
		var jogador2 = $('#entrada_jogador2').val();

		if ( jogador1 == '') {
			alert("Nome do jogador 1 não pode ser vazio");
			return false;
		}

		if ( jogador2 == '') {
			alert("Nome do jogador 2 não pode ser vazio");
			return false;
		}


		$('#nome_jogador1').html(jogador1);
		$('#nome_jogador2').html(jogador2);


		$('#pagina_inicial').hide();
		$('#palco_jogo').show();

		$('.jogada').click( function () {
			var id_campo = this.id;
			jogar(id_campo);
		});

		function jogar (id_campo){
			var icone = '';
			var ponto = 0;

			if ((rodada % 2) == 1) {
				icone = 'url("imgs/marcacao_1.png")';
				ponto = -1;	
			}else{
				icone = 'url("imgs/marcacao_2.png")';
				ponto = 1;	
			}
			rodada++;

			$('#'+id_campo).css('background-image',icone);
		}

	});

});