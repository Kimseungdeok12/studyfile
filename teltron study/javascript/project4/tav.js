var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

function 카드넣기 (x) {
    document.querySelectorAll('.card-price')[x].innerHTML = '가격 : ' + products[x].price
    document.querySelectorAll('.card-title')[x].innerHTML = products[x].title
}

for (i = 0; i < 3; i++) {
    카드넣기(i)
}

var pants = [28, 30, 32, 34]
var shirt = ['S', 'M', 'L', 'XL', 'XXL']

$('.form-select').eq(0).on('input', function(){

  var value = $('.form-select').eq(0).val();
  if (value == '셔츠') {
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    shirt.forEach(function(r){
      $('.form-select').eq(1).append(`<option>${r}</option>`)
    })
  }
  else if (value == '바지'){
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    pants.forEach(function(e){
      $('.form-select').eq(1).append(`<option>${e}</option>`)
    })
  }
  else if (value == '모자'){
    $('.form-select').eq(1).addClass('form-hide')
  }

});

products.forEach((a, i)=>{
      var 템플릿 = 
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
        <button class = 'buy'>구매</button>
      </div>`;
      $('.row').append(템플릿)
});

var clicker = 0

$('#more').click(function(){
  
  clicker += 1  

  function 더보기누르기 (ㄷㄷ) {
    $.get(ㄷㄷ).done((data)=>{
      data.forEach((a, i)=>{
        var 템플릿 = 
        `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${data[i].title}</h5>
          <p>가격 : ${data[i].price}</p>
          <button>구매</button>
        </div>`;
        $('.row').append(템플릿)
      });
    })
  }

  if(clicker == 1) {
    더보기누르기 ('https://codingapple1.github.io/js/more1.json');
  }

  if(clicker == 2) {
    더보기누르기 ('https://codingapple1.github.io/js/more2.json');

    document.querySelector('#more').remove();
  }
})

var 어레이 = [7, 3, 5, 2, 40]
var 어레이2 = ['b', 'a', 'e', 'd', 'c'];
어레이2.sort(function(a, b) {
  return a > b ? 1 : -1;
});
console.log(어레이2);

var 새어레이 = 어레이.filter(function(a) {
  return a < 8
});
console.log(새어레이);

$('#price').click(function(){

  products.sort(function(a, b){
    return a.price - b.price
  });

  $('.row').html('');

  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button>구매</button>
    </div>`;
    $('.row').append(템플릿)
  })
}); 

$('#namesort').click(function(){

  products.sort(function(a, b) {
    if (a.title < b.title) return 1;
    if (a.title > b.title) return -1;
  });

  $('.row').html('');

  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button>구매</button>
    </div>`;
    $('.row').append(템플릿)
  })
}); 

$('#60000이하').click(function(){

  var 만원이하 = products.filter(function(a){
    return a.price > 59999
  });

  $('.row').html('');

  만원이하.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${만원이하[i].title}</h5>
      <p>가격 : ${만원이하[i].price}</p>
      <button>구매</button>
    </div>`;
    $('.row').append(템플릿)
  })
}); 

var arr = [1, 2, 4];
var newarr = JSON.stringify(arr)
localStorage.setItem('num', newarr)

$('.buy').click(function(e) {
  var title = $(e.target).siblings('h5').text();

  if(localStorage.getItem('cart') != null) {
    var 꺼낸거 = JSON.parse(localStorage.cart);
    꺼낸거.push(title);
    localStorage.setItem('cart',JSON.stringify(꺼낸거));
  }
  else {
  localStorage.setItem('cart',JSON.stringify([title]))
  }
});


