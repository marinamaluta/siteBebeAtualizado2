// 1- Pegar o botão
// var botao = document.querySelector(".assine");
// 2- Criar a função que chama o alert
// function entrarEmail(){
// 	alert("Cadastro concluido com sucesso");
// opção para fazer uma inbox após clicar o botão
//function entrarEmail(){
//var chamada = document.querySelector(".mensagem");
//chamada.className = "mensagem ativo";};
// 3- Linkar a função com o evento ao clicar
//botao.onclick = entrarEmail;


var botaoSanduiche = document.querySelector(".sanduiche");
function mostrarSidebarLeft() {
	//alert("so para testar");
	// Aqui vamos escrever o codigo de mostrar o sidebar
	var sidebarLeft = document.querySelector(".sidebar.sidebar-left");
	sidebarLeft.className = "sidebar sidebar-left active";
};
botaoSanduiche.onclick = mostrarSidebarLeft;

////////////////////////////////////////////////////////////////////////

var botaoRight = document.querySelector(".personIcon");
function mostrarSidebarRight() {
	var sidebarRight = document.querySelector(".sidebar.sidebar-right");
	sidebarRight.className = "sidebar sidebar-right active";
};
botaoRight.onclick = mostrarSidebarRight;


//////////////////////////////////////////////////////////////////////////

var fecharSanduiche = document.querySelector(".fechar.sidebar-left");
function fecharSidebarLeft(){

var sidebarLeft = document.querySelector(".sidebar.sidebar-left");
sidebarLeft.className = "sidebar sidebar-left";
};

fecharSanduiche.onclick = fecharSidebarLeft;

/////////////////////////////////////////////////////////////////////////////

var fecharBotaoRight = document.querySelector(".fechar.sidebar-right");
function fecharSiderbarRight(){
	var sidebarRight = document.querySelector(".sidebar.sidebar-right");
	sidebarRight.className = "sidebar sidebar-right";
}

fecharBotaoRight.onclick= fecharSiderbarRight;


////////////////////////////////////////////////////////////////////////
// Estudar array (coleção)

var botaoDesejo = document.querySelectorAll(".desejo.botao.padrao");

function tornarBotaoRed(){
	if(this.className == "desejo botao padrao") {
		this.className = "desejo botao padrao ativo";
	}else{
		this.className = "desejo botao padrao";
		}
	}
// 1ª opção
//botaoDesejo[0].onclick = tornarBotaoRed;
//botaoDesejo[1].onclick = tornarBotaoRed;
//botaoDesejo[2].onclick = tornarBotaoRed;


// 2ª opção
//var i = 0;
//while(i < botaoDesejo.lenght){
//	botaoDesejo[i].onclick = tornarBotaoRed;
//	i = i+1;
//}

// 3ª opção
for (var i = 0; i < botaoDesejo.length; i++) {
	botaoDesejo[i].onclick = tornarBotaoRed;
}

// 1º - Declarar a variável; var i = 0 (começar no indice 0)
// 2º - Condição (while) - enquanto estiver true está executando a ação
// 3º - encrementando a ação e dando continuidade ao loop com i = i + 1;


////// INICIO JS DO ARQUIVO CONTATO //////

var fonte = document.querySelector('[data-contador-fonte]');
var destino = document.querySelector('[data-contador-destino]');

fonte.addEventListener('keyup', function() {
  var digitado = fonte.value.length;
  var restante = 100 - digitado;
  destino.textContent = restante;
});

var formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
  alert('Minha mensagem é: ' + fonte.value);
  evento.preventDefault();
});

////// FIM JS DO ARQUIVO CONTATO //////