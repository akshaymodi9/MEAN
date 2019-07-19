

import React from 'react'
import {TodoHeader} from './TodoHeader'
import {TodoItem} from './TodoItem'
export class TodoList extends React.Component {

    //mandatory function


    renderTableBody(){
        return this.props.todo.map((todo,index)=><TodoItem todo={todo}/>)
    }

    render() {
       
    
    
        return (
            <div>
                <table>
                    <thead>
                        <TodoHeader/>
                        </thead>
                        <tbody>
                            {this.renderTableBody()}
                            </tbody>
                    </table>
               
            </div>

            
        )
    }
}
