import Overview from './components/Overview'
import React, { Component } from 'react';

class App extends Component {

  state = {
    inputField: '',
    tasks: [
      "fukcit"
    ]
  }

  addTask = (e, task) => {
    e.preventDefault()
    this.setState({
      todos: this.state.tasks.push(task)
    })
  }

  updateField = (e) => {
    this.setState({inputField: e.target.value})
  }

  render() {
    
    return (
      <div className="App">
        
        <form onSubmit={this.addTask}>
          <input 
            type="text"
            name="task"
            placeholder="new task"
            value={this.state.inputField}
            onChange={this.updateField}
          />
          
          <input 
            type="submit"
            value="add it"            
          /> 

        </form>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
