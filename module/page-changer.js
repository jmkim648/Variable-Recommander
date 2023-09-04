export { currentPage, $questionText, currentPurpose, $purposeEtcText, displayPage };

//html 페이지 구현
const $sectionPageChange = document.querySelector(".section-page-change");
let currentPage = 2;
let currentPurpose = "데이터베이스 연결";

//li로 만들어서 addelement?
const textPage1Init = "함수/변수명을 추천합니다.\n언어와 목적을 선택한 뒤 버튼을 눌러주세요."
const textPage2Init = "코드를 해당 언어의 컨벤션에 맞게 고쳐줍니다.\n수정할 코드를 입력한 뒤 버튼을 눌러주세요."


//페이지 전환용 버튼
const $selectTitle1 = document.querySelector(".title-variable");
const $selectTitle2 = document.querySelector(".title-convention");
const $chatListInit = document.querySelector(".chat-view ul");

//page 1-----------------------------
//용도에 따른 함수명, 변수명 추천
//create purpose selector
const $selectPurpose = document.createElement("div");
$selectPurpose.className = "select-purpose";
const $purposeTitleHolder = document.createElement("div");
$purposeTitleHolder.className = "purpose-title-holder";
const $purposeTitle = document.createElement("p");
$purposeTitle.className = "subject-title";
$purposeTitle.innerHTML = "목적 선택";
const $radioSelectPurpose = document.createElement("div");
$radioSelectPurpose.className = "radio-select-purpose";

const $radioPurpose0 = document.createElement("input");
$radioPurpose0.type = "radio";
$radioPurpose0.id = "데이터베이스 연결";
$radioPurpose0.name = "purpose";
$radioPurpose0.checked = true;
const $labelPurpose0 = document.createElement("label");
$labelPurpose0.htmlFor = "데이터베이스 연결";
$labelPurpose0.innerHTML = "데이터베이스 연결";
const $radioPurpose1 = document.createElement("input");
$radioPurpose1.type = "radio";
$radioPurpose1.id = "데이터 저장, 검색";
$radioPurpose1.name = "purpose";
const $labelPurpose1 = document.createElement("label");
$labelPurpose1.htmlFor = "데이터 저장, 검색";
$labelPurpose1.innerHTML = "데이터 저장, 검색";
const $radioPurpose2 = document.createElement("input");
$radioPurpose2.type = "radio";
$radioPurpose2.id = "파일 읽기, 쓰기";
$radioPurpose2.name = "purpose";
const $labelPurpose2 = document.createElement("label");
$labelPurpose2.htmlFor = "파일 읽기, 쓰기";
$labelPurpose2.innerHTML = "파일 읽기, 쓰기";
const $radioPurpose3 = document.createElement("input");
$radioPurpose3.type = "radio";
$radioPurpose3.id = "이미지 처리";
$radioPurpose3.name = "purpose";
const $labelPurpose3 = document.createElement("label");
$labelPurpose3.htmlFor = "이미지 처리";
$labelPurpose3.innerHTML = "이미지 처리";
const $radioPurpose4 = document.createElement("input");
$radioPurpose4.type = "radio";
$radioPurpose4.id = "문자열 조작";
$radioPurpose4.name = "purpose";
const $labelPurpose4 = document.createElement("label");
$labelPurpose4.htmlFor = "문자열 조작";
$labelPurpose4.innerHTML = "문자열 조작";
const $radioPurpose5 = document.createElement("input");
$radioPurpose5.type = "radio";
$radioPurpose5.id = "수학 연산";
$radioPurpose5.name = "purpose";
const $labelPurpose5 = document.createElement("label");
$labelPurpose5.htmlFor = "수학 연산";
$labelPurpose5.innerHTML = "수학 연산";
const $radioPurpose6 = document.createElement("input");
$radioPurpose6.type = "radio";
$radioPurpose6.id = "기타";
$radioPurpose6.name = "purpose";
const $labelPurpose6 = document.createElement("label");
$labelPurpose6.htmlFor = "기타";
$labelPurpose6.innerHTML = "기타(상단과 같이 입력)";

//create text input for select 6(etc)
const $purposeTextHolder = document.createElement("div");
$purposeTextHolder.className = "purpose-text-holder";
const $purposeEtcText = document.createElement("input");
$purposeEtcText.type = "text";
$purposeEtcText.style.display = "none";
$purposeEtcText.disabled = true;

//setting
$purposeTitleHolder.appendChild($purposeTitle);
$selectPurpose.appendChild($purposeTitleHolder);
$radioSelectPurpose.appendChild($radioPurpose0);
$radioSelectPurpose.appendChild($labelPurpose0);
$radioSelectPurpose.appendChild($radioPurpose1);
$radioSelectPurpose.appendChild($labelPurpose1);
$radioSelectPurpose.appendChild($radioPurpose2);
$radioSelectPurpose.appendChild($labelPurpose2);
$radioSelectPurpose.appendChild($radioPurpose3);
$radioSelectPurpose.appendChild($labelPurpose3);
$radioSelectPurpose.appendChild($radioPurpose4);
$radioSelectPurpose.appendChild($labelPurpose4);
$radioSelectPurpose.appendChild($radioPurpose5);
$radioSelectPurpose.appendChild($labelPurpose5);
$radioSelectPurpose.appendChild($radioPurpose6);
$radioSelectPurpose.appendChild($labelPurpose6);
$selectPurpose.appendChild($radioSelectPurpose);
$purposeTextHolder.appendChild($purposeEtcText);
$selectPurpose.appendChild($purposeTextHolder);

//page 2---------------------------
//코드 입력 시 언어에 따른 컨벤션에 맞춰 수정 및 추천
//input textarea는 export 필요? form일듯
const $chatInput = document.createElement("div");
$chatInput.className = "chat-input";
const $chatInputTitleHolder = document.createElement("div");
$chatInputTitleHolder.className = "chatInput-title-holder";
const $chatInputTitle = document.createElement("p");
$chatInputTitle.className = "subject-title";
$chatInputTitle.innerHTML = "코드 입력";
const $questionTextHolder = document.createElement("div");
$questionTextHolder.className = "question-text-holder";
const $questionText = document.createElement("textarea");
$questionText.name = "question";
$questionText.id = "question";

$chatInputTitleHolder.appendChild($chatInputTitle);
$chatInput.appendChild($chatInputTitleHolder);
$questionTextHolder.appendChild($questionText);
$chatInput.appendChild($questionTextHolder);

//select purpose
$radioSelectPurpose.addEventListener("change", (e) => {
    $purposeEtcText.style.display = "none";
    $purposeEtcText.disabled = true;
    $purposeEtcText.value = "";
    if ($radioPurpose0.checked) {
        currentPurpose = $radioPurpose0.id;
    }
    else if ($radioPurpose1.checked) {
        currentPurpose = $radioPurpose1.id;
    }
    else if ($radioPurpose2.checked) {
        currentPurpose = $radioPurpose2.id;
    }
    else if ($radioPurpose3.checked) {
        currentPurpose = $radioPurpose3.id;
    }
    else if ($radioPurpose4.checked) {
        currentPurpose = $radioPurpose4.id;
    }
    else if ($radioPurpose5.checked) {
        currentPurpose = $radioPurpose5.id;
    }
    else if ($radioPurpose6.checked) {
        $purposeEtcText.style.display = "inline-block";
        $purposeEtcText.disabled = false;
        $purposeEtcText.focus();
    }
});

//when etc input event
$purposeEtcText.addEventListener("input", (e) => {
    currentPurpose = e.target.value;
});

//Init page
function displayPage() {
    currentPage = 1;
    $sectionPageChange.textContent = "";
    $sectionPageChange.appendChild($selectPurpose);
    $selectTitle1.classList.remove("title-selected");
    $selectTitle2.classList.remove("title-selected");
    $selectTitle1.classList.add("title-selected");
    $chatListInit.innerHTML = textPage1Init;
}

$selectTitle1.addEventListener("click", () => {
    currentPage = 1;
    $sectionPageChange.textContent = "";
    $sectionPageChange.appendChild($selectPurpose);
    $selectTitle1.classList.remove("title-selected");
    $selectTitle2.classList.remove("title-selected");
    $selectTitle1.classList.add("title-selected");
    
    //page 2의 input Init
    $questionText.value = "";
    //display Init
    $chatListInit.innerHTML = textPage1Init;
})
$selectTitle2.addEventListener("click", () => {
    currentPage = 2;
    $sectionPageChange.textContent = "";
    $sectionPageChange.appendChild($chatInput);
    $selectTitle1.classList.remove("title-selected");
    $selectTitle2.classList.remove("title-selected");
    $selectTitle2.classList.add("title-selected");
    $questionText.focus();
    
    // page1의 radio옵션 Init
    $radioPurpose0.click();
    $purposeEtcText.style.display = "none";
    $purposeEtcText.disabled = true;
    $purposeEtcText.value = "";
    currentPurpose = $radioPurpose0.id;
    // display init
    $chatListInit.innerHTML = textPage2Init;
})