# variable-recommander

이스트소프트에서 주관하는 백엔드 개발자 부트캠프 '오르미'에서 배우며 만든 프로젝트입니다. 평소에도 개발을 할 때 변수명, 함수명을 지을 때 고민을 많이 하는 편이기 때문에 자연스럽게 주제를 '변수명 추천기'로 정하게 되었습니다.<br> ChatGPT의 API 기능을 활용하여 웹페이지를 구현하는 프로젝트입니다. 백엔드를 아직 배우지 않았고, 구현 과제가 아니었기 때문에 HTML, CSS, JavaScript 선에서 재량껏 구현하게 되었습니다. Bootstrap, Tailwind 등의 사용도 고려되었지만 아직 프론트엔드의 각종 기능과 언어가 낯설고 익숙해져야하기 때문에 백지상태에서 제작을 시도하였습니다.

## 목차
1. 주요 기능
  - 함수명/변수명 추천 기능
  - 코드 입력시 컨벤션에 맞게 수정하는 기능
  - localStorage 기능을 이용한 검색 이력 관리
2. 부가 기능
  - Dark Mode 설정
  - History(검색 이력) 메뉴 슬라이드
  - 아이콘 애니메이션(Dark mode toggle button, history menu slide button)
  - 반응형 layout
3. 기능 설명
  - 주요 기능 입력 값, 결과 출력 예시
4. 개발 내용
5. 미흡했던 점

## 주요 기능
 1. 선택한 언어와 용도에 맞게 ChatGPT가 함수명, 변수명을 추천해줍니다. 해당 언어에 아직 익숙하지 않아 어떤 형태로 함수와 변수명을 짓는지 헷갈릴 때, 무언가를 위한 함수를 만들고 싶은데 이름을 짓기 막막할 때 사용할 수 있습니다.
 ![기능설명1](https://github.com/jmkim648/variable-recommander/assets/22714585/f83b6a42-1954-4d01-810e-a3d81447ef0f)

 2. 스스로 작성한 코드를 복사해 입력하면 ChatGPT가 언어에 맞는 컨벤션으로 수정, 추천해줍니다. 함수/변수명 추천과 마찬가지로 본인이 언어에 익숙치 않거나 자신이 없을 때 확인하는 용도로 사용할 수 있습니다.
 ![기능설명2](https://github.com/jmkim648/variable-recommander/assets/22714585/85247386-a745-48f5-a42e-dd3cb765446b)

 3. 브라우저의 localStorage기능을 이용해 History 메뉴를 구현, 검색 이력을 확인할 수 있습니다. 이 이력은 브라우저를 껐다가 켜도 남아있으며, 최대 15개까지 저장됩니다.<br>검색 이력은 선택한 언어가 상단에 ```<python>```과 같이 표기되며, 아래에 어떤 내용을 추천받았는지 알려줍니다. 이력 항목을 누를 경우 당시 표시되었던 결과가 출력되며, 우측의 'X'표시를 누르면 해당 이력을 삭제할 수 있습니다.<br>
 ![기능설명3](https://github.com/jmkim648/variable-recommander/assets/22714585/d84ea238-7bf6-4b9d-904e-e736160904a3)

## 부가 기능
 1. Dark Mode 기능을 구현했습니다. 헤더 우측의 아이콘을 누를 경우 dark mode, light mode로 토글 전환됩니다. light mode일 때는 아이콘이 검은색 해 모양이고, dark mode일 때는 하얀색 달 모양으로 전환됩니다. 전환될 때마다 버튼에 간단한 애니메이션이 적용됩니다.
 ![기능설명1](https://github.com/jmkim648/variable-recommander/assets/22714585/d43ab49b-2e5f-4601-a90b-0e945e963ec9)

 2. History(검색이력) 메뉴 왼쪽의 화살표 버튼을 누르면 History메뉴가 우측으로 사라집니다. main화면이 반응형으로 설계되어 있기 때문에 History 메뉴가 접힐 때 main 메뉴가 옆으로 늘어납니다. History 메뉴가 접힐 때 애니메이션이 적용되며 화살표도 180도 돌아갑니다. History 메뉴가 접혀있을 때 화살표를 다시 누르면 메뉴가 펼쳐집니다.
 ![슬라이드메뉴](https://github.com/jmkim648/variable-recommander/assets/22714585/139d38fa-a5e1-4ddd-ad13-c74660239913)

## 기능 설명