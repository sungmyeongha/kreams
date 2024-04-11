
////////////////////////링크 걸어주기 전에 터지지 않기 위해 넣어주는 함수////////////////
let cateNo = get_info_from_url("cate_no")
let itemNo = get_info_from_url("item_no")
item_list(cateNo, itemNo)
mini_header(cateNo, itemNo)
header_list(cateNo, itemNo)

$(document).ready(function(){
        ////////////따라다니는 창///////////
        let h_height = $('.main_mid_imfor').offset().top +  $('.main_mid_imfor').height() - 100;

        function header_scroll() {
            let w_h = $(window).scrollTop();
                if($(window).width() > 960) {    

                }
                else if ($(window).width() <= 960 && 765 < $(window).width()){
                        if (h_height <= w_h) {
                            $('.header').css({
                                height:'135px',
                            })
                            $('.header_bottom').css({
                                display:'flex',
                                background: 'white'
                            })
                            $('.content').css({
                                padding: '135px 40px 0'
                            })
                        }
                        else {
                            $('.header').css({
                                height:'75px'
                            })
                            $('.header_bottom').css({
                                display:'none'
                            })
                            $('.content').css({
                                padding: '75px 40px 0'
                            })
                        }
                }
                else if($(window).width() < 765 ){
                        $('.header').css({
                            height:'75px',
                        })
                        $('.header_bottom').css({
                            display:'none',
                            background: 'none'
                        })
                        $('.content').css({
                            padding: '75px 0 0'
                        })
                }
        }
        header_scroll()


        $(window).scroll(function(){
            header_scroll()
        })  
    
            /////////////////사이즈표 
            $('.all_size').click(function(){
                $('.size_list').css({
                    display:'block'
                })
                $('body').css({
                    overflow: 'hidden'
                })
            })

            $('.btn_x').click(function(){
                $('.size_list').css({
                    display:'none'
                })
                $('body').css({
                    overflow: 'auto'
                })
            })

            $('.search_box_msg').eq(0).css({
                fontWeight: 'normal'
            })
}) 