import React, { Component } from 'react';

// Step 1: Define an interface for the state
// This interface specifies that 'count' in the state should be a number
interface CounterState {
    count: number;
}

// Step 2: Define the component class with the CounterState type
// We leave the props generic as we have no props in this example
class Counter extends Component<{}, CounterState> {
    // Step 3: Initialize state with the correct type
    state: CounterState = {
        count: 0,
    };

    // Step 4: Define the increment method, which updates the state
    // This method doesn't return anything (void)
    increment = (): void => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
