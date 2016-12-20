'use strict';

require('./jquery-global.js');

require('picturefill');

require('js-cookie');

var _pageSections = require('./modules/page-sections');

// jQuery globals
$(document).ready(function () {

    // Init
    (0, _pageSections.pageSections)();
});

// Modules


// Vendor scripts