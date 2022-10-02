/* Desenvolva sua lógica aqui */
import { renderizarAll } from "../pages/home/index.js";
import { insertedValues, valuesCategory } from "../pages/home/valuesData.js";
const renderAll = renderizarAll;
const data = insertedValues;
const category = valuesCategory;
console.log(data);

const btnRegistrer = document.getElementById("Registrar");

btnRegistrer.addEventListener("click", () => {
  openModal();
});

function openModal(event) {
  // event.preventDefault();
  const section = document.querySelector(".modal");

  const modal = document.querySelector(".modal");
  modal.classList.toggle("show_modal");
  console.log("heloow world");

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
  // buttonregistrar
  butonREg.addEventListener("click", () => {
    // novoValor();
    // const inputValue = document.getElementById("inputValue");
    somaValores(insertedValues);
    responsavelCadastro();

    // renderAll();
  });

  const button = document.createElement("input");
  button.setAttribute("class", "btnEntrada");
  button.setAttribute("type", "radio");
  button.setAttribute("id", "1");
  button.setAttribute("value", "0");
  button.setAttribute("name", "valueType");
  const label = document.createElement("label");
  label.setAttribute("class", "labelBt");
  label.setAttribute("tabindex", "0");
  label.setAttribute("for", "0");
  label.innerText = "Entrada";
  const buttoSaida = document.createElement("input");

  buttoSaida.setAttribute("type", "radio");
  buttoSaida.setAttribute("id", "2");
  buttoSaida.setAttribute("value", "0");
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

  // button.innerText = "Entrada";
  // buttoSaida.innerText = "Saida";

  {
    /* <input type="radio" hidden id="0" value="0" name="valueType">
<label class="bt bt-outline" tabindex="0" for="0">Entrada</label> */
  }
  button.setAttribute("class", "btnEntrada");
  buttoSaida.setAttribute("class", "btnSaida");
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
    entrada.innerText = "entrada";
    return entrada.id;
    // insertedValues.push({
    //   categoryID: entrada.id,
    // });
  } else {
    saida.innerText = "saida";
    return saida.id;
    console.log("hoi");

    // insertedValues.push({ categoryID: saida.id });
    console.log(saida);
  }
  console.log(entrada);
  console.log(insertedValues);
}

function closeModal(modal) {
  console.log("hola mundo");
  modal.classList.toggle("show_modal");
  modal.innerHTML = "";
}

function novoValor(data) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.setAttribute("class", "valores");
  const input = document.getElementById("inputValue");
  const valor = document.createElement("p");
  const value = document.createElement("p");
  const spanbutton = document.createElement("span");
  const buttonName = document.createElement("button");
  const buttonexcluir = document.createElement("button");
  const main = document.querySelector(".conteiner");

  spanbutton.setAttribute("class", "SpanButon");
  buttonexcluir.setAttribute("class", "lixeira");
  buttonName.setAttribute("class", "btnName");

  //inserir valores no meu arr
  buttonexcluir.innerText = "excluir";

  valor.innerText = `R$ ${input.value}`;
  console.log(input);

  li.append(value, valor, spanbutton);
  ul.appendChild(li);
  main.appendChild(ul);

  spanbutton.append(buttonName, buttonexcluir);
  return parseInt(input.value);
  // // insertedValues.push({
  //   value: parseInt(input.value),
  // });
}

function responsavelCadastro() {
  const Categoriaid = verificarCheck();
  const valor = novoValor();
  insertedValues.push({
    value: valor,
    categoryID: Categoriaid,
  });
  const arrayTratado = criarId(insertedValues);
  console.log(arrayTratado);
}
function criarId(array) {
  const newArr = array.map((elem, index) => {
    return {
      id: index,
      ...elem,
    };
  });

  return newArr;
}

function somaValores(data) {
  const total = document.querySelector(".valorTotal");
  total.innerHTML = "";
  let totally = [];
  data.forEach((valor) => {
    totally.push(valor.value);
  });

  total.innerText = `R$ ${totally.reduce(
    (valor, result) => parseInt(valor) + parseInt(result),
    0
  )}`;
  console.log(totally);
}
somaValores(data);
