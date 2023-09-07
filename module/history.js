import { $selectTitle1, $selectTitle2, $chatListInit, $purposeEtcText, $questionText } from "./page-changer.js";
export { localData, readLocalStorage, displayLocalStorage, saveLocalStorage };
//localstorage
// key = "history"
// value = [{
//     "answer":"",
//     "language":"",
//     "page":"",
//     "purpose":""
// }]

const $historyContainer = document.querySelector(".history-container");
const $historyUl = document.querySelector(".history-ul");

//for local storage - key: history
let localData = [];

//menu bar animation
const $flipMenuButton = document.createElement("button");
$flipMenuButton.className = "flip-menu-button moved";
$flipMenuButton.innerText = "▶";
$historyContainer.insertBefore($flipMenuButton, $historyContainer.firstChild);

$flipMenuButton.addEventListener("click", (e) => {
    $historyContainer.className === "history-container" ? addFliped($historyContainer) : removeFlipped($historyContainer);
});

function addFliped(object) {
    object.classList.add("flipped");
    object.classList.add("closed");
    setTimeout(() => {
        $flipMenuButton.classList.remove("moved");
        $flipMenuButton.style.transition = "all ease 0.5s";
    }, 400);
};

function removeFlipped(object) {
    object.classList.remove("flipped");
    $flipMenuButton.classList.add("moved");
    setTimeout(() => {
        object.classList.remove("closed");
    }, 300);
}

//localStorage function
function readLocalStorage() {
    let tempData = localStorage.getItem('history');
    tempData ? localData = JSON.parse(tempData) : localData = [];
}

function saveLocalStorage(data) {
    let tempData = JSON.stringify(data);
    localStorage.setItem('history', tempData);
};

function displayLocalStorage() {
    $historyUl.innerText = "";
    if (localData) {
        for (let i = 0; i < localData.length; i++) {
            let li = document.createElement("li");
            li.className = "history-list";
            addHistoryP(li, i);
            addDeleteButton(li);
            $historyUl.appendChild(li);
        }
    }
}

//코드 최적화
function addHistoryP(li, i) {
    let divP = document.createElement("div");
    divP.className = "history-p-holder";

    let p = document.createElement("p");
    p.className = "history-p;"
    p.innerText = `<${localData[i]['language']}>\n${localData[i]['purpose']}`
    p.addEventListener('click', (e) => {
        let curLang = localData[i]['language'];
        let radioSelect = document.getElementById(curLang);
        radioSelect.checked = true;
        if (localData[i]['page'] === '1') {
            $selectTitle1.click();
            $chatListInit.innerHTML = "";
            $chatListInit.innerHTML = localData[i]['answer'];
            $purposeEtcText.value = "";
            $questionText.value = "";
        }
        else {
            $selectTitle2.click();
            $chatListInit.innerHTML = "";
            let li = document.createElement("li");
            let pre = document.createElement("pre");
            let code = document.createElement("code");
            code.className = `language-${curLang}`;
            code.innerText = localData[i]['answer'];
            pre.appendChild(code);
            li.appendChild(pre);
            $chatListInit.appendChild(li);
        
            $purposeEtcText.value = "";
            $questionText.value = "";
        }
    });
    divP.appendChild(p);
    li.appendChild(divP);
}

function addDeleteButton(li) {
    let divIcon = document.createElement("div");
    divIcon.className = "history-icon-holder";

    let icon = document.createElement("button");
    icon.innerHTML = "❌";
    icon.className = "icon-history-delete";
    icon.addEventListener('click', (e) => {
        let clickedLi = e.target.parentNode.parentNode;
        let liIdx = Array.from(clickedLi.parentNode.children).indexOf(clickedLi);
        localData.splice(liIdx, 1);
        saveLocalStorage(localData);
        displayLocalStorage();
    });
    divIcon.appendChild(icon);
    li.appendChild(divIcon);
}