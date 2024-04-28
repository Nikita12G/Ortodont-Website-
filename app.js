$(document).ready(function(){
    // Обработчик клика по ссылкам с атрибутом data-scroll
    $('a[data-scroll]').click(function(e) {
        e.preventDefault();
        var targetId = $(this).attr('data-scroll');
        var targetOffset = $(targetId).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });
});
