$(document).ready(function(){
    
    //검색어 지우기 버튼 숨기기/보이기
    $('.ipt-search .ipt-txt').bind("focus change keyup paste", function(){
        if($(this).val() == ''){
            $(this).parent().find('.btn-del').hide();
        }else {
            $(this).parent().find('.btn-del').show();
        }
        
    })

    // 검색어 지우기
    $('.ipt-search .btn-del').click(function(){
        $(this).parent().find('.ipt-txt').val('').focus();
        $(this).hide();
    })

})