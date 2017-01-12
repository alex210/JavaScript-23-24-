requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery',
    'template': 'tmpl.js',
  },
  shim: {
    'template': {
      deps: ['jquery']
    }
  }
});

require(
  [
    'jquery',
    'tmpl',
    'model',
    'view',
    'controller',
  ],
  function($, tmpl, model, view, controller) {
    var firstToDoList = ['Test 1', 'Test 2', 'Test 3'];
    var model = new model.Model(firstToDoList);
    var view = new view.View(model);
    var controller = new controller.Controller(model, view);
  }
);
