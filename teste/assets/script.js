const campopesquisa = document.querySelector("#campo");
const camporesultado = document.querySelector("#resultados");
const btnenviar = document.querySelector("#btnenviar");
const btnremover = document.querySelector("#btnremover");


btnenviar.addEventListener('click', function () {
  if (campopesquisa.value === '') {
    alert('invalido')
    camporesultado.value.innerHTML === ''
  }
  camporesultado.innerHTML += `<p> • ${campopesquisa.value} <p/> `
  campopesquisa.value = null;

})









