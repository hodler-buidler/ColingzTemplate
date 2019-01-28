/**
 * @fileOverview Travel memory slider setttings
 * @namespace ColingzTemplate\ScriptsSettings\Slick
 */

// Events to adjust slider to be responsive
window.addEventListener('load', adjustTravelMemorySlider);
window.addEventListener('resize', () => {
    adjustTravelMemorySlider();

    // There's a problem with height after window resizing, this thing solves it.
    $(travelMemorySlider.selector).slick('slickNext');
});

const travelMemorySlider = {
    selector: '.js-travel-memory__slider'
};

$(travelMemorySlider.selector).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "8vw",
    appendArrows: $(travelMemorySlider.selector+'-controls'),
    prevArrow: $('.js-travel-memory__prev'),
    nextArrow: $('.js-travel-memory__next')
});

/**
 * Makes slider responsive
 * @return {Void}
 */
function adjustTravelMemorySlider() {
    Main.responsiveOrientation(new Map([
        [{width: 1000, height: 1400}, () => {
            $(travelMemorySlider.selector).slick("slickSetOption", "slidesToShow", 1, true);
        }],
        [{width: 1000, height: 750}, () => {
            $(travelMemorySlider.selector).slick("slickSetOption", "slidesToShow", 2, true);
        }],
        [0, () => {
            $(travelMemorySlider.selector).slick("slickSetOption", "slidesToShow", 3, true);
        }]
    ]));
}