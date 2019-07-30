(function(){
	'use strict';
	angular.module('webviewer')
			.service('thumbnailService', thumbnailService);

	function thumbnailService(){
		var service = this;
		
		service.addElement = function(divId){
			
			var target = angular.element(document.getElementById(divId)); // main container

			// columns element for rom in container
			var tempDiv = angular.element("<div class='col-sm-4 mx-0 px-0' id='thumbnailFrame' style='border: 2px solid #000FFF'></div>");
			angular.element(target).append(tempDiv);
						
			var ele = angular.element("<img class='mx-0 px-0' src='file:///C:/Users/hshashak/Desktop/Smart_UI/res/img/umg.jpg' style='width: 20px, height: 30px, border: 1px solid #000000;'>");
			angular.element(tempDiv).append(ele);
			return true;
		};

		service.addThumbnails = function(){

			
		};
	};
	
})();