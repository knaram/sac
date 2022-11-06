//햄버거 메뉴 토글
function menuToggle() {
    if($('#menu').hasClass('open')){
        $('#menu').removeClass('open');
        $('html').removeClass('lock');
    }else {
        $('#menu').addClass('open');
        $('html').addClass('lock');
    }
}

//모달 열기
function openModal(e) {  
    var modalId = e;
    $('.modal-wrap[data-id=' + modalId + ']').show();
}

//모달 닫기
function closeModal() { 
    $(event.target).parent().parent().hide();
}

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

    // 비밀번호 보기/숨기기
    $('.btn-show-pw').click(function(){
        var targetIpt = $(this).parent().find('.ipt-txt');
        console.log(targetIpt.attr('type'))
        if(targetIpt.attr('type') == 'password'){
            targetIpt.attr('type', 'text');
        }else if(targetIpt.attr('type') == 'text'){
            targetIpt.attr('type', 'password');
        }
    })

    //아코디언 열기/닫기
    $('.list.accordion .tit').click(function(){
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        }else {
            $(this).parent().addClass('open');
        }
    })
})
