const portletDll = require("./portlet-dll/portlet-dll.js");
var _ADAPT_RT_ = require("./adapt-rt");

(function (exports) {
  exports.portletDll = portletDll(null, _ADAPT_RT_);
}(window.Arena = window.Arena || {}));


