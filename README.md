# Emotion Diary

간단한 CRUD 기능을 갖춘 감성 일기장 애플리케이션.

**웹 배포 : [https://yunhwan-react-project.web.app/](https://yunhwan-react-project.web.app/)**

---

## 프로젝트 설명
<img width="1439" alt="스크린샷 2023-03-21 오후 10 53 25" src="https://user-images.githubusercontent.com/79241793/226952892-e5cd5c75-47c0-4d80-9f39-180092b68cf7.png">

`Figma` 를 이용하여 전체적인 디자인을 만들었고,
`React`를 사용하여 만든 프로젝트입니다.

`styled-components`를 사용하여 스타일을 적용하였으며 `Redux`를 사용하여 상태관리를 해주었습니다.

CRUD 기능 및, 일기장의 정렬 및 필터 기능을 가진 하루의 내용과 감정을 기록하는 감정일기장입니다.

---

## 프로토타입

![image](https://user-images.githubusercontent.com/79241793/226952526-76e6eded-85ca-4957-958f-5cc7775f1bdb.png)

![image](https://user-images.githubusercontent.com/79241793/226952556-c7a8cc50-a8ae-48ac-b4ac-dfbf97660cec.png)
---

## 구조도

```
📦
src
├── App.js
├── actions
│   └── index.js
├── components
│   ├── DiaryEditor.js
│   ├── DiaryItem.js
│   ├── DiaryList.js
│   ├── EmotionItem.js
│   ├── MyButton.js
│   └── MyHeader.js
├── index.css
├── index.js
├── pages
│   ├── Diary.js
│   ├── Edit.js
│   ├── Home.js
│   └── New.js
├── reducers
│   ├── diaryReducer.js
│   └── index.js
├── store
│   └── store.js
├── style
│   └──  GlobalStyle.js
└── util
    ├── date.js
    └── emition.js
```

---

## 🛠️ 사용 기술 및 라이브러리

<br/>

### Frontend

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

### Deploy

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">

#

## 🎮 주요 기능

<br/>

### 일기장 생성 기능

- 새로운 일기장을 생성할 수 있는 기능입니다.
- 날짜를 선택가능하며, 해당 날의 감정과 느낀점을 기록 할 수 있습니다.
![감정일기장create](https://user-images.githubusercontent.com/79241793/226952936-1a477548-8ddb-4944-a621-71f1249fd551.gif)

<br/>

### 일기장 수정 기능

- 선택한 일기장의 내용을 수정할 수 있는 기능입니다.
- 생성 기능과 유사합니다. 날짜를 수정가능하며, 해당 날의 감정과 느낀점을 수정할 수 있습니다.
![감정일기장Edit](https://user-images.githubusercontent.com/79241793/226954370-f9495148-4f4b-4c00-a155-b60f824a107b.gif)
<br/>

### 일기장 삭제 기능

- 선택한 일기장을 삭제할 수 있는 기능입니다.

![감정일기장Delete](https://user-images.githubusercontent.com/79241793/226953003-cbf2a655-4079-4984-9846-55e1758ba047.gif)

<br/>

### 일기장 조회 기능

- 선택한 일기장의 상세페이지를 볼 수 있는 기능입니다.


![감정일기장Read](https://user-images.githubusercontent.com/79241793/226954642-8ade77a8-a23c-4dc2-992d-ad460dafc495.gif)

<br/>

### 일기장 정렬 및 필터 기능

- 일기장을 날짜 순으로 정렬 하는 기능입니다.(오래된 순 or 최신 순)
- 일기장을 좋은 감정 or 안 좋은 감정으로 특정 감정만 filter해서 볼 수 있는 기능입니다.
![감정일기장Filter](https://user-images.githubusercontent.com/79241793/226953045-4bdd9105-ac87-4f02-9786-a92271e7ec72.gif)


## 💡새롭게 배운 점

<br/>

> ✔️ : Figma로 프로토타입 생성

- 프로젝트를 진행에 있어서, 기본적인 틀의 중요성을 느꼈습니다. 프로토타입 없이 스타일을 입히면, 일관되지 않고 즉흥적으로 코드를 작성하게 되었습니다. 때문에 프로토타입의 필요성을 느끼게되었습니다.

- Figma 툴을 이용하여 사용할 컴포넌트들과 간단한 프로토타입을 만들었고, 프로토타입에 따라 프로젝트를 만들며 좀 더 수월하게 진행했습니다.

> ✔️ : useCallback, useMemo, React.Memo를 사용하여 불필요한 리렌더링을 제거

- 새롭게 글을 쓰거나 버튼을 클릭 할 경우에 기능과 관련되지 않은 컴포넌트들도 렌더링 되는 상황이 발생했습니다.

- useCallback, useMemo, React.Memo같은 React Hook들을 통해 불필요한 렏더링을 방지할 수 있다는 것을 알게되었고, ReactDevTool로 직접 렌더링되는 부분을 찾아 useCallback, useMemo, React.Memo로 적용하였습니다.

- React.Memo를 적용했으나 리렌더링이 발생한 경우, 매번 새로운 함수를 렌더링해서 받았기 때문에 useCallback 처리를 해주었습니다.

> ✔️ : Redux 도입

- 간단한 일기장 프로젝트이지만, CRUD와 관련한 명령들은 하위 컴포넌트로 props로 계속 전달해주는 상황이 발생하였고, 이런 props drilling을 피라기 위해서는 전역 상태관리 방식이 필요하다는 것을 알게되었습니다.
- 처음에는 useContext를 사용하였지만, 텍스트를 상태값 / 액션으로 나누어서 리렌더링 문제를 해결해야하고, 상태값, 액션을 따로 Provider로 적용해야하기 때문에 코드가 지저분해 보이기도 하였습니다.

- 따라서 상태관리 방식을 useContext에서 Redux로 변경하였고 store, reducers, action 디렉토리를 생성하여 관련 기능들을 분리해주어 사용하였습니다.

- 블로깅 (https://fordev-yunhwan.tistory.com/entry/%EA%B0%90%EC%A0%95%EC%9D%BC%EA%B8%B0%EC%9E%A5-redux-%EC%A0%81%EC%9A%A9)

> ✔️ : Styled-components 도입

- 기존 css 파일을 이용한 스타일링은 css 파일이 너무 길어져서 수정하려는 스타일의 위치를 찾기 어렵고, className이 중복되어 헷갈리는 경우가 있었습니다.

- 이를 해결할 수 있는 CDD 방식의 스타일링을 찾아보다가, 스타일을 바로 입힐 수 있고, props를 전달 받아서 컴포넌트를 만드는 styled-components를 알게되어 적용해보았습니다.

- 블로깅 (https://fordev-yunhwan.tistory.com/entry/%EA%B0%90%EC%A0%95%EC%9D%BC%EA%B8%B0%EC%9E%A5-styled-component-%EC%A0%81%EC%9A%A9)

## 🧑🏻‍💻 느낀 점

<br/>

> 😥 : 학습하며 개발과정 중 어려웠던 부분

- 리렌더링 방지를 위하여 useCallback, useMemo, Memo 사용법이 어려웠습니다. 단순 예제로 볼 때는 이해가 갔으나, 프로젝트에 직접 적용하는 부분에서 익숙치 않았습니다. 특히 리렌더링을 방지했다고 생각하는 곳에서도 계속 렌더링이 벌어져서 왜? 발생하는지 알아채고 코드를 수정하는 부분이 어려웠습니다.

- Redux 적용에도 어려움을 겪었습니다. 단순히 작동원리만 알던 상태에서 코드를 작성하려니, 어떻게 디렉토리를 설정해서 적용할지 막막했습니다. 관련 레퍼런스들을 찾아가면서, Redux의 작동원리를 보며 역할별로 분리하고 코드를 작성하여 구현을 하려 많은 시간을 들였습니다.

- styled-components를 도입하면서 전역적인 스타일링에도 어려움을 겪었습니다. 하위컴포넌트들은 비교적 정해진 틀대로 스타일링을 해주었던 반면, createGlobalStyle을 이용해서 최상위 컴포넌트에 스타일을 적용하는 부분이 생소하였고 어려웠습니다.

<br />

> 😥 : 아쉬운 부분

- 기본적인 CRUD 기능, 정렬, 필터 기능 밖에 적용을 하지 못한 점이 아쉽습니다. 추가적으로 넣어야 할 기능에 대해서 생각해보고 추후 구현할 필요가 있을 것 같습니다.

- TypeScript를 적용하지 못한 점이 아쉽습니다. 기본적인 개념만 알고 프로젝트에 적용하기에는 학습이 더 필요하다고 생각해서 적용하지 못했습니다. 실제로 프로젝트를 진행하면서 타입이 명시되지 않아 헷갈리는 상황이 종종있었습니다. 프로젝트를 더욱 직관적이게 만들어주는 기술인만큼 추후 다른 프로젝트에서나 리팩토링에 꼭 적용해봐야겠습니다.
