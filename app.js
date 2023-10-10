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
const picturesDOMElement = document.querySelectorAll('.picture')

// definire una variabile per selezionare solo il primo elemento della gallery
const firstPicDOMElement = picturesDOMElement[0]
console.log(firstPicDOMElement)

// aggiungere la classe .active al primo elemento della gallery per renderlo visibile
firstPicDOMElement.classList.add('active')

// definire un ciclo per far avanzare le immagini nella gallery
for (let i = 0; i < pictures.length; i++) {
    let currentPic = picturesDOMElement[i]
    document.getElementById('button-up').addEventListener("click", changePicture)
    document.getElementById('button-down').addEventListener("click", changePicture)

    function changePicture() {
        if(document.getElementById('button-down')){
            let currentPic = currentPic + [i]
            currentPic.classList.add('active')
        }
    }
}
// - SE clicco sulla freccia in giù:
//     - l'immagine corrente dovrà diventare non visibile E l'immagine
//       successiva dovrà diventare visibile
// - ALTRIMENTI SE clicco sulla freccia in su:
//     - l'immagine corrente dovrà diventare non visibile E l'immagine
//     precedente dovrà diventare visibile
