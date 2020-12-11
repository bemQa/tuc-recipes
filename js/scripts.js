$(document).ready(function () {
	$('.burger').click(function(e){
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");

        $('.menu-links').toggleClass('active');
        $('body').on('click', function (e) {
            var div = $('.menu-links, .burger');

            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

	$('.anchor[href^="#"]').click(function () {
        if($(window).innerWidth() > 1000) {
            $('.anchor[href^="#"]').removeClass('active');
            $(this).addClass('active');
        }
        if($(window).innerWidth() <= 1000) {
           $('.menu-links').removeClass('active'); 
           $('.burger').removeClass('active');
        }
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html, body').animate( { scrollTop: destination }, 500, 'swing' );
        return false;
    });

    if(window.innerWidth > 1000) {
        $(window).on('scroll load', function () {
            var top = $(window).scrollTop();
            var href = $('.anchor').attr('href');
            if(top >= 250) {
                $('.menu-links, .logo').addClass('fixed');
            } else {
                $('.menu-links, .logo').removeClass('fixed');
            }
            $('.wrapper section').each(function() {
                var destination = $(this).offset().top-150;
                if(top >= destination) {
                    var id = $(this).attr('id');
                    $('.anchor[href^="#"]').removeClass('active');
                    $('.anchor[href^="#'+id+'"]').addClass('active');
                }
            });
        });
    }

    if($('.main-slider').length) {
        $('.main-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000
        });
    }

    if($('.recipes-slider').length) {
        $('.recipes-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    if($('.products-slider').length) {
        $('.products-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    if($('.actions-slider').length) {
        $('.actions-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }

    scrollWaypointInit($('.animateMe'));
});

( function() {

    var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/maxresdefault.jpg";
        
        var image = new Image();
            image.src = source;
            image.addEventListener( "load", function() {
                youtube[ i ].appendChild( image );
            }( i ) );
    
            youtube[i].addEventListener( "click", function() {

                var iframe = document.createElement( "iframe" );

                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "allowfullscreen", "" );
                    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                    this.innerHTML = "";
                    this.appendChild( iframe );
            } );    
    };
    
} )();

function scrollWaypointInit(items, trigger) {
    items.each(function() {
        var element = $(this),
            osAnimationClass = element.data("animation"),
            osAnimationDelay = element.attr('data-animation-delay');

        element.css({
            '-webkit-animation-delay': osAnimationDelay,
            '-moz-animation-delay': osAnimationDelay,
            'animation-delay': osAnimationDelay
        });

        var trigger = (trigger) ? trigger : element;

        trigger.waypoint(function() {
            element.addClass('animated').addClass(osAnimationClass);
        }, {
            // triggerOnce: true,
            offset: '80%'
        });
    });
}