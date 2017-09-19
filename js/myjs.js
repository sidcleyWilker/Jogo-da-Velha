var rodada = 1;
var matriz = Array(3);

matriz['a'] = Array(3);
matriz['b'] = Array(3);
matriz['c'] = Array(3);

for (var i = 1; i <= 3; i++) {
	matriz['a'][i] = 0;
	matriz['b'][i] = 0;
	matriz['c'][i] = 0;
}

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
			$('#'+id_campo).off();
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

			var linha_coluna = id_campo.split('-');

			matriz[linha_coluna[0]][linha_coluna[1]] = ponto;

			verifica_combinacao_horizontal();
			verifica_combinacao_vertical();
			verifica_combinacao_diagonal()
		}

		function verifica_combinacao_horizontal(){

			var horizontal_pontosA = 0;
			var horizontal_pontosB = 0;
			var horizontal_pontosC = 0;

			for (var i = 1; i <= 3; i++) {
				horizontal_pontosA += matriz['a'][i];
				horizontal_pontosB += matriz['b'][i];
				horizontal_pontosC += matriz['c'][i];
			}

			ganhador(horizontal_pontosA);
			ganhador(horizontal_pontosB);
			ganhador(horizontal_pontosC);
		}


		function verifica_combinacao_vertical(){

			for (var i = 1; i <= 3; i++) {
				var vertical_pontos = 0;

				vertical_pontos += matriz['a'][i];
				vertical_pontos += matriz['b'][i];
				vertical_pontos += matriz['c'][i];
				ganhador(vertical_pontos);				
			}
		}

		function verifica_combinacao_diagonal(){
			var pontos = (matriz['a'][1] + matriz['b'][2] + matriz['c'][3]);
			ganhador(pontos);

			var pontos = (matriz['a'][3] + matriz['b'][2] + matriz['c'][1]);
			ganhador(pontos);
		}

		function ganhador(pontos){
			if (pontos == -3) {
				var jogador1 = $('#entrada_jogador1').val();
				alert(jogador1 + " Ganhou");
				$('.jogada').off();
			}else if (pontos == 3){
				var jogador2 = $('#entrada_jogador2').val();
				alert(jogador2 + " Ganhou");
				$('.jogada').off();
			}
		}

	});

});