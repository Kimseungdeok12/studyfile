document.querySelector('.navbar-toggler').addEventListener('click', function(){
    document.querySelector('.list-group').classList.toggle('show')
});

document.querySelector('#login').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('show-modal')
});

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show-modal')
});

$('form').on('submit', function(e){

    if (document.getElementById('email').value == '') {
        e.preventDefault();
        alert('아이디 입력하쇼');
    }

    if (!/\S+@\S+\.\S+/.test(document.getElementById('email').value)){
        alert('이메일 아님') 
        e.preventDefault();
    }
});

$('form').on('submit', function(e){
var password = document.getElementById('psward').value;

// 비밀번호가 비어있는지 확인
if (password.length === 0) {
e.preventDefault();
alert('비번 입력하쇼');
return;
}

// 비밀번호 길이가 6자 이상인지 확인
if (password.length <= 6) {
e.preventDefault();
alert('비번은 6개 이상이여야함');
return;
}

// 대문자가 있는지 확인
if (!/[A-Z]/.test(password)) {
e.preventDefault();
alert('대문자가 없는 비밀번호입니다.');
return;
}
});

var cot = 0 ;

$('.badge').on('click', function() {
cot = cot + 1;
if (cot % 2 == 1) {
$('.badge').html('Light 🔄');
}
else {
  $('.badge').html('Dark 🔄');
}
});

var count = 5;

setInterval(function(){
 count -= 1;
 if (count >= 0){
 document.querySelector('#num').innerHTML = count;
 } 
 else {
    $('.alert').hide();
 }
}, 1000);


var 지금사진 = 0

$(document).ready(function() {
$('.slide-1').click(function() {
  지금사진 = 1
  $('.slide-container').css('transform', 'translateX(0vw)');
});
});

$(document).ready(function() {
$('.slide-2').click(function() {
 지금사진 = 2
  $('.slide-container').css('transform', 'translateX(-100vw)');
});
});

$(document).ready(function() {
$('.slide-3').click(function() {
  지금사진 = 3
  $('.slide-container').css('transform', 'translateX(-200vw)');
});
});


$('.next').click(function() {

지금사진 += 1

if ( 지금사진 % 3 == 1) {
  $('.slide-container').css('transform', 'translateX(0vw)');
}
if ( 지금사진 % 3 == 2) {
  $('.slide-container').css('transform', 'translateX(-100vw)');
}
if ( 지금사진 % 3 == 0) {
  $('.slide-container').css('transform', 'translateX(-200vw)');
}
});


window.addEventListener('scroll', function(){
if (window.scrollY >= 100) {
  $('.navbar-brand').css('font-size', '20px');
}

else {
  $('.navbar-brand').css('font-size', '30px');
}
})

document.querySelector('.lorem').addEventListener('scroll', function(){

var 스크롤양 = document.querySelector('.lorem').scrollTop;
var 실제높이 = document.querySelector('.lorem').scrollHeight;
var 높이 = document.querySelector('.lorem').clientHeight;
if (스크롤양 + 높이 > 실제높이 - 10) {
  alert('다읽음')
}
})

document.querySelector('.black-bg').addEventListener('click',function(e){
if (e.target ==  document.querySelector('.black-bg')){
document.querySelector('.black-bg').classList.remove('show-modal')}
})
