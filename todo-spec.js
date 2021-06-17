describe('todo', function() {
  it('should add a todo', function() {
    browser.get('https://todomvc.com/examples/angularjs/');
     element(by.model('newTodo')).sendKeys('FirstTest');
     element(by.model('newTodo')).sendKeys(protractor.Key.ENTER)	
     // browser.sleep('2000')	//just for debugging
     element(by.model('todo.completed')).click();
     // browser.sleep('2000')   //just for debugging
     element(by.css('[ng-click="clearCompletedTodos()"]')).click();
    //browser.sleep('4000')   //just for debugging
 });
});
