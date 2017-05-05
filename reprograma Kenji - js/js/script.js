var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");
function abrirMenu(){
	// declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria");
	
	// se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if(menu.className == "menuHorizontal visivel"){
		// Fechar o menuHorizontal
		menu.className = "menuHorizontal";
	}else{
		// Abrir o menuHorizontal
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel";
	}
}
botaoMenuHamburguer.onclick = abrirMenu;

// Botão amei 
// Retorna um Array de Botao
var botoesAmei = document.querySelectorAll(".botao.amei");
function amar(){
	this.className = "botao amei vermelho";
}

for (var i = 0; 1 < botoesAmei.lenght; i++) {
	botoesAmei[i].onclick = amar;
}

//botoesAmei[0].onclick = amar;
//botoesAmei[1].onclick = amar;
//botoesAmei[2].onclick = amar;


// SLIDER

// todo o array tem .lenght

function criarUmBullet(numeroDoSlide){
	// Pegando o ul que vai inserir o li
	var bulletUl = document.querySelector(".bullets ul");
	// Criando um novo li
	var li = document.createElement("li");
	// Criando um button para inserir no li
	var button = document.createElement("button");
	button.className = "bullet"; 
	// PARAM1 = Nome da propriedade
	// PARAM2 = Valor da propriedade
	button.setAttribute("data-slide",numeroDoSlide);
	

	// Inserindo o button no li
	li.appendChild(button);
	// Inserindo o filho li no pai ul dos bullets (a partir de agora já está constando no html)
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){
 // pegando todos os slides que estão dentro da #slider
 	var slides = document.querySelectorAll("#slider .slide");
 	var quantidadeSlides = slides.lenght;

 	// Criar os bullets
 	for(var i = 0; i < quantidadeSlides; i++){ // forma para evitar repetição
 		// Criar um bullet
 		criarUmBullet(i);
 	}
}

// Funções para os botoes
// Botao da seta esquerda
function voltarSlide(){

}
// Botao da seta direita
function avancarSlide(){

}

function irParaOSlideCorrespondente(){
	// Pegar o slide com a classe ativa
	var slideAtivo = document.querySelector(.slide.ativo);
	// Desaparece o slide ativo
	slideAtivo.classList.remove("ativo");
	// Aparecer o slide correspondente
	// Transformar o texto em numero
	var slideIndex = parseInt(this.getAttribute("data-slide"));
	//console.log(slideIndex);
	var numeroSlide = slideIndex+1; // index ->número do slide

	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroSlide+")"); // nth-child -> pega a posição do slide
	slideCorrespondente.classList.add("ativo");


}


function adicionarOnClickNosBotoes(){
	// Adicionando nas setas
	var botaoVoltar = document.querySelector(".seta.esquerda"); // para garantir, colocar esta frase no console e depois clicar em botao.
	botaoVoltar.onclick = voltarSlide;
	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;
	// Adicionando nos bullets
	var bullets = document.querySelectorAll("#slider .bullet"); // está retornando array (devido aos bullets)
	for (var i=0; i<bullets.length; i++) {
		bullets[i].onclick = irParaOSlideCorrespondente;
	}
}

function alternarSlidesAutomaticamente(){
}
// Se o slide existe
// Se o slider é diferente de null ele xiste


//var slider = document.querySelector("slider");
//if(slider != null){
	// NADA
//}else{
	// CRIAR OS BULLETS de acordo com a quantidade de slides
//}
