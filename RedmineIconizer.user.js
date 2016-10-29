// ==UserScript==
// @name         RedmineIconizer
// @namespace    https://github.com/suterma/
// @version      0.104
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
// 0.104 Added Priority support
// ---------------------------------------
(function () {
  'use strict';
  
  // ---------------------------------------
  //Set classes according to existing element class and content
  // ---------------------------------------
  
  //Tracker table header items
  $('th a:contains(Tracker)').parent().addClass('tracker');
  
  //Tracker table data items
  $('td.tracker:contains(Defect)').addClass('icon tracker-defect');
  $('td.tracker:contains(Bug)').addClass('icon tracker-defect');
  $('td.tracker:contains(Feature)').addClass('icon tracker-feature');
  $('td.tracker:contains(Patch)').addClass('icon tracker-patch');
  $('td.tracker:contains(Task)').addClass('icon tracker-task');
  
  //Status table header items
  $('th a:contains(Status)').parent().addClass('status');
  
  //Status table data items (in German)
  $('td.status:contains(in Arbeit)').addClass('icon status-progress');
  $('td.status:contains(neu)').addClass('icon status-new');
  $('td.status:contains(gelöst / umgesetzt)').addClass('icon status-resolved');
  $('td.status:contains(zurückgewiesen / abgebrochen)').addClass('icon status-rejected');
  $('td.status:contains(abgeschlossen)').addClass('icon status-closed');
  
  //Status table data items (in English)
  $('td.status:contains(New)').addClass('icon status-new');
  $('td.status:contains(Needs feedback)').addClass('icon status-needsfeedback');
  $('td.status:contains(Confirmed)').addClass('icon status-confirmed');
  $('td.status:contains(Resolved)').addClass('icon status-resolved');
  $('td.status:contains(Closed)').addClass('icon status-closed');
  $('td.status:contains(Reopened)').addClass('icon status-reopened');
  
  
  //Priority table header items
  $('th a:contains(Priority)').parent().addClass('priority');
  
  //Priority table data items (in German)
  $('td.priority:contains(tief)').addClass('icon priority-low');
  $('td.priority:contains(normal)').addClass('icon priority-normal');
  $('td.priority:contains(hoch)').addClass('icon priority-high');
  $('td.priority:contains(dringend)').addClass('icon priority-urgent');
  $('td.priority:contains(sofort)').addClass('icon priority-immediate');
  
  //Priority table data items (in English)
  $('td.priority:contains(Low)').addClass('icon priority-low');
  $('td.priority:contains(Normal)').addClass('icon priority-normal');
  $('td.priority:contains(High)').addClass('icon priority-high');
  $('td.priority:contains(Urgent)').addClass('icon priority-urgent');
  $('td.priority:contains(Immediate)').addClass('icon priority-immediate');
  
  //Add styles to actually show icons according to the set CSS classes
  //TODO does not work $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://raw.githubusercontent.com/suterma/RedmineIconizer/master/RedmineIconizer.userstyle.css') );
}) ();
