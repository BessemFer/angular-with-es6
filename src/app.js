import angular from 'angular';
import 'angular-material/angular-material.css'; //picked up by webpack config and injected on index.html

// Modules
import module1 from 'module1.module';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

angular.module('app', [module1, uirouter,ngMaterial])
    .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/todos');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<ui-view></ui-view>'
        });

});

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
