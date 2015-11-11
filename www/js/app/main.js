define([
	"jquery.beta", "jquery.alpha", "jquery"
], function (a, $) {
	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.

	/**
	 * 
	 * @param {string} text
	 * @returns {undefined}
	 */
	var Alert = function (text) {
		alert(text);
	};

	$(function () {
		$('body').alpha().beta();
		Alert('hola')
	});
});
