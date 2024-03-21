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

// Popolazione dei container col-8 e col-4 con le immagini dell'array
    // creo gli elementi del DOM in cui andrò a inserire le immagini del carosello
    let carouselImages = document.querySelector('.col-8');
    let thumbnailImages = document.querySelector('.col-4');
    // per ogni elemento dell'array immagini popolo il DOM
    images.forEach((imagesDom) => {
        carouselImages.innerHTML += `
        <div class="anchor">
            <img src="${imagesDom.image}" alt="main-image">
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
    });