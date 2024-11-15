$(document).ready(function () {
    $('.color-slick').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 6,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 372,
                settings: {
                    arrow: false,
                    slidesToShow: 5,
                }
            }
        ]
    });

    $('.slider').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 804,
                settings: {
                    
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 399,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
