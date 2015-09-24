export default class TodoDetailController{
    constructor($stateParams,todoService){
        todoService.getTodo($stateParams.name).then(
        	(todo)=> {this.todo = todo;}
        );
    }
}
