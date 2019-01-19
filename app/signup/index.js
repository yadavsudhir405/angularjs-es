import angular from "angular";
import {default as SignupController} from "./SignupController";
import joint from "jointjs";

let signup = angular.module("signup",[]);

signup.controller('SignupController',SignupController);
signup.constant('joint', joint);

export default signup.name;