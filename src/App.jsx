import React, { Component } from 'react';
import Listlayout from './Listlayout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: {
        inputTodo: '',
        selectPriority: '',
        showEditForm: false,
      },
      list: [],

      currentItemDescrip: '',
      changedTodoDesrip: '',
      changeTodoPriority: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickAddItem = this.clickAddItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
   /* this.editForm = this.editForm.bind(this);
    this.clickSaveUpdatetodo= this.lickSaveUpdatetodo.bind(this); */
    // this.clickEditItem = this.clickSaveEditItem.bind(this);
  }

  handleChange(e) { // stringify makes a detached copy and JSON.parse turns it into an object
    const todoItemClone = JSON.parse(JSON.stringify(this.state.todoItem));
    todoItemClone[e.target.name] = e.target.value;
    this.setState({ todoItem: todoItemClone });
  }

  clickAddItem() {
    this.setState([this.state.todoItem.showEditForm : false])
    const listClone = [...this.state.list];
    listClone.push(this.state.todoItem);
    this.setState({ list: listClone });
  }

  deleteItem(i) {
    const listClone = [...this.state.list];
    listClone.splice(i, 1);
    this.setState({ list: listClone });
  }

  showEditForm(i) {
    const listClone = [...this.state.list];
    if (listClone[i].showEditForm === false) {
      listClone[i].showEditForm = true;
    } else {
      listClone[i].showEditForm = false;
    }
    this.setState({ list: listClone });
   
  }

  // clickSaveEditItem(e){
    // const listClone2 = [...this.state.list];
    // const description= e.
    // const priority =
    // listClone2[de]
  // }

  /*


  clickSaveUpdateTodo(){
    this.setState(showEditForm : false)
   // this.setState(list[this.state.curentItemDescrip]: this.state.)
    //update the state list value for the current description
  }
 */
/* editForm(){

  <div>
    <textarea className="update-todo-text" name='updateTodo' onChange={ this.updateTodo } />
    <label htmlFor='updatePriority'><b>Priority</b></label>
    <select className='update-todo-priority' name='updatePriority' onChange={ this.updateTodo }>
        <option value='list-group-item list-group-item-success' selected>Low Priority</option>
        <option value='list-group-item list-group-item-warning'>Medium Priority</option>
        <option value='list-group-item list-group-item-danger'>High Priority</option>
    </select><br /><br />
    <button type='button' onClick={ this.clickSaveUpdatetodo }>Save</button>
  </div>
} */


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
                <option value='none' selected disabled hidden>Select an Option</option>
                <option value='list-group-item list-group-item-success'>Low</option>
                <option value='list-group-item list-group-item-warning'>Medium</option>
                <option value='list-group-item list-group-item-danger'>High</option>
              </select><br /><br />
              <button type='button' onClick={ this.clickAddItem }>Add</button>
            </div>
          </div>
          <div className='col-7 offset-1 bg-light border'>
            <p className='border-bottom'>View Todos</p>
            {
            listClone2.length === 0
                ? <p className='alert alert-primary border'><b>Welcome to Very Simple Todo App!</b><br />Get started now by adding a new todo on the left.</p>
                : // 'list of todos'
                  listClone2.map((todo, i) => (
                    <div>
                      <Listlayout
                        description={ todo.inputTodo }
                        priority={ todo.selectPriority }
                        index={ i }
                        deleteItemfx={ this.deleteItem }
                        showEditFormfx={ this.showEditForm }
                        showEditTorF={ this.state.list[i].showEditForm }
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
