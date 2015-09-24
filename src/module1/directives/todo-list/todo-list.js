import template from './todo-list.html';
import controller from './todo-list.ctrl.js';

//Directives use functions instead of ES6 Classes for simplicity
//If you want to use classes with directives, see http://www.sitepoint.com/writing-angularjs-apps-using-es6/
export default function TodoListDirectv(){
    return {
      template: template,
        controller:controller,
        controllerAs: 'hd'
    };
}
