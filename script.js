document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("background-video");
    video.playbackRate = 0.50; // Define o vídeo para reproduzir a 50% da velocidade

    const languageSwitch = document.getElementById("language-switch");
    const langLabel = document.querySelector(".lang-label");
    const elements = document.querySelectorAll("[data-lang-pt]");

    function switchLanguage(lang) {
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-lang-${lang}`);
        });
        langLabel.textContent = lang === "pt" ? "Português" : "English";
    }

    languageSwitch.addEventListener("change", function () {
        if (this.checked) {
            switchLanguage("en");
        } else {
            switchLanguage("pt");
        }
    });
});