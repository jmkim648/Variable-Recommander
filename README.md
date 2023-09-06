# variable-recommander

이스트소프트에서 주관하는 백엔드 개발자 부트캠프 '오르미'에서 배우며 만든 프로젝트입니다. 평소에도 개발을 할 때 변수명, 함수명을 지을 때 고민을 많이 하는 편이기 때문에 자연스럽게 주제를 '변수명 추천기'로 정하게 되었습니다.<br><br> ChatGPT의 API 기능을 활용하여 웹페이지를 구현하는 프로젝트입니다. 백엔드를 아직 배우지 않았고, 구현 과제가 아니었기 때문에 HTML, CSS, JavaScript 선에서 재량껏 구현하게 되었습니다. Bootstrap, Tailwind 등의 사용도 고려되었지만 아직 프론트엔드의 각종 기능과 언어가 낯설고 익숙해져야하기 때문에 백지상태에서 제작을 시도하였습니다. <br><br>프로젝트 기간은 총 9일이었으며, 1인개발로 이루어졌습니다.<br>

Github: https://github.com/jmkim648/variable-recommander <br>
배포: https://jmkim648.github.io/variable-recommander/

<br>
<br>

## 목차
<a href = "#주요-기능" style="color: inherit">[1. 주요 기능]</a>
  - 함수명/변수명 추천 기능
  - 코드 입력시 컨벤션에 맞게 수정하는 기능
  - localStorage 기능을 이용한 검색 이력 관리

<a href = "#부가-기능" style="color: inherit">[2. 부가 기능]</a>
  - Dark Mode 설정
  - History(검색 이력) 메뉴 슬라이드
  - 아이콘 애니메이션(Dark mode toggle button, history menu slide button)
  - 반응형 layout

<a href = "#기능-설명" style="color: inherit">[3. 기능 설명]</a>
  - 구현 화면 및 설명

<a href = "#개발-이슈" style="color: inherit">[4. 개발 이슈]</a>

<a href = "#미흡했던-점추후-목표" style="color: inherit">[5. 미흡했던 점/추후 목표]</a>
<br>
<br>
## 주요 기능
 
 ### **<메인UI>**
![기능설명1](https://github.com/jmkim648/variable-recommander/assets/22714585/f83b6a42-1954-4d01-810e-a3d81447ef0f)

**<폴더 구조>**
```
root
│  index.html
│  README.md
│
├─css
│      common.css
│      darkmode.css
│      history.css
│      index.css
│
├─data
│      data.js
│
├─img
│      favicon.ico
│
└─module
        gpt-api.js
        history.js
        index.js
        page-changer.js
        spin.js
```

 ### **<흐름도>**
 ![flow](https://github.com/jmkim648/variable-recommander/assets/22714585/7452e068-72f9-4a05-9f34-31f77c4caddd)
 ### **1. 함수명, 변수명 추천기능**<br>
 선택한 언어와 용도에 맞게 ChatGPT가 함수명, 변수명을 추천해줍니다. 해당 언어에 아직 익숙하지 않아 어떤 형태로 함수와 변수명을 짓는지 헷갈릴 때, 무언가를 위한 함수를 만들고 싶은데 이름을 짓기 막막할 때 사용할 수 있습니다.

 ### **2. 언어의 컨벤션에 맞게 코드 수정**<br>
 스스로 작성한 코드를 복사해 입력하면 ChatGPT가 언어에 맞는 컨벤션으로 수정, 추천해줍니다. 함수/변수명 추천과 마찬가지로 본인이 언어에 익숙치 않거나 자신이 없을 때 확인하는 용도로 사용할 수 있습니다.

 ### **3. 검색 이력 저장, 출력 및 삭제**<br>
 브라우저의 localStorage기능을 이용해 History 메뉴를 구현, 검색 이력을 확인할 수 있습니다. 이 이력은 브라우저를 껐다가 켜도 남아있으며, 최대 15개까지 저장됩니다.<br>검색 이력은 선택한 언어가 상단에 ```<python>```과 같이 표기되며, 아래에 어떤 내용을 추천받았는지 알려줍니다. 이력 항목을 누를 경우 당시 표시되었던 결과가 출력되며, 우측의 'X'표시를 누르면 해당 이력을 삭제할 수 있습니다.<br>

<br>
<br>

## 부가 기능
 ### **1. 다크모드, 라이트모드 및 애니메이션**<br>
 Dark Mode 기능을 구현했습니다. 헤더 우측의 아이콘을 누를 경우 dark mode, light mode로 토글 전환됩니다. light mode일 때는 아이콘이 검은색 해 모양이고, dark mode일 때는 하얀색 달 모양으로 전환됩니다. 전환될 때마다 버튼에 간단한 애니메이션이 적용됩니다.

 ### **2. 메뉴 슬라이드 애니메이션**<br>
 History(검색이력) 메뉴 왼쪽의 화살표 버튼을 누르면 History메뉴가 우측으로 사라집니다. main화면이 반응형으로 설계되어 있기 때문에 History 메뉴가 접힐 때 main 메뉴가 옆으로 늘어납니다. History 메뉴가 접힐 때 애니메이션이 적용되며 화살표도 180도 돌아갑니다. History 메뉴가 접혀있을 때 화살표를 다시 누르면 메뉴가 펼쳐집니다.
<br>
<br>

## 기능 설명
### **1. 함수명, 변수명 추천**
![1번기능시연](https://github.com/jmkim648/variable-recommander/assets/22714585/90ac2b85-ba5a-4e02-8a7a-b3d1ce877167)
  - 상단 언어선택 메뉴에서 언어를 선택합니다.
  - 하단의 용도 선택 메뉴에서 원하는 용도를 선택합니다. 원하는 항목이 없을 경우 기타를 클릭, 원하는 용도를 입력합니다.
  - 로딩 후 결과창에 함수명, 변수명이 추천됩니다.
  - fetch 중 다른 오브젝트를 클릭하거나, 추천하기!를 여러번 누를 경우 원하지 않았던 상황이 발생할 수 있기 때문에 spinner 기능을 적용해 상호작용을 막도록 했습니다.

### **2. 언어에 맞는 컨벤션 적용**
![2번기능시연](https://github.com/jmkim648/variable-recommander/assets/22714585/a5d98e11-8a8e-4830-bb18-06a15efb5724)
  - 상단 언어선택 메뉴에서 언어를 선택합니다.
  - 하단의 코드 입력란에 확인하고 싶은 코드를 입력합니다.
  - 로딩 후 결과창에 수정된 코드, 주요 수정사항이 주석으로 표시됩니다.

### **3. history(검색 이력)**
![히스토리클릭](https://github.com/jmkim648/variable-recommander/assets/22714585/afae3d5d-fdb1-4e1e-b47e-d91303f09b74)
  - 추천하기! 버튼을 누를 때마다 해당 언어, 용도가 우측 검색이력 메뉴에 기록됩니다.
  - 검색 이력 메뉴의 리스트를 클릭하면 해당 항목의 결과가 결과창 화면에 출력됩니다.
  - 리스트 오른쪽의 X 아이콘을 클릭하면 항목이 삭제되어 검색 이력에서 사라집니다.
  - 검색 이력은 최대 15개까지만 저장되며, 그 이상 검색할 경우 오래된 항목부터 사라집니다.

### **4. 다크 모드 토글**
![다크모드](https://github.com/jmkim648/variable-recommander/assets/22714585/a731fae3-b4be-4731-bafe-2678e8d68d65)
  - 우측 상단의 아이콘을 클릭시 다크모드, 라이트모드가 토글됩니다.
  - 아이콘 클릭 시 애니메이션이 적용됩니다.

### **5. 검색 이력 메뉴 슬라이드 애니메이션**
![메뉴슬라이드](https://github.com/jmkim648/variable-recommander/assets/22714585/4dc8eb2f-b4a3-4a25-8f2f-e3410bffb555)
  - 검색 이력 메뉴 좌상단의 ▶를 클릭 시 메뉴의 width가 줄어들며 사라집니다.
  - ◀로 바뀐 아이콘을 다시 클릭하면 메뉴가 나타납니다.
  - 애니메이션 적용 중 내부 글씨가 살아있으면 줄바뀜이 적용되면서 글이 길쭉해지기 때문에, ▶ 버튼을 누르는 즉시 내부 내용을 삭제시킵니다. ◀버튼을 누르면 애니메이션이 끝난 후 내부 요소를 출력합니다.
<br>
<br>

## 개발 이슈
### **1. 메뉴 슬라이드 구현 시 반응형 디자인 일부 적용**

메뉴를 닫을 시 해당 요소만큼 width값이 변하면서 기획했던 의도와 다른 형태의 디자인이 되어버리는 이슈가 있었습니다. 메인 화면의 width값을 고정값이 아니라 %를 사용한 비율값으로 바꾸고, max-width를 설정하여 반응형 디자인의 일부를 구현할 수 있었습니다.
```css
.main-container {
    height: calc(100vh - 80px);
}
/.../
.chat-wrap {
    width: 50%;
    max-width: 650px;
}
```
메뉴 슬라이드 시 최대 width값을 넘지 않는 선에서 메인 화면이 가로로 늘어납니다. 다만 처음부터 기획했던 부분이 아닌점, 제대로 이해를 하지 못한 채 썼다는점 때문에 제대로 된 반응형 사이트는 완성하지 못했습니다.

### **2. class 추가/제거와 transition을 이용한 애니메이션 구현**
처음에는 단순히 애니메이션을 줄 아이콘에 ```transition: all ease 0.5```를 주고 toggle 시 이벤트를 통해 transform을 적용하였습니다. 하지만 이 경우 페이지를 처음 그릴 때 아이콘으로 썼던 이모지 ☀️에 적용된 scale, color 등의 효과까지 서서히 적용되는 문제가 있었습니다.

이벤트로 transform을 적용하였을 시, ☀️에서 🌙로 변하는 이벤트를 따로 설정하고 🌙에서 ☀️로 변할 때도 별개의 이벤트를 설정해야하는 문제가 있었습니다.
```css
.dark-mode-button {
    scale: 1.5;
    border: 0;
    color: transparent;
    margin-right: 15px;
    transition: text-shadow ease 0.3s, transform ease 0.3s;
}

.scale-down {
    transform: scale(0) rotate(180deg);
}
```
```js
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
```
위의 문제는 class속성을 설정 후 해당 class를 add, remove 하는 형태로 해결하였습니다. 코드가 간결해져 효율성과 가독성이 올랐으며, 겸사겸사 setTimeout을 이용한 딜레이까지 배워서 사용할 수 있었습니다.

### **3. 디자인 색상 및 class 통일, 변수 사용**

  처음 기능 구현 전 Layout을 짜 놓은 뒤, 기능 구현과 함께 추가되는 오브젝트들마다 새로 css를 궁리하고 적용하는 것은 시간과 심력소모가 극심한 일이었습니다. 다크모드르 구현할 때 색상을 한번 더 고민하고 지정해야한다는 것을 깨닫고 변수를 통해 색상 지정하는 방법을 찾았습니다.
  ```css
  /* variable */
:root {
    --black: #151515;
    --white: rgb(230, 230, 230);

    /* dark */
    --dark-color-header: rgb(32, 33, 35);
    --dark-color-main: rgb(70, 70, 85);
    --dark-color-history: rgb(53, 53, 65);

    /.../

    /* input */
    --dark-input-textbox: rgb(230, 230, 230);
    --dark-input-textarea: rgb(230, 230, 230);
    --light-input-textbox: rgb(220, 220, 220);
    --light-input-textarea: rgb(220, 220, 220);
}

/* subject-title holder, title */
body.dark-mode .subject-title {
    color: var(--white);
}
body.light-mode .subject-title {
    color: var(--black);
}
  ```
또한 모든 요소에 적용하지는 못했지만, 공통된 용도를 갖는 요소에 동일한 클래스명을 add하여 한번에 스타일 지정을 할 수 있어 효율성을 챙길 수 있었습니다.

### **4. 외부에서 데이터 관리, 데이터셋 init 관련**
  추후 재사용성, 확장성을 위해 프롬프트 엔지니어링의 data로 쓸 문자열을 따로 파일로 관리할 필요성을 느꼈습니다. 따라서 
  ```js
  //./data.js
  export const python = [
    {
        "role": "system",
        "content": "assistant는 사무적인 Python 전문가이다."
    },
    {
        "role": "system",
        "content": "assistant는 함수명, 변수명 추천 프로그램이다."
    },
    {
        "role": "system",
        "content": "assistant는 Python 이외의 질문에는 답변하지 않는다."
    },
  ]
  ```
  의 형태로 따로 js파일에 Object형태로 저장하여 관리하였습니다.
  본 프로그램에서는 데이터를 언어별, 기능별로 사용하기 때문에 총 8개의 데이터셋이 필요합니다. 처음에는 아래와 같이 일일이 선언, Init을 하였습니다.
  ```js
  let currentData = [];
  let dataPython = [];
  let dataJava = [];
  let dataCpp = [];
  let dataJs = [];
  let conventionPython = [];
  let conventionJava = [];
  let conventionCpp = [];
  let conventionJs = [];

  dataPython = jsonObject.python;
  ...
  conventionCpp = jsonObject.conCpp;
  conventionJs = jsonObject.conJs;
  ```
  개발 중 가독성과 편의성에 문제가 있음을 느껴 다음과 같이 바꾸었습니다.
  ```js
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
  ```


### **5. 파일 로드와 DOM 파싱 순서**

  자바스크립트에 DOM을 활용한 함수를 만든 뒤 맞이했던 에러입니다.
  ```
  Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
  ```
  렌더링 엔진이 js파일을 로드하는 script 태그를 만나면 DOM 파싱을 중단하고, js파일을 로드한 후 해당 자바스크립트 파일을 실행한다고 합니다. 이 때 해당 js 파일에서 **생성되다 만** DOM에 접근하게 되면 에러가 발생합니다.

   해결책은 1. script태그를 본문 아래에 위치시킨다. 2. async, defer 어트리뷰트를 지정한다. 였습니다.
   ```html
    <script defer src="./module/index.js" type="module"></script>
    <script defer src="./module/page-changer.js" type="module"></script>
    <script defer src="./module/history.js" type="module"></script>
    <script defer src="./module/gpt-api.js" type="module"></script>
   ```
   우선 에러가 날 때 확인 후 defer를 붙여 해결하였습니다.
   하지만 이후 defer를 없애도 다시 에러가 나지 않는 등 정확한 용도와 사용법 파악에 미숙함을 느껴 더 찾아볼 필요를 느꼈습니다.

### **6. 프롬프트 엔지니어링**
  
  처음에는 프롬프트 엔지니어링을 '원하는 대화를 할 수 있도록 학습하는 것'으로 이해했지만 며칠 공부하면서 학습이 아니라 '대화를 하면서 흐름을 잡아주는 것'이라는 것을 알았습니다.
  ```js
    {
        //GPT의 역할 지정
        "role": "system",
        "content": "assistant는 Python 전문가이다."
    /.../
    {
        //GPT와 대화를 하면서 요청, 규율 명시
        "role": "system",
        "content": "assistant는 코드를 Python 스타일로 보여준다."
    },
    {
        //답변 형태 요청
        "role": "user",
        "content": "앞으로 변수명, 함수명 질문은 list로 답해줘."
    },
    /.../
    {
        //GPT의 답변을 저장해 앞으로의 답변 형식과 방향성을 유도
        "role": "assistant",
        "content": "함수명: \n 1. multiply: 곱셈을 수행하는 함수 \n 2. product: 두 개의 숫자를 곱한 결과를 반환하는 함수 \n 3. calculate_product:/.../타내는 변수 \n 2. result: 곱셈 결과를 저장하는 변수 \n 3. multiplier, multiplicand: 곱셈의 피연산자를 나타내는 변수 \n 5. operand1, operand2: 곱셈에 사용되는 피연산자를 나타내는 변수"
    },
  ```
  처음에는 감을 잡지 못했지만 실험을 진행하면서 맥락을 알게 되었습니다.

  GPT의 답변에 규칙과 제약을 정하는 것은 role: system으로 지정합니다. role: user로 요청을 해도 받아들여지지만 상대적으로 system에 비해 강건하지는 못한 느낌을 받았습니다.

  답변의 구체적인 형태는 role: user로 "~~하게 답해줘." 라는 형태로 요청해도 받아들여지기는 했지만 무시되는 경향이 강했습니다. role: assistant로 GPT의 답변 중 이런 형태가 유효했다고 입력하면 높은 확률로 그 형태에 맞춰주는 것을 확인했습니다.

  또한 role: user로 같은 유형의 질문을 반복하면 GPT의 대화와 답변의 scope가 그것에 집중되는 경향을 보이는 것을 확인했습니다. 

### **7. GPT의 답변 후처리 및 정규화**
```js
"함수명:  1. multiply: 곱셈을 수행하는 함수  2. product: 두 개의 숫자를 곱한 결과를 반환하는 함수  3/..../곱셈의 피연산자를 나타내는 변수  5. operand1, operand2: 곱셈에 사용되는 피연산자를 나타내는 변수"
```
GPT의 답변을 출력하는 기능을 구현하면서 텍스트가 위와 같이 나오는 경우가 있었습니다. ```consol.log(answer)```로 찍어보니 문자열에 이스케이프 개행문자```'\n'```이 포함되어 있고, html에서는 이것이 인식되고 있지 않는 것을 확인했습니다. 처음에는 다음과 같은 함수를 만들었습니다.
```js
function replaceNltoBr(answer) {
    if (typeof answer !== 'string') {
        return answer;
    }
    return answer.replace(/\n/g, "<br>");
}
```
```'\n'```을 <br>로 바꿔 html에서도 개행이 인식되었습니다.
하지만 두번째 주요 기능 '코드 입력 후 변환 출력'에서는 해당 함수를 적용할 수 없었습니다.
```js
const printAnswer = (answer) => {
saveHistoryData(answer);
saveLocalStorage(localData);
displayLocalStorage();
$chatList.innerText = "";
let li = document.createElement("li");
li.class_name = "answer";
add-pre-tag(li, answer);
$chatList.appendChild(li);
};
```
답변이 이런식으로 오면 개행뿐 아니라 tab까지 고려해야 하기 때문에 <br>태그로는 해결할 수 없었습니다. 뒤늦게 html의 li에 text요소로 답변을 넣을 것이 아니라 pre태그와 code태그를 사용할 수 있다는 것을 발견했습니다.
```js
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
```
코드 블록을 답변으로 받을 때는 해당 함수를 적용하여 li요소에 pre, code요소를 추가하여 코드 블록 째로 출력할 수 있게 하였습니다.

<br>
<br>

## 미흡했던 점/추후 목표

[Velog - 첫 프로젝트를 끝내고..느낀점/미흡했던 점](https://velog.io/@jmkim648/%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EB%81%9D%EB%82%B4%EA%B3%A0..%EB%8A%90%EB%82%80%EC%A0%90%EB%AF%B8%ED%9D%A1%ED%96%88%EB%8D%98-%EC%A0%90)

### **1. 최소한의 기획과 디자인은 구성을 한 뒤 개발할 것.**
  - 특히, 초반 기획은 바뀌는 경우에 대비해 확장성을 고려할 것
  - 익숙치 않아도 버릇을 들일 것

### **2. 모듈화를 의식하고 공부할 것**
  - 재사용성과 안정성을 최우선적으로 고려
  - 감으로 나눠서 모듈화라고 인식하지 말고 확실히 알고 쓸 것

### **3. 기능구현, 최적화에 귀찮아하지 말 것**
  - 내 스스로를 과대평가하지 말 것
  - 이 코드는 항상 더 최적화할 수 있고 더 보기 좋게 만들 수 있다고 생각할 것