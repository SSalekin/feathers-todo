// Initializes the `todo` service on path `/todos`
const { Todo } = require('./todo.class');
const createModel = require('../../models/todo.model');
const hooks = require('./todo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/todos', new Todo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('todos');

  service.hooks(hooks);
};
