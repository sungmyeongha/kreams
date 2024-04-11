$(document).ready(function(){
    ////////////////////////////////사업자 버튼 누를때 
    let kreams_txt = 0;
    $('.side_imf').click(function(){
        $('.kreams_txt1').toggle()
        
        if (kreams_txt % 2 == 0) {
            $('.side_imf').eq(0).text('사업자 정보 ∨')
        }
        else if (kreams_txt % 2 == 1){
            $('.side_imf').eq(0).text('사업자 정보 ∧')
        }
        kreams_txt++
    })
})