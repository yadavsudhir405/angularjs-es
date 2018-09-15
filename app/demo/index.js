import angular from "angular";
import img1 from "./images/angular.png";
import {default as demoController} from "./controller/DemoController";

const demoApp = angular.module('demo', []);

demoApp.controller('DemoController', demoController);

export default demoApp.name;