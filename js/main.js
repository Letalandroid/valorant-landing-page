const li = document.getElementsByTagName("li");

const open = (url) => {

    window.location.href = url;

}

li[0].addEventListener("click", () => {

    window.location.href = "https://playvalorant.com";

});

li[1].addEventListener("click", () => {

    window.location.href = "https://www.riotgames.com/";

});

li[2].addEventListener("click", () => {

    window.location.href = "https://auth.riotgames.com/login";

});

document.querySelector(".btn").addEventListener("click", () => {

    window.location.href = "https://playvalorant.com";

});