import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'; //used to testing asynchronous functions (e.g. promises)

chai.use(chaiAsPromised);
let assert = chai.assert;

import TodoService from './todo.svc';
let component;

describe('name service tests', function() {

    beforeEach(function() {
        component = new TodoService();
    });

    it('update name', function () {
        return assert.eventually.deepEqual(component.addTodo('new name'),{name:'new name',done:false});
    });

});
