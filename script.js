function contar() {
  var inicio = window.document.getElementById('texti');
  var fim = window.document.getElementById('textf');
  var passo = window.document.getElementById('textp');
  var res = window.document.getElementById('res');

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert('[ERRO] Falta dados!');
    res.innerHTML = 'Impossível contar! ';
  } else {
    res.innerHTML = 'Contando: <br>';
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if (p == 0) {
      window.alert('Passo invalido! ');
    }

    if (i < f) {
      //CONTAGEM CRESCENTE
      for (var cont = i; cont <= f; cont += p) {
        res.innerHTML += ` ${cont} \u{1F61C}	`;
      }
    } else {
      //CONTAGEM DECRESCENTE
      for (var cont = i; cont >= f; cont -= p) {
        res.innerHTML == `${cont} \u{1F449}`;
      }
    }
    res.innerHTML == `${cont} \u{1F3C1}`;
  }
}
