/*
    프록래밍은 변수를 통해 값을 저장하고 참조하며 연산자로 값을 연산, 평가하고 조건문과 반복문에 의한 프름제어로 데이터의 흐름을 제어하고 함수로 재상용이 가능한 구문의 집함을 만들어 객체, 배열 등으로 자료를 구조화하는 것이다.
    변수는 값의 위치(주소)를 기억하는 저장소이다. 값의 위치란 값이 위차하고 있는 메모리 상의 주소를 의미한다.
    즉 변수란 값이 위차하고 있는 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 명명한 식별자 이다.
    메모리에 값을 저장하기 위해서는 먼저 메모리 공간을 확보해야할 메모리의 크기를 알아야 한다.
    이는 값의 종류에 따라 확보해야할 메모리의 크기가 다르기 때문이다. 
    이때 값의 종류, 즉 데이터의 종류를 데이터타입 이라한다.

    자바스크립트는 동적 타입 언어이다. 변수의 타입 지정 없이 값이 할당되는 과정에서 
    자동으로 변수의 타입이 결정된다. 
    즉 변수는 고정된 타입이 없다. 따라서 같은 변수에 여러 타입의 값을 자유롭게 할당 할 수 있다.
*/

var str = 'hello'
var num = 1
var bool = true
var foo = 'string'

console.log(typeof foo)
foo = 1
console.log(typeof foo)

/*
    데이터 타입
    데이터 타입은 프로그래밍 언어에서 사용할 수 있는 데이터의 종류를 말한다.
    코드에서 사용되는 모든 데이터는 메모리에 저장하고 참조할 수 있어야 한다.
    데이터 타입은 데이터를 메모리에 저장할 때 확보해야 하는 메ㅗ링 공간의 크기와 할당 할 수 있는 유효한 값에 대한 정보
    그리고 메모리에 저장되어 있는 2진수 데이터를 어떻게 해석할 지에 대한 정보를 컴퓨터와 개발자에게 제공한다. 

    원시타입
        boolean
        null
        undefined
        number
        string
        symbol
    객체타입
        object
    
    예를 들어 숫자 타입 1과 문자열 타입 '1'은 비슷하게 보이지만 다른 타입의 값이다.
    숫자 타입의 값은 주로 산술 연산을 위해 만들지만 문자열 타입의 값은 주로 텍스트로 출력하기 위해 만든다.
    이처럼 개발자는 명확한 의도를 가지고 타입을 구별하여 값을 만들것이고 자바스크립트 엔진은 타입을 구별하여 값을 취급할 것이다.

    원시 타입
    원시 타입의 값은 변경 불가능한 값이며 값에 의한 전달이다.

    1. number
    자바슼립트는 독특하게 하나의 숫자 타입만 존재한다. 
*/
var integer = 10
var double = 10.12
var negative = -20
var binary = 0b0100001
var octal = 0o101
var hex = 0x41
console.log(binary)
console.log(octal)
console.log(hex)
console.log(binary === octal)
console.log(octal === hex)

/*
    string
    문자열 타입은 텍스트 데이터를 나타내는데 사용된다.
    전세계의 문자를 표현할 수 있다. 문자열은 작은 따옴표 또는 큰 따옴표 안에 텍스트를 넣어 생성한다.
    가장 일반적인 표기법은 작은 따옴표를 사용하는 것이다.   
*/
var str = "string"
str = 'string'
str = `string`

str = "큰따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다."
str = '작은따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.'

/*
    C와 같은 언어와는 다르게 자바스크립트의 문자열은 원시 타입이며 변경 불가능 하다.
    이것은 한 번 문자열이 생서되면 그 문자열을 변경할 수 없다는 것을 의미한다.  
*/
var str = 'Hello'
str = 'world'
/*
    첫번째 구문이 실행되면 메모리에 문자열 'hello'가 생성되고 str은 메모리에 생성된 문자열 'hello'의 메모리 주소를 가리킨다.
    그리고 두번째 구문이 실행되면 이전에 생성된 문자열 'hello'을 수정하는 것이 아니라 새로운 문자열 'world'를 메모리에 생성하고
    식별자 str은 이것을 가리킨다. 문자열 'hello', 'world'는 모두 메뢰에 존재하고 있다.
    변수 str은 문자열 'hello'를 가리키고 있다가 문자열 'world'를 가리키도록 변경되었을뿐이다.   
*/
var str = 'string'
// 문자열은 유사배열이다.
for (var i = 0; i < str.length; i++) {
    console.log(str[i])
}
// 문자열을 변경할 수 없다.
str[0] = 'S'
console.log(str)
/*
    문자열은 배열처럼 인덱스를 통해 접근할 수 있다. 이와 같은 특성을 갖는 데이터를 유사 배열이라 한다.
    str[0] = 'S' 처럼 이미 생성된 문자열의 일부 문자를 변경해도 반영되지 않는다. 
    한번 생성된 문자열은 read only로서 변경할 수 없다. 
    그러나 새로운 문자열을 재할당하는 것은 물론 가능하다. 이는 기존 문자열을 변경하는 것이 아니라
    새로운 문자열을 새롭게 할당하는 것이기 때문이다.   
*/
var str = 'string'
console.log(str)

str = 'String'
console.log(str)

str = str + ' test'
console.log(str)

str = str.substring(0, 3)
console.log(str)

str = str.toUpperCase()
console.log(str)

/*
    Boolean
    불리언 타입의 값은 논리적 참, 거짓 나타내는 true 와 false 뿐이다.   
*/
var foo = true
var bar = false

// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
console.log(typeof foo)
console.log(typeof bar)

/*
    불리언 타입의 값은 참과 거짓으로 구분되는 조건에 의해 프로그램의 흐름을 제어하는 조건문에서 자주 사용한다.
    비어있는 문자열과 null, undefined, 숫자 0은 false로 간주된다.   
*/

/*
    undefined
    undefined 타입의 값은 undefined가 유일하다. 
    선언 이후 값을 할당하지 않는 변수는 undefined 값을 가진다.
    즉 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 undefined가 반환된다.
    이는 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이루어질 때까지 빈 상태로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화하기 때문이다.   
*/
var foo
console.log(foo)
/*
    이처럼 undefined는 개발자가 의도적으로 할당한 값이 아니라 자바스크립트 엔진에 의해 초기화된 값이다.
    변수를 참조해을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는 변수라는 것을 개발자가 간파할수 있다.
    자바스크립트 엔진이 변수 초기화에 사용하는 이 값을 만약 개발자가 마음대로 할당한다면 undefined의 본래의 취지와 어긋날뿐더러
    혼란을 줄 수 있으므로 권장하지 않는다. 
    그럼 변수의 값이 없다는 것을 명시하고 싶은경우는 null을 할당한다.  
*/

/*
    null
    null타입의 값은 null이 유일하다. 자바스크립트는 대소문자를 구별하므로 null은 NULL과 다르다.
    프로그래밍 언어에서 null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다.
    이는 변수가 기억하는 메모리 어드레스의 참조 정보를 제거하는 것을 의미하며 자바스크립트 엔진은 누구도 참조하지 않는 메모리 영역에 가바지 컬렉션을 수행할 것이다.  
*/
var foo = 'Lee'
foo = null

/*
    또는 함수가 호출되었으나 유효한 값을 반환할 수 없는경우 명식적으로 null을 반환하기도 한다.
    조건에 부합하는 html요소를 검색해 반환하는 Document.querySelector()는 조건에 부합하는 HTML요소를 검색할 수 없는 경우
    null을 반환한다.  
*/
var element = document.querySelector('.myElem')
// HTML 문서에 myElem 클래스를 갖는 요소가 없다면 null을 반환한다.
console.log(element)
/*
    타입을 나타내는 문자열을 반환하는 typeof 연산자로 null값을 연산해보면 null이 아닌 object가 나온다.
    이는 자바스크립트의 설계상의 오류이다.  
*/
var foo = null
console.log(typeof foo)

console.log(foo === null) // true
console.log(typeof foo === null) // false

/*
    symbol
    symbol은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
    심폴은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키 를 만들기 위해 사용한다.
    심볼은 symbol 함수를 호출해 생성한다.
    이때 생성된 심볼 값은 다른 심볼 값들과 다른 유일한 심볼 값이다.   
*/
var key = Symbol('key')
console.log(typeof key) // symbol

var obj = {}
obj[key] = 'value'
console.log(obj[key]) // value