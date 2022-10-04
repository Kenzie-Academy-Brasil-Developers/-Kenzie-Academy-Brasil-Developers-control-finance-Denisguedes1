/* Desenvolva sua lógica aqui */
import { insertedValues, valuesCategory } from "../../pages/home/valuesData.js";

const identificarOIndex = valuesCategory;

const valores = insertedValues;

export function renderizarAll(arr) {
  const main = document.querySelector(".conteinerUL");
  main.innerHTML = "";
  arr.forEach((element) => {
    const SomaTotal = document.createElement("p");
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    li.setAttribute("class", "valores");
    const valores = document.createElement("p");
    const spanbtn = document.createElement("span");

    const excluir = document.createElement("button");
    excluir.setAttribute("class", "remove");
    const button = document.createElement("button");

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
    ul.append(li);
    spanbtn.append(button, excluir);
    li.append(SomaTotal, valores, spanbtn);
    main.append(ul);

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
  const total = document.getElementById("total");

  let resultado = [];

  data.forEach((valor) => {
    resultado.push(valor.value);
  });

  const price = resultado.reduce((valor, result) => valor + result, 0);

  total.innerText = `R$ ${price}`;
}
function somaValoresSaida(data) {
  const total = document.querySelector(".valorTotal");
  // total.innerHTML = "";
  let resultado = [];

  data.forEach((valor) => {
    resultado.push(valor.value);
  });

  total.innerText = `R$- ${resultado.reduce(
    (valor, result) => valor + result,
    0
  )}`;
}
// function remover(arr) {
//   const btnRemove = document.querySelector(".lixeira");
//   lixeira.addEventlistener("clic", (e) => {
//     console.log("hoi");
//   });
// }
