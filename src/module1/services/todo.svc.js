export default class TodoService{
    constructor(){
        this.name = '';
        this.list = [];
        this.addTodo('one');
        this.addTodo('two');
        this.addTodo('three');
    }
    getTodo(name){
        let todo = this.list.find((item)=>{
           return item.name === name;
        });
        return Promise.resolve(todo);
    }
    getList(){
        return Promise.resolve(this.list);
    }
    addTodo(todoName){
        return new Promise((resolve)=>{
            let newTodo = {name: todoName,done:false};
            this.list.push(newTodo);
            resolve(newTodo);
        });
    }
}