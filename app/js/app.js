
const header = document.querySelector('nav');
const tl= gsap.timeline ( {defauls: { ease: "power1.out" } } );


window.addEventListener('scroll', () => { const scrollPos = window.scrollY;

if (scrollPos > 10 ) {heade.classList.add ('scrolled') ; } else {
    header.classList.remove ('scrolled');
}
})



tl.to ('.text', { y: "0%",delay: 0.25, duration: 1, stagger: 0.25 } );

tl.to ('.slider', { y: "-100%", duration:1.5, delay: 0.5 } );

tl.to ('.intro', { y: "-100%", duration:1} ,"-=1.25");

tl.fromto (".big-text", { opacity: 0 }, {opacity: 1, duration: 1 }, '-=1');
tl.fromto (".nav.links" , { opacity: 0 }, {opacity: 1, duration: 1 }, '-=1'); 

