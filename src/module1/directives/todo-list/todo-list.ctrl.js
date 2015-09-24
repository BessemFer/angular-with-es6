export default class TodoListController{
    constructor(todoService){
        todoService.getList().then(
        	(list) => {this.list = list;}
       	);
    }
}
