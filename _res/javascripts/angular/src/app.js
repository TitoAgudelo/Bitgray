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