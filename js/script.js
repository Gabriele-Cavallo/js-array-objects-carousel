// Creare un carosello

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il 
// carosello.Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo 
// aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca 
// la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se 
// l'utente clicca la freccia verso il basso.

// BONUS 1: Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2: Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3: Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// DOM SECTION

// Popolazione dei container col-8 e col-4 con le immagini dell'array
    // creo gli elementi del DOM in cui andrò a inserire le immagini del carosello
    let carouselImages = document.querySelector('.col-8');
    let thumbnailImages = document.querySelector('.col-4');
    // creo l'elemento in cui inserire le miniature
    let miniatureImage = document.querySelector('#miniature');
    // per ogni elemento dell'array immagini popolo il DOM
    images.forEach((imagesDom) => {
        carouselImages.innerHTML += `
        <div class="anchor">
            <img class="image" src="${imagesDom.image}" alt="main-image">
            <div class="description pe-3">
                <h2>${imagesDom.title}</h2>
                <p>${imagesDom.text}</p>
            </div>
        </div>
        `;
        thumbnailImages.innerHTML += `
        <div class="ms-h20 thumbnail">
            <img src="${imagesDom.image}" alt="thumbnail-image">
        </div>
        `;
        miniatureImage.innerHTML += `<img class="ms-col-20 active-image" src="${imagesDom.image}" alt="miniature-img">`;
    });

// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile
    // Creo una classe css active per dare display block all'elemento attivo e resettare l'opacità alla thumbnail image
    // Imposto le immagini della col-8 disattivate con un selettore css
    // Dichiaro l'immagine di partenza di col-8 e col-4
        // creo una variabile activeItem che regolerà l'attivazione degli item
        let activeItem = 0;
        // creo una variabile che seleziona tutte le immagini di col-8
        let allAnchor = document.querySelectorAll('.anchor');
        // aggiungo la classe active al primo elemento visibile
        allAnchor[activeItem].classList.add("active");
        // creo una variabile che seleziona tutte le immagini di col-4
        let allImageThumbnails = document.querySelectorAll('.thumbnail');
        // aggiungo la classe active al primo elemento visibile
        allImageThumbnails[activeItem].classList.add("active");

// bottoni per scorrere le thumbnail images
previousImage();
nextImage();
    
// PLAY-STOP-REVERSE-BUTTON SECTION

// autoplay next image
let intervalImage = setInterval(nextImageShow, 3000);
// creo gli elementi button play,stop,reverse del DOM
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const reverseButton = document.querySelector('.reverse');
// aggiungo gli eventi click ai bottoni play,stop,reverse
playButton.addEventListener('click', function(){
    clearInterval(intervalImage);
    intervalImage = setInterval(nextImageShow, 3000);
});
stopButton.addEventListener('click', function(){
    clearInterval(intervalImage);
});
reverseButton.addEventListener('click', function(){
    clearInterval(intervalImage);
    intervalImage = setInterval(previousImageShow, 3000);
});

// attivazione dell'immagine del carosello tramite click su una miniatura
activeImage(allAnchor, allImageThumbnails);


// FUNCTIONS

// funzione per attivare l'immagine cliccata da una miniatura
// anchor ---> immagine del carosello principale a cui assegnare la classe active
// thumbnail ---> immagine thumbnail a cui assegnare la classe active
// index ---> indice della miniatura cliccata che regola quale anchor e thumbnail attivare
function activeImage (anchor, thumbnail){
    let selectImage = document.querySelectorAll('.active-image');
    selectImage.forEach((image, index) => {
        image.addEventListener('click', () =>{
            // rimuovo la classe active dall'elemento del DOM
            document.querySelector('.anchor.active').classList.remove('active');
            document.querySelector('.thumbnail.active').classList.remove('active');
            // aggiungo la classe active all'elemento cliccato
            anchor[index].classList.add("active");
            thumbnail[index].classList.add("active");
            activeItem = index;
        });
    });
}
// funzione click del bottone dell'immagine precedente
function previousImage (){
// Imposto il funzionamento del bottone immagine precedente
    // creo l'elemento del DOM a cui assegnero l'eventListener
    let previousImage = document.querySelector('.previous');
    // associo l'eventListener all'elemento del DOM
    previousImage.addEventListener('click', function() {
        // funzione che attiva l'immagine precedente
        previousImageShow();
    });
};
// funzione click del bottone dell'immagine successiva
function nextImage (){
// Imposto il funzionamento del bottone immagine successiva
    // creo l'elemento del DOM a cui assegnero l'eventListener
    let nextImage = document.querySelector('.next');
    // associo l'eventListener all'elemento del DOM
    nextImage.addEventListener('click', function() {
        // funzione che attiva l'immagine successiva
        nextImageShow();
    });
}
// funzione di selezione immagine successiva
function nextImageShow(){
    // toglie la classe active dagli item attivi
    document.querySelector('.anchor.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');
    // e darla ai successivi
    if (activeItem < allAnchor.length -1 ){
        activeItem++;
    }else {
        activeItem = 0;
    }
    allAnchor[activeItem].classList.add("active");
    allImageThumbnails[activeItem].classList.add("active");
}
// funzione di selezione immagine precedente
function previousImageShow(){
    // toglie la classe active dagli item attivi
    document.querySelector('.anchor.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');
    // per poi darla ai precedenti
    if (activeItem > 0){
        activeItem--;
    }else {
        activeItem = allAnchor.length -1;
    }
    allAnchor[activeItem].classList.add("active");
    allImageThumbnails[activeItem].classList.add("active");
}
