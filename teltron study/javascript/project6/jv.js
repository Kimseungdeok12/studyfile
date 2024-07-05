$(window).scroll(function() {
   var 높이 = $(window).scrollTop();

    var y = -1/500 * 높이 + 115/50
    $('.card-box').eq(0).css('opacity', y);

    var yy = 1 - (높이 - 900)/6000  
    $('.card-box').eq(0).css('transform', `scale( ${yy} )`);
});

//900 1200 1400 1500