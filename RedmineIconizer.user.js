// ==UserScript==
// @name         RedmineIconizer
// @namespace    https://github.com/suterma/
// @version      0.101
// @description  Adds icons to Redmine identifier HTML elements, and additionally applies CSS classes to the identifier elements.
// @copyright    marcel@codeministry.ch, GPLv3 License
// @author       marcel@codeministry.ch
// TODO change the include value to your needs. The given example requires simply a redmine subdomain.
// @include      /^https?:\/\/(\S+\.)*redmine\.\S+$/
// @grant        none
// @downloadURL  https://github.com/suterma/RedmineIconizer/raw/master/RedmineIconizer.user.js
// @updateURL    https://github.com/suterma/RedmineIconizer/raw/master/RedmineIconizer.user.js
// ==/UserScript==

// ---------------------------------------
// Changelog
// 0.101 URL Matching
// ---------------------------------------

(function() {
    'use strict';

    var reportrows = document.getElementsByClassName("row");
    for (var i = 0; i < reportrows.length; i++) {
        var reportrow = reportrows[i];
        if (reportrow.innerHTML.indexOf('<td align="center">Y</td>') != -1) {
                reportrow.style.backgroundColor="#FFCACA";
                reportrow.class = "requestblocked";
            }
        if (reportrow.innerHTML.indexOf('<td align="center">N</td>') != -1) {
                reportrow.style.backgroundColor="#DAF7A6";
                reportrow.class = "requestallowed";
            }
    }
})();
