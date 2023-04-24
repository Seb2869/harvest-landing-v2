import "./styles/indexStyles.css"
import "./styles/navStyles.css"
import observeImg from './modules/observe'
import './public/minus.svg'
import './public/plus.svg'
import './public/social-card.jpg'

//nav
const tooglerButton = document.getElementById('tooglerButton');
const toogler = document.getElementById('toogler');
const toogleNav = document.getElementById('toogleNav');
let menuOpened = false;

function closeMenu(){
    menuOpened = false;
    toogler.classList.remove('tooglerOpened');
    toogler.classList.add('tooglerClosed');
    toogleNav.style.display="none";
    document.body.style.overflow = 'auto';
}

function openMenu(){
    menuOpened = true;
    toogler.classList.remove('tooglerClosed');
    toogler.classList.add('tooglerOpened');
    toogleNav.style.display="block";
    document.body.style.overflow = 'hidden';
}

function toogleMenu(opened){
    if(!opened)
        openMenu();
    else
        closeMenu();
}

tooglerButton.addEventListener('click', () => {
    toogleMenu(menuOpened);
});

const lazyImgs = document.getElementsByClassName('lazyImg');
[...lazyImgs].forEach(img => {
    observeImg(
        img,
        () => {
            img.src = img.attributes['data-src'].value;
        }
    );
});

const scrollToElements = document.getElementsByClassName('scrollTo');
[...scrollToElements].forEach(el => {
    ['click','ontouchstart'].forEach( evt =>
        el.addEventListener(evt, () => {
            closeMenu();
            const destinationId = el.attributes['data-destination'].value;
            document.getElementById(destinationId).scrollIntoView({behavior: "smooth"});
        }, false)
    );
});

const accordionTooglers = document.getElementsByClassName('accordionTitle');
[...accordionTooglers].forEach(el => {
    el.addEventListener('click', () => {
        const accordion = el.parentElement;
        const body = accordion.children[1];
        if(body.style.height === "0px"){
            body.style.height = `${body.scrollHeight}px`;
            el.children[0].setAttribute('src', 'public/minus.svg');
        }
        else{
            body.style.height = "0px";
            el.children[0].setAttribute('src', 'public/plus.svg')
        }
    }, false)
});