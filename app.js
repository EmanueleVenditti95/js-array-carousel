// creare un'array con tutte le immagini
const pictures = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]

// definire una variabile con il container del carosello
const galleryDOMElement = document.getElementById('gallery')

// creare un ciclo per stampare tutte le immagini
for (let i = 0; i < pictures.length; i++) {
    const currentPic = pictures[i]

// inserire le immagini nell'html
    const htmlStringPic = `
     <div class="picture">
        <img src="${currentPic}">
     </div>`

    galleryDOMElement.innerHTML += htmlStringPic    
}

// definire una variabile che seleziona tutti gli elementi della gallery
const picturesDOMElement = document.querySelectorAll('.picture')
console.log(picturesDOMElement)

// definire una variabile per selezionare l'elemento della gallery corrente
let currentIndex = 0
let currentSlide = picturesDOMElement[currentIndex]

// aggiungere la classe .active all'elemento della gallery corrente per renderlo visibile
currentSlide.classList.add('active')

// - SE clicco sulla freccia in giù:
//     - l'immagine corrente dovrà diventare non visibile E l'immagine
//       successiva dovrà diventare visibile
// - ALTRIMENTI SE clicco sulla freccia in su:
//     - l'immagine corrente dovrà diventare non visibile E l'immagine
//     precedente dovrà diventare visibile

document.getElementById('button-down').addEventListener("click", changePicture)
function changePicture() {
    
    
    if (currentIndex < pictures.length - 1) {
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.remove('active')
        currentIndex = currentIndex + 1 
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.add('active')

        console.log(currentSlide, currentIndex)

    } else if (currentIndex == pictures.length -1) {
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.remove('active')
        currentIndex = 0
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.add('active')
    }
}    


document.getElementById('button-up').addEventListener("click", changePictureBack)
function changePictureBack() {

    if (currentIndex > 0) {
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.remove('active')
        currentIndex = currentIndex - 1 
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.add('active')

        console.log(currentSlide, currentIndex)

    } else if (currentIndex === 0) {
        currentIndex = 0
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.remove('active')
        currentIndex = 4
        currentSlide = picturesDOMElement[currentIndex]
        currentSlide.classList.add('active')
    }
}        
    
    console.log(currentSlide, currentIndex)

