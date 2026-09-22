document.addEventListener("DOMContentLoaded", function () {

    const hamburguer =
        document.getElementById("hamburguer");

    const menu =
        document.getElementById("menu");


    if (!hamburguer || !menu) {
        return;
    }


    /* ==========================================
       ABRIR / FECHAR MENU
    ========================================== */

    hamburguer.addEventListener("click", function () {

        const aberto =
            menu.classList.toggle("aberto");

        hamburguer.setAttribute(
            "aria-expanded",
            aberto ? "true" : "false"
        );

        hamburguer.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

    });


    /* ==========================================
       FECHAR AO CLICAR NOS LINKS
    ========================================== */

    const links =
        menu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("aberto");

            hamburguer.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburguer.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });


    /* ==========================================
       RESET NO DESKTOP
    ========================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 1000) {

            menu.classList.remove("aberto");

            hamburguer.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});
