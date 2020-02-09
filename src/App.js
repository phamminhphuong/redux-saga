import React, { Component } from 'react';
import ListItem from './containers/ListItem';
import AddTodo from './containers/AddTodo';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="panel panel-primary">
              <div className="panel-heading">Todo App</div>
              <div className="panel-body">
                {/* form */}
                <AddTodo />
                {/* list item */}
                <ListItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
