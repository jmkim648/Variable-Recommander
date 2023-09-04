//dark mode func
//for background setting
const $body = document.querySelector("body");

//toggle button
const $darkModeButton = document.querySelector(".dark-mode-button");

//toggle darkmode / lightmode event
$darkModeButton.addEventListener("click", (e) => {
    e.preventDefault();
    let currentClass = $body.className;
    $body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

    //button animation
    $darkModeButton.classList.add('scale-down');
    setTimeout(()=>{
        $darkModeButton.classList.remove('scale-down');
        $darkModeButton.innerHTML = $darkModeButton.innerHTML == "🌙" ? "☀️" : "🌙";
    }, 200);
});

//history menu slide func
