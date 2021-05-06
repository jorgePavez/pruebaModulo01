$(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // JavaScript Document

$("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente...");
});

/*$("#ingrediente").dblclick(function() {
    $(this).addClass("rojo");
});

 $("#preparacion").dblclick(function() {
    $(this).addClass("rojo");
});
 */
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