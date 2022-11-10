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
    if($('.modal-wrap[data-id=' + modalId + '] .modal').hasClass('toast')){
        $('.modal-wrap[data-id=' + modalId + ']').fadeIn();
        setTimeout(function(){
            $('.modal-wrap[data-id=' + modalId + ']').fadeOut();
        }, 3000);
    }else {
        $('.modal-wrap[data-id=' + modalId + ']').show();
    }
}

//모달 닫기
function closeModal() { 
    $(event.target).parent().parent().parent().hide();
}

//모두 체크
function checkAll() {
    var ipt = $(event.target).siblings('input').attr('id');
        iptName = $(event.target).siblings('input').attr('name'),
        iptVal = $(event.target).siblings('input').prop('checked');
    if(iptVal == false){        
        $('input[name="'+iptName+'"]:not("#'+ipt+'")').prop('checked', true);
    }else if(iptVal != false) {
        $('input[name="'+iptName+'"]:not("#'+ipt+'")').prop('checked', false);
    }
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

    $('.chk-list input').change(function(){
        var total = $(this).parent().parent().find('input').length - 1;
		var checked = $(this).parent().parent().find('li:not(".checkAll") input:checked').length;
        //console.log(total, checked);
        if(total == checked) {
            $(this).parent().parent().find('li:first-child input').prop('checked', true);
        }else {
            $(this).parent().parent().find('li:first-child input').prop('checked', false);
        }
    })

})
