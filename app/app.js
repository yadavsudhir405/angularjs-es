import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import {default as demoModule} from "demo";

const modules = [
    demoModule,
    uiRouter,
];

const app = angular.module('mainModule', modules);
app.config(['$stateProvider', '$urlRouterProvider'],function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('Home',{
        url: '/',
        templateUrl: './demo/template/demo.html',
        controller: 'DemoController'
    });
});