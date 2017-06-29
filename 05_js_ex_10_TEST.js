/**
 *
 * 매개 변수( parameter / argument ) - 함수와 함수사이, 함수와 전역사이에 객체를 전달할 때 사용하는 변수
 *
 * function 함수이름( 매개변수 ){
 *
 *    실행 구문에서 매개변수 값을 사용 가능
 *
 * }
 *
 * */

var a = 10;
var b = 20 ;
var c = 0;

function foo(){
  c= a+b;
  console.log("Num1 " + c);
}

console.log("Num2 " + c); // foo function안의 지역 변수이기 때문에   c= a+b;의 값이 출력되지 않는다.

foo(); // foo의 지역 변수의 값을 출력하는 명령임으로   c= a+b;의 값이 출력이 된다.

c = 50; // 전역으로 선언했기 때문에 , 어디서든지 접근이 가능해서 변수의 값을 수정할 수 있음

console.log("Num3 " + c); // 위의 지역변수는 무시되고 17번째줄 값이 대입되어 수정된 값이 출력된다.



var a = 10;

function temp() {
  var b = 20;
  var c = 0;
  c = a + b;
}

function test() {
  console.log("Num4 " + c); // 출력이 불가능 함
}

test();





//학원 내용
// (function(){})(); : 즉시실행함수 - 구역별로 패키징시킬때 사용함

// 전역 변수를 사용하는 것은 좋은 방법이 아니다.

(function(){

  var aa = 10;
  var bb = 20;
  var cc = 0;

  function qoo(){
    cc = aa + bb;
  }

  qoo();

  cc = 50; // 전역으로 선언했기 때문에, 어디서든지 접근이 가능해서 변수의 값을 수정할 수 있음

  console.log(cc);

})();

// 지역 변수만 사용하면 불편하다.

(function(){

  function temp(){
    var aa = 10;
    var bb = 20;
    var cc = 0;

    cc = aa + bb;
    console.log(cc);
  }

  function test(){

    cc = cc + 50;
    // 출력이 불가능 함
    // 만약 출력을 하려면, 변수 선언과 a+b 계산을 중복해서 처리해야 함
    console.log(cc);

  }

  temp();

  //test();

})();

// 매개 변수를 사용해서 코딩하기

(function(){

  function def(){

    var aa = 10;
    var bb = 20;
    var cc = 0;

    cc = aa + bb;
    console.log(c);

    myFunction(cc);

  }

  function myFunction(arg){

    arg = arg + 50;
    console.log(arg);

  }

  def();

})();

// 함수 리턴값

(function(){

  function calc(){

    var aa = 10;
    var bb = 20;
    var cc = 0;
    var dd = '';

    cc = aa + bb;

    console.log( '결과값은... ' + returnFunction(c) );

  }

  function returnFunction(arg){

    arg = arg + 50;
    return arg;

  }

  calc();

})();
