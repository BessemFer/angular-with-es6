let service;
export default class Page1Controller {
    constructor(todoService,name = 'test') {//non-angular dependencies with defaults need to be after items declared within the angular module.
        this.service = todoService;
        this.form = {name:''};
    }

    addTodo(name) {
        return this.service.addTodo(name);
    }

}
