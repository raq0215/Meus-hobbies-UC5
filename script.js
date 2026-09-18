//Mouseover
const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function () {
  titulo.style.color = "#960018";
});

const hero = document.querySelector("h2");
hero.addEventListener("mouseover", function () {
  hero.style.color = "#960018";
});
botaoSobre.addEventListener("click", function () {
    sobre.scrollIntoView();
});
    

botaoSobre.addEventListener("click", function () {

   titulo.textContent = "Conheça um pouco mais sobre mim!";

    sobre.scrollIntoView();

});
