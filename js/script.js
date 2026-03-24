var faqs = [...document.getElementsByClassName('faq-container')];

function expandirFaq(ele) {
    debugger
    var bodyFaq = ele.children[1],
        iconeFaq = ele.children[0].children[0];

    bodyFaq.classList.toggle('active');
    iconeFaq.classList.toggle('active');
}

faqs.map((ele) => {
    ele.addEventListener('click', (evt) => expandirFaq(ele));
});

var btnSaibaMais = document.getElementById('btn-saiba-mais');

btnSaibaMais.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-navigation');
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop - 90,  // Compensa a altura do menu fixo
        behavior: 'smooth'
    });
});

const srcollToTop = document.getElementById("scroll-to-top"),
    srcollTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400)
        srcollTop.classList.add("active");
    else
        srcollTop.classList.remove("active");
});

let toTop = () => window.scrollTo(0, 0);

srcollToTop.addEventListener('click', () => toTop())


window.addEventListener('DOMContentLoaded', (event) => {
    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.section-image-home', {
        easing: "ease-in-out",
        interval: 500,
        reset: true,
        distance: '5%',
        origin: 'left',
    });

    sr.reveal('.section-title-home', {
        easing: "ease-in-out",
        interval: 500,
        reset: true,
        distance: '5%',
        origin: 'right',
    });

    sr.reveal('.card-sobre', {
        easing: "ease-in-out",
        interval: 100,
        reset: false,
        distance: '5%',
        origin: 'bottom',
    });
   
    sr.reveal('.img-produto', {
        easing: "ease-in-out",
        interval: 100,
        reset: false,
        distance: '5%',
        origin: 'center',
    });

    sr.reveal('.icone-mulher-computador', {
        easing: "ease-in-out",
        interval: 500,
        reset: false,
        distance: '5%',
        origin: 'left',
    });

    sr.reveal('.content-ml', {
        easing: "ease-in-out",
        interval: 500,
        reset: false,
        distance: '5%',
        origin: 'right',
    });

    sr.reveal('.card-quality', {
        easing: "ease-in-out",
        interval: 100,
        reset: false,
        distance: '5%',
        origin: 'center',
    });

});