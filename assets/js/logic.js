const themeId = document.querySelector(".light")

let theme = false;

function see() {
    if (!theme) {
        theme = true;
        themeId.setAttribute('class', 'dark');
    } else {
        theme = false;
        themeId.setAttribute('class', 'light');
    }
}