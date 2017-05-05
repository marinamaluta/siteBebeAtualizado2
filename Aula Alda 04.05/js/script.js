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


