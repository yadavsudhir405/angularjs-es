import angular from "angular";
import {default as demoController} from "./controller/demController";

const demoApp = angular.module('demo', []);

demoApp.controller('DemoController', demoController);

export default demoApp;