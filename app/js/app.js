
const header = document.querySelector('nav');

const tl= gsap.timeline ( {defauls: { ease: "power1.out" } } );



window.addEventListener('scroll', () => { const scrollPos = window.scrollY;

if (scrollPos > 10 ) {header.nav.add ('scrolled') ; } else {
    header.nav.remove ('scrolled');
}
})



tl.to ('.text', { y: "0%",delay: 0.25, duration: 1, stagger: 0.25 } );
tl.to ('.slider', { y: "-100%", duration:1.5, delay: 0.5 } );
tl.to ('.intro', { y: "-100%", duration:1} ,"-=1.25");




