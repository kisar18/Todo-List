import React, { Component } from 'react';
import Counters from './components/Counters';
import TodoList from './components/TodoList';

class App extends Component {
  state = { 
    counters: [
      { id: 1, value: 0, type: "All"},
      { id: 2, value: 0, type: "Weekly"},
      { id: 3, value: 0, type: "Lifetime"}
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    if(index !== 0) counters[0].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value -= 1;
    if(index !== 0) counters[0].value--;
    this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        <Counters
          counters={this.state.counters}
        />
        <TodoList
          counters={this.state.counters}
          onAddTodo={this.handleIncrement}
          onDeleteTodo={this.handleDecrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
