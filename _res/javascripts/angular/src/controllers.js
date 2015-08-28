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
  		var user = $scope.user;
  		var pass = $scope.password;
  		if(user || pass) {

			if (user) {
				$scope.validateUser(user);
			} 
			if (pass) {
				$scope.validatePassword(pass);
			}
			if(user && pass) {
				$scope.validateUserPass(user, pass);
			}

		} else {
			$scope.username = true;
			$scope.pass = true;
		}

  	};

  	$scope.validateUser =  function (user) {
		if (user.length < 5) {
			$scope.username = true;
		} else {
			$scope.username = false;
		}
	}

	$scope.validatePassword = function(pass) {
		if (pass.length < 1 || pass.match(/\d+/g) == null) {
			$scope.pass = true;
		} else {
			$scope.pass = false;
		}
	}

	$scope.validateUserPass =  function(user, pass) {
		if (user.length >= 5 && pass.length > 1 && pass.match(/\d+/g) != null) {
			$scope.username = false;
			$scope.pass = false;
			window.location.href = '/';
		} else {
			$scope.validateUser(user);
			$scope.validatePassword(pass);
		}
	}
}]);
