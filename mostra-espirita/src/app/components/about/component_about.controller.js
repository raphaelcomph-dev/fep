angular.module("app").component("aboutComponent", {
	templateUrl: "/src/app/components/about/component_about.html",
	controller: ["$interval", AboutController]
});

function AboutController($interval) {
	var $ctrl = this;
	var START_DATE = new Date(2020, 8, 18, 18, 30);

	//variables declaration
	$interval(callAtInterval, 1000);
	function callAtInterval() {
		$ctrl.timespan = countdown(new Date(), START_DATE);
	}
	callAtInterval();

	//Controller methods
	//#region
	//$ctrl.someFunction = function(params) {}
	//#endregion

	//private methods
	//#region
	//function _otherFunction(params) {}
	//#endregion
}
