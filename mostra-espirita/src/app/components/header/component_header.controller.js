angular.module("app").component("headerComponent", {
	templateUrl: "/src/app/components/header/component_header.html",
	controller: [HeaderController]
});

function HeaderController() {
	var $ctrl = this;

	//variables declaration
	//$ctrl.someVariable;

	//Controller methods
	//#region
	//$ctrl.someFunction = function(params) {}
	//#endregion

	//private methods
	//#region
	//function _otherFunction(params) {}
	//#endregion
}
