//햄버거 메뉴 토글
function menuToggle() {
    if($('#menu').hasClass('open')){
        $('#menu').removeClass('open');
        $('html').removeClass('lock');
        $('.btn-util-menu').removeClass('close');
    }else {
        $('#menu').addClass('open');
        $('html').addClass('lock');
        $('.btn-util-menu').addClass('close');
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


$(document).on('click', function(event){
    if($(window).width() > 960){
        if(!$(event.target).hasClass('nav-btn')){
            if(!$(event.target).parent().hasClass('sub-menu')){
                $('.sub-menu-wrap').removeClass('show');   
            }
        }
    }
});


$(document).ready(function(){   

    var nav  = $('.nav-btn');
    //nav
    nav.on('mouseenter', function(){
        if($(window).width() > 960){
            if($('.sub-menu-wrap').hasClass('show')){
                $(this).next('.sub-menu-wrap').removeClass('show');    
            }else {
                $(this).next('.sub-menu-wrap').addClass('show');
            }  
        }                  
    })   
    nav.on('click', function(){
        if($(window).width() <= 960){
            if($('.sub-menu-wrap').hasClass('show')){
                $(this).next('.sub-menu-wrap').removeClass('show');    
            }else {
                $(this).next('.sub-menu-wrap').addClass('show');
            }  
        }                  
    })   
    $('.sub-menu-wrap').on('mouseleave', function(){
        if($(window).width() > 960){
            $('.sub-menu-wrap').removeClass('show'); 
        }
    })

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

    //체크박스 모두 선택
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

    //셀렉트박스
    $('.select-wrap .select').change(function(){
        var txt = $(this).find('option:selected').text();
        $(this).parent().find('.select-txt').text(txt);
    })
})

