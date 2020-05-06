/*
    모듈화와 CommonJS
    모듈이란 애플리케이션을 구성하는 개별적 요소를 말한다. 일반적으로 파일 단위로 분리되어 있으며 필요에 따라 애플리케이션은 
    명시적으로 모듈을 로드한다. 모듈은 애플리케이션에 분리되어 개별적으로 존재하다가 애플리케이션의 로드에 의해 비로소 애플리케이션의 일원이 된다. 
    모듈은 기능별로 분리되어 작성되므로 개발효율성과 유지보수성의 향상을 기대할 수 있다.

    C언어는 #include, Java는 import 등 대부분의 언어는 모듈 기능을 가지고 있다. 하지만 Client-side JavaScript의 경우, 
    script 태그를 사용하여 외부의 스크립트 파일을 가져올 수는 있지만 파일마다 독립적인 파일 Scope를 갖지 않고 하나의 전역 객체(Global Object)에 바인딩되기 때문에 
    전역변수가 중복되는 등의 문제가 발생할 수 있다. 이것으로는 모듈화를 구현할 수 없다.
    이런 상황에서 제안된 것이 CommonJS와 AMD(Asynchronous Module Definition)이다.
    CommonJS 방식은 AMD에 비해 문법이 간단하며 동기 방식(synchronous loading)으로 동작한다.
    AMD 방식은 CommonJS에 비해 문법이 다소 까다로우며 CommonJS와는 달리 비동기 방식(asynchronous loading)으로 동작한다. AMD 방식을 지원하는 대표적인 모듈 로더는 RequireJS이다.

    Node.js는 사실상 모듈 시스템의 사실상 표준(de facto standard)인 CommonJS를 채택하였고 현재는 독자적인 진화를 거쳐 CommonJS 사양과 100% 동일하지는 않지만 기본적으로 CommonJS 방식을 따르고 있다. 

    npm
    npm(node package manager)은 자바스크립트 패키지 매니저이다. Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다. 
    자신이 작성한 패키지를 공개할 수도 있고 필요한 패키지를 검색하여 재사용할 수도 있다.

    지역 설치와 전역 설치
    npm install 명령어에는 지역(local) 설치와 전역(global) 설치 옵션이 있다. 옵션을 별도로 지정하지 않으면 지역으로 설치되며, 프로젝트 루트 디렉터리에 node_modules 디렉터리가 자동 생성되고 그 안에 패키지가 설치된다. 
    지역으로 설치된 패키지는 해당 프로젝트 내에서만 사용할 수 있다.
    
    # 지역 설치
    $ npm install <package>

    # 전역 설치
    $ npm install -g <package>

    package.json과 의존성 관리
    앞에서 npm install 명령어로 node-emoji 패키지를 설치할 때 package.json을 찾을 수 없다는 경고가 발생하였다.
    npm WARN saveError ENOENT: no such file or directory, open '/Users/kwak/Documents/node/poiemaweb/Node.js/package.json'

    Node.js 프로젝트에서는 많은 패키지를 사용하게 되고 패키지의 버전도 빈번하게 업데이트되므로 프로젝트가 의존하고 있는 패키지를 일괄 관리할 필요가 있다.
    npm은 package.json 파일을 통해서 프로젝트 정보와 패키지의 의존성(dependency)을 관리한다.(requirements.txt와 비슷하다)
    이미 작성된 package.json이 있다면 팀 내에 배포하여 동일한 개발 환경을 빠르게 구축할 수 있는 장점이 있다. package.json은 Java의 maven에서 pom.xml과 비슷한 역할을 한다.

    package.json을 생성하려면 프로젝트 루트에서 npm init 명령어를 실행한다.
    npm init 명령어를 사용하면 프로젝트에 대한 여러 가지 정보를 입력하도록 요구받는다. 이때 입력된 정보를 바탕으로 npm은 package.json 파일을 생성한다. 일단 기본 설정값으로 생성된 package.json 파일을 수정하는 방법이 더 편리할 수 있으므로 
    npm init 명령어에 --yes 또는 -y 옵션을 추가한다. 그러면 기본 설정값으로 package.json 파일을 생성한다.

    package.json에서 가장 중요한 항목은 name과 version이다. 이것으로 패키지의 고유성을 판단하므로 생략할 수 없다. 그리고 dependencies 항목에는 해당 프로젝트가 의존하는 패키지들의 이름과 버전을 명시한다. 
    여기서 의존하는 패키지란 해당 프로젝트에서 참조하는 모듈을 의미한다. 프로젝트를 진행할 때는 이미 만들어진 여러 패키지를 참조해서 사용하는데, package.json 파일의 dependencies 항목에 해당 패키지의 이름과 버전을 명시함으로써 의존성을 설정한다.

    npm install 명령어를 사용하면 package.json에 명시된 모든 의존 패키지를 한번에 설치할 수 있다.
    npm install 명령어의 패키명 뒤에 @버전을 추가하면 패키지 버전을 지정하여 설치할 수 있다.

    자주 사용하는 npm 명령어
    
    package.json 생성
    $ npm init
    # 기본 설정
    $ npm init -y

    패키지 설치
    # 로컬 설치
    $ npm install <package-name>
    # 전역 설치
    $ npm install -g <package-name>
    # 개발 설치
    $ npm install --save-dev <package-name>
    # package.json의 모든 패키지 설치
    $ npm install

    패키지 제거
    # 로컬/개발 패키지 제거
    $ npm uninstall <package-name>  
    # 전역 패키지 제거
    $ npm uninstall -g <package-name>

    패키지 업데이트
    $ npm update <package-name>

    전역 설치 패키지 확인
    $ npm ls -g --depth=0

    package.json scripts 프로퍼티의 start 실행
    $ npm start
*/