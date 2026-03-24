function buscarCEP() {

  let cep = document.getElementById("cep").value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {

      if (dados.erro) {
        document.getElementById("endereco").innerHTML = "CEP não encontrado.";
        return;
      }

      document.getElementById("endereco").innerHTML =
        `<strong>Endereço:</strong> ${dados.logradouro}, ${dados.bairro}, ${dados.localidade} - ${dados.uf}`;

      document.getElementById("endereco").setAttribute("data-uf", dados.uf);
    });
}

function calcularFrete() {

  let uf = document.getElementById("endereco").getAttribute("data-uf");

  if (!uf) {
    document.getElementById("resultadoFrete").innerHTML =
      "Busque um CEP primeiro.";
    return;
  }

  let sudeste = ["SP", "RJ", "MG", "ES"];

  if (sudeste.includes(uf)) {
    document.getElementById("resultadoFrete").innerHTML =
      "🎉 Frete Grátis para sua região!";
  } else {
    document.getElementById("resultadoFrete").innerHTML =
      "Valor do Frete: R$ 20,00";
  }
}