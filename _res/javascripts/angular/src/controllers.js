'use strict';

var ctrls =  angular.module('bitgray.controllers', []);

ctrls.controller('AbilitiesCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('stubs/abilities.json').success(function(data) {
    	$scope.abilities = data;
	});

	$scope.addAbility =  function () {
		$http.get('stubs/newAbilities.json').success(function(data) {
    		var item = data[Math.floor(Math.random()*data.length)];
    		$scope.abilities.push(item);
		});
	};
}]);

ctrls.controller('FormCtrl', ['$scope', '$http',
  function ($scope, $http) {

  	$scope.validate = function() {

  	};
}]);

ctrls.controller('ClockCtrl', ['$scope', '$http',
  function ($scope, $http) {

}]);