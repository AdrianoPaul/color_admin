/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.1.1
Version: 1.2.0
Author: Sean Ngu
Website: http://www.sean-theme.com/color-admin-v1.2/
*/

var handleBootstrapWizards = function() {
	"use strict";
	$("#wizard").bwizard();
};

var FormWizard = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleBootstrapWizards();
        }
    };
}();