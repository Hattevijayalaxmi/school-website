
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 220, 0);
    counter("count2", 0, 50, 2500);
    counter("count3", 0, 200, 300);
    counter("count4", 0, 2110, 3000);
 });



 let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.account-form .login-form').classList.remove('active');
  document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () =>{
  registerBtn.classList.remove('active');
  loginBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};

// Account/Login form
let accountBtn = document.querySelector('#account-btn');
let accountForm = document.querySelector('.account-form');
let closeForm = document.querySelector('#close-form');

if (accountBtn && accountForm) {
    accountBtn.onclick = () => {
        accountForm.classList.add('active');
    };
}

if (closeForm && accountForm) {
    closeForm.onclick = () => {
        accountForm.classList.remove('active');
    };
}

// LOGIN / ACCOUNT BUTTON
document.addEventListener("DOMContentLoaded", function () {

    const accountBtn = document.getElementById("account-btn");
    const accountForm = document.querySelector(".account-form");
    const closeForm = document.getElementById("close-form");

    if (accountBtn && accountForm) {

        accountBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            accountForm.classList.add("active");
        });

    }

    if (closeForm && accountForm) {

        closeForm.addEventListener("click", function (e) {
            e.preventDefault();

            accountForm.classList.remove("active");
        });

    }

});



