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