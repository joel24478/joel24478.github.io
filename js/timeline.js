jQuery(document).ready(function($) {

    var timeline_block = $('.timeline-block');
    offset = 0.8;

    //hide timeline blocks that are not inview
    hideBlocks(timeline_block, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function() {
        (!window.requestAnimationFrame) ? setTimeout(function() { showBlocks(timeline_block, offset); }, 100): window.requestAnimationFrame(function() { showBlocks(timeline_block, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function() {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function() {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-img').hasClass('is-hidden')) && $(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }

})