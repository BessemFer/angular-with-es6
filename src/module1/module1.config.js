import todosTemplate from './controllers/todos/todos';
import todoDetailTemplate from './controllers/todo-detail/todo-detail.html';
export function config($stateProvider) {
    $stateProvider
        .state('app.todos', {
            url: '/todos',
            template: todosTemplate,
    		controller: 'todosController',
    		controllerAs: 'todos'
        })
        .state('app.detail',{
            url:'/detail/{name}',
            template:todoDetailTemplate,
            controller: 'todoDetailCtrl',
            controllerAs: 'detail'
        });
}
