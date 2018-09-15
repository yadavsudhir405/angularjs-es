import angular from "angular";
import {default as LoginController} from "./controller/LoginController";
const loginModule = angular.module('login',[]);

loginModule.controller('LoginController', LoginController);

export default loginModule.name;