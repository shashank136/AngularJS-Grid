(function(){
	'use strict';

	angular.module('webviewer')
			.service('contentService', contentService);

	function contentService(){

		var service = this;

		service.getPage = function(){

			var encodeMe = "http://10.96.85.23:8080/archive?get&pVersion=0045&contRep=MD&docId=aaasgkjdx1cfrnurnuaer3iuiddqu";
			var decodeMe = btoa(encodeMe);
			return decodeMe;
		};		
	};

})();