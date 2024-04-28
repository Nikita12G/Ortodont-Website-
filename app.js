$(document).ready(function(){
    // Обработчик для клика по ссылкам с атрибутом data-scroll
    $('a[data-scroll]').on('click', function(e) {
        e.preventDefault(); // Предотвращение стандартного поведения ссылки
        var targetId = $(this).attr('data-scroll');
        var targetOffset = $(targetId).offset().top;

        // Анимация прокрутки
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });
});
