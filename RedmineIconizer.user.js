// ==UserScript==
// @name         RedmineIconizer
// @namespace    https://github.com/suterma/
// @version      0.103
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
// 0.103 Adding header classes
// ---------------------------------------
(function () {
  'use strict';
  
  //Set classes according to existing element class and content
  //Tracker table header items
  $('th a:contains(Tracker)').parent().addClass('tracker');
  
  //Tracker table data items
  $('td.tracker:contains(Defect)').addClass('tracker-icon tracker-defect');
  $('td.tracker:contains(Bug)').addClass('tracker-icon tracker-defect');
  $('td.tracker:contains(Feature)').addClass('tracker-icon tracker-feature');
  $('td.tracker:contains(Patch)').addClass('tracker-icon tracker-patch');
  $('td.tracker:contains(Task)').addClass('tracker-icon tracker-task');
  
  //Add styles to actually show icons according to the set CSS classes
  //TODO does not work $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://raw.githubusercontent.com/suterma/RedmineIconizer/master/RedmineIconizer.userstyle.css') );
}) ();
