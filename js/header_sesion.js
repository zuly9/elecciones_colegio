document.addEventListener("DOMContentLoaded", () => {
    // 1. Inyectar el CSS del header si no está ya agregado
    const cssPath = "../estilos/header.css"; // ruta al CSS
    if (!document.querySelector(link[href="${cssPath}"])) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // 2. Inyectar el header
    const headerSesion = `
        <header class="barra-navegacion">
            <div class="logo">
                <h1>🎓 Elecciones Escolares</h1>
            </div>
            <nav class="nav-links">
                <a href="../vistas/menu_principal.html">Inicio</a>
                <a href="../vistas/login.html">Cerrar sesión</a>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerSesion);
});