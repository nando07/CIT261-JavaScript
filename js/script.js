/*eslint-env jquery*/
$(window).on('load', function () {
    "use strict";
    $('#status').fadeOut();
    $('#preloader').delay(450).fadeOut('slow');
});
$(function () {
    "use strict";
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250);

    });

});

$(function () {
    "use strict";
    $("#work-tabs").responsiveTabs({
        animation: 'slide'
    });
});

//getAccordion("#tabs",768);
