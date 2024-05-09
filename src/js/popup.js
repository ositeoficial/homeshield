$(function() {
    $(".eeee").click(function() {
        $(".eeee").addClass("actsss");
        $(".fadepopup").addClass("actsss");
        $(".fadepopup").removeClass("xxxc");
        $(".eeee").removeClass("xxxc");
        $(".hikj").removeClass("actss");
        $("body").removeClass("modal-show");
    });
});

$(function() {
    $('.screenLock').css({
        height: $(document).height() + "px"
    });
    $('a.order-btn').click(function() {
        $(this).closest('form').submit();
        return false;
    });
    $('.close').click(function() {
        $('.screenLock').fadeOut(300);
    })
    var flag = true;
    $(window).mouseout(function(e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.screenLock').fadeIn(300);
            flag = false;
        }
    })
});

setTimeout(function() {
    var flag = true;
    $(window).mouseout(function(e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.fadepopup, .eoxp').fadeIn(300);
            $('.eeee').fadeIn(300);
            flag = false;
        }
    })
}, 15000);

$(function() {
    $('#push_dtoej2ezey__submit').click(function() {
        alert('Ваш комментарий отправлен на модерацию');
        $('#push-comments').hide(300);
    });
});

$('.show-img').click(function(event) {
    var text = $(this).html() == 'Показать' ? 'Скрыть' : 'Показать';
    $(this).html(text);
    $(this).parent().parent().find('.shock-img').toggleClass('show');
});