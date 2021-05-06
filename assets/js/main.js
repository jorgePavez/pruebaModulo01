$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});
/* $(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente...");
});

$("#ingrediente").on({
    dblclick: function() {
        $(this).addClass("rojo");
    }
});

$("#preparacion").on({
    dblclick: function() {
        $(this).addClass("rojo");
    }
});

$("#titulo-tarjeta").click(function() {
    $("#tarjetas").toggle();
}); */