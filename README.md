# RedmineIconizer
A [Greasemonkey](https://www.greasespot.net/) / [Tampermonkey](https://tampermonkey.net/) user script, that adds CSS classes for icons to items on a Redmine issues list. These items usually only have a textual identifier on some columns. With this script, the columns "Tracker", "Status" and "Priority" get icon CSS classes according to their values.

This works on default installations in English and German, for well-known values. To actually display the icons, you will need appropriate CSS styles. These are provided here too, but they require separate installation.

# How to install
1. Install a suitable user script processor for your browser first. 

   For Firefox you can use [Greasemonkey](https://www.greasespot.net/), for Chrome you can use [Tampermonkey](https://tampermonkey.net/).
1. Navigate to the [raw link for RedmineIconizer.user.js](https://github.com/suterma/RedmineIconizer/raw/master/RedmineIconizer.user.js) and load it.
1. Accept the installation.
1. Now, add the CSS to the page
   * Either by changing your Redmine installation and including the CSS provided here
   * Or by using a browser extension like the [Stylish Browser Plugin from userstyles.org](https://userstyles.org/).
     For Stylish, you find the CSS at https://userstyles.org/styles/135193/redmineiconizer.

# Usage
After installation, you can use it on the [Redmine site](https://redmine.org/projects/redmine/issues) for example, or of course on your own Redmine installation. If your installation runs on a subdomain with the term "redmine" in it, it will work out of the box, otherwise you need to adapt the include URL value to your needs.
