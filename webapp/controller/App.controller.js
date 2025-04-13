sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
], function (Controller, MessageToast) {
  "use strict";
  return Controller.extend("dw.ui5.walkthrough.controller.App", {
    onSayHelloPress: function (oEvent) {
        // alert("Hello World!");
        MessageToast.show("Hello World!");
    }
  });
});