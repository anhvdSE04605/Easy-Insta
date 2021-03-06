'use strict';

jQuery(document).ready(function ($) {
    var btn_html = '<a class="action-button2" style="display: none;">⤵</a>';
    var $btn = $(btn_html);
    $btn.click(function (event) {
        event.preventDefault();
        chrome.runtime.sendMessage({
            action: 'download',
            source: 'facebook',
            url: $(this).attr('href')
        });
    });
    $(document).on('mouseover', '._24o4', function () {
        //mouse over img or video
        //adding btn
        var $img = $(this).find('img[class="_5i4g _5sjv img"]');
        var href = $img.attr('src');
        if ($(this).find('.action-button2').length === 0) {
            $(this).prepend($btn);
        }
        $btn.addClass('easyinsta-video');
        $btn.attr({
            'href': href,
            'title': 'Download this ' + ($btn.hasClass('easyinsta-image') ? 'Image' : 'Video')
        });
        $btn.show();
    }).on('mouseout', '._n9', function () {
        //mouse out display div
        $(this).find('.action-button2').hide();
    }).on('mouseover', 'button[aria-label~="Button"]', function (event) {
        //mouse over next/back button
        event.stopPropagation();
    });
});
//# sourceMappingURL=main.js.map