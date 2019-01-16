import angular from "angular";
import {default as LoginController} from "./controller/LoginController";
import {default as YearCalendarDirective} from "./directive/YearCalender";
import {default as constantService } from "./service/ConstantService";

const loginModule = angular.module('login',[]);

loginModule.controller('LoginController', LoginController);

loginModule.service('ConstantService', constantService);
loginModule.directive('yearCalendar', YearCalendarDirective);

export default loginModule.name;