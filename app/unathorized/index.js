import angular from "angular";
import {default as unathorizedController } from "./controller/UnathorizedController";

let unathorizedModule = angular.module("unathorizedHandler",[]);

unathorizedModule.controller('UnathorizedController', unathorizedController);

export default unathorizedModule.name;