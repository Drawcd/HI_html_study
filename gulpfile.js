
// gulp를 설치하면 node_modules 폴더가 생성된다.

// gulp 초기화 : gulp 모듈 불러옴
// gulp 객체를 생성한다.
var gulp = require('gulp');

// hello world 라고 콘솔에 찍는 task
// var에서 객체를 만들고
// gulp객체의 task 함수 생성
gulp.task('hello', function () {
    return console.log('Hello World!');
});
