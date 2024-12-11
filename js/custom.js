/**
 * Listen to scroll to change header opacity class
 * y mostrar/ocultar el botón "Ir arriba"
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; // El punto donde la navbar cambia en px

    // Cambiar la opacidad de la navbar
    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }

    // Mostrar el botón de "Ir arriba" si se hace scroll
    if ($(window).scrollTop() > 100) {
        $('#scrollToTopBtn').fadeIn();  // Mostrar el botón
    } else {
        $('#scrollToTopBtn').fadeOut(); // Ocultar el botón
    }
}

// Función para ir arriba
$('#scrollToTopBtn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');  // Desplazamiento suave
});

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

