angular.module("app").component("scheduleComponent", {
	templateUrl: "/src/app/components/schedule/component_schedule.html",
	controller: [ScheduleController]
});

function ScheduleController() {
	var $ctrl = this;

	//variables declaration
	$ctrl.activeTab = 1;

	//Controller methods
	//#region
	$ctrl.changeTab = function(tabId) {
		$ctrl.activeTab = tabId;
	};
	//#endregion

	//private methods
	//#region
	//function _otherFunction(params) {}
	//#endregion
}
