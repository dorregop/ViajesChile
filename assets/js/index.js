const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("Correo enviado :D");
    });

    $(".card-title").click(function () {
        $(".card-text").toggle();
    })
});