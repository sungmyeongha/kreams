$(document).ready(function(){
    $('.header_bottom_msg').eq(0).css({
        fontWeight: 900 }).addClass('under_bar'); 

        $('.search_box_msg').eq(0).css({
            fontWeight: 900
        })
                /*한칸 씩 배너 이동하기.*/
                let bang_sty = 0;
                let sty_box_length = $('.styling_img_in').length;
                let sty_w = $('.styling_img_in').outerWidth() + 20;
        
                for (let i = 0; i < sty_box_length; i++) {
                    $('.styling_img_in').eq(i).css({ 
                        left:sty_w * i
                    })
                    
        
                }

        // 클릭시 방 바꾸기 
    
        $('.style_left').click(function(){
            btn_init()
            $('.styling_img_in').eq((bang_sty - 1) % sty_box_length).animate({
                left: -sty_w
            }, 0, 'linear')
    
            
            $('.styling_img_in').animate({
                left: `+=${sty_w}`
            }, 500, 'linear') 
            
            bang_sty-=1;
        })
    
        $('.style_right').click(function(){
            btn_init()
            $('.styling_img_in').animate({
                left: `-=${sty_w}`
            }, 500, 'linear') 
    
            $('.styling_img_in').eq(bang_sty % sty_box_length).animate({
                left: sty_w * (sty_box_length - 1)
            }, 0, 'linear')
    
            bang_sty+=1;
        })
    
    
        function btn_init() {
            $('.style_btn').css({pointerEvents: 'none'})
            setTimeout(function(){
                $('.style_btn').css({pointerEvents: 'auto'})
            }, 500)
        }
    
            $(window).resize(function(){
            let sty_w =  $('.styling_img_in').outerWidth() + 20
        
            for(let i=0; i<sty_box_length; i++) {
                $('.styling_img_in').eq(i).css({left: sty_w * i})
            }
            bang = 0;
        });



// 버튼 내리면 안보이다가 맨위에서만 보이기
        $(window).scroll(function(){
            if ( $(window).scrollTop() != 0) {
                $('.top_buttom').css({
                    display: 'block'
                })
            }
            else(
                $('.top_buttom').css({
                    display: 'none'
                })
            )
            
        })
    })