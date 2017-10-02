var link = document.querySelector(".user-block__user");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".overlay");
var modalCancel = document.querySelector(".modal-content__btn--cancel");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-visible");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});


modalCancel.addEventListener("click", function(event) {
    event.preventDefault();
    if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("overlay-visible");
    }

});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-visible")
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("overlay-visible");
        }
    }
});
