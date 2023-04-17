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