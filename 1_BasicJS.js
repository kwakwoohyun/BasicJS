// 1. 변수 
var x
x = 6

// 2. 값 
var str = "Hello World"

/*
    리터럴
    연산에 의해 하나의 값이 될 수 있다. 

    숫자
    10.50
    2999

    문자열
    'Hello'
    'World'

    불리언
    true
    false

    null
    null

    undefined
    undefined

    객체
    { name: "LEE", gender: "male"}

    배열
    [1,2,3]

    함수
    function() {

    }
*/

/*
    데이터 타입
    
    원시타입 : number, string, boolean, null, undefined, symbol
    객체타입 : object 
*/

// Number
var num = 1001
// String
var string = 'Hello'
// Boolean
var bool = true
// null
var foo = null
// undefined
var bar;
// Object
var obj = { name: 'Kwak' }
// Array
var array = [1, 2, 3]
// function
var foo = function () {

}

/*
    연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 연산 등을 수행해 하나의 값을 만든다.  
*/

// 산술 연산자
var area = 5 + 4 // 9
// 문자열 연결 연산자
var str = "My name is " + "Kwak" // My name is Kwak
// 할당 연산자
var color = 'red' // red 
// 비교 연산자
var foo = 3 > 5 // false
// 논리 연산자
var bar = (5 > 3) && (2 < 4) // true
// 타입 연산자
var type = typeof 'Hi' // string
// 인스턴스 생성 연산자
var today = new Date() // set Dec 01 2018 00:57:19 GMT+0900

// 피연산자의 타입은 반드시 일치할 필요는 없다. 
// 이때 자바스크립트는 암묵적 타입 강제 변환을 통해 연산을 수행한다.
var foo = 1 + '10' // '110'
var bar = 1 * '10' // 10

/*
    키워드
    키워드는 수행할 동작을 규정한 것이다. 
    예를들어 var 키워드는 새로운 변수를 생성할 것을 지시한다.  
*/
// 변수 선언
var x = 5 + 6
// 함수 선언
function foo(arg) {
    return arg
}
// 반복문 선언
for (var i = 0; i < 10; i++) {

}
// 조건문 선언
if (x < 19) {

}

/*
    문
    프로그램은 컴퓨터에 의해 단계별로 수행될 명령어들의 집합이다.
    각각의 명령을 문(statement)이라 하며 문이 실행되면 무슨 일인가가 일어나게 된다. 
    문은 리터럴, 연산자, 표현식, 키워드 등으로 구성된다
*/
var x = 5
var y = 6
var z = x + y
console.log(z)

// 문은 코드블록으로 {} 그룹화 할 수 있다.
// 그룹화의 목적은 함께 실행되어져야 하는 문을 정의하기 위함이다.
// 함수
function myFunction(x, y) {
    return xy
}
// 조건문
if (x > 0) {

}
// 반복문
for (vari = 0; i < 19; i++) {

}
// 문들은 일반적으로 위에서 아래로 순서대로 실행된다. 
// 이러한 실행 순서는 조건문이나 반복문의 사용으로 제어할 수 있다.
// 이를 흐름제어라 한다. 
var time = 10;
var greeting;

if (time < 10) {
    greeting = 'Good morning'
} else if (time < 20) {
    greeting = 'Good day'
} else {
    greeting = 'Good evening'
}
console.log(greeting)

/*
    표현식
    표현식은 하나의 값으로 편가된다. 
    값, 변수, 객체의 프로퍼티, 배열의 요소, 함수 호출, 메소드 호출, 피연산자와 연산자의 조합은 모두 표현식이며
    하나의 값으로 평가된다. 
    표현식은 결국 하나의 값이 되기 때문에 다른 표현식의 일부가 되어 조금 더 복잡한 표현식을 구성할 수도 있다.
*/
5 // 5
5 * 10 // 50
5 * 10 > 10 // true

/*
    문과 표현식의 비교 
    자연어에서 문(Statement)이 마침표로 끝나는 하나의 완전한 문장 이라고 한다면 표현식은 문을 구성하는 요소이다. 
    표현식은 그자체로 하나의 문이 될 수도 있다. 
*/
// 선언문(Declaration statement)
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.
// 할당문(Assignment statement)
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.

/*
    함수 function
    함수란 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드블록이다.
    함수는 이름과 매개변수를 갖으며 필요한 때에 호출하여 코드 블록에 담긴 문들을 일괄적으로 실행할 수 있다.
*/
// 함수 정의(함수 선언문)
function square(number) {
    return number * number
}
// 함수는 호출에 의해 실행되는데 한번만 호출할 수 있는 것이 아니라 여러번 호출할 수 있다.
square(2)
// 동일한 작업을 반복적으로 숭행해야 한다면 미리 정의된 함수를 재사용하는 것이 효율적이다.

/*
    객체
    자바스크립트는 객체 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 "모든 것"이 객체이다.
    원시타입을 제외한 나머지 값들은 모두 객체이다.
    자바스크립트 객체는 키 와 값으로 구성된 프로퍼티의 집합이다.
    프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다.
    자바스크립트의 함수는 일급객체이므로 값으로 취급할 수 있다.
    프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
*/
var person = {
    name: 'Lee',
    gender: "male",
    sayHello: function () {
        console.log('Hi! My name is ' + this.name)
    }
}
console.log(typeof person)
console.log(person)
person.sayHello()

/*
    배열
    배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다.
    자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함하고 있다. 
*/
var arr = [1, 2, 3, 4, 5]
console.log(arr[1]) // 2