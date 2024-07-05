/*var 버튼 = $('.tab-button');

버튼.eq(0).on('click', function(){
  버튼.removeClass('orange');
  버튼.eq(0).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(0).addClass('show');
})

버튼.eq(1).on('click', function(){
    버튼.removeClass('orange');
    버튼.eq(1).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
  })


  버튼.eq(2).on('click', function(){
    버튼.removeClass('orange');
    버튼.eq(2).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
  })*/


var car2 = { name: '소나타', price: [50000, 30000, 40000] };
  document.querySelector('.car-title').innerHTML = car2.price[0]

var 버튼 = $('.tab-button');

function 탭열기(변수){
  버튼.removeClass('orange');
  버튼.eq(변수).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(변수).addClass('show');
}

