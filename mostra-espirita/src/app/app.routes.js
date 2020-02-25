angular.module("app").config(configRoutes);

function configRoutes($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "/src/app/views/layouts/home.html"
	});
}
