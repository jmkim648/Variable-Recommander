import * as jsonObject from '../data/data.js'

const $form = document.querySelector("form");
const $input = document.querySelector(".chat-form textarea");
const $chatList = document.querySelector(".chat-view ul");

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let question;

//data파일에서 내용 불러오기
let data = [];
jsonObject.python.forEach((item, idx) => {
    data.push({
        role: item.role,
        content: item.content
    });
})
// console.log(data);

let questionData = [];

// input에 입력된 질문 받아오는 함수
$input.addEventListener("input", (e) => {
    question = e.target.value;
});

// 사용자의 질문을 객체로 만들어서 push
const sendQuestion = (question) => {
    if (question) {
        data.push({
            role: "user",
            content: question,
        });
        questionData.push({
            role: "user",
            content: question,
        });
    }
};

// 화면에 질문 그려주는 함수
const printQuestion = async () => {
    if (question) {
        let li = document.createElement("li");
        li.classList.add("question");
        questionData.map((el) => {
            li.innerText = el.content;
        });
        console.log(li);
        $chatList.appendChild(li);
        questionData = [];
        question = false;
    }
};

// 화면에 답변 그려주는 함수
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
        body: JSON.stringify(data),
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
    $input.value = null;
    sendQuestion(question);
    apiPost();
    printQuestion();
});