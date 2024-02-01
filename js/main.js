(function ($) {
    "use strict";

    // Spinner
    /**
     * Função anônima é atribuída à variável 'spinner', criando uma função chamada 'spinner'.
    */
    var spinner = function () {

        /**
         * 'setTimeout é uma função JavaScript que executa uma função após um determinado período de tempo.
         * Neste caso, a função anônima fornecida será executada após um intervalo de 1 milissegundo.
        */
        setTimeout(function () {

            /**
             * Dentro da função do 'setTimeout', há uma verificação condicional para garantir que existe pelo menis um elemento no documento com o ID 'spinner'.
             * '$('#spinner')' é uma seleção jQuery que procura por um elemento com o ID 'spinner'.
             * '.length' é então usada para verificar se pelo menos um elemento foi encontrado.
            */
            if ($('#spinner').length > 0) {
                
                /**
                 * Se o elemento com ID 'spinner' for encontrado (ou seja, '$('#spinner').legth > 0)', então a classe 'show' será removida desse elemento.
                 * Isso geralmente é usado para ocultar ou desativar a visualização do elemento.
                */
                $('#spinner').removeClass('show');
            }
        }, 1000);
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


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

