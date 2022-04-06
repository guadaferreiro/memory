//Grab a couple of thigs

const section = document.querySelector ('section');
const playerLivesCount = document.querySelector ('span');
const playerLives = 6;

//link text
playerLivesCount.textContent = playerLives;

//generate the data

const getData = () => [
    {img: "./img/bulma.png", name: "bulma"},
    {img: "./img/bulma.png", name: "bulma"},
    {img: "./img/cell.png", name: "cell"},
    {img: "./img/cell.png", name: "cell"},
    {img: "./img/frezer.png", name: "frezer"},
    {img: "./img/frezer.png", name: "frezer"},
    {img: "./img/gohan.png", name: "gohan"},
    {img: "./img/gohan.png", name: "gohan"},
    {img: "./img/goku1.png", name: "goku1"},
    {img: "./img/goku1.png", name: "goku1"},
    {img: "./img/goku2.png", name: "goku2"},
    {img: "./img/goku2.png", name: "goku2"},
    {img: "./img/goku3.png", name: "goku3"},
    {img: "./img/goku3.png", name: "goku3"},
    {img: "./img/majinboo.png", name: "majinboo"},
    {img: "./img/majinboo.png", name: "majinboo"},
    {img: "./img/milk.png", name: "milk"},
    {img: "./img/milk.png", name: "milk"},
    {img: "./img/numero18.png", name: "numero18"},
    {img: "./img/numero18.png", name: "numero18"},
    {img: "./img/trunks.png", name: "trunks"},
    {img: "./img/trunks.png", name: "trunks"},
    {img: "./img/vegeta.png", name: "vegeta"},
    {img: "./img/vegeta.png", name: "vegeta"},
];


//Carta random
const random = () => {
    const cardData = getData ();
    cardData.sort(() => Math.random () - 0.5);
    //console.log (cardData);
    return cardData;
};


//generador de cartas
const cardGenerator = () => {
    const cardData = random ();
    //console.log (cardData);

    //HTML
    cardData.forEach (item => {
        //console.log (item);
    const card = document.createElement ('div');
    card.classList = 'card';

    const frontFace = document.createElement ('img');
    frontFace.classList = 'card-front';
    frontFace.src = item.img;

    const backFace = document.createElement ('div');
    backFace.classList = 'card-back';
    backFace.style.backgroundImage = "url('./img/index2.png')"

    section.appendChild (card);
    card.appendChild (frontFace);
    card.appendChild (backFace);
    })
};

cardGenerator();

const cards = document.querySelectorAll ('.card');

function flipCard () {
    this.classList.toggle ('flipCard')
}

cards.forEach(cards => 
    cards.addEventListener ("click", flipCard)
);





//const data = getData();


//[{imgSrc: './img/bulma.png'}]

//img.src = imgSrc
