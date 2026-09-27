document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       COUNTER
    ===================================================== */

    function counter(id, start, end, duration) {

        const obj = document.getElementById(id);

        if (!obj) return;

        if (start === end) {
            obj.textContent = end;
            return;
        }

        let current = start;
        const range = Math.abs(end - start);
        const increment = end > start ? 1 : -1;

        const step = Math.max(
            Math.floor(duration / range),
            10
        );

        obj.textContent = current;

        const timer = setInterval(function () {

            current += increment;

            obj.textContent = current;

            if (current === end) {
                clearInterval(timer);
            }

        }, step);
    }


    counter("count1", 0, 220, 2000);
    counter("count3", 0, 200, 1800);



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn =
        document.getElementById("menu-btn");

    const closeNavbar =
        document.getElementById("close-navbar");

    const navbar =
        document.querySelector(".navbar");


    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function (e) {

            e.preventDefault();

            navbar.classList.add("active");

        });

    }


    if (closeNavbar && navbar) {

        closeNavbar.addEventListener("click", function (e) {

            e.preventDefault();

            navbar.classList.remove("active");

        });

    }



    /* =====================================================
       CLOSE MENU AFTER NORMAL LINK CLICK
    ===================================================== */

    if (navbar) {

        navbar.querySelectorAll(
            ".navbar-links > li > a"
        ).forEach(function (link) {

            if (
                !link.classList.contains(
                    "course-main-link"
                )
            ) {

                link.addEventListener(
                    "click",
                    function () {

                        navbar.classList.remove(
                            "active"
                        );

                    }
                );

            }

        });

    }



    /* =====================================================
       COURSE MAIN DROPDOWN
    ===================================================== */

    const courseMainLink =
        document.querySelector(
            ".course-main-link"
        );

    const courseDropdown =
        document.querySelector(
            ".navbar-dropdown .dropdown"
        );


    if (courseMainLink && courseDropdown) {

        courseMainLink.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                if (window.innerWidth <= 900) {

                    courseDropdown.classList.toggle(
                        "mobile-show"
                    );

                }

            }
        );

    }



    /* =====================================================
       PRIMARY / SECONDARY DROPDOWN
    ===================================================== */

    document.querySelectorAll(
        ".course-group > a"
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (e) {

                e.preventDefault();
                e.stopPropagation();

                const submenu =
                    this.parentElement.querySelector(
                        ".dropdown2"
                    );

                if (!submenu) return;


                document.querySelectorAll(
                    ".course-group .dropdown2"
                ).forEach(function (menu) {

                    if (menu !== submenu) {

                        menu.classList.remove(
                            "show"
                        );

                    }

                });


                submenu.classList.toggle(
                    "show"
                );

            }
        );

    });



    /* =====================================================
       ACCOUNT LOGIN
    ===================================================== */

    const accountBtn =
        document.getElementById(
            "account-btn"
        );

    const adminLoginLink =
        document.getElementById(
            "adminLoginLink"
        );

    const accountForm =
        document.getElementById(
            "loginAccountForm"
        );

    const closeForm =
        document.getElementById(
            "close-form"
        );


    function openLogin() {

        if (!accountForm) return;

        accountForm.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";
    }


    function closeLogin() {

        if (!accountForm) return;

        accountForm.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";
    }


    if (accountBtn) {

        accountBtn.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                openLogin();

            }
        );

    }


    if (adminLoginLink) {

        adminLoginLink.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                openLogin();

            }
        );

    }


    if (closeForm) {

        closeForm.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                closeLogin();

            }
        );

    }


    /* Close login when clicking dark background */

    if (accountForm) {

        accountForm.addEventListener(
            "click",
            function (e) {

                if (e.target === accountForm) {

                    closeLogin();

                }

            }
        );

    }



    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Escape") {

                if (navbar) {
                    navbar.classList.remove(
                        "active"
                    );
                }

                closeLogin();

            }

        }
    );



    /* =====================================================
       LOGIN
    ===================================================== */

    const loginForm =
        document.getElementById(
            "schoolLoginForm"
        );


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    document.getElementById(
                        "loginEmail"
                    ).value.trim();


                const password =
                    document.getElementById(
                        "loginPassword"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "loginMessage"
                    );


                if (
                    email === "admin@school.com" &&
                    password === "Admin@123"
                ) {

                    message.textContent =
                        "Login Successful! ✅";

                    message.style.color =
                        "green";


                    setTimeout(
                        function () {

                            window.location.href =
                                "admin-dashboard.html";

                        },
                        1000
                    );

                }

                else {

                    message.textContent =
                        "Invalid Email or Password ❌";

                    message.style.color =
                        "red";

                }

            }
        );

    }

});



/* =====================================================
   SUBSCRIBE
===================================================== */

function subscribeUser() {

    const emailInput =
        document.getElementById(
            "subscribeEmail"
        );

    const message =
        document.getElementById(
            "subscribeMessage"
        );


    if (!emailInput || !message) {
        return;
    }


    const email =
        emailInput.value.trim();


    if (email === "") {

        message.textContent =
            "Please enter your email.";

        message.style.color =
            "red";

        return;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        message.textContent =
            "Please enter a valid email.";

        message.style.color =
            "red";

        return;

    }


    const scriptURL =
        "https://script.google.com/macros/s/AKfycbw_Kz7fpV5fPXk6V7gxLvJdtI9y0fwkkxEC3LutuuiKPUeTgiFY8nZwWdCQJCsowX-t/exec";


    message.textContent =
        "Submitting...";

    message.style.color =
        "white";


    fetch(
        scriptURL,
        {
            method: "POST",

            body:
                new URLSearchParams({
                    email: email
                })
        }
    )

    .then(function () {

        message.textContent =
            "Thank you for subscribing! 😊";

        message.style.color =
            "lightgreen";

        emailInput.value = "";

    })

    .catch(function (error) {

        console.error(error);

        message.textContent =
            "Something went wrong. Please try again.";

        message.style.color =
            "red";

    });

}