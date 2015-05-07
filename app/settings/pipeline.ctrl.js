(function() {
    'use strict';
    angular.module('mrApp')
        .controller('PipelineSettingsCtrl', PipelineSettingsCtrl);

    PipelineSettingsCtrl.$inject = ['$scope', '$firebaseArray'];


    function PipelineSettingsCtrl($scope, $firebaseArray) {
        var vm = this;
        vm.check = 'asd';
        vm.sel = null;

        var ref = new Firebase('https://glaring-fire-4469.firebaseio.com/pipeline');
        vm.pipeline = $firebaseArray(ref)

        vm.addStage = addStage;

        vm.addStage = addStage;
        vm.selEl = selectEl;


        init();

        function addStage(title) {
        	vm.pipeline.$add({
        		title: title
        	});
        }

        function selectEl (el) {
        	vm.sel = el;
        }


        function init() {
        }
    }

})();
