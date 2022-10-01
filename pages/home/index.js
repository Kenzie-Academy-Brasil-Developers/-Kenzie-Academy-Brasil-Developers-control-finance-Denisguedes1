/* Desenvolva sua lógica aqui */
import { insertedValues, valuesCategory } from "../../pages/home/valuesData.js";

const identificarOIndex = valuesCategory;
console.log(identificarOIndex);
const valores = insertedValues;
console.log(valores);

export function renderizarAll() {
  valores.forEach((element) => {
    const main = document.querySelector(".conteiner");
    const SomaTotal = document.createElement("p");
    const ul = document.createElement("ul");

    const li = document.createElement("li");
    li.setAttribute("class", "valores");
    const valores = document.createElement("p");
    const spanbtn = document.createElement("span");
    const excluir = document.createElement("button");
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

    spanbtn.append(button, excluir);
    li.append(SomaTotal, valores, spanbtn);
    ul.append(li);
    main.appendChild(ul);
  });
}
renderizarAll();
