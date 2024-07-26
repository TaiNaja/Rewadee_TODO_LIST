// 1
import React from 'react'

export default function Task({ index, todo, complete }) {
  // 2


    function setStatusTask(index,e) {
  alert(index , e);
        }
  

  // 3
  const checkTask = e => setStatusTask(index, e.target.checked)

  return (
    <li className="list-group-item">
    <div class="checkbox-wrapper-23">
      <input type="checkbox" id="check-23" onChange={checkTask}  />
      <label for="check-23" >
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
    </div>
    <span className={ complete ? 'task-done' : '' }>{ todo.todoTitle }</span>
    <h4 className="list-group-item-heading">{todo.todoTitle} </h4>

    <p><i className="fa fa-user-circle-o" aria-hidden="true"></i> {todo.todoResponsible}</p>
    <p className="text-justify">{todo.todoDescription}</p>
    <button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}><i className="fa fa-trash-o" aria-hidden="true"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg> &nbsp;&nbsp; Delete</button>
  </li>
  )
}