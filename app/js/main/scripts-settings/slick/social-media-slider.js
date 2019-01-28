/**
 * @fileOverview Social media slider setttings
 * @namespace ColingzTemplate\ScriptsSettings\Slick
 */

// Events to adjust slider to be responsive
window.addEventListener('load', adjustSocialSlider);
window.addEventListener('resize', adjustSocialSlider);

const socialMediaSlider = {
    selector: '.js-social-media-posts'
};

$(socialMediaSlider.selector).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: "social-media-posts__dots",
    customPaging: function(slider, i) {
        return '<div class="social-media-posts__dot" id="'+ i +'"></div>';
    }
});

/**
 * Makes slider responsive
 * @return {Void}
 */
function adjustSocialSlider() {
    Main.responsiveOrientation(new Map([
        [{width: 1000, height: 1000}, () => {
            $(socialMediaSlider.selector).slick("slickSetOption", "slidesToShow", 1);
            $(socialMediaSlider.selector).slick("slickSetOption", "slidesToScroll", 1, true);
        }],
        [{width: 1000, height: 650}, () => {
            $(socialMediaSlider.selector).slick("slickSetOption", "slidesToShow", 2);
            $(socialMediaSlider.selector).slick("slickSetOption", "slidesToScroll", 2, true);
        }],
        [0, () => {
            $(socialMediaSlider.selector).slick("slickSetOption", "slidesToShow", 3);
            $(socialMediaSlider.selector).slick("slickSetOption", "slidesToScroll", 3, true);
        }]
    ]));
}