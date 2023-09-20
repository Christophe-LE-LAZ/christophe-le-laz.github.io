
// Apparition du bouton down première page//
window.onload = function()
{
  setTimeout(function()
  {
    document.getElementById("btn--apparition").style.display = "block";
  }, 4000);
}
//
//
// Ajuster la taille des icones de la section me contacter //

let tailleIcon = document.getElementsByClassName('taille')
const mediaSmedium = window.matchMedia('(min-width:700px)');
const mediaMedium = window.matchMedia('(max-width:939px)');
const mediaLarge = window.matchMedia('(min-width:940px)');

// J'analyse la taille de ma fenêtre au chargement et j'ajuste la classe a attribué à mes icones en fonction //
window.onload = function () {

  for (let i=0; i<tailleIcon.length; i++) {

      if(mediaMedium.matches) {
      tailleIcon[i].classList.add('fa-2x')
      }
      else
      tailleIcon[i].classList.add('fa-4x')

  }}
// Je fais de même que précédemment mais à chaque modification de la taille de la fenêtre. En fonction de la taille analyser je remplace les classes.

window.addEventListener('resize', function () {
    for (let i=0; i<tailleIcon.length; i++) {

      if(mediaMedium.matches) {

      tailleIcon[i].classList.replace('fa-4x', 'fa-2x')

      }
      else
      tailleIcon[i].classList.replace('fa-2x', 'fa-4x')

  }})
  //
  // Gestion du slide de la section mes projets //

const imagesArray = [...document.getElementsByClassName('card')]

  // DOM

const slider = document.querySelector('.slider');
const indicators = document.querySelector('.slider--indicators')
const goBackbtn = document.getElementById('goback--btn')
const goNextbtn = document.getElementById('gonext--btn')
const indicatorsA = document.getElementsByClassName('indicator')

// j'attribue un id équivalent à l'index du tableau imagesArray à chaque card puis j'attribue ce même id à chaque lien 'a' de ma div indicator. Lien que je crée et auquel j'ajoute la classe indexvisible

imagesArray.map((imagesArray,index) => {

  imagesArray.id = index;

  const indicatorElement = document.createElement("a");
  indicatorElement.href = `#${index}`
  indicatorElement.classList.add ('indexvisible')
  indicators.appendChild(indicatorElement)
})

// Gestion du scroll et de la classe "active"

slider.scrollTo(0,0)
let currentIndex = 0;
currentIndex === 0 ? goBackbtn.style.display ="none" : goBackbtn.style.display ="block";
document.querySelector(`a[href='#${currentIndex}']`).classList.add('active');

// Gestion du slide via les boutons et de la classe active.

const imageWidth = slider.clientWidth;

goBackbtn.addEventListener('click', () => {
  slider.scrollBy(-imageWidth, 0)
  currentIndex = currentIndex -1
  currentIndex === 0 ? goBackbtn.style.display ="none" : goBackbtn.style.display ="block";
  currentIndex === indicatorsA.length - 1 ? goNextbtn.style.display ="none" : goNextbtn.style.display ="block";
  document.querySelector('.indicator.active')?.classList.remove('active')
  
  if (currentIndex === 0){
    indicatorsA[0].classList.add('active')
  }
  if (currentIndex === 1){
    indicatorsA[1].classList.add('active')
  }
  if (currentIndex === 2){
    indicatorsA[2].classList.add('active')
  }
})

goNextbtn.addEventListener('click', () => {
  slider.scrollBy(imageWidth, 0)
  console.log(currentIndex)
  currentIndex = currentIndex +1
  currentIndex === 0 ? goBackbtn.style.display ="none" : goBackbtn.style.display ="block";
  currentIndex === indicatorsA.length - 1 ? goNextbtn.style.display ="none" : goNextbtn.style.display ="block";
  document.querySelector('.indicator.active')?.classList.remove('active')
  if (currentIndex === 0){
    indicatorsA[0].classList.add('active')
  }
  if (currentIndex === 1){
    indicatorsA[1].classList.add('active')
  }
  if (currentIndex === 2){
    indicatorsA[2].classList.add('active')
  }
})
//
// Gestion responsive du scroll du slider 
// Je sélectionne l'ensemble de mes liens avec la classe indexvisible je parcours leur index avec la boucle foreach. Si l'index divisé par 2 est différent de 0 ou vaut zéro alors je lui attribue la classe "indicator", s'il vaut 1, je lui enlève la classe indicator.
const indicatorElementHref = [...document.querySelectorAll('a.indexvisible')]
const indexvisible = document.getElementsByClassName('indexvisible')

window.onload = function () {
for (let i=0; i<indexvisible.length; i++) {

if (mediaSmedium.matches &&  !mediaLarge.matches) {
     indexvisible[i].classList.add ('indicator')}

else if (mediaLarge.matches) {
  indicatorElementHref.forEach(function(e, index){
    if (index == 1){
      e.classList.remove('indicator')
    }
    else if (index%2 !== 0 || index == 0) {
      e.classList.add('indicator')
    }
    else {
    e.classList.remove('indicator')
    }
  })
}
}}

window.addEventListener('resize', function () {
for (let i=0; i<indexvisible.length; i++) {

  if (mediaSmedium.matches &&  !mediaLarge.matches) {
       indexvisible[i].classList.add ('indicator')}
  
  else if (mediaLarge.matches) {
    indicatorElementHref.forEach(function(e, index){
      if (index == 1){
        e.classList.remove('indicator')
      }
      else if (index%2 !== 0 || index == 0) {
        e.classList.add('indicator')
      }
      else {
      e.classList.remove('indicator')
      }
    })
  }
}})

// Gestion du scroll à points et de la classe active;
const slideA = document.querySelectorAll('.indexvisible')

slideA.forEach (e => {
  e.addEventListener('click', () => {
  document.querySelector('.indicator.active')?.classList.remove('active')
  e.classList.add('active')
  })
})