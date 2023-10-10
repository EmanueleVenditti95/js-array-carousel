// creare un'array con tutte le immagini
const pictures = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]
// console.log(pictures)

// definire una variabile con il container del carosello
const galleryDOMElement = document.getElementById('gallery')
// console.log(gallery)

// creare un ciclo per stampare tutte le immagini
for (let i = 0; i < pictures.length; i++) {
    const currentPic = pictures[i]
    console.log(currentPic)

// inserire le immagini nell'html
    const htmlStringPic = `
     <div class="picture">
        <img src="${currentPic}">
     </div>`
    console.log(htmlStringPic)

    galleryDOMElement.innerHTML += htmlStringPic
}

// definire una variabile che seleziona tutti gli elementi della gallery
const pictureDOMElement = document.querySelectorAll('.picture')

// definire una variabile per selezionare solo il primo elemento della gallery
const firstPicDOMElement = pictureDOMElement[0]
console.log(firstPicDOMElement)

// aggiungere la classe .active al primo elemento della gallery per renderlo visibile
firstPicDOMElement.classList.add('active')


