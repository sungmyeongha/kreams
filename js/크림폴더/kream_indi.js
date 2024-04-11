$(document).ready(function(){
    const color = ['#dfe7ce','#000000' ,'#df9070', '#e9d0cf','#72c990']
                $('.main_img_box').eq(0).css({
                    zIndex:9,
                    opacity: 1,
                    backgroundColor: color[0]
                })
                let bang = 0;
                let bang_length = $('.main_img_box').length
                let timer = 500;
    
            // 인디케이터
                for(let i=0; i<bang_length; i++) {  
                $('.banner_indi').append(`<div class="banner_circle"></div>`) 
                }
                $('.banner_circle').eq(0).addClass('banner_active');
            

                    $(document).on('click', '.right_btn', function(){ 
                        slide((bang + 1) % bang_length) 
                });
            
                    $(document).on('click', '.left_btn', function(){ 
                        slide((bang - 1) % bang_length) 
                });
    
    
            function slide(c_bang) {
                    $('.btn').css({pointerEvents:'none'})
                    setTimeout(function(){
                    $('.btn').css({pointerEvents:'auto'})
                    }, timer)
    
                    $('.banner_circle').removeClass('banner_active')
                    $('.banner_circle').eq(c_bang).addClass('banner_active')
    
                    $('.main_img_box').eq(bang % bang_length).css({
                            opacity: 0,
                            transition: 'opacity 0s .5s',
                            backgroundColor: color[bang % bang_length],
                            zIndex:1
                    })
                    $('.main_img_box').eq(c_bang).css({
                        opacity: 1,
                        transition: 'opacity .5s 0s',
                        backgroundColor: color[c_bang],
                        zIndex:99
                    })
                    bang = c_bang
            }
            // 자동 돌리기
            let auto_interval;
            function auto_slide() {
                auto_interval=setInterval(function(){
                $('.right_btn').trigger('click')
                }, timer + 2000);
            }
            auto_slide()
    
            $('.main_banner').hover(function(){
                clearInterval(auto_interval)
            }, function(){
                auto_slide()
            })
    
    
    
            $('.banner_circle').click(function(){
                if($('.banner_active').index() != $(this).index()) {
                    slide($(this).index()) 
                }
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
})