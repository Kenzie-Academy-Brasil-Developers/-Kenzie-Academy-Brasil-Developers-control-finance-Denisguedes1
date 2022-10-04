/* Desenvolva sua lógica aqui */
import { renderizarAll } from "../pages/home/index.js";
import { insertedValues, valuesCategory } from "../pages/home/valuesData.js";
const renderAll = renderizarAll;
const data = insertedValues;
const category = valuesCategory;

const btnRegistrer = document.getElementById("Registrar");

btnRegistrer.addEventListener("click", () => {
  openModal();
});

function openModal(event) {
  // event.preventDefault();
  const section = document.querySelector(".modal");

  const modal = document.querySelector(".modal");
  modal.classList.toggle("show_modal");

  const bodyConteiner = document.querySelector("body");

  const divConteiner = document.createElement("div");
  const spanBtn = document.createElement("span");
  spanBtn.setAttribute("class", "spanBtn");

  divConteiner.setAttribute("class", "conteinerModal");

  const divModalBox = document.createElement("div");
  divModalBox.setAttribute("class", "modal_box");

  const divModalHeader = document.createElement("div");
  divModalHeader.setAttribute("class", "modal_header");
  const title = document.createElement("p");
  const text = document.createElement("p");
  const buttonClose = document.createElement("button");

  title.setAttribute("class", "tituloModal");
  buttonClose.setAttribute("class", "close_modal");
  buttonClose.innerText = "X";
  buttonClose.addEventListener("click", () => {
    closeModal(modal);
  });

  const butonREg = document.createElement("button");
  butonREg.setAttribute("class", "btn-register");
  butonREg.innerText = "Registrar";

  butonREg.addEventListener("click", () => {
    somaValores(insertedValues);
    responsavelCadastro();
  });

  const button = document.createElement("input");
  button.setAttribute("class", "btnEntrada");
  button.setAttribute("type", "radio");
  button.setAttribute("id", "1");
  button.setAttribute("value", "1");
  button.setAttribute("name", "valueType");
  const label = document.createElement("label");
  label.setAttribute("class", "labelBt");
  label.setAttribute("tabindex", "0");
  label.setAttribute("for", "0");
  label.innerText = "Entrada";

  const buttoSaida = document.createElement("input");

  buttoSaida.setAttribute("type", "radio");
  buttoSaida.setAttribute("id", "2");
  buttoSaida.setAttribute("value", "2");
  buttoSaida.setAttribute("name", "valueType");
  const labelSaida = document.createElement("label");
  labelSaida.setAttribute("class", "labelBt");
  labelSaida.setAttribute("tabindex", "0");
  labelSaida.setAttribute("for", "0");
  labelSaida.innerText = "Saida";

  const spanButton = document.createElement("span");
  spanButton.setAttribute("class", "btnsContent");
  const buttonCancelar = document.createElement("button");

  buttonCancelar.innerText = "Cancelar";
  buttonCancelar.setAttribute("class", "btnCancel");

  button.setAttribute("class", "btnEntrada");
  buttoSaida.setAttribute("class", "btnSaida2");
  button.setAttribute("id", "1");
  buttoSaida.setAttribute("id", "2");

  const input = document.createElement("input");

  input.setAttribute("class", "inputValor");
  input.setAttribute("id", "inputValue");
  title.innerText = "Registro de valor";
  text.innerText =
    "digite o valor e em seguida aperte no botão referente ao tipo do valor";
  input.placeholder = "R$00,00";

  input.setAttribute("type", "number");

  spanButton.append(buttonCancelar, butonREg);
  spanBtn.append(button, label, buttoSaida, labelSaida);
  divConteiner.append(buttonClose, title, text, input, spanBtn, spanButton);
  divModalBox.appendChild(divConteiner);

  section.append(divModalBox);
}
function verificarCheck() {
  const entrada = document.getElementById("1");
  const saida = document.getElementById("2");

  if (document.getElementById("1").checked == true) {
    return entrada.id;
  } else {
    return saida.id;
  }
}

function closeModal(modal) {
  modal.classList.toggle("show_modal");
  modal.innerHTML = "";
}

function novoValor(categoryID) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.setAttribute("class", "valores");
  const input = document.getElementById("inputValue");
  const valor = document.createElement("p");
  const value = document.createElement("p");
  const spanbutton = document.createElement("span");
  const buttonName = document.createElement("button");
  const buttonexcluir = document.createElement("button");
  buttonexcluir.setAttribute("id", "remove");

  buttonexcluir.addEventListener("click", (e) => {
    const index = insertedValues.findIndex((element) => {
      return element.id === e.id;
    });
    console.log(insertedValues);
    insertedValues.splice(index, 1);
    renderizarAll(insertedValues);
    console.log(insertedValues);
  });

  const main = document.querySelector(".conteinerUL");
  if (categoryID == 1) {
    buttonName.innerText = "Entrada";
  } else {
    buttonName.innerText = "Saida";
  }

  spanbutton.setAttribute("class", "SpanButon");

  buttonexcluir.setAttribute("class", "lixeira");
  buttonName.setAttribute("class", "btnName");

  buttonexcluir.innerText = "excluir";

  valor.innerText = `R$ ${Number(input.value)}`;

  li.append(value, valor, spanbutton);
  ul.appendChild(li);
  main.appendChild(ul);

  spanbutton.append(buttonName, buttonexcluir);

  return Number(input.value);
}
function novaRender() {
  insertedValues.forEach((elem) => {
    const ul = document.createElement("ul");

    const li = document.createElement("li");
    li.setAttribute("class", "valores");
    const input = document.getElementById("inputValue");
    const valor = document.createElement("p");
    const value = document.createElement("p");
    const spanbutton = document.createElement("span");
    const buttonName = document.createElement("button");
    const buttonexcluir = document.createElement("button");
    buttonexcluir.setAttribute("id", "remove");
    li.append(value, valor, spanbutton);
    ul.appendChild(li);
    console.log("hoi");
    spanbutton.append(buttonName, buttonexcluir);
  });
}

function responsavelCadastro() {
  const Categoriaid = parseInt(verificarCheck());
  const valor = novoValor(Categoriaid);

  insertedValues.push({
    value: valor,
    categoryID: parseInt(Categoriaid),
  });

  const arrayTratado = criarId(insertedValues);

  filtradosEntrada(arrayTratado);
  filtradoSaida(arrayTratado);
  renderTodos(arrayTratado);
  somaValores(arrayTratado);

  console.log(arrayTratado);
}
function criarId(array) {
  const newArr = array.map((elem, index) => {
    return {
      id: index + 1,
      ...elem,
    };
  });

  return newArr;
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

function filtradoSaida(arr) {
  const btnSaida = document.getElementById("saida");
  btnSaida.addEventListener("click", (e) => {
    e.preventDefault();
    const filterSaida = arr.filter((categ) => categ.categoryID === 2);
    renderizarAll(filterSaida);
    somaValoresSaida(filterSaida);
  });
}

function renderTodos() {
  const btnAll = document.getElementById("somaTotal");
  btnAll.addEventListener("click", (e) => {
    e.preventDefault();
    renderizarAll(insertedValues);
    somaValores(insertedValues);
  });
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
function somaValores(data) {
  const total = document.getElementById("total");

  let resultado = [];

  data.forEach((valor) => {
    resultado.push(valor.value);
  });

  const price = resultado.reduce((valor, result) => valor + result, 0);

  total.innerText = `R$ ${price}`;
}
