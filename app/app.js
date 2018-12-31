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

const myApp = angular.module('myApp', modules);
myApp.config(function ($stateProvider,$locationProvider, $urlRouterProvider, $logProvider) {
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
        controllerAs: 'loginCtrl',
        resolve: {
            constantService : 'ConstantService',
            promiseObj: function ($timeout, $q, constantService) {
                let defer = $q.defer();
                $timeout(function () {
                    constantService.setConstant("Hello World");
                    defer.resolve();
                },10);
                return defer.promise;
            }
        }
    });
    $stateProvider.state('unathorized',{
        url: '/unathorized',
        template: unathorizedControllerTemplate,
        controller: 'UnathorizedController',
        controllerAs: 'unathorizedCtrl'
    });
    $urlRouterProvider.otherwise('/home');
});

var bootstrapModule =  angular.module('bootstrapModule', []);

bootstrapModule.factory('bootstrapper', function ($q, $timeout) {
    return {
        bootstrap: function (appName) {
            var deferred = $q.defer();

            $timeout(function () {
                var myApp = angular.module(appName);
                myApp.constant('MY_CONSTANT', 'Yaaay!');
                angular.bootstrap(document, [appName]);
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        }
    }
});

bootstrapModule.run(function (bootstrapper) {
    bootstrapper.bootstrap('myApp').then(function () {
        appContainer.remove();
    })
});

var appContainer =  document.createElement("div");

angular.element(document).ready(function () {
    angular.bootstrap(appContainer, ['bootstrapModule'])
});