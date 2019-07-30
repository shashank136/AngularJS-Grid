(function() {
    'use strict';
    angular.module('webviewer').controller('mainController', mainController);
    mainController.$inject = ['$scope', '$log', 'widgetfactoryService', 'apiService', 'thumbnailService', 'contentService'];

    function mainController($scope, $log, widgetfactoryService, apiService, thumbnailService, contentService) {
        $scope.widgets = [ {
            x: 0,
            y: 0,
            width: 10,
            height: 2
        }];

        $scope.options = {
            cellHeight: 200,
            verticalMargin: 10
        };
        
        $scope.AddElement = function() {
            var target = angular.element(document.getElementById('contentFrame'));
            var newEle = thumbnailService.addElement('contentFrame');
        };
        
        // Calls widget factory and creates widgets for each feature
        $scope.addWidget = function() {

            var status = widgetfactoryService.getContentFrame();
        	console.log('Adding widget');
            var newWidget = {
                x: 0,
                y: 0,
                width: 1,
                height: 1
            };
            $scope.widgets.push(newWidget);
            console.log($scope.widgets);
        };
        
        $scope.moveWidget = function() {
            $scope.widgets[0].x = 1;
            $scope.widgets[0].width = 2;
            $scope.widgets[0].height = 2;
        };
        
        // Removes a specific widget from the active widget list
        $scope.removeWidget = function(w) {
            var index = $scope.widgets.indexOf(w);
            $scope.widgets.splice(index, 1);
        };
        
        $scope.onChange = function(event, items) {
            $log.log("onChange event: " + event + " items:" + items);
        };
        
        $scope.onDragStart = function(event, ui) {
            $log.log("onDragStart event: " + event + " ui:" + ui);
        };
        
        $scope.onDragStop = function(event, ui) {
            $log.log("onDragStop event: " + event + " ui:" + ui);
        };
        
        $scope.onResizeStart = function(event, ui) {
            $log.log("onResizeStart event: " + event + " ui:" + ui);
        };
        
        $scope.onResizeStop = function(event, ui) {
            $log.log("onResizeStop event: " + event + " ui:" + ui);
        };
        
        $scope.onItemAdded = function(item) {
            $log.log("onItemAdded item: " + item);
        };
        
        $scope.onItemRemoved = function(item) {
            $log.log("onItemRemoved item: " + item);
        };

        // code to add pages and remove pages from the content frame
        $scope.getPage = function(){
            var p1 = "http://10.96.11.168:8080/WebViewer/rest/document/";
            var p2 = contentService.getPage($scope);
            var p3 = "/render/1";
        	$scope.pageContent = "../res/img/umg.jpg";//p1+p2+p3;            
            console.log(p2);
        }

        $scope.removePage = function(){
            var x = $scope.pageContent;
            $scope.pageContent = x.substr(0, x.length-1)+"2";
        }
    };
})();