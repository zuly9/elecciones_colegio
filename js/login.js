       document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const mensajeError = document.getElementById("mensajeError");

    loginForm.addEventListener("submit", function (e) {
         e.preventDefault();

         const usuario = document.getElementById("usuario").value.trim();
         const contraseña = document.getElementById("contraseña").value.trim();

        if (usuario === "admin" && contraseña === "123") {
            window.location.href = "../vistas/menu_principal.html";
        } else {
            mensajeError.textContent = "Usuario o contraseña incorrectos";
            mensajeError.style.display ="block";
        }
    });
});


       