




(function(){

var fName = ['철수', '민수' , '영희', '순이', '미미'];

  function hi(arg1, arg2){
    console.log(arg1 + arg2);
  }

  for ( var i = 0 ; i<5; i++){
    hi( fName[i] , "안녕하세요");
  }

  hi ('2철수','안녕하세요');
  hi ('2민수','안녕하세요');
  hi ('2영희','안녕하세요');
  hi ('2순이','안녕하세요');
  hi ('2미미','안녕하세요');

// hi(fName[1], "안녕하세요");
})();



(function(){

var fName = ['철수', '민수' , '영희', '순이', '미미'];
var fAge = ['30', '35' , '21', '36', '12'];
var fSex = ['남', '남' , '여', '여', '여'];
var fHeight = ['160cm', '155cm' , '145cm', '199cm', '176cm'];
var fArea = ['서울', '수원' , '강원', '경기', '광주'];

  function hi(arg1, arg2, arg3, arg4, arg5){
    console.log('이름',':'+ arg1);
    console.log('나이',':'+ arg2);
    console.log('성별',':'+ arg3);
    console.log('신장',':'+ arg4);
    console.log('지역',':'+ arg5);
  }

  for ( var i = 0 ; i<5; i++){
    hi( fName[i] , fAge[i] , fSex[i], fHeight[i], fArea[i]);

  }

  hi ('2철수','30','남','160m','서울');
  hi ('2민수','35','남','155m','수원');
  hi ('2영희','21','여','145m','강원');
  hi ('2순이','36','여','199m','경기');
  hi ('2미미','12','여','176m','광주');




  for ( var j = 0 ; j<5; j++){
    hi( fData[j] , fName[j]);
    hi( fData[j] , fAge[j]);
    hi( fData[j] , fAge[j]);
    hi( fData[j] , fSex[j]);
    hi( fData[j] , fHeight[j]);
    hi( fData[j] , fArea[j]);
  }



})();
