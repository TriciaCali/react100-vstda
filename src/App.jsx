import React, { Component } from 'react';
import Listlayout from './Listlayout';

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

  handleChange(e) { // stringify makes a detached copy and JSON.parse turns it into an object
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
    const listClone2 = [...this.state.list];
    console.log(listClone2);
    return (
      <div className='container'>
        <div>
          <h1>Very Simple Todo App</h1>
          <h2>Track all the things</h2>
          <hr />
        </div>
        <div className='row'>
          <div className='col-4 bg-light border'>
            <div>
              <div className='border-bottom'><p>Add new Todo</p></div>
              <label htmlFor='inputTodo'><b>I want to...</b></label>
              <textarea className='create-todo-text' name='inputTodo' onChange={ this.handleChange } />
              <label htmlFor='selectPriority'><b>How much of a priority is this?</b></label>
              <select className='create-todo-priority' name='selectPriority' onChange={ this.handleChange }>
                <option value='alert alert-primary'>Low</option>
                <option value='alert alert-warning'>Medium</option>
                <option value='alert alert-danger'>High</option>
              </select><br /><br />
              <button type='button' onClick={ this.clickAddItem }>Add</button>
            </div>
          </div>
          <div className='col-7 offset-1 bg-light border'>
          <p className='border-bottom'>View Todos</p>
              {listClone2.length === 0
                ? <p className='alert alert-primary border'><b>Welcome to Very Simple Todo App!</b><br />Get started now by adding a new todo on the left.</p>
                : //'list of todos'
                  listClone2.map(todo => (
                   <div><Listlayout
                     description={ todo.inputTodo }
                      priority={ todo.selectPriority }
                    />
                 
             </div>))
        
              }
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;
