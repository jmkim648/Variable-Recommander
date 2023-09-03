//for background setting
const $body = document.querySelector("body");
const $header = document.querySelector(".layout-header");
const $historyContainer = document.querySelector(".history-container");

//toggle button
const $darkModeButton = document.querySelector(".dark-mode-button");
//☀️🌙

//icon에 적용시킬 함수(토글기능)
$darkModeButton.addEventListener("click", (e) => {
    e.preventDefault();
    let currentClass = $body.className;
    if (currentClass === "dark-mode") {
        $body.className = "light-mode";
        $header.classList.remove('dark-mode');
        $header.classList.add('light-mode');
        $historyContainer.classList.remove('dark-mode');
        $historyContainer.classList.add('light-mode');
    }
    else {
        $body.className = "dark-mode";
        $header.classList.remove('light-mode');
        $header.classList.add('dark-mode');
        $historyContainer.classList.remove('light-mode');
        $historyContainer.classList.add('dark-mode');
    }

    $darkModeButton.classList.add('scale-down');
    setTimeout(()=>{
        $darkModeButton.classList.remove('scale-down');
        $darkModeButton.innerHTML = $darkModeButton.innerHTML == "🌙" ? "☀️" : "🌙";
    }, 200);
});

// function toggleLightDark() {
//     let currentClass = $body.className;
//     $body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
//     $header.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
//     $historyContainer.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
// }