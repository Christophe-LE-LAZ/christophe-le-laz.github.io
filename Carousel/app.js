

const imagesArray = [
  "/images/commimmo.jpeg",
  "https://place-hold.it/300",
  "https://place-hold.it/300",
  "/images/commimmo.jpeg",
  "https://place-hold.it/300",
  "https://place-hold.it/300",
  "/images/commimmo.jpeg",
  "https://place-hold.it/500",
  "https://place-hold.it/500",
]

// DOM

const slider = document.querySelector('.slider');
const indicators = document.querySelector('.slider--indicators')
const goBackbtn = document.getElementById('goback--btn')
const goNextbtn = document.getElementById('gonext--btn')

// insérer les images et les indicators

imagesArray.map((imageSrc, index) => {
    let imageElement = document.createElement("img")
    imageElement.src = imageSrc;
    imageElement.id = index;
    imageElement.classList.add("slide");
    imageElement.style.width = "500px";
    imageElement.style.height = "500px";
    imageElement.style.objectFit = "cover";
    slider.appendChild(imageElement);

    const indicatorElement = document.createElement("a");
    indicatorElement.href = `#${index}`;
    indicatorElement.classList.add ('indicator');
    indicators.appendChild(indicatorElement)

})

// Gestion du scroll
const imageWidth = slider.clientWidth;
// console.log (imageWidth)

slider.scrollTo (0, 0);
let currentIndex = 0;
currentIndex === 0 ? goBackbtn.style.display ="none" : goBackbtn.style.display ="block";

document.querySelector(`a[href='#${currentIndex}']`).classList.add('active');

// gestion de la navigation

let currentScrollLevel = slider.scrollLeft;

slider.addEventListener('scroll', () => {
    // changement de l'index en cours
  currentScrollLevel = slider.scrollLeft;
  currentIndex = Math.floor(currentScrollLevel / imageWidth)

  // Affichage de la navigation.
currentIndex === 0 ? goBackbtn.style.display ="none" : goBackbtn.style.display ="block";
currentIndex === imagesArray.length - 1 ? goNextbtn.style.display ="none" : goNextbtn.style.display ="block";

// style indicator dynamique

const allIndicators = [...document.getElementsByClassName('indicator')]
allIndicators.map(indicator => indicator.classList.remove('active'))
document.querySelector(`a[href='#${currentIndex}']`).classList.add('active');
})

// navigation

goBackbtn.addEventListener('click', () => {
    slider.scrollBy(-imageWidth, 0);
})

goNextbtn.addEventListener('click', () => {
    slider.scrollBy(imageWidth, 0);
})

