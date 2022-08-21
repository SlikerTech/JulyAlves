const cardsJuly = document.querySelector("div.cardsJuly");
const cardJuly = document.querySelector("div.cardJuly");



const VestidosJuly = [
  {
    img: "assets/image/Novidades/VestidoJuly01.jpg",
    titulo: "Vestido July",
    descricao: "Azul marinho com fenda",
    tamanho: "P/M"
  },
  {
    img: "assets/image/Novidades/VestidoJuly02.jpg",
    titulo: "Vestido July",
    descricao: "Marsala, midi com cinto",
    tamanho: "P/M"
  },
  
  {
    img: "assets/image/Novidades/VestidoJuly03.jpg",
    titulo: "Vestido July",
    descricao: "Vermelho, semi-sereia",
    tamanho: "P/M"
  },
];

VestidosJuly.map(vestidoJuly => {
  const slideClone = cardJuly.cloneNode(true);
  slideClone.querySelector("img").src = vestidoJuly.img;
  slideClone.querySelector("#titulo").innerHTML = vestidoJuly.titulo;
  slideClone.querySelector("#descricao").innerHTML = vestidoJuly.descricao;
  slideClone.querySelector("#tamanho").innerHTML = vestidoJuly.tamanho;
  cardsJuly.appendChild(slideClone);

});

cardJuly.remove();


// ============================

const cardsMila = document.querySelector("div.cardsMila");
const cardMila = document.querySelector("div.cardMila");

const VestidosMila = [
  {
    img: "assets/image/Novidades/VestidoMila01.jpg",
    titulo: "Vestido Mila",
    descricao: "Amarelo, semi-sereia de renda",
    tamanho: "P/M"
  },
  {
    img: "assets/image/Novidades/VestidoMila02.jpg",
    titulo: "Vestido Mila",
    descricao: "Marsala, um ombro, com fenda",
    tamanho: "P/M"
  },
  
  {
    img: "assets/image/Novidades/VestidoMila03.jpg",
    titulo: "Vestido Mila",
    descricao: "Branco, tubinho, ombro a ombro",
    tamanho: "P/M"
  },
];

VestidosMila.map(vestidoMila => {
  const slideClone = cardMila.cloneNode(true);
  slideClone.querySelector("img").src = vestidoMila.img;
  slideClone.querySelector("#titulo").innerHTML = vestidoMila.titulo;
  slideClone.querySelector("#descricao").innerHTML = vestidoMila.descricao;
  slideClone.querySelector("#tamanho").innerHTML = vestidoMila.tamanho;
  cardsMila.appendChild(slideClone);
});

cardMila.remove();


// =====================

const CardsNoivas = document.querySelector("div.cardsNoivas");
const CardNoiva = document.querySelector("div.cardNoiva");

const VestidosCasamento = [
  {
    img: "assets/image/Noivas/noiva01.jpg",
    titulo: "Vestido Noiva",
    descricao: "Branco",
    tamanho: "M/G"
  },
  {
    img: "assets/image/Noivas/noiva02.jpg",
    titulo: "Vestido Noiva Bia",
    descricao: "Pérola, com calda ",
    tamanho: "M/G"
  },
  
  {
    img: "assets/image/Noivas/noiva04.jpg",
    titulo: "Vestido Noiva Malu",
    descricao: "Branco neve, com cinto trançado",
    tamanho: "G/GG"
  },
];

VestidosCasamento.map(vestidosCasamento => {
  const slideClone = CardNoiva.cloneNode(true);
  slideClone.querySelector("img").src = vestidosCasamento.img;
  slideClone.querySelector("#titulo").innerHTML = vestidosCasamento.titulo;
  slideClone.querySelector("#descricao").innerHTML = vestidosCasamento.descricao;
  slideClone.querySelector("#tamanho").innerHTML = vestidosCasamento.tamanho;
  CardsNoivas.appendChild(slideClone);
});

CardNoiva.remove();