import e from 'express';
import React, { Component } from 'react';

const todoList = [];

class todoItemsRow extends React.Component {

  render() {
    const item = this.props.todoList;
    const itemPriority =item.priority
    return (
      <tr className= {itemPriority}>
        <td>
            <input type="checkbox" id={item} name={item} value={item}>
          <label for={item}>{item}</label>  
        </td>     
        <td>
          <button type='button' className='btn btn-default' aria-label='Left Align' onClick={ clickEditTodo() }>
            <span className='glyphicon glyphicon-pencil' aria-hidden='true' />
          </button>
        </td>
        <td>
          <button type='button' className='btn btn-default btn-lg' onClick={ clickDeleteItem() }>
            <span className='glyphicon glyphicon-trash' aria-hidden='true' /> Star
          </button></td>
      </tr>
    );
  }
}

class todoItemsTable extends React.Component {
  
  render() {
    const rows =[];

    this.props.todoList.forEach((item)=> {
          rows.push(
            <todoItemsRow
              description = {item.description}
              />
          );
    })
    return (
      <table>
        <tbody>{rows}</tbody>
    </table>
    );
  }
}

class editItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditItemForm: false,
    };
    this.clickEditTodo = this.clickEditTodo.bind(this);
  }
  render() {
    return (
      <div>
        <label htmlFor='descriptionInputBox'>Description
          </label>
        <input type='text'>Value from the checkbox that was clicked</input>
        <label htmlFor='selectPrority'>Priority</label>
        <select name='selectPrority' id='selectPrority'>
          <option value='bg-primary'>Low Priority</option>
          <option value='bg-warning'>Medium Priority</option>
          <option value='bg-danger'>High Priority</option>
        </select>
        <button name='saveBtn'>Save</button>
      </div>
    );
  }
}
class welcomeMessageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcomeMessageDisplay: true,
    };
  }
  render() {
    return (
      <div>
        <h3>Welcome to Very Simple Todo App!</h3>
        <p>Get started now by adding a new todo item on the left.</p>
      </div>
    );
  }
}

class viewTodo extends React.Component {
  render() {
    // do if statement to determine if going to display
    // / 1) welcomeMessageDisplay
    // 2) if add button is clicked -display todoItemsList or
    // 3) if edit icon clicked -display editemForm + 2) display todoItemsList
    // 4) if delete icon clicked - 2) display todoItemList
     // 5) if save button pushed - 2) display todoItemList

    // else display default<welcomMessage />

    return (
      <div>
        display component passed from the if statement
      </div>
    );
  }
}

class addNewTodo extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='newTodo'>I want to...</label>
        <input type='text' name='newTodo' id='newTodo' />
        <label htmlFor='priorityS'>How much of a priority is this?</label>
        <select name='priorityS' id='priorityS' placeholder='Select a Priority'>
          <option value='bg-primary'>Low Priority</option>
          <option value='bg-warning'>Medium Priority</option>
          <option value='bg-danger'>High Priority</option>
        </select>
        <button name='addBtn' onClick='clickAddBtn()'>Add</button>
      </div>
    );
  }
}
class App extends Component {
  clickAddBtn() {
    // add info to todoList Array
    //push event value as object in to itemList array
    //todoList.push({decription: textbox name 'newtTodo.value, priority : selection name 'priortyS' value })

    this.setState({
      showTodoItems: true,
      showWelcomeMessageDisplay: false, 
      showEditItemForm: false,
    });
  }
  clickDeleteItem() {
    
    //set var description to= index of event.value in array toDoList
    // slice info to todoList Array  todoList.slice(indexOf(event.value))
    //
      todoList.
    this.setState({
      showTodoItems: true,
      showWelcomeMessageDisplay: false, 
      showEditItemForm: false,
    });
  }

  clickEditTodo() {
    // change info to todoList Array

    this.setState({
      showEditItemForm: true,
    });
  }

  render() {
    // will display componeds addNewTodo and viewTodo
    return (
      <div className='container'>
        <div>
          Add New Todo
        <addNewTodo />
        </div>
        <div>
          View Todo
        <viewTodo />
        </div>
      </div>
    );
  }
}


export default App;
