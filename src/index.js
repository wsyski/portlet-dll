const portletDll = require("./portlet-dll/portlet-dll.js");

(function (exports) {
  exports.portletDll = portletDll();
}(window.Arena = window.Arena || {}));


