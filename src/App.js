import React, { Component } from "react";
import Navbar from "./components/Navbar";
import {TodoRows} from "./components/TodoRows"

export default class App extends Component {
  constructor(props) {
    // You cant use this in a constructor untill after parent(super) constructor is called
    super(props);

    this.state = {
      userName : 'Manoj',
      todoItems : [
        {action : 'Buy Milk', Done : false},
        {action : 'Go to Gym', Done : false},
        {action : 'Call HR-Company', Done : false},
      ],
      newTodo : "",
    };
  }
  toggleDone = (todo)=>{
    this.setState({
      todoItems : this.state.todoItems.map((item) =>

        item.action === todo.action ? {...item, Done : !item.Done} : item
        
      )   
     })
  }
  newTodo = ()=>{
    this.setState({
      todoItems : [
        ...this.state.todoItems, 
        {action : this.state.newTodo, Done : false},
      ],
    });
  }

  updateValue=(event)=>{
      this.setState({newTodo : event.target.value});
  }

   todoRows = () =>
    this.state.todoItems.map((item)=>(
      <TodoRows key= {item.action} item = {item} callback = {this.toggleDone}/>
    ));
  
  render= () => (
       <div className="container">
        <div className="row">
          <Navbar name={this.state.userName}/>
          <div className="col-12">
            <input className="form-control" 
         
            onChange={this.updateValue} />
            <button className="btn btn-primary" onClick={this.newTodo}>
              Add
            </button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody >
                {this.todoRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}