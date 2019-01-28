/**
 * @fileOverview Timeline sliders setttings
 * @namespace ColingzTemplate\ScriptsSettings\Slick
 */

// Events to adjust sliders to be responsive
window.addEventListener('load', adjustTimelineSlider);
window.addEventListener('resize', adjustTimelineSlider);

/*
 * maxSlidesToShow - Default value of how many slides are visible to user
 */
const timelineSlider = {
    selector: '.js-timeline__years-slider',
    maxSlidesToShow: 7
};

const achievementSlider = {
    selector: '.js-timeline__year-achievement-slider'
};

let slidesTimelineToShow = getNumSlidesToShow(timelineSlider.maxSlidesToShow);

// Initializing slider
$(achievementSlider.selector).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: timelineSlider.selector,
});
$(timelineSlider.selector).slick({
    slidesToShow: slidesTimelineToShow,
    adaptiveHeight: true,
    slidesToScroll: 1,
    centerPadding: "0px",
    asNavFor: achievementSlider.selector,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    easing: "ease-in-out"
});

/**
 * Calculating how many slides it's needed to show to user
 * @param  {Number} maxNumSlidesToShowTimeline
 * @return {Number} Number of slides to show
 */
function getNumSlidesToShow(maxNumSlidesToShowTimeline) {
    // Getting num of slides
    const SLIDES_TIMELINE_NUM = $('.js-timeline__year-slide').length;

    // This variable would store the num of slides that is possible to show currently
    let slidesTimelineToShow;

    /*
     * If we have less or equal slides than default, so we should perform
     * certain operations to calculate appropriate num of slides to show.
     */
    if (SLIDES_TIMELINE_NUM <= maxNumSlidesToShowTimeline) {
        // We can't show 6 slides simultenously if we only have 6 of them (example).
        // To make carousel work, we should keep at least one slide hidden.
        slidesTimelineToShow = SLIDES_TIMELINE_NUM - 1;

        // Num of slides should be odd, because otherwise UI would be a shown wrong
        if (slidesTimelineToShow % 2 == 0) slidesTimelineToShow--;
    }
    // If num of slides higher than default value, 
    // than we could easily set default as num of slides to show now.
    else slidesTimelineToShow = maxNumSlidesToShowTimeline;

    return slidesTimelineToShow;
}

/**
 * Makes slider responsive
 * @return {Void}
 */
function adjustTimelineSlider() {
    Main.responsiveOrientation(new Map([
        [{width: 1000, height: 1400}, () => {
            $(timelineSlider.selector)
            .slick("slickSetOption", "slidesToShow", getNumSlidesToShow(5), true);
        }],
        [0, () => {
            $(timelineSlider.selector)
            .slick("slickSetOption", "slidesToShow", getNumSlidesToShow(timelineSlider.maxSlidesToShow), true);
        }]
    ]));
}