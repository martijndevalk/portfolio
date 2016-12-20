// jQuery globals
import './jquery-global.js';

// Vendor scripts
import 'picturefill';
import 'js-cookie';

// Modules
import { pageSections } from './modules/page-sections';

$(document).ready(() => {

    // Init
    pageSections();

});
