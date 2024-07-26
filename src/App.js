import React, { Component } from 'react';
//import DatePicker from './DatePicker';
import './App.css';
var todos = [
  {
    todoTitle: 'Task 1',
    todoDue: '24/07/2024',
    todoDescription: 'Task ...'
  },
  {
    todoTitle: 'Task 2',
    todoDue: '24/07/2024',
        todoDescription: 'Task ...'
  },
  {
    todoTitle: 'Task 3',
    todoDue: '24/07/2024',
    todoDescription: 'Task ...'
  },
  {
    todoTitle: 'Task 4',
    todoDue: '24/07/2024',
        todoDescription: 'Task ...'
  }
]


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {

    this.setState({
      todos: this.state.todos.filter(function (e, i) {
        return i !== index;
      })
    })
  }

  handleAddTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }


  markTodo(e, data) {

    var checkBox = document.getElementById('bt' + e);


    if (checkBox.checked == true) {
      document.getElementById(e).className = 'task-done';
    } else {
      document.getElementById(e).className = '';
    }

  }



  render() {
    return (
      <div className="container">

        <nav className="navbar fixed-top navbar-light bg-light">
          <h4>Todo-List</h4>
          <h1 className="navbar-brand">
            Todo Count: <span className="badge badge-pill badge-primary">{this.state.todos.length}</span>
          </h1>
        </nav>

        <div className="row mt-5">
          <br />
          <TodoInput onAddTodo={this.handleAddTodo} />
          <hr />
        </div>

        <div className="row mt-5">
          <div className="col">
            <ul className="list-group">
              {this.state.todos.map((todo, index) =>
                <li className="list-group-item">


                  <div class="checkbox-wrapper-48">
                    <input type="checkbox" id={'bt' + todo.todoTitle} onClick={this.markTodo.bind(this, todo.todoTitle)} />
                  </div>
                  <h5 id={todo.todoTitle} >{todo.todoTitle}</h5>


               
                  <p className="text-justify">{todo.todoDescription}</p>

                  <span className='span-date'><i class="fa fa-calculator" aria-hidden="true"></i> Due :   {todo.todoDue}</span>
              
                  <button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}><span><i className="fa fa-trash-o" aria-hidden="true"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                 </span>
              </button>

                </li>


              )}
            </ul>
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
    );
  }

}

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoDue: '',
      todoDescription: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }




  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoDue: '',
      todoDescription: ''
    });
  }

  

  render() {
    return (
      <div className="col">
        <br /><br /><br />
        <h4>Add New Todo</h4><br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label htmlFor="inputTodoTitle" className="control-label text-muted"><small>Title</small></label>
            <input name="todoTitle"
              type="text"
              className="form-control"
              id="inputTodoTitle"
              value={this.state.todoTitle}
              onChange={this.handleInputChange}
              aria-describedby="Todo Title"
              ></input>
          </div>

          <div className="form-group">
            <label htmlFor="inputTodoDescription" className="control-label text-muted"><small>Description</small></label>
            <textarea name="todoDescription"
              type="text"
              className="form-control"
              id="inputTodoDescription"
              value={this.state.todoDescription}
              onChange={this.handleInputChange}
              aria-describedby="Todo Description"></textarea>
          </div>
          {/* <div className="form-group">
            <label htmlFor="inputtodoDue" className="control-label text-muted"><small>Responsible</small></label>
            <select name="todoDue"
              type="text"
              className="form-control"
              id="inputtodoDue"
              value={this.state.todoDue}
              onChange={this.handleInputChange}
              aria-describedby="Todo Responsible">
              <option>someone else</option>
              <option>Mike Polinowski</option>
              <option>Micro Aggressions</option>
              <option>Vladimir Putin</option>
              <option>Climate Change</option>
            </select><br />
          </div> */}


          <div className="form-group">
            <label htmlFor="inputtodoDue" className="control-label text-muted"><small>Due</small></label>
            <input  name="todoDue" 
           className="form-control date date_input" type="Date" id="inputtodoDue"  onClick={this.InputDue}     value={this.state.todoDue}   onChange={this.handleInputChange}    aria-describedby="Todo Responsible" />
          </div>





        
          <div className="form-group">
            <button type="submit" className="btn btn-primary float-right">Add Todo</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App;
