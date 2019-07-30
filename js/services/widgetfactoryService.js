(function(){
	'use strict';

	angular.module('widgetfactoryService', widgetfactoryService);

	function widgetfactoryService(){
		var factory = this;

		factory.getContentFrame = function(){
			alert("hello Shashank");
			return true;
		};

		factory.getThumbnailPanel = function(){};

		factory.getNotesPanel = function(){};
	}

})();