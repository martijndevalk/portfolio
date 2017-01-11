// jQuery globals
import './jquery-global.js';

// Vendor scripts
import 'picturefill';
import 'js-cookie';

// Modules
import { pageSections } from './modules/page-sections';
import { splashAnim } from './modules/splash-anim';
import { beerwulfAnim } from './modules/beerwulf';

$(document).ready(() => {

    // Init
    splashAnim();
    beerwulfAnim();
    pageSections();

});
