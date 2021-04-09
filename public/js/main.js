const $loginBtn = document.querySelector("#login");
const $logoutBtn = document.querySelector("#logout");

$loginBtn.addEventListener("click", function (e) {
    console.log("BTN")
    window.location.replace("/login")
})
