import "./styles.css"
import observeImg from './modules/observe'
import './public/social-card.png'

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
            const destinationId = el.attributes['data-destination'].value;
            document.getElementById(destinationId).scrollIntoView({behavior: "smooth"});
        }, false)
    );
});

//nav
const tooglerButton = document.getElementById('tooglerButton');
const toogler = document.getElementById('toogler');
const toogleNav = document.getElementById('toogleNav');
let menuOpened = false;
tooglerButton.addEventListener('click', () => {
    if(!menuOpened){
        menuOpened = true;
        toogler.classList.remove('tooglerClosed');
        toogler.classList.add('tooglerOpened');
        toogleNav.style.display="block";
        document.body.style.overflow = 'hidden';
    }
    else{
        menuOpened = false;
        toogler.classList.remove('tooglerOpened');
        toogler.classList.add('tooglerClosed');
        toogleNav.style.display="none";
        document.body.style.overflow = 'auto';
    }
})
