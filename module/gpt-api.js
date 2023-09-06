import * as jsonObject from '../data/data.js';
import { Spinner } from './spin.js';
import { currentPage, $questionText, currentPurpose, $purposeEtcText } from './page-changer.js';
import { displayLocalStorage, localData, saveLocalStorage } from './history.js';
export { initData };


//for language, purpose check
const $languageRadioList = document.querySelectorAll(".select-language input")
let selectedLang = '';

//for chatGPT API
const $form = document.querySelector(".chat-form");
const $input = $questionText;
const $chatList = document.querySelector(".chat-view ul");

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
let question;

// dataList  dataMap : page(int), language로 접근
let currentData = [];
const dataMap = {
    1: {
        python: [],
        java: [],
        cpp: [],
        javascript: [],
    },
    2: {
        python: [],
        java: [],
        cpp: [],
        javascript: [],
    },
};

//function--------------------------------------
//data각 언어별, 기능별 프롬프트 엔지니어링 데이터 저장
function initData() {
    dataMap[1].python = jsonObject.python;
    dataMap[1].java = jsonObject.java;
    dataMap[1].cpp = jsonObject.cpp;
    dataMap[1].javascript = jsonObject.javascript;
    dataMap[2].python = jsonObject.conpython;
    dataMap[2].java = jsonObject.conjava;
    dataMap[2].cpp = jsonObject.concpp;
    dataMap[2].javascript = jsonObject.conjavascript;
}

//chat gpt api function

//select language and dataList
const selectData = () => {
    $languageRadioList.forEach((node) => {
        if (node.checked) {
            selectedLang = node.id;
        }
    })
    selectFromLang(selectedLang);
};

//선택한 언어, 기능에 따라 ChatGPT에게 넘겨줄 data 결정
function selectFromLang(selectedLang) {
    currentData = dataMap[currentPage][selectedLang];
}

// input에 입력된 질문 받아오는 eventListener
$input.addEventListener("input", (e) => {
    question = e.target.value;
});

//purpose에 따라 question 생성
const makeQuestion = (currentPurpose) => {
    return question = `${currentPurpose}을 위한 함수명/변수명 추천해줘.`
};

// 사용자의 질문을 객체로 만들어서 data에 push
const saveQuestion = (question) => {
    if (currentPage === 1) {
        question = makeQuestion(currentPurpose);
        if (question) {
            currentData.push({
                role: "user",
                content: question,
            });
        }
    }
    else if (currentPage === 2) {
        if (question) {
            currentData.push({
                role: "user",
                content: question,
            });
        }
    }
};

// api 요청보내는 함수
const apiPost = async () => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(currentData),
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            printAnswer(res.choices[0].message.content);
            spinnerStop();
        })
        .catch((err) => {
            console.log(err);
            spinnerStop();
        });
};

function replaceNltoBr(answer) {
    if (typeof answer !== 'string') {
        return answer;
    }
    return answer.replace(/\n/g, "<br>");
}

// display answer
const printAnswer = (answer) => {
    saveHistoryData(answer);
    saveLocalStorage(localData);
    displayLocalStorage();

    $chatList.innerText = "";
    let li = document.createElement("li");
    li.className = "answer";
    addPreTag(li, answer);
    $chatList.appendChild(li);
};

//코드블럭으로 답변이 올 경우 pre, code 태그를 이용해 display
function addPreTag(li, answer) {
    if (currentPage === 1) {
        li.innerText = answer;
    }
    else {
        let pre = document.createElement("pre");
        let code = document.createElement("code");
        code.className = `language-${selectedLang}`;
        code.innerText = answer;
        pre.appendChild(code);
        li.appendChild(pre);
    }
}

function saveHistoryData(answer) {
    if (currentPage === 1) {
        localData.push({
            answer: replaceNltoBr(answer),
            language: `${selectedLang}`,
            page: `${currentPage}`,
            purpose: `${currentPurpose} 함수/변수명`
        })
    }
    else if (currentPage === 2) {
        localData.push({
            answer: answer,
            language: `${selectedLang}`,
            page: `${currentPage}`,
            purpose: '코드 컨벤션 적용'
        })
    }
    if (localData.length > 15) {
        localData.shift();
    }
}

// submit
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    spinnerStart()
    if (currentPage === 1) {
        selectData();
        saveQuestion(question);
        apiPost();
        if ($purposeEtcText.value) {
            $purposeEtcText.value = "";
        }
    }
    else if (currentPage === 2) {
        if ($input.value) {
            $input.value = null;
            selectData();
            saveQuestion(question);
            apiPost();
        }
    }
    question = false;
});

//submit 시 다른 오브젝트 상호작용을 막기 위한 로딩오브젝트
function spinnerStart() {
    // [로딩 부모 컨테이너 동적 생성]
    let createLayDiv = document.createElement("div");
    createLayDiv.setAttribute("id", "spinnerLay1000");
    let createLayDivStyle = "width:100%; height:100%; margin:0 auto; padding:0; border:none;";
    createLayDivStyle = createLayDivStyle + " float:top; position:fixed; top:0%; z-index:1000;";
    createLayDivStyle = createLayDivStyle + " background-color:rgba(0, 0, 0, 0.1);";
    createLayDiv.setAttribute("style", createLayDivStyle);
    document.body.appendChild(createLayDiv);

    //[실제 스핀 수행 컨테이너 동적 생성]
    let createSpinDiv = document.createElement("div");
    createSpinDiv.setAttribute("id", "spinnerContainer1000");
    let createSpinDivStyle = "width:100px; height:100px; margin:0 auto; padding:0; border:none;";
    createSpinDivStyle = createSpinDivStyle + " float:top; position:relative; top:40%;";
    createSpinDiv.setAttribute("style", createSpinDivStyle);
    document.getElementById("spinnerLay1000").appendChild(createSpinDiv);

    // [스피너 옵션]
    let opts = {
        lines: 10, // 그릴 선의 수 [20=원형 / 10=막대] [The number of lines to draw]
        length: 10, // 각 줄의 길이 [0=원형 / 10=막대] [The length of each line]
        width: 15, // 선 두께 [The line thickness]
        radius: 42, // 내부 원의 반지름 [The radius of the inner circle]
        scale: 0.85, // 스피너의 전체 크기 지정 [Scales overall size of the spinner]
        corners: 1, // 모서리 라운드 [Corner roundness (0..1)]
        color: '#003399', // 로딩 CSS 색상 [CSS color or array of colors]
        fadeColor: 'transparent', // 로딩 CSS 색상 [CSS color or array of colors]
        opacity: 0.05, // 선 불투명도 [Opacity of the lines]
        rotate: 0, // 회전 오프셋 각도 [The rotation offset]
        direction: 1, // 회전 방향 시계 방향, 반시계 방향 [1: clockwise, -1: counterclockwise]
        speed: 1, // 회전 속도 [Rounds per second]
        trail: 74, // 꼬리 잔광 비율 [Afterglow percentage]
        fps: 20, // 초당 프레임 수 [Frames per second when using setTimeout() as a fallback in IE 9]
        zIndex: 2e9 // 인덱스 설정 [The z-index (defaults to 2000000000)]
    };

    // [스피너 매핑 및 실행 시작]
    let target = document.getElementById("spinnerContainer1000");
    let spinner = new Spinner(opts).spin(target);
};

function spinnerStop() {
    try {
        // [로딩 부모 컨테이너 삭제 실시]
        let tagId = document.getElementById("spinnerLay1000");
        document.body.removeChild(tagId); //body에서 삭제 실시 
    }
    catch (exception) {
        // console.error("catch : " + "not find spinnerLay1000");
    }
};