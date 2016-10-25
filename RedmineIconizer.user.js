// ==UserScript==
// @name         RedmineIconizer
// @namespace    https://github.com/suterma/
// @version      0.102
// @description  Adds icons to Redmine identifier HTML elements, and additionally applies CSS classes to the identifier elements. Kudos to openiconic (https://useiconic.com/open) for their icon set.
// @copyright    marcel@codeministry.ch, GPLv3 License
// @author       marcel@codeministry.ch
// TODO change the include value to your needs. The given example requires simply a redmine subdomain.
// @include      /^https?:\/\/(\S+\.)*redmine\.\S+$/
// @grant        none
// @downloadURL  https://github.com/suterma/RedmineIconizer/raw/master/RedmineIconizer.user.js
// @updateURL    https://github.com/suterma/RedmineIconizer/raw/master/RedmineIconizer.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==
// ---------------------------------------
// Changelog
// 0.101 URL Matching
// 0.102 Using basic icons
// ---------------------------------------
(function () {
  'use strict';
  
  //Set classes according to existing element class and content
  //Tracker types
  $('td.tracker:contains(Defect)').addClass('tracker-icon tracker-defect');
  $('td.tracker:contains(Bug)').addClass('tracker-icon tracker-defect');
  $('td.tracker:contains(Feature)').addClass('tracker-icon tracker-feature');
  $('td.tracker:contains(Patch)').addClass('tracker-icon tracker-patch');
  $('td.tracker:contains(Task)').addClass('tracker-icon tracker-task');
  
  //Add icons for the new classified elements
  //Unspecified icon for unknown tracker types
  $('.tracker.tracker-icon').css('background-image', 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAALJJREFUOI3V0iGLQlEQhuEHg9EVNnmTaYubZaPJYPJnCdq2b9nuzzCuXRYxiBgFQRERLeOme7xeN/nBcGBm3u/McA75esUIMxwjfvGJLMH8qYEFzolYo3nL4Csap/hANaKNSdS+bxnMo6mVU3uL2rJojXoin4XB6pqoJBo3iXwvzp+iCfLUwTYm6JaF+zgEPCwLv2Mf8KAsDOP/wBXscELtEYOXuD31Kk+guoIVUj/xbl0AzKIqmHPanHEAAAAASUVORK5CYII=")');
  
  //Specific icons for known tracker types
  //$('.tracker.tracker-defect.tracker-icon').css('background-image', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAQJJREFUOI2V0r0uRFEUBeDvmolMQVRKDyBRa7wBjegURKJUSrQaz6TQCQ0JYUIyQxQSSomfApkZo5hzOTnOTa6d7GL/rLXX2fvw1wrs4gkv2Au52raNYeI7/yF4zBA81AU38JUh6EU9Y8F/gjY6WA3NBxni/UC+ji4u4uJRNOkadxkF97iJ4sOYoMAKzjPA1E+xrOIqGzUIttBKCboVzQuYr6i1S3ATg5wcnKAf6o0o/4nnHOA9mdIM+X6U66Wg8qZrFSpSG2AzUeRS/p05BaV3MFkqmMGt0YbfIuJhMv01TL/CNMbLQsvv11zCB84i4LHRfhZDXMTgnM1hKoonMFvV/A0k+WtBkWph2wAAAABJRU5ErkJggg==)');
  //TODO does not work $('.tracker.tracker-defect.tracker-icon').css('background-image', 'url("data:image/svg+xml;<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M3.5 0c-1.19 0-1.98 1.69-1.19 2.5-.09.07-.2.14-.28.22l-1.31-.66a.5.5 0 0 0-.34-.06.5.5 0 0 0-.09.94l1.16.56c-.09.16-.19.33-.25.5h-.69a.5.5 0 0 0-.09 0 .5.5 0 1 0 .09 1h.5c0 .23.02.45.06.66l-.78.41a.5.5 0 1 0 .44.88l.66-.34c.25.46.62.85 1.03 1.09.35-.19.59-.44.59-.72v-1.44a.5.5 0 0 0 0-.09v-.81a.5.5 0 0 0 0-.22c.05-.23.26-.41.5-.41.28 0 .5.22.5.5v.88a.5.5 0 0 0 0 .09v.06a.5.5 0 0 0 0 .09v1.34c0 .27.24.53.59.72.41-.25.79-.63 1.03-1.09l.66.34a.5.5 0 1 0 .44-.88l-.78-.41c.04-.21.06-.43.06-.66h.5a.5.5 0 1 0 0-1h-.69c-.06-.17-.16-.34-.25-.5l1.16-.56a.5.5 0 0 0-.31-.94.5.5 0 0 0-.13.06l-1.31.66c-.09-.08-.19-.15-.28-.22.78-.83 0-2.5-1.19-2.5z"/></svg>")');
  //TODO does not work $('.tracker.tracker-defect.tracker-icon').css('background-image', 'url(https://raw.githubusercontent.com/iconic/open-iconic/master/svg/bug.svg)');

  //Add basic styles for the icons
  $('.tracker-icon').css('background-repeat', 'no-repeat');
  $('.tracker-icon').css('padding-left', '20px');
  $('.tracker-icon').css('background-size', '16px'); 
}) ();
