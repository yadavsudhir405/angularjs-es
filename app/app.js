import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import {default as demoApp } from "./demo/index";
import {default as loginModule} from "./login/index";
import { default as headerModule } from "./header/index";

import demoControllerTemplate from "./demo/template/demo.html";
import loginControllerTemplate from "./login/template/Login.html";

import styles from "./assets/styles/style.scss";
import img from "./assets/images/webpack-es6.png";

let modules = [
    uiRouter,
    headerModule,
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