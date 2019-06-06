$(document).ready(function() {
        ww = $(window).width();
        ww_in = ww * 0.95;
        s_but_h = $('.s_but').height();

        function layout() {
            $('#wrap').css({
                width: ww_in
            });
            $('#s_banner').css({
                width: ww_in,
                height: ww_in * 0.319
            });
            $('#s_img_wrap').css({
                width: ww_in * 3
            });
            $('#s_img_wrap>li').css({
                width: ww_in
            });
            $('#num_but').css({
                width: ww_in * 0.03,
                height: ww_in * 0.01,
                marginLeft: -(ww_in * 0.03) / 2
            });
                    
            $('.s_but').css({
               fontSize:2+'vw',
//            marginTop:s_but_h*0.1
            });
            $('#kalis_but').css({
                width: ww_in * 0.16,
                height: ww_in * 0.025,
                top: ww_in * 0.228,
                left: ww_in * 0.786
            });
            $('#evan_but').css({
                width: ww_in * 0.16,
                height: ww_in * 0.025,
                top: ww_in * 0.19,
                left: ww_in * 0.6
            });
            $('#wolf_but').css({
                width: ww_in * 0.16,
                height: ww_in * 0.025,
                top: ww_in * 0.171,
                left: ww_in * 0.318
            });
            $('#weekly').css({
                height: ww_in * 0.32
            });
            $('.weekly_in').css({
                width: ww_in * 0.2285,
                marginRight: ww_in * 0.0742
            });
            $('.weekly_in').eq(0).css({
                marginLeft: ww_in * 0.0828
            });
            $('#select').css({
                height: ww_in * 0.5
            });
            $('#select_in').css({
                marginLeft: ww_in * 0.0828,
                width: ww_in * 0.8285
            });
            $('#t_and_b').css({
                height: ww_in * 0.6
            });
            $('#company').css({
                height: ww_in * 0.38
            });
            footbut_h = $('.footbut').height();
        $('.footbut').css({
           fontSize:1.5+'vw',
            lineHeight:footbut_h+'px'
        });
            $('#header').css({
                width: ww_in
            });
            header = $('#header').height();
            $('#logo').css({
                width: header * 0.7,
                marginTop: header * 0.15
            });
            $('#tab_menu').css({
                width: ww * 0.05
            });
        }
        layout();
        $('#weeklycolor_1>li:nth-child(2)').on({
            mouseenter: function() {
                $('#astor_img').attr('src', 'images/weekly/astor_black.png');
            },
            mouseout: function() {
                $('#astor_img').attr('src', 'images/weekly/astor_white.png');
            }

        });

        $('#weeklycolor_1>li:nth-child(3)').on({
            mouseenter: function() {
                $('#astor_img').attr('src', 'images/weekly/astor_green.png');
            },
            mouseout: function() {
                $('#astor_img').attr('src', 'images/weekly/astor_white.png');
            }

        });

        $('#weeklycolor_2>li:nth-child(2)').on({
            mouseenter: function() {
                $('#evan_img').attr('src', 'images/weekly/evan_gray.png');
            },
            mouseout: function() {
                $('#evan_img').attr('src', 'images/weekly/evan-white.png');
            }
        });

        $('#weeklycolor_3>li:nth-child(2)').on({
            mouseenter: function() {
                $('#grind_img').attr('src', 'images/weekly/grind_blue.png');
            },
            mouseout: function() {
                $('#grind_img').attr('src', 'images/weekly/grind_black.png');
            }
        });
        
        $('#select_p').on({
           mouseenter:function(){
             $(this).attr('src','images/select/select_product_1.png');  
           },
            mouseout:function(){
                $(this).attr('src','images/select/select_product.png');
            }
        });


        var visual = $('#s_img_wrap > li');
        var button = $('#num_but > li');
        var current = 0;
        var setIntervalId;

        button.on({
            click: function() {
                var tg = $(this);
                var i = tg.index();

                button.removeClass('on');
                tg.addClass('on');

                move(i);
            }
        });

        $('#s_banner').on({
            mouseover: function() {
                clearInterval(setIntervalId);
            },
            mouseout: function() {
                timer();
            }
        });

        timer();

        function timer() {
            setIntervalId = setInterval(function() {
                var n = current + 1;
                if (n == 3) {
                    n = 0;
                }

                button.eq(n).trigger('click');
            }, 5000);
        }

        function move(i) {
            if (current == i) return;
            //현재 버튼의 index()값과 다음 버튼의 index()값이 같은지 비교

            var currentEl = visual.eq(current); //현재 버튼의 i값을 일치하는 메인이미지를 변수에 대입
            var nextEl = visual.eq(i); //다음 버튼의 i값을 일치하는 메인이미지를 변수에 대입

            currentEl.css({
                left: 0
            }).stop().animate({
                left: "-100%"
            });
            nextEl.css({
                left: "100%"
            }).stop().animate({
                left: 0
            });

            current = i;
        }
        
       $('#footer_top>li:nth-child(1) a').on({
          mouseenter:function(){
              $('#footer_top>li:nth-child(1)>img').attr('src','images/footer/mail_1.png');
          },
           mouseout:function(){
               $('#footer_top>li:nth-child(1)>img').attr('src','images/footer/mail.png');
           }
       });
        
        $('#footer_top>li:nth-child(2) a').on({
          mouseenter:function(){
              $('#footer_top>li:nth-child(2)>img').attr('src','images/footer/store_1.png');
          },
           mouseout:function(){
               $('#footer_top>li:nth-child(2)>img').attr('src','images/footer/store.png');
           }
       });
        $('#footer_top>li:nth-child(3) a').on({
          mouseenter:function(){
              $('#footer_top>li:nth-child(3)>img').attr('src','images/footer/delivery_1.png');
          },
           mouseout:function(){
               $('#footer_top>li:nth-child(3)>img').attr('src','images/footer/delivery.png');
           }
       });
        
        $('#tab_menu_box>li').eq(0).find('img').on({
            mouseenter:function(){
                $(this).attr('src', 'images/tab/search-red.png');
            },
            mouseleave:function(){
                $(this).attr('src','images/tab/search.png');
            }
        });
        $('#tab_menu_box>li').eq(1).find('img').on({
            mouseenter:function(){
                $(this).attr('src', 'images/tab/logo-red.png');
            },
            mouseleave:function(){
                $(this).attr('src','images/tab/logo.png');
            }
        });
        $('#tab_menu_box>li').eq(2).find('img').on({
            mouseenter:function(){
                $(this).attr('src', 'images/tab/login-red.png');
            },
            mouseleave:function(){
                $(this).attr('src','images/tab/login.png');
            }
        });
        
         $('#tab_menu_box>li').eq(3).find('img').on({
            mouseenter:function(){
                $(this).attr('src', 'images/tab/favorite-red.png');
            },
            mouseleave:function(){
                $(this).attr('src','images/tab/favorite.png');
            }
        });
         $('#tab_menu_box>li').eq(4).find('img').on({
            mouseenter:function(){
                $(this).attr('src', 'images/tab/shopping-cart-red.png');
            },
            mouseleave:function(){
                $(this).attr('src','images/tab/shopping-cart.png');
            }
        });
        
         $('#tab_menu_box>li').eq(5).find('img').on({
            mouseenter:function(){
                $(this).attr('src', 'images/tab/call-center-red.png');
            },
            mouseleave:function(){
                $(this).attr('src','images/tab/call-center.png');
            }
        });
        
        $(window).resize(function() {
            ww = $(window).width();
            ww_in = ww * 0.95;
            s_but_h = $('.s_but').height();
            footbut_h = $('.footbut').height();
            layout();
        });
    }); //end