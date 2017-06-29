

/*

  함수 정의 방법 3가지

  1. function 함수 이름 (){} : 기본 방법


Ex) function foo(){
      console.log('Hello');
    }

  2. var 변수이름(함수이름) = function(){} : 함수 리터럴 방법(변수에 함수를 저장하는 형태)

Ex) var myFunction = function(){
      console.log('Hello');
    }

  3. function(){} : 익명 함수(이름 없는 함수) - 다른 함수의 매개 인자로 넣어

  Ex) externalFunction( 'name', function(){
        console.log('Hello');
      });


즉시 실행함수에 사용

익명함수  function(){}
()();

즉시실행함수  (function(){ })();
 */
