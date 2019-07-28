(function(){
	'use strict';

	angular.module('webviewer')
			.controller('mainController', mainController);

	mainController.$inject = ['$scope', 'thumbnailService'];

	function mainController($scope, thumbnailService){

		$scope.AddElement = function(){

			var target = angular.element(document.getElementById('contentFrame'));
			
			var newEle = thumbnailService.addElement('contentFrame');			
			
		}
	};

})();