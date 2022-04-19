/*
..........................................................
                             Navbar
............................................................
*/
$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

$(document).on('click', 'li.nav-item', function () {
    $(this).addClass('active').siblings().removeClass('active')
});

/*
..........................................................
                             Button_Up
............................................................
*/
$(document).ready(function () {
    $('.btn_arriba').hide();

    $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
            $('.btn_arriba').fadeIn(200);
        } else {
            $('.btn_arriba').fadeOut(200);
        }
    });

    $('.btn_arriba').click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 200);
    })
});

/*
..........................................................
                    JavaScript_ScrollReveal
............................................................
*/

window.sr = ScrollReveal();
sr.reveal('.scrolling-navbar', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*
..........................................................
                    Button_Nocturno
............................................................
*/

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }

});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

/*
..........................................................
                    Portafolio_Filter
............................................................
*/

const filterContainer = document.querySelector('.portafolio_filter'),
    filterBnts = filterContainer.children,
    totalFilterBtn = filterBnts.length,
    portfolioItems = document.querySelectorAll(".portafolio_item"),
    totalPortfolioItem = portfolioItems.length;


for (let i = 0; i < totalFilterBtn; i++) {

    filterBnts[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let mar = 0; mar < totalPortfolioItem; mar++) {
            if (filterValue === portfolioItems[mar].getAttribute("data-category")) {
                portfolioItems[mar].classList.remove("hide");
                portfolioItems[mar].classList.add("show");
            } else {
                portfolioItems[mar].classList.remove("show");
                portfolioItems[mar].classList.add("hide");
            }
            if (filterValue === "Todos") {
                portfolioItems[mar].classList.remove("hide");
                portfolioItems[mar].classList.add("show");
            }
        }
    })
}

/*
..........................................................
                    Animation Letter
............................................................
*/

var typed = new Typed(".typing", {
    strings: ["Desarrollador", "Analista Programador"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Desarrollador", "Analista Programador"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
