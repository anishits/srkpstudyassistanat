/* =====================================================
   SRKP AI STUDY ASSISTANT
   Common JavaScript
   Designed & Developed by Anish Jodhawat
   ===================================================== */


/* =========================
   MOBILE NAVIGATION
   ========================= */

function toggleMenu() {

    const navigation =
        document.getElementById("navigation");

    if (!navigation) return;

    navigation.classList.toggle("show");
}


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const navigation =
        document.getElementById("navigation");

    if (!navigation) return;


    const links =
        navigation.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("show");

        });

    });

});


/* =========================
   3D MOUSE EFFECT
   ========================= */

document.addEventListener("mousemove", function (event) {

    const scene =
        document.querySelector(".scene");

    if (!scene) return;


    const x =
        (window.innerWidth / 2 - event.clientX)
        / 35;

    const y =
        (window.innerHeight / 2 - event.clientY)
        / 35;


    scene.style.transform =
        `perspective(900px)
         rotateX(${8 + y}deg)
         rotateY(${-5 + x}deg)`;

});


/* =========================
   RESET 3D EFFECT
   ON MOBILE
   ========================= */

window.addEventListener("resize", function () {

    const scene =
        document.querySelector(".scene");

    if (!scene) return;


    if (window.innerWidth < 750) {

        scene.style.transform =
            "scale(.85)";

    }

});


/* =========================
   CARD TILT EFFECT
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const cards =
        document.querySelectorAll(".feature-card");


    cards.forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            if (window.innerWidth < 800) return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -3;


            const rotateY =
                ((x - centerX) / centerX) * 3;


            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", function () {

            card.style.transform =
                "";

        });

    });

});


/* =========================
   SCROLL REVEAL
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const elements =
        document.querySelectorAll(
            ".feature-card, .step, .college-card"
        );


    elements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";


        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(function (element) {

        observer.observe(element);

    });

});


/* =========================
   CURRENT YEAR
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});


/* =========================
   SMOOTH PAGE LOADING
   ========================= */

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});


/* =========================
   KEYBOARD SHORTCUT
   ========================= */

/*
   Press "/" to quickly focus a search box
   on pages that contain one.
*/

document.addEventListener("keydown", function (event) {

    if (
        event.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
    ) {

        const search =
            document.querySelector(
                'input[type="search"], #search, #noteSearch'
            );


        if (search) {

            event.preventDefault();

            search.focus();

        }

    }

});
