/**
 * @fileOverview Main file. Supposed that it would be required at each page.
 * @namespace ColingzTemplate
 */

/**
 * Contains widely used methods through project
 */
class Main {
    /**
     * Provides opportunity to commit actions depend on different orientations of screen.
     * Helps to build responsivity.
     *
     * @example <caption>You can call it like this:</caption>
     * Main.responsiveOrientation(new Map([
     *   [{width: 1000, height: 1400}, () => {
     *       doSmth();
     *   }],
     *   [{width: 1000, height: 750}, () => {
     *       doSmthAnother();
     *   }],
     *   [0, () => {
     *       okDoSmthELSE();
     *   }]
     * ]));
     * 
     * 
     * @param  {Map}  data Map which consists of {width: Num, height: Num} => actionCallback. OR 0 => actionCallback.
     * {width: Num, height: Num} - describes orientation, actionCallback - action that should be performed in case of 
     * reaching the orientation. 0 - if no particular orientations were reached, in that case it's
     * possible to commit some action.
     * @param  {Callback|Boolean} $endActionCallback Action at the end of adjusting element.
     * @return {Void}
     */
    static responsiveOrientation(data, $endActionCallback = false) {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        let currentWindowRatio = windowWidth / windowHeight;

        // Represents if any given screen ratio were reached
        let hasConditionBeenFulfilled = false;

        // orientationData = {width: Num, height: Num} (refering to particular screen ratio)
        // OR
        // orientationData = 0 (else, not matching with particular screen ratio)
        // actionCallback - action that should be performed in case of reaching appropriate screen ratio
        for (let [orientationData, actionCallback] of data) {
            // You can interpret this as long chain of if () ....
            
            let breakpointWindowRatio = orientationData.width / orientationData.height;
            if (currentWindowRatio <= breakpointWindowRatio) {
                actionCallback(); 
                hasConditionBeenFulfilled = true;
                break;
            }
        }
        // And this one as ELSE (after long chain of ifs ()...)
        if (!hasConditionBeenFulfilled) {
            let actionCallback = data.get(0); // means else
            actionCallback();
        }

        if ($endActionCallback !== false) $endActionCallback();
    }
}