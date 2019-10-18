/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"plant/test2/planttest2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});