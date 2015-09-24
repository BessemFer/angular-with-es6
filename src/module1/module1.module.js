import angular from 'angular';
import uirouter from 'angular-ui-router';

import { config } from 'module1.config';

import service1 from './services/todo.svc';
import todosController from './controllers/todos/todos.ctrl';
import todoDetailController from './controllers/todo-detail/todo-detail.ctrl.js';
import todoListDirective from './directives/todo-list/todo-list';


export default angular
    .module('module1', [uirouter])
    .config(config)
    .service('todoService',service1)
    .controller('todosController', todosController)
    .controller('todoDetailCtrl',todoDetailController)
    .directive('todoList',todoListDirective)
    .name;
