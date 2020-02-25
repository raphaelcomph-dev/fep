angular.module("app").component("footerComponent", {
	templateUrl: "/src/app/components/footer/component_footer.html",
	controller: [FooterComponent]
});

function FooterComponent() {
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
