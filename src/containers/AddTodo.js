import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddTodo } from './../actions/index';
import Button from './../components/Button';

class AddTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    var target = e.target;

    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <legend>Add todo</legend>
        <div className="form-group">
          <label>todo</label>
          <input type="text" className="form-control" placeholder="Input todo"
            name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <Button />
      </form>
    );
  }
}

var mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: (todo) => {
      dispatch(actAddTodo(todo))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
