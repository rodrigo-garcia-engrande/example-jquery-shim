/**
 * AMD compatible Alert class to trigger alerts
 * @param {type} text
 * @returns {undefined}
 */
define([
], function () {
	var Alert = function (text) {
		alert(text);
	};

	return Alert;
});