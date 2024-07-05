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
어레이.sort(function(a, b) {
  return a - b});
console.log(어레이);