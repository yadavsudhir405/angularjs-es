import angular from "angular";
import img1 from "../assets/images/demo/angular.png";
import {default as demoController} from "./controller/DemoController";

const demoApp = angular.module('demo', []);

demoApp.controller('DemoController', demoController);

export default demoApp.name;