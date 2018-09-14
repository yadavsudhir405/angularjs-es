import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import {default as demoApp } from "./demo/index";
import demoControllerTemplate from "./demo/template/demo.html";
import img from "./images/webpack-es6.png";

let modules = [
    uiRouter,
    demoApp
];

let app = angular.module('root', modules);
app.config(function ($stateProvider,$locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state('Home',{
        url: '/',
        template: demoControllerTemplate,
        controller: 'DemoController',
        controllerAs: 'demoCtrl'
    });
    $urlRouterProvider.otherwise('/');
});