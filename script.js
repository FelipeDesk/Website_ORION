class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();


let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnProx = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener('click', () => {
    imgAtiva++;
    if(imgAtiva >= contadorImg){
        imgAtiva = 0;
    }
    mostrarSlider()
})

btnAnter.addEventListener('click', () => {
    imgAtiva--;
    if(imgAtiva < 0){
        imgAtiva = contadorImg - 1;
    }
    mostrarSlider();
})

function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
    let antigoBntNav = document.querySelector('.btn-nav-box .btn-nav.ativo');

    antigaImg.classList.remove('ativo');
    antigoBntNav.classList.remove('ativo');

    imgSlider[imgAtiva].classList.add('ativo')
    btnNav[imgAtiva].classList.add('ativo')
}

btnNav.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        imgAtiva = indice;
        mostrarSlider()
    })
})


function iniciarAutoPlay(){
    setInterval(() => {
        imgAtiva++;
        if(imgAtiva >= contadorImg){
            imgAtiva = 0;
        }
        mostrarSlider();
    }, 5000);
}

iniciarAutoPlay();