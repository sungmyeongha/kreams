$(document).ready(function(){

    
/////////////////// 서치창 누르기///////////////////////////////////////////
function mini_search() {
    if($(window).width() <= 960){    
        $('.search_logo').click(function(){
            $('.search_banner').css({
                display:'none'
            })
            $('#wrap').css({
                display:'block'
            })
        })
    }
    else{
        $('.search_logo').click(function(){
            $('.search_banner').css({
                display:'block'
            })
            $('#wrap').css({
                display:'none'
            })
        })
                
        $('.out_btn').click(function(){
            $('.search_banner').css({
                display:'none'
            })
            $('#wrap').css({
                display:'block'
            })
        })
    }
}
    mini_search()

    $(window).resize(function(){
    mini_search()
    })



    $('.x').click(function(){
        $('.mini_search_txt').val('');
    })

})


