angular.module("app").component("menuComponent", {
	templateUrl: "/src/app/components/menu/component_menu.html",
	controller: [MenuController]
});

function MenuController() {
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
