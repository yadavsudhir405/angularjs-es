import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import {default as demoApp } from "./demo/index";
import {default as loginModule} from "./login/index";

import {default as mainController } from "./component/MainController";
import demoControllerTemplate from "./demo/template/demo.html";
import loginControllerTemplate from "./login/template/Login.html";
import img from "./webpack-es6.png";

let modules = [
    uiRouter,
    demoApp,
    loginModule
];

const app = angular.module('root', modules);
app.config(function ($stateProvider,$locationProvider, $urlRouterProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(true);
    $stateProvider.state('Home',{
        url: '/home',
        template: demoControllerTemplate,
        controller: 'DemoController',
        controllerAs: 'demoCtrl'
    });

    $stateProvider.state('Login',{
        url: '/login',
        template: loginControllerTemplate,
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
    });
    $urlRouterProvider.otherwise('/');
});

app.controller('MainController', function () {
    console.log("Initializing the App!!");
});
app.run(function () {
    console.log("App is running");
});