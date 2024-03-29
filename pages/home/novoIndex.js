import { insertedValues, valuesCategory } from "../../pages/home/valuesData.js";

const identificarOIndex = valuesCategory;

const valores = insertedValues;
export function renderizarAll(arr) {
  const main = document.querySelector(".conteinerUL");
  main.innerHTML = "";
  arr.forEach((element) => {
    const SomaTotal = document.createElement("p");
    const ul = document.createElement("ul");
    ul.innerHTML = "";
    const li = document.createElement("li");

    li.setAttribute("class", "valores");
    const valores = document.createElement("p");
    const spanbtn = document.createElement("span");

    const excluir = document.createElement("button");
    excluir.setAttribute("class", "remove");
    const button = document.createElement("button");
    excluir.addEventListener("click", (e) => {
      e.preventDefault();

      const array = insertedValues.splice("1", "2", insertedValues.id);
      remover(array);
    });

    spanbtn.setAttribute("class", "btnSpan");
    button.setAttribute("class", "tipoDeMovimentacao");
    excluir.setAttribute("class", "lixeira");
    valores.innerText = `R$ ${element.value}`;
    if (element.categoryID === 1) {
      button.innerText = "Entrada";
    } else {
      button.innerText = "saida";
    }
    excluir.innerText = "remover";

    spanbtn.append(button, excluir);
    li.append(SomaTotal, valores, spanbtn);
    ul.append(li);
    main.appendChild(ul);
    somaValores(insertedValues);
  });
}
function filtradosEntrada(arr) {
  const btnEntrada = document.getElementById("entrada");
  btnEntrada.addEventListener("click", (e) => {
    e.preventDefault();
    const filterEntrada = arr.filter((categ) => categ.categoryID === 1);
    renderizarAll(filterEntrada);
    somaValores(filterEntrada);
  });
}
filtradosEntrada(valores);

function filtradoSaida(arr) {
  const btnSaida = document.getElementById("saida");
  btnSaida.addEventListener("click", (e) => {
    e.preventDefault();
    const filterSaida = arr.filter((categ) => categ.categoryID === 2);
    renderizarAll(filterSaida);
    somaValoresSaida(filterSaida);
  });
}
filtradoSaida(valores);

function renderTodos() {
  const btnAll = document.getElementById("somaTotal");
  btnAll.addEventListener("click", (e) => {
    e.preventDefault();
    renderizarAll(insertedValues);
    somaValores(insertedValues);
  });
}
renderTodos(insertedValues);

function somaValores(data) {
  const total = document.querySelector(".valorTotal");
  total.innerHTML = "";
  let resultado = [];

  data.forEach((valor) => {
    resultado.push(valor.value);
    console.log(valor.value);
  });
  console.log(resultado);
  total.innerText = `R$ ${resultado.reduce(
    (valor, result) => valor + result,
    0
  )}`;
}
// function responsavelCadastro() {
//   const Categoriaid = parseInt(verificarCheck());
//   const valor = novoValor(elem);

//   insertedValues.push({
//     value: valor,
//     categoryID: parseInt(Categoriaid),
//   });
//   console.log(insertedValues);

// buttonexcluir.findIndex((e) => {
//   e.addEventListener("click", () => {
//     const index = insertedValues.find((element) => {
//       return element.id === e.id;
//     });
//     insertedValues.splice(insertedValues.findIndex(index), 1);
//   });
// });
function somaValoresSaida(data) {
  console.log(data);
  const total = document.querySelector(".valorTotal");
  total.innerHTML = "";
  let resultado = [];

  data.forEach((valor) => {
    resultado.push(valor.value);
    console.log(valor.value);
  });
  console.log(resultado);
  total.innerText = `R$- ${resultado.reduce(
    (valor, result) => valor + result,
    0
  )}`;
}
