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
  let sul = ["PR", "SC", "RS"];
  let centroOeste = ["DF", "GO", "MT", "MS"];
  let norte = ["AC", "AP", "AM", "PA", "RO", "RR", "TO"];
  let nordeste = ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"]

  if (sudeste.includes(uf)) {
    document.getElementById("resultadoFrete").innerHTML =
      "🎉 Frete Grátis para sua região!";
  } else if(sul.includes(uf)) {
    document.getElementById("resultadoFrete").innerHTML =
      "Valor do Frete: R$ 5,00";
  } else if(centroOeste.includes(uf)){
    document.getElementById("resultadoFrete").innerHTML =
      "Valor do Frete: R$ 15,00";
  } else if(norte.includes(uf)){
    document.getElementById("resultadoFrete").innerHTML =
      "Valor do Frete: R$ 25,00";
} else if(nordeste.includes(uf)){
    document.getElementById("resultadoFrete").innerHTML =
      "Valor do Frete: R$ 30,00";
}

}
