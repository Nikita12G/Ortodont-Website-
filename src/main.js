$(document).ready(function(){
    // Handler for click and touch events on links with the 'data-scroll' attribute
    $('a[data-scroll]').on('click touchstart', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        var targetId = $(this).attr('data-scroll');
        var targetOffset = $(targetId).offset().top;

        // Scrolling animation
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });

    // Lightbox options configuration
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices' : true,
        'disableScrolling' : true
    });
});
