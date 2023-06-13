(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    const documento = document;
    //open madal
    documento.addEventListener('click', (e)=>{
        
        if (e.target.id == 'derecho-civil') {
            e.preventDefault();
            const modal = document.getElementById('modal-civil');
            modal.classList.add('modal-show');    
        }
        if (e.target.id == 'derecho-familiar') {
            e.preventDefault();
            const modal = document.getElementById('modal-familiar');
            modal.classList.add('modal-show');    
        }
        if (e.target.id == 'derecho-mercantil') {
            e.preventDefault();
            const modal = document.getElementById('modal-mercantil');
            modal.classList.add('modal-show');    
        }
        if (e.target.id == 'derecho-penal') {
            e.preventDefault();
            const modal = document.getElementById('modal-penal');
            modal.classList.add('modal-show');    
        }
        if (e.target.id == 'derecho-corporativo') {
            e.preventDefault();
            const modal = document.getElementById('modal-corporativo');
            modal.classList.add('modal-show');    
        }
        if (e.target.id == 'propiedad-intelectual') {
            e.preventDefault();
            const modal = document.getElementById('modal-intelectual');
            modal.classList.add('modal-show');    
        }
        if (e.target.id == 'pro-bono') {
            e.preventDefault();
            const modal = document.getElementById('modal-pro-bono');
            modal.classList.add('modal-show');    
        }
        if (e.target.id == 'gestoria') {
            e.preventDefault();
            const modal = document.getElementById('modal-gestoria');
            modal.classList.add('modal-show');    
        }
        //cerrar modal
        if (e.target.classList =='modal-close' || e.target.classList =='close'){
            e.preventDefault();
            const modal = document.querySelector('.modal-show');
            modal.classList.remove('modal-show');    
        }
        /*if (e.target.classList=='open-costo') {
            window.open('services/costos.html');
        }*/

    });

    //traductor
    const flagElements = documento.getElementById('flags');

    const textsToChange = document.querySelectorAll("[data-section]");
    
    const changeLenguage = async (language)=>{

        const requesJson = await fetch(`./languages/${language}.json`);
        const texts = await requesJson.json();
        //console.log(texts);
        for (const textToChange of textsToChange) {
            
            const section =  textToChange.dataset.section;
            const value =  textToChange.dataset.value;

            textToChange.innerHTML = texts[section][value];
        }

    }
    
    flagElements.addEventListener('click', (e) =>{
        changeLenguage(e.target.parentElement.dataset.language);
    });
        
})(jQuery);

