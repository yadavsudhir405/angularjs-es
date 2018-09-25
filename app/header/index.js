import angular from "angular";
import {default as HeaderDirective} from "./AppHeaderDirective";

const headerModule = angular.module('header',[]);

headerModule.directive('appHeader', HeaderDirective);

export default headerModule.name;

