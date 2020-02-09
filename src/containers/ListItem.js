import React, { Component } from 'react';
import Item from './../components/Item';
import { connect } from 'react-redux';
import { actListTodo } from './../actions/index';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state= {
      todos: []
    }
  }

  UNSAFE_componentWillMount = () => {
    this.props.onSubmit();
    this.setState({todos: this.props.todos})
  }

  UNSAFE_componentWillReceiveProps = (props) => {
    this.setState({todos: props.todos});
  }

  render() {
    var { todos } = this.state;
    var element = todos.map((todo, index) => {
      return <Item key={index} todo={todo} />
    })
    return (
      <ul>
        {element}
      </ul>
    );
  }
}

var mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

var mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: () => {
      dispatch(actListTodo())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
