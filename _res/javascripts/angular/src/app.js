"use strict";

var app = angular.module('bitgray', [
		'ngRoute',
		'bitgray.controllers'
	]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
    		templateUrl: "/partials/home.html"
		})
		.when("/abilities", {
    		controller: "AbilitiesCtrl",
    		templateUrl: "/partials/abilities.html"
		})
		.when("/form", {
    		controller: "FormCtrl",
    		templateUrl: "/partials/form.html"
		})
    	.otherwise({
    		redirectTo: "/"
    	});

    $locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);

// app.run(['$rootScope', '$http',
// 	function($rootScope, $http) {
// 			var jsonList = '/stubs/inbox.json';
//          	$http.get(jsonList).success(function(data){
//      			$rootScope.activities = data;
//          	});
// 		}
// 	]);