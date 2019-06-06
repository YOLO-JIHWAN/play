$(function () {
    $('#london_sub>li:nth-child(1)').click(function () {
        $('#london_text,#london_text1,#imgbox1_l,#imgbox2_l,#imgbox3_l').animate({
            top: wh * 1.5,
            display: 'none'
        },1000);
        $('#london_bouquets').animate({
            display:'block',
            top:wh*0.25,
            left:ww*0.15
        },1500);
    });
});
