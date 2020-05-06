/*
    1. Introduction
    Node.js는 Chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경(Runtime Environment)으로 주로 서버 사이드 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다.
    Node.js는 브라우저 외부 환경에서 자바스크립트 애플리케이션 개발에 사용되며 이에 필요한 모듈, 파일 시스템, HTTP 등 Built-in API를 제공한다.
    2009년 라이언 달(Ryan Dahl)이 발표한 Node.js는 폭발적인 관심을 받아왔고 Node.js를 사용하는 기업수도 대폭 증가했다. 앞으로 엔터프라이즈 영역에서 
    기존 Java나 .NET을 Node.js로 대체하려는 검토가 활발히 진행될 것으로 예상된다. 현재 Node.js를 사용하는 기업은 Microsoft, Paypal, eBay, Yahoo, GoDaddy 등이 있다.
    Node.js는 자바스크립트를 사용해 개발한다. Front-end와 Back-end에서 자바스크립트를 사용할 수 있다는 동형성(isomorphic)은 별도의 언어 학습 시간을 단축해 주는 장점이 있다.  

    Node.js는 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 Request 처리 성능을 가지고 있다.
    데이터베이스로부터 대량의 데이터를 취득하여 웹페이지에 표시할 때, 일반적으로 데이터베이스 처리에 대기시간(blocking)이 발생하기 때문에 
    웹페이지 표시가 지연되는 현상이 발생한다. Node.js의 모든 API는 비동기 방식으로 동작하여 Non-blocking I/O가 가능하고 단일 스레드 이벤트 루프 모델을 
    사용하여 보다 가벼운 환경에서도 높은 Request 처리 성능을 가지고 있다.
    Node.js는 데이터를 실시간 처리하여 빈번한 I/O가 발생하는 SPA(Single Page Application)에 적합하다. 하지만 CPU 사용률이 높은 애플리케이션에는 권장하지 않는다.
    Node.js에는 Socket.io라는 실시간 통신을 실현하는 라이브러리를 사용할 수 있어서 대량의 데이터 처리와 실시간 통신을 구현할 수 기능을 모두 갖추고 있다.

    HTTP Server
    Node.js를 사용하여 간단한 HTTP 서버를 작성해 보자.
    Node.js는 http 서버 모듈을 내장하고 있어서 아파치와 같은 별도의 웹서버를 설치할 필요가 없다. 아래와 같은 내용으로 app.js 파일을 생성한다.
*/
const http = require('http')

http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World')
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/')

/*
    http 모듈을 로딩하여 변수 http에 할당하였다. Node.js는 module 단위로 각 기능을 분할할 수 있다. module은 파일과 1대1 대응 관계를 가지며 하나의 모듈은 자신만의 독립적인 실행 영역(Scope)을 가지게 된다. 
    따라서 클라이언트 사이드 자바스크립트와는 달리 전역 변수의 중복 문제가 발생하지 않는다. 모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 공개한다. 그리고 공개된 모듈은 require 함수를 사용하여 임포트한다.
    http 모듈의 createServer([requestListener]) 메소드를 사용하여 HTTP 서버 객체를 생성한다. HTTP 서버 객체는 EventEmitter 클래스를 상속한 것으로 request 이벤트가 발생하면 HTTP request를 처리하여 response를 반환하는 request Listener 함수를 호출한다. 
    이 request Listener 함수는 request와 response 객체를 전달받으며 HTTP request 이벤트가 발생할 때마다 한번씩 호출된다.
    createServer 메소드가 반환한 HTTP 서버 객체의 listen 메소드에 포트번호 3000을 전달하여 서버를 실행한다.
*/