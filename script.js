document.addEventListener("DOMContentLoaded", function () {
  carregarCotacao();
});

let cotacaoAtual = 0;

function carregarCotacao() {
  fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(response => response.json())
    .then(dados => {

      cotacaoAtual = dados.rates.BRL;

      document.getElementById("cotacaoDolar").innerHTML =
        "R$ " + cotacaoAtual.toFixed(2);

    })
    .catch(() => {
      document.getElementById("cotacaoDolar").innerHTML =
        "Erro ao carregar cotação";
    });
}

function converter(valorDolar, idElemento) {

  if (cotacaoAtual === 0) {
    document.getElementById(idElemento).innerHTML =
      "Aguarde carregar cotação...";
    return;
  }

  let valorReal = (valorDolar * cotacaoAtual).toFixed(2);

  document.getElementById(idElemento).innerHTML =
    "Valor em Real: R$ " + valorReal;
}

function comprar() {
  Swal.fire({
    title: "Compra Realizada com Sucesso",
    text: `Obrigado por compra um dos nossos produtos`,
    icon: "success"
  })


}