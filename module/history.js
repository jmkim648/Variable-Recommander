import { $selectTitle1, $selectTitle2, $chatListInit, $purposeEtcText, $questionText } from "./page-changer.js";
export { localData, readLocalStorage, displayLocalStorage, saveLocalStorage };
//💾
//로컬스토리지 jsObject라면 list형태로 접근 가능
//history ul에 순서대로 혹은 역순으로 list 털어서 꽂아주고+이벤트(답변 불러오기), 삭제 아이콘+이벤트(삭제) 추가

//답변 받아와서 view에 뿌려줄 때 history에 만든 함수를 gpt-api.js의 printAnswer에서 호출

//묶어서 넣을 내용
// history에 남길 타이틀(질문 내용   // python - 이미지 처리  // python - 컨벤션) 
// 답변 내용



//필요한 함수
//window onload였나로 로컬스토리지 털어서 있으면 이력 표시
//답변과 동시에 history에 저장할 함수(gptapi에서 땡겨갈 것)
//아마 display함수 따로 만들어서 상단 2개에 넣어서 실행해줘야할 것

//이벤트
//그 항목 선택하면 display
//삭제 아이콘 선택하면 pop? delete?

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
            li.innerText = `<${localData[i]['language']}>\n${localData[i]['purpose']}`
            li.addEventListener('click', (e) => {
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
            $historyUl.appendChild(li);
        }
    }
}