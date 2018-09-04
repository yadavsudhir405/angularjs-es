import angular from "angular";
import ngRoute from "@uirouter/angularjs";
import {default as demoModule} from "demo";

const modules = [
    demoModule,
    ''
];

const app = angular.module('mainModule', modules);
app.config();