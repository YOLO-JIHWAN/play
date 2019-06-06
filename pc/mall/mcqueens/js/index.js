$(document).ready(function() {
        ww = $(window).width();
        wh = $(window).height();

        function layout() {
            $('#wrap').css({
                width: ww,
                height: wh * 10
            }); //wrap
            $('.page').css({
                height: wh
            }); //page
            quick_w = $('#quickmenu').width();
            $('#quickmenu').css({
                marginLeft: -quick_w / 2
            });
            $('#quickmenu>li img').css({
                width: ww * 0.02,
                height: ww * 0.02
            });
            quick_img_h = $('#quickmenu>li img').height();
            $('#quickmenu>li>a').css({
                lineHeight: quick_img_h + 'px'
            });
            mscroll = $('#main_scroll').width();
            $('#main_scroll').css({
                marginLeft: -mscroll / 2
            }); //scroll
            pscroll = $('.page_scroll').width();
            $('.page_scroll').css({
                marginLeft: -pscroll / 2
            }); //page_scroll
            hiddenbg = $('.hiddenbg').width();
            hiddenbg_h = $('.hiddenbg').height();
            $('.hiddenbg').css({
                height: hiddenbg / 2,
                marginLeft: -hiddenbg / 2
            });
            hiddenbut = $('.hiddenbut').width();
            $('.hiddenbut').css({
                marginTop: hiddenbut / 3,
                marginLeft: -hiddenbut / 2
            });
            $('.hiddenmenu>li').css({
                lineHeight: wh * 0.055 + 'px'
            });
            title_w = $('.title').width();
            title_h = $('.title').height();
            $('.title').css({
                lineHeight: title_h + 'px',
                marginLeft: -title_w / 2,
                top: hiddenbg_h
            });

            letter_w = $('#newsletterbox').width();
            letter_h = $('#newsletterbox').height();
            $('#newsletterbox').css({
                marginLeft: -letter_w / 2,
                marginTop: -letter_h / 2
            });
            sub_h = $('.submenu>li').height();
            $('.submenu>li>a').css({
                lineHeight: sub_h + 'px'
            });
            $('.submenu>li div').css({
                marginTop: sub_h / 2
            });
            //london start

            //london finish
            inbox_w = $('#news_inbox').width();
            inbox_h = $('#news_inbox').height();
            $('#news_inbox').css({
                marginTop: -inbox_h / 2,
                marginLeft: -inbox_w / 2
            });
            top_scroll_w = $('#top_scroll').width();
            $('#top_scroll').css({
                marginLeft: -top_scroll_w / 2
            });

        } //layout
        layout();

        //퀵메뉴
        $('#quickmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            i = $(this).attr('data-index');

            $('html,body').animate({
                scrollTop: wh * i + wh
            });
        }); //퀵메뉴 이동
        
        //히든메뉴
        $('.hiddenbg,.hiddenbut').on({
            mouseenter: function() {
                $('.hiddenbut>img').attr('src', 'images/0_Menu/hiddenbut_1.png');
            },
            mouseout: function() {
                $('.hiddenbut>img').attr('src', 'images/0_Menu/hiddenbut.png');
            }
        });
        $('.hiddenbut').on({
            click: function() {
                $('.hiddenmenu').animate({
                    height: wh * 0.11
                });
            }
        });

        $('.hiddenmenu').mouseleave(function() {
            $('.hiddenmenu').animate({
                height: 0
            });
        });
        $('.hiddenmenu>li').click(function(){
            $('.hiddenmenu').animate({
               height:0 
            });
        });
        //히든메뉴 클릭시 각 페이지로 이동
        $('#londonmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#nationmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#coursemenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#bookingmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#aboutmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#hotelmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#weddingmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#findmenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });
        $('#lettermenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            j = $(this).attr(
                'data-index');
                $('html,body').animate({
                    scrollTop: wh * j +wh
                });
            
        });

        //히든메뉴 끝

        //메인 슬라이드 갤러리 시작
        function auto() {

            setInterval(function() {
                $('#mainslide').animate({
                    left: -ww
                }, 5000, function() {
                    $('#mainslide').css('left', 0).find('li:first').appendTo('#mainslide');
                });
            }, 5000);
        }
        //메인 슬라이드 갤러리 끝
        auto();

        //휠다운
        //마우스 휠 움직임에 따라 하나의 페이지씩 이동
        wh = $(window).height();
        $('.page').each(function(index) {
            $(this).attr('data-index', index);
            page_num = $(this).attr('data-index');
        }).on('mousewheel', function(e, delta) {
            page_num = $(this).attr('data-index');
            //마우스 휠을 올렸을때
            if (delta > 0) {

                var prev = $(this).prev().offset().top;

                $('html,body').stop().animate({
                    scrollTop: prev
                }, 800, 'swing');
            }
            //마우스 휠을 내렸을때
            else if (delta < 0) {
                var next = $(this).next().offset().top;
                $('html,body').stop().animate({
                    scrollTop: next
                }, 800, 'swing');
            }
        });

        //휠다운 끝
//스크롤 이미지 클릭시
//        $('.page_scroll>img').click(function(){
//           $('html,body').animate({
//              scrollTop: 
//           });
//        });
        


        //퀵메뉴 끝

        //스크롤 이벤트
        $(window).scroll(function() {
            sct = $(window).scrollTop();

            if (sct >= 0 && sct < wh) {

            } else if (sct >= wh && sct < wh * 2) { //london
                $('#londonbar').animate({
                    width: ww * 1.5,
                    height: wh * 0.4,
                    top: wh * 0.3,
                    left: -ww * 0.35
                }, 500);
                $('#imgbox1_l').animate({
                    left: ww * 0.55,
                    top: wh * 0.63,
                    opacity: 1
                }, 1500);
                $('#imgbox2_l').animate({
                    left: ww * 0.6,
                    top: wh * 0.15,
                    opacity: 1
                }, 1500);
                $('#imgbox3_l').animate({
                    left: ww * 0.24,
                    top: wh * 0.2777,
                    opacity: 1
                }, 1500);
                $('#london_sub').animate({
                    width: ww * 0.3,
                    opacity: 1
                }, 1000);
                $('#london_text').animate({
                   top:wh*0.48,
                    left:ww*0.425
                });
                $('#london_text1').animate({
                   top:wh*0.22,
                    left:ww*0.25
                });
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 2 && sct < wh * 3) { //nation
                $('#nationbar').animate({
                    width: ww * 1.5,
                    height: wh * 0.4,
                    top: wh * 0.47,
                    right: -ww * 0.3,
                }, 500);
                $('#imgbox1_n').animate({
                    left: ww * 0.64,
                    top: wh * 0.52,
                    opacity: 1
                }, 800);
                $('#imgbox2_n').animate({
                    left: ww * 0.5089,
                    top: wh * 0.13,
                    opacity: 1
                }, 800);
                $('#imgbox3_n').animate({
                    left: ww * 0.347,
                    top: wh * 0.2777,
                    opacity: 1
                }, 800);
                $('#nation_sub').animate({
                    width: ww * 0.3,
                    opacity: 1
                }, 1000);
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 3 && sct < wh * 4) { //course
                $('#coursebar').animate({
                    width: ww * 1.5,
                    height: wh * 0.4,
                    top: wh * 0.38,
                    left: -ww * 0.35
                }, 500);
                $('#imgbox1_c').animate({
                    left: ww * 0.57,
                    top: wh * 0.47,
                    opacity: 1
                }, 800);
                $('#imgbox2_c').animate({
                    left: ww * 0.50,
                    top: wh * 0.3047,
                    opacity: 1
                }, 800);
                $('#imgbox3_c').animate({
                    left: ww * 0.16,
                    top: wh * 0.14,
                    opacity: 1
                }, 800);
                $('#course_sub').animate({
                    width: ww * 0.3,
                    opacity: 1
                }, 1000);
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 4 && sct < wh * 5) { //booking
                $('#bookingbar').animate({
                    width: ww * 1.5,
                    height: wh * 0.4,
                    top: wh * 0.47,
                    right: -ww * 0.3,
                }, 500);
                $('#imgbox1_b').animate({
                    left: ww * 0.2,
                    top: wh * 0.17,
                    opacity: 1
                }, 800);
                $('#imgbox2_b').animate({
                    left: ww * 0.58,
                    top: wh * 0.56,
                    opacity: 1
                }, 800);
                $('#booking_sub').animate({
                    width: ww * 0.3,
                    opacity: 1
                }, 1000);
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 5 && sct < wh * 6) { //about
                $('#aboutbar').animate({
                    width: ww * 1.5,
                    height: wh * 0.4,
                    top: wh * 0.5,
                    left: -ww * 0.35
                }, 500);
                $('#imgbox1_a').animate({
                    left: ww * 0.2,
                    top: wh * 0.12,
                    opacity: 1
                }, 800);
                $('#imgbox2_a').animate({
                    left: ww * 0.48,
                    top: wh * 0.17,
                    opacity: 1
                }, 800);
                $('#about_sub').animate({
                    width: ww * 0.3,
                    opacity: 1
                }, 1000);
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 6 && sct < wh * 7) { //hotel
                $('#hotelbar').animate({
                   opacity:1 
                },500);

                $('#imgbox1_h').animate({
                    left: ww * 0.24,
                    top: wh * 0.14,
                    opacity: 1
                }, 800);
                $('#imgbox2_h').animate({
                    left: ww * 0.537,
                    top: wh * 0.26,
                    opacity: 1
                }, 800);
                $('#imgbox3_h').animate({
                    left: ww * 0.273,
                    top: wh * 0.528,
                    opacity: 1
                }, 800);
                $('#imgbox4_h').animate({
                    left: ww * 0.48,
                    top: wh * 0.598,
                    opacity: 1
                }, 800);
                $('#hotel_sub').animate({
                    width: ww * 0.3,
                    opacity: 1
                }, 1000);
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 7 && sct < wh * 8) { //wedding
                $('#weddingbar').animate({
                   opacity:1 
                },500);
                $('#wedding_text1').animate({
                    opacity:1
                },1000);
                $('#imgbox1_w').animate({
                    left: ww * 0.28,
                    top: wh * 0.17,
                    opacity: 1
                }, 800);
                $('#imgbox2_w').animate({
                    left: ww * 0.57,
                    top: wh * 0.15,
                    opacity: 1
                }, 800);
                $('#imgbox3_w').animate({
                    left: ww * 0.07,
                    top: wh * 0.5,
                    opacity: 1
                }, 800);
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 8 && sct < wh * 9) { //find us
                $('#imgbox1_f').animate({
                    left: ww * 0.15,
                    top: wh * 0.19,
                    opacity: 1
                }, 800);
                $('#imgbox2_f').animate({
                    left: ww * 0.3,
                    top: wh * 0.54,
                    opacity: 1
                }, 800);
                $('#imgbox3_f').animate({
                    left: ww * 0.59,
                    top: wh * 0.5,
                    opacity: 1
                }, 800);
                $('#imgbox4_f').animate({
                    left: ww * 0.38,
                    top: wh * 0.13,
                    opacity: 1
                }, 800);
                $('#find_text,#find_text>div,#find_text1').animate({
                   opacity:1 
                },1000);
                $('.submenu>li div').css({
                width: '5%'
            });
            } else if (sct >= wh * 9 && sct < wh * 10) { //newsletter
                $('#imgbox1_letter').animate({
                    left: ww * 0.04,
                    top: wh * 0.43,
                    opacity: 1
                }, 800);
                $('#imgbox2_letter').animate({
                    left: ww * 0.66,
                    top: wh * 0.54,
                    opacity: 1
                }, 800);
                $('#imgbox3_letter').animate({
                    left: ww * 0.62,
                    top: wh * 0.13,
                    opacity: 1
                }, 800);
                $('#newsletterbox,#letter_text1').animate({
                   opacity:1 
                },1200);
                $('.submenu>li div').css({
                width: '5%'
            });
            }
        });
        //스크롤 이벤트 끝


        //로고 이벤트
        $('.logo').click(function() {
            $('html,body').animate({
                scrollTop: wh * 0
            });
        });
        $('#top_scroll').click(function() {
            $('html,body').animate({
                scrollTop: wh * 0
            });
        });
        //로고 이벤트 끝

        //서브 메뉴
        $('.submenu>li').each(function(index) {
            $(this).attr('data-index', index);
        }).click(function() {
            var i = $(this).attr('data-index');
            $('.submenu>li div').css({
                width: '5%'
            });
            $('.submenu>li div').eq(i).css({
                width: '10%'
            });
        });
        //서브 메뉴 끝
        //리사이즈 시작
        $(window).resize(function() {
            ww = $(window).width();
            wh = $(window).height();
            layout();
        }); //리사이즈 끝
    }); //end