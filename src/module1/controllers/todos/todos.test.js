import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';//used to testing asynchronous functions (e.g. promises)

chai.use(chaiAsPromised);
let assert = chai.assert;

import TodosController from './todos.ctrl.js';
import TodoService from '../../services/todo.svc';
let component;

describe('todos page tests', function() {

	beforeEach(function() {
		component = new TodosController(new TodoService(),null);
	});

	it('add todo', function () {
		return assert.eventually.deepEqual(component.addTodo('new name'),{name:'new name',done:false});
	});

});
