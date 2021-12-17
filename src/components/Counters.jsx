import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {

    render() { 
        return ( 
        <div className="container justify-content-around">
            <div className="row">
                {this.props.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        id={counter.id}
                        value={counter.value}
                        onIncrement={this.props.onIncrement}
                        counter={counter}
                        type={counter.type}
                    />
                ))}
            </div>
        </div> 
        );
    }
}

export default Counters;