

const slides = document.querySelector("div.vestidosNovidades")
const slideOne = document.querySelector("div.boxNovidades")


const novidades = [
  {img: "../assets/image/Novidades/img01.jpg"},
  {img: "../assets/image/Novidades/img01.jpg"},
  {img: "../assets/image/Novidades/img01.jpg"},
  {img: "../assets/image/Novidades/img01.jpg"}
]

novidades.map(novidades => {
  const slideClone = slideOne.cloneNode(true);
  slideClone.querySelector("img").src = novidades.img;
  slides.appendChild(slideClone);
});

slideOne.remove();