$(function() {
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
});