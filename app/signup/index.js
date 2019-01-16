import angular from "angular";
import {default as SignupController} from "./SignupController";

let signup = angular.module("signup",[]);

signup.controller('SignupController',SignupController);

export default signup.name;