//html 페이지 구현
const $sectionPageChange = document.querySelector(".section-page-change");
let currentPage = 1;
export {currentPage};

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
const $selectBox = document.createElement("select");
$selectBox.id = "selectbox-purpose";
$selectBox.className = "selectbox-purpose";
$selectBox.name = "purpose";

const $selectOption0 = document.createElement("option");
const $selectOption1 = document.createElement("option");
const $selectOption2 = document.createElement("option");
const $selectOption3 = document.createElement("option");
const $selectOption4 = document.createElement("option");
const $selectOption5 = document.createElement("option");
const $selectOption6 = document.createElement("option");

$selectOption0.value = "0";
$selectOption0.innerHTML = "데이터베이스 연결";
$selectOption1.value = "1";
$selectOption1.innerHTML = "데이터 저장, 검색";
$selectOption2.value = "2";
$selectOption2.innerHTML = "파일 읽기, 쓰기";
$selectOption3.value = "3";
$selectOption3.innerHTML = "이미지 처리";
$selectOption4.value = "4";
$selectOption4.innerHTML = "문자열 조작";
$selectOption5.value = "5";
$selectOption5.innerHTML = "수학 연산";
$selectOption6.value = "6";
$selectOption6.innerHTML = "기타";

//create text input for select 6(etc)
const $purposeTextHolder = document.createElement("div");
$purposeTextHolder.className = "purpose-text-holder";
const $purposeEtcText = document.createElement("input");
$purposeEtcText.type = "text";
$purposeEtcText.placeholder = "기타";
$purposeEtcText.disabled = true;

//setting
$purposeTitleHolder.appendChild($purposeTitle);
$selectPurpose.appendChild($purposeTitleHolder);
$selectBox.appendChild($selectOption0);
$selectBox.appendChild($selectOption1);
$selectBox.appendChild($selectOption2);
$selectBox.appendChild($selectOption3);
$selectBox.appendChild($selectOption4);
$selectBox.appendChild($selectOption5);
$selectBox.appendChild($selectOption6);
$selectPurpose.appendChild($selectBox);
$purposeTextHolder.appendChild($purposeEtcText);
$selectPurpose.appendChild($purposeTextHolder);

//page 2---------------------------
//코드 입력 시 언어에 따른 컨벤션에 맞춰 수정 및 추천
//input textarea는 export 필요


//display function
function changeHTMLPage(currentPage) {
    if (currentPage === 1) {
        $sectionPageChange.textContent = "";
        $sectionPageChange.appendChild($selectPurpose);
    }
    else if (currentPage === 2) {
        $sectionPageChange.textContent = "";
        //
    }
}
changeHTMLPage(currentPage);

