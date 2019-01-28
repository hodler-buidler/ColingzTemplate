/**
 * @fileOverview Responsible for user interaction with menu.
 * @namespace ColingzTemplate
 */

/**
 * Contains all the properties and methods to manipulate the menu.
 */
class Menu {
    constructor() {
        /**
         * Btn which is used to call actions.
         * @type {Object}
         */
        this.menuControlBtn = document.querySelector('.js-page-navigation__controls');

        /**
         * The whole navigation block (menu with controls).
         * @type {Object}
         */
        this.pageNavigation = document.querySelector('.js-page-navigation');

        /**
         * Only menu block.
         * @type {Object}
         */
        this.menuElem = document.querySelector('.js-page-navigation__menu_wrap');

        /**
         * Btn which means: "Open menu"
         * @type {Object}
         */
        this.openMenuBtn = document.querySelector('.js-page-navigation__burger');

        /**
         * Btn which means: "Close menu"
         * @type {Object}
         */
        this.closeMenuBtn = document.querySelector('.js-page-navigation__cross');

        /**
         * Current state of menu: opened/closed === true/false.
         * Default: closed.
         * @type {Boolean}
         */
        this.currentState = false;
    }

    /**
     * Getter for this.menuControlBtn
     * @return {Object}
     */
    getMenuControlBtn() {
        return this.menuControlBtn;
    }

    /**
     * Contains list of actions to perform when opening the menu.
     * @return {Void}
     */
    openMenu() {
        this.openMenuBtn.style.display = "none";
        this.closeMenuBtn.style.display = "block";
        this.menuElem.style.display = 'block';
        this.pageNavigation.style.right = '3vmin';
    }

    /**
     * Contains list of actions to perform when closing the menu.
     * @return {Void}
     */
    closeMenu() {
        this.closeMenuBtn.style.display = "none";
        this.openMenuBtn.style.display = "block";
        this.menuElem.style.display = 'none';
        this.pageNavigation.style.right = 0;
    }
    
    /**
     * Changes the current state of menu and performs visible actions to demonstrate it to user.
     * Method that should be called when event of menu manipulation happens.
     * 
     * @param  {Object} EventObject
     * @return {Void}
     */
    userAction(event) {
    	// if true(opened)
        if (this.currentState) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
        // Changing state on opposit
        this.currentState = !this.currentState;
    }
}


/*
 * Adding event listener on control btn and calling right method when event happens.
 */

let menu = new Menu;
menu.getMenuControlBtn().addEventListener('click', (event) => {
    menu.userAction(event);
});
