(function() {

    var app = angular.module('store-products', []);


    app.directive('productImage', function() {

        return {

            restrict: 'E',
            templateUrl: 'product-image.html',
            controller:function() {

                this.current = 0;

                this.setCurrent = function (current) {
                    this.current = current || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.directive('productTitle', function () {

        return {

            restrict: 'E',
            templateUrl: 'product-title.html'

        };
    });


    app.directive('productPanels', function () {

        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller:function(){
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function (selectedTab) {
                    return this.tab === selectedTab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();