import { insertedValues } from "./valuesData.js";
// criar logica pra filtra os dados
const tratados = criarId2(insertedValues);

console.log(tratados);
const btnEntrada = document.querySelector(".entrada");
btnEntrada.addEventListener("click", (e) => {
  recebeArray(insertedValues);
});

function recebeArray(array) {}
function criarId2(array) {
  const newArr = array.map((elem, index) => {
    return {
      id: index,
      ...elem,
    };
  });
  const filtrados = newArr.filter(categoryId === 1());
  return newArr;
}
console.log(criarId2(insertedValues));
