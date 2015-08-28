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

// ctrls.controller('ShotListCtrl', function ($scope, PagedResult, $routeParams){
// 	var list = $routeParams.list;

// 	$scope.list = new PagedResult('shots', list, 'shots').loadNextPage();

// });

// ctrls.controller('ShotCtrl', function ($scope, $http, $routeParams , dribbble, PagedResult){
// 	var id = $routeParams.id;

// 	$scope.shot = dribbble.shot(id)
// 	$scope.comments = new PagedResult('comments', id, 'comments').loadNextPage();
// });