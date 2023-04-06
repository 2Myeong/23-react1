# 이명규 201930121


## 6주차 23.04.06
### 컨포넌트 추출
+ 여려개 컨포넌트로 분리 가능
+ 부모 컨피포에서 일부 추출해서 새로운 컨포넌트 생성 가능
+ 1컨포 = 1 기능 이상적 기능
+ <span style="color:pink"> 나 자신의 프로필을 만드는 컨포넌트 생성  - index.js / chapter05 내용 추가</span>

### <span style="color:yellow" >6장</span>
### 1.State
+ 리액트 컨포넌트의 상태(컨포넌트의 데이터) 의미
+ 세부적으로는 변경 가능한 데이터
+ State가 변하면 다시 렌더링이 되므로 렌더링과 관련된 값만 state에 포함 시켜야함
+ 자바스크립트의 객체일 뿐!
+ 변경시 setstate() 사용

### 2. 셍명주기
+ 컴포넌트의 생성 시점 , 사용시점 , 종료 시점
+ constructor 실행 -> 컨포넌트 생성
+ 생성 직후 <span style="color:pink" >conpoentDidMount()</span> 함수 실행
+ 소멸 전까지 여러번 랜더링
+ 랜더링 = props, setState(), forceUpdate() 에 의해 상태 변경
+ 랜더링 이후 = <span style="color:pink" >componentDinUpdate()</span> 함수 호출
+ 마지막 컨포넌트 언마운트 시 = <span style="color:pink" >compomentWillUnmount()</span> 함수 호출

## 5주차 23.03.30
### 1. 엘리먼트
+ Elements are the smallest building blocks of React apps = 리액트 앱의 가장 작은 빌딩 블록
+ 리액트 엘리먼트 = DOM 엘리먼트 가상표현

### 2. 엘리머트 생김새
+ 객체 형태로 존재
+ 내부 모든 children(컴포넌트, 속성) 포함 일반 js 겍체
+ 불변성 = 엘리먼트 생성 후 children / attributes 변경 불가
+ 변경된 엘리먼트를 보여주려면 새로운 엘리먼트 생성 후 변경

### 3. 엘리먼트 렌더링하기
+ 리액트만으로 만들어진 모든 웹 사이트 하나의 Root DOM node 있음
+ 하지만 웹 사이트에 추가적 리액트 연동 = 다수의 Root DOM node 생성

### 4. (시계) 만들기

### 5. 컨포넌트
+ 리엑트 = 컨포넌트 기반 구조
+ 작은 컨포넌트 여려개 = 큰 컨포넌트 / 큰 컨포넌트 여려개 = 페이지 구성
+ 최근 => 함수형 컨포넌트 주 사용
+ 이름은 항상 대문자 시작 (소문자는 DOM태그로 인식하므로 x)


### 6. Props
+ property = 속성의미
+ 컨포넌트 속성 = Props
+ 어떤 Props를 사용하냐에 다른 엘리먼트 출력
+ 다양한 정보를 담고 있는 자바스크립트 객체
+ 읽기 전용 = 변경불가

### Pure / Impure 함수
+ Pure 함수 = 인수로 받은 정보가 함수 내부에서 변하지 않은 함수
+ Impure 함수 = 인수로 받은 정보가 함수 내부에서 변하는 함수



## 4주차 23.03.23
### 1.위치변경
+ README.md 백업
+ local 저장소 이름 변경/삭제
+ 새 프로젝트 생성 npx create-react-app 23-react1
+ README.md 덮어쓰기
+ GITHUB 저장소 삭제
+ 로컬에서 푸시
+ GITHUB 저장소 확인

### 2.JSX 특징
+ 객체 표현
    - Babel은 JSX를 호출로 컴파일
### 3.JSX 역할
+ 내부적으로 XML/HTML 코드 자바스크립트로 변환
+ REACT가 createElement 할경우 자동 자바스크립트 변환
+ 만일 JS 작엽할 경우 직접 createElement함수 자용해야 함
+ JSX는 가독성을 높여주는 역할

### 4. JSX의 장점
+ 코드 간결
+ 가독성 향상
+ injection Attack 이라는 해킹 방법 방어 탁월 > 보안 강함

### 5. JSX 사용법
+ 모든 자바스크립트 문법 지원
+ 자바스크립트 문법과 XML / HTML 문법 섞어서 사용
+ 아래 코드 2번 라인처럼 섞어 사용
+ HTML / XML 에 자바스크립트 코드 사용하고 싶으면 {} 괄호 사용
+ 태그 속성값을 넣을 때는 
    - 큰따음표 사이 문자열 넣기
    - 중괄호 사이 자바스크립트 코드 넣기
## 3주차 23.03.16
### 1. 개발 툴 설치 및 유지
+ chocolatey.org 에서 Find package에서 검색 및 설치 
### 2. node.js / npm 설치
+ node.js -> LTS 버젼 설치 -> default으로 진행

+ <node.js 버젼 확인>
    - node --version
    - node -v
+ <npm 버젼 확인>
    - npm -v
    - npm --version

### 3. 리엑트의 정의

+ A JavaScript library for building user interfaces - 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리

+ 리엑트의 개념 정리 : 
    - 복잡한 시아트 쉽게 구축 및 관리 = SPA를 쉽고 빠르게 만들수 있게 해주는 도구
### 4. 리엑트의 장점

+ < 빠른 업데이트 , 랜더링 속도 >
    - DOM(Document Object Model) - HTML, XML 문서를 계층으로 표현해 생성, 변형, 삭제 돕는 인터페이스 (W3C 표준)
    -Virtual DOM은 DOM 조작이 비효율적인 이유로 속도 감소때문에 고안 방법
    - DOM은 동기식, Virtual DOM은 비동기식 방법으로 랜더링

+ < 컴포넌트 기반 구조 >
    - 모든페이지 컴포넌트 기반 구조   
    - 하나의 컨포넌트 = 다른 여러 컴포넌트 조합 구성 가능
    - react 유명한 사이트 - '에어비엔비' 참고

+  <재사용성 >
    - 반복적 작업 감소 = 생산성 증가
    - 유지보수 용이
    - 재사용 가능 여부는 해당 모듈 의존성 없어야 함

+ <대기업 관리>
    - 메타에서 오픈소스 프로젝트로 관리

+ 지식 공유 / 커뮤니티 발달

+ < 모바일 앱 개발가능 >
    -리엑트 네이티브(모바일 환경 UI프레임워크) 사용 시 크로스 플랫폼 모바일 앱 개발 가능

### 4. 단점
+ < 방대한 학습량 >
    - 하지만 자바스크립트 공부 시 빠르게 학습 가능
+ < 높은 상태 관리 복잡도 >
    - state(클래스형 컨포넌트), life cycle(클래스형 컨포넌트) 등 개념이 있음


#### 실습 2.4
    
## 2주차 23.03.09

### 1. github 연결
+ git config --global user.name "Your Name" / 이름 
+ git config --global user.email "Your Email" / 이메일


## 1주차 23.03.02

###