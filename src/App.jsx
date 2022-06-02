import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: {
        inputTodo: '',
        selectPriority: '',
      },
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickAddItem = this.clickAddItem.bind(this);
  }

  handleChange(e) {
    const todoItemClone = JSON.parse(JSON.stringify(this.state.todoItem));
    todoItemClone[e.target.name] = e.target.value;
    this.setState({ todoItem: todoItemClone });
  }

  clickAddItem() {
    const listClone = [...this.state.list];
    listClone.push(this.state.todoItem);
    this.setState({ list: listClone });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <h1>Very Simple Todo App</h1>
          <h2>Track all the things</h2>
          <hr />
        </div>
        <div className='row'>
          <div className='col-4'>
            <div>
              <textarea className='create-todo-text' name='inputTodo' onChange={ this.handleChange } />
              <select className='create-todo-priority' name='selectPriority' onChange={ this.handleChange }>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
              </select>
              <button type='button' onClick={ this.clickAddItem }>Add</button>
            </div>
          </div>
          <div className='col-7 offset-1'>
            <h1>column right</h1>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
