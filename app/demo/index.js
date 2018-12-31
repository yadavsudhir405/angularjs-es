import angular from "angular";
import img1 from "../assets/images/demo/angular.png";
import {default as demoController} from "./controller/DemoController";
import {default as CodeMirrorFormula } from "./directive/codeMirrorFormulaDirective";

const demoApp = angular.module('demo', []);

demoApp.controller('DemoController', demoController);

demoApp.directive('codeMirrorFormula', CodeMirrorFormula);

export default demoApp.name;