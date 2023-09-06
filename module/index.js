import { initSectionPage } from './page-changer.js';
import { readLocalStorage, displayLocalStorage } from './history.js'
import { initData } from './gpt-api.js'


const $body = document.querySelector("body");
const $darkModeButton = document.querySelector(".dark-mode-button");

//자동실행함수
//gpt-api.js        => data파일에서 언어별 내용 불러오기 : initData
//page-changer.js   => page-changer에서 그린 html display : initSectionPage
//history.js        => localStorage 읽은 뒤 history 메뉴에 display : readLocalStorage, displayLocalStorage
window.onload = function () {
    initData();
    initSectionPage();
    readLocalStorage();
    displayLocalStorage();
}

//dark mode func
//toggle darkmode / lightmode event
$darkModeButton.addEventListener("click", (e) => {
    e.preventDefault();
    let currentClass = $body.className;
    $body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";

    //button animation
    $darkModeButton.classList.add('scale-down');
    setTimeout(()=>{
        $darkModeButton.classList.remove('scale-down');
        $darkModeButton.innerHTML = $darkModeButton.innerHTML === "🌙" ? "☀️" : "🌙";
    }, 200);
});