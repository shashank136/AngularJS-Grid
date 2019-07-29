(function() {
    'use strict';
    angular.module('webviewer').controller('mainController', mainController);
    mainController.$inject = ['$scope', '$log', 'thumbnailService'];

    function mainController($scope, $log, thumbnailService) {
        $scope.widgets = [{
            x: 0,
            y: 0,
            width: 1,
            height: 1
        }, {
            x: 0,
            y: 0,
            width: 3,
            height: 1
        }];

        $scope.options = {
            cellHeight: 200,
            verticalMargin: 10
        };
        
        $scope.AddElement = function() {
            var target = angular.element(document.getElementById('contentFrame'));
            var newEle = thumbnailService.addElement('contentFrame');
        };
        
        $scope.addWidget = function() {
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
    };
})();