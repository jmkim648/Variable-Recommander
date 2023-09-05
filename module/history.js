import { $selectTitle1, $selectTitle2, $chatListInit, $purposeEtcText, $questionText } from "./page-changer.js";
export { localData, readLocalStorage, displayLocalStorage, saveLocalStorage };
//localstorage
// key = history
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
$flipMenuButton.className = "flip-menu-button";
$flipMenuButton.innerText = "▶";
$historyContainer.insertBefore($flipMenuButton, $historyContainer.firstChild);

$flipMenuButton.addEventListener("click", (e) => {
    if ($historyContainer.className === "history-container") {
        $historyContainer.className = "history-container fliped closed"
    }
    else {
        $historyContainer.classList.remove("fliped");
        setTimeout(() => {
            $historyContainer.classList.remove("closed");
        }, 300);
    }
});

function readLocalStorage() {
    let tempData = localStorage.getItem('history');
    if (tempData) {
        localData = JSON.parse(tempData);
    }
    else {
        localData = [];
    }
}

function saveLocalStorage(data) {
    const tempData = JSON.stringify(data);
    localStorage.setItem('history', tempData);
};


function displayLocalStorage() {
    $historyUl.innerText = "";
    $purposeEtcText.value = "";
    $questionText.value = "";

    if (localData) {
        for (let i = 0; i < localData.length; i++) {
            let li = document.createElement("li");
            li.className = "history-list";
            let divP = document.createElement("div");
            divP.className = "history-p-holder";
            let p = document.createElement("p");
            p.className = "history-p;"
            p.innerText = `<${localData[i]['language']}>\n${localData[i]['purpose']}`
            p.addEventListener('click', (e) => {
                if (localData[i]['page'] === '1') {
                    $selectTitle1.click();
                    $chatListInit.innerHTML = localData[i]['answer'];
                    $purposeEtcText.value = "";
                    $questionText.value = "";
                }
                else {
                    $selectTitle2.click();
                    $chatListInit.innerHTML = localData[i]['answer'];
                    $purposeEtcText.value = "";
                    $questionText.value = "";
                }
            });
            let divIcon = document.createElement("div");
            divIcon.className = "history-icon-holder";
            let icon = document.createElement("button");
            icon.innerHTML = "❌";
            icon.className = "icon-history-delete";
            icon.addEventListener('click', (e)=>{
                let clickedLi = e.target.parentNode.parentNode;
                let liIdx = Array.from(clickedLi.parentNode.children).indexOf(clickedLi);
                localData.splice(liIdx, 1);
                saveLocalStorage(localData);
                displayLocalStorage();
            });
            divP.appendChild(p);
            li.appendChild(divP);
            divIcon.appendChild(icon);
            li.appendChild(divIcon);
            $historyUl.appendChild(li);
        }
    }
}