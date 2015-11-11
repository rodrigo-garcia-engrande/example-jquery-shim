define([
	"jquery", "alert", "jquery.alpha", "jquery.beta"
], function ($, Alert) {
	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
	$(function () {
		$('body').alpha().beta();
		Alert('hola');
	});
});
