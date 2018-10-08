import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import {default as demoApp } from "./demo/index";
import {default as loginModule} from "./login/index";
import { default as headerModule } from "./header/index";
import {default as unathorizedHandleModule } from "./unathorized/index";

import demoControllerTemplate from "./demo/template/demo.html";
import loginControllerTemplate from "./login/template/Login.html";
import unathorizedControllerTemplate from "./unathorized/template/unathorizedHandlerPage.html";

import styles from "./assets/styles/style.scss";
import img from "./assets/images/webpack-es6.png";

let modules = [
    uiRouter,
    headerModule,
    unathorizedHandleModule,
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
    $stateProvider.state('unathorized',{
        url: '/unathorized',
        template: unathorizedControllerTemplate,
        controller: 'UnathorizedController',
        controllerAs: 'unathorizedCtrl'
    });
    $urlRouterProvider.otherwise('/');
});