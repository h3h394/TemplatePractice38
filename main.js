const openModule = document.getElementById('openModule');
const closeModule = document.getElementById('closeModule');
const module = document.querySelector('.nav-module');
const videoModule = document.querySelector('.video-module');
const videoModuleOpen = document.querySelector('.icon-wrapper');
const videoModuleClose = document.getElementById('close');

openModule.addEventListener('click', () => {
    module.classList.toggle('hidden');
});

closeModule.addEventListener('click', () => {
    module.classList.toggle('hidden');
});

videoModuleOpen.addEventListener('click', () => {
    videoModule.classList.toggle('hide');
    document.body.style.overflowY = 'hidden';
});

videoModuleClose.addEventListener('click', () => {
    videoModule.classList.toggle('hide');
    document.body.removeAttribute('style');
});

const galleryModule = document.querySelector('.gallery-module');
const galleryOpen = document.querySelectorAll('.wrapper-icon');
let galleryPicture = document.querySelector('.gallery-module .picture');
let galleryBackground = '';
let closeGallery = document.getElementById('closeGallery');

galleryOpen.forEach(pic => {
    pic.addEventListener('click', (event) => {
        galleryModule.classList.remove('hide');
        document.body.style.overflowY = 'hidden';
        if (galleryBackground === '') {
            if (event.target.classList.contains('wrapper-icon') || event.target.classList.contains('fas fa-search fa-lg')) {
                galleryBackground = window.getComputedStyle(event.target.parentNode.parentNode, false).backgroundImage;
            } else {
                galleryBackground = window.getComputedStyle(event.target.parentNode.parentNode.parentNode, false).backgroundImage;
            }
            galleryPicture.style.backgroundImage = galleryBackground;
            if (galleryBackground.includes('img/gallery1.png')) {
                document.getElementById('previousBtn').classList.add('hideBtn');
            }
        }
    });
});

function nextBtn(event) {
    const imgNumber = parseInt(galleryBackground.charAt(galleryBackground.length - 7)) + 1;
    const imgString = galleryBackground.slice(0, galleryBackground.length - 7);
    const img = `${imgString}${imgNumber}.png")`;

    if (imgNumber < 5) {
        galleryBackground = img;
        event.target.parentNode.children[1].style.backgroundImage = img;
    }
    if (imgNumber > 1) {
        document.getElementById('previousBtn').classList.remove('hideBtn');
    }
    if (galleryBackground.includes('img/gallery4.png')) {
        document.getElementById('nextBtn').classList.add('hideBtn');
    }
}

function previousBtn(event) {
    const imgNumber = parseInt(galleryBackground.charAt(galleryBackground.length - 7)) - 1;
    const imgString = galleryBackground.slice(0, galleryBackground.length - 7);
    const img = `${imgString}${imgNumber}.png")`;
    if (imgNumber > 0) {
        galleryBackground = img;
        event.target.parentNode.children[1].style.backgroundImage = img;
    }
    if (imgNumber < 2) {
        document.getElementById('previousBtn').classList.add('hideBtn');
    }
    if (imgNumber < 4) {
        document.getElementById('nextBtn').classList.remove('hideBtn');
    }
}

closeGallery.addEventListener('click', () => {
    galleryModule.classList.add('hide');
    document.body.style.overflowY = 'visible';
});

let linkWrap = document.querySelectorAll('.heading.linkWrap a');
let descHidden = document.querySelector('.desc-wrap');

linkWrap.forEach(el => {
    el.addEventListener('click', (e) => {
        descHidden.classList.toggle('opacityHidden');
        setTimeout(returnOpacity, 450);

        document.querySelectorAll(".heading .active").forEach(el => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});

function returnOpacity() {
    descHidden.classList.toggle('opacityHidden');
}

let menuShow = document.querySelector('.menu-wrap');

document.getElementById('burger').addEventListener('click', () => {
    menuShow.classList.toggle('menuHide');
});