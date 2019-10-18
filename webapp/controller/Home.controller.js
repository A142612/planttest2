sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("plant.test2.planttest2.controller.Home", {
		onInit: function () {

		},
			handleValueHelpSelect: function (oEvent) {

			var sPath = oEvent.getParameter("rowContext").sPath;

			if (sPath) {
				var oSelectedItem = oEvent.getSource().getModel().getProperty(sPath);
				var sPlant = oSelectedItem.Werks;

			/*	jQuery.sap.require("jquery.sap.storage");
				jQuery.sap.storage.put("PlantID", sPlant);*/
					this.getOwnerComponent().oPropagatedProperties.oModels.passingParameters.setProperty("/selectedPlant", sPlant);

			}

		}

	});
});