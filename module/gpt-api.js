import * as jsonObject from '../data/data.js';
import { currentPage } from './page-changer.js';

//for language, purpose check
const $languageRadioList = document.querySelectorAll(".select-language input")

//언어 선택 변수
let selectedLang = '';

//목적 선택 변수

//for chatGPT API
const $form = document.querySelector("form");
const $input = document.querySelector(".chat-form textarea");
const $chatList = document.querySelector(".chat-view ul");

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
let question;
let questionList = [];

// dataList
let currentData = [];
let dataPython = [];
let dataJava = [];
let dataCplusplus = [];
let dataJs = [];

//function--------------------------------------
//자동실행함수 - data파일에서 언어별 내용 불러오기
window.onload = function () {
    jsonObject.python.forEach((item) => {
        dataPython.push({
            role: item.role,
            content: item.content
        });
    })
    jsonObject.java.forEach((item) => {
        dataJava.push({
            role: item.role,
            content: item.content
        });
    })
    jsonObject.cPlusPlus.forEach((item) => {
        dataCplusplus.push({
            role: item.role,
            content: item.content
        });
    })
    jsonObject.javaScript.forEach((item) => {
        dataJs.push({
            role: item.role,
            content: item.content
        });
    })
}

//chat gpt api function
// input에 입력된 질문 받아오는 eventListener
//$input 나중에 만든 input 요소로 태그 바꿔줘야함
$input.addEventListener("input", (e) => {
    question = e.target.value;
});

// 사용자의 질문을 객체로 만들어서 push
const saveQuestion = (question) => {
    if (question) {
        currentData.push({
            role: "user",
            content: question,
        });
        questionList.push({
            role: "user",
            content: question,
        });
    }
};

// display question
const printQuestion = async () => {
    if (question) {
        let li = document.createElement("li");
        li.classList.add("question");
        questionList.map((el) => {
            li.innerText = el.content;
        });
        console.log(li);
        $chatList.appendChild(li);
        questionList = [];
        question = false;
    }
};

// display answer
const printAnswer = (answer) => {
    let li = document.createElement("li");
    li.classList.add("answer");
    li.innerText = answer;
    $chatList.appendChild(li);
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
        })
        .catch((err) => {
            console.log(err);
        });
};

// submit
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($input.value) {
        $input.value = null;
        dataSelect();
        //find selected purpose
        //
        saveQuestion(question);
        apiPost();
        // printQuestion();
        questionList = [];
        question = false;
    }
});


//select language and dataList
const dataSelect = ()=>{
    $languageRadioList.forEach((node) => {
        if (node.checked) {
            selectedLang = node.id;
        }
    })
    if (selectedLang === "python") {
            currentData = dataPython;
        }
        else if (selectedLang === "java") {
            currentData = dataJava;
        }
        else if (selectedLang === "cplusplus") {
            currentData = dataCplusplus;
        }
        else if (selectedLang === "javascript") {
            currentData = dataJs;
        }
}