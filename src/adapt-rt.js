Liferay.Loader.define("portlet-dll@1.0.0/adapt-rt", ['module', 'exports', 'require'], function (module, exports, require) {
	var define = undefined;
	var PATH_CONTEXT = Liferay.ThemeDisplay.getPathContext();

	function adaptStaticURL(url) {
		return PATH_CONTEXT + "/o/portlet-dll-1.0.0/portlet-dll/" + url;
	}

	module.exports = {
		adaptStaticURL
	};
});