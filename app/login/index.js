import angular from "angular";
import {default as LoginController} from "./controller/LoginController";
import {default as constantService } from "./service/ConstantService";
const loginModule = angular.module('login',[]);

loginModule.controller('LoginController', LoginController);
loginModule.service('ConstantService', constantService);

export default loginModule.name;