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
                        counter={counter}
                        id={counter.id}
                        value={counter.value}
                        type={counter.type}
                        onIncrement={this.props.onIncrement}
                    />
                ))}
            </div>
        </div> 
        );
    }
}

export default Counters;