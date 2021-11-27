import React, { Component } from 'react';
import Counters from './Counters'
import TodoList from './TodoList';

class ContentComponent extends Component {

    render() { 
        return (  
            <div>
                <Counters/>
                <TodoList/>
            </div>
        );
    }
}
 
export default ContentComponent;