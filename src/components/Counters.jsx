import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0, type: "All"},
            { id: 2, value: 0, type: "Weekly"},
            { id: 3, value: 0, type: "Lifetime"}
        ]
    };
    render() { 
        return ( 
        <div className="container justify-content-around">
            <div className="row">
                {this.state.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        id={counter.id}
                        value={counter.value}
                        type={counter.type}
                    />
                ))}
            </div>
        </div> 
        );
    }
}

export default Counters;