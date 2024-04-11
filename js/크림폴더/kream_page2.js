$(document).ready(function(){

            /////네비 3번째 꺼 언더바
            $('.header_bottom_msg').eq(1).css({fontWeight: 900 }).addClass('under_bar'); 
            $('.header_bottom_msg').eq(0).css({fontWeight: 'normal' }).removeClass('under_bar'); 
            //////////////////서치 샵버튼 굵은색 
            $('.search_box_msg').eq(2).css({
                fontWeight: 900
            })
            $('.search_box_msg').eq(0).css({
                fontWeight: 'normal'
            })
            ///////////////////////////////////////////////////////////////////////메인에 상단에 맞춰지면 fixed  됨
                let c_top =  $('.left_main').offset().top

                $(window).scroll(function(){
                    let w_top = $(window).scrollTop() + 150
                    if($(window).width() > 765) {
                        if (w_top >= $('#footer').offset().top - $('.left_main').height()){
                            $('.left_main').css({
                                position: 'absolute',
                                top: 'auto',
                                bottom:'0px',
                                zIndex:99999999,
                            })
                        }
                        else if(w_top >= c_top){
                            $('.left_main').css({
                                position: 'fixed',
                                top:'150px',
                                zIndex:99999999,
                                background: 'white'
                            })
                            $('.right_main').css({ 
                                position: 'relative',
                                left: '200px'
                            })
                        }
                        else{
                            $('.left_main').css({
                                position: 'relative',
                                top:'0px',
                                Zindex:9,
                                background: 'white'
                            })
                            $('.right_main').css({ 
                                position: 'relative',
                                left: '0px'
                            })
                        }
                }
            })      
            $(window).resize(function() {
                if($(window).width() <= 765) {
                    $('.left_main').css({
                        position: 'relative',
                        top:'0px',
                        Zindex:9,
                        background: 'none'
                    })
                        $('.right_main').css({ 
                            position: 'relative',
                            left: '0px'
                        })
                }
            })

             //////////////////////무한스크롤 3회 반복/////
                let d_height = $('.content').height() + 150  // 문서의 높이 
                let count = 0;
                $(window).scroll(function(){
                    let s_bot = $(window).scrollTop() + $(window).height()

                        if(d_height <= s_bot) {
                            if(count <= 2) {
                            load_item (0)
                            }
                            count++
                        }
                            d_height = $('.content').height() + 150;
                })

                ///////////////////////////////////////////////////////클릭하면 왼쪽 사이드 방향이 줄어들고 늘어나고 반복

                $('.plus').eq(0).click(function(){
                    $('.category_txt > span').toggle()
                    $('.category_innner').toggle()
                })
    
                $('.plus').eq(1).click(function(){
                    $('.gender_txt > span').toggle()
                    $('.inner_gender').toggle()
                })
    
                $('.plus').eq(2).click(function(){
                    $('.color_txt > span').toggle()
                    $('.color_inner').toggle()
                })
})