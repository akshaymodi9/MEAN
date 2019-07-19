import React from 'react'

export class TodoItem extends React.Component {

render(){


    return(
       <div>
           <tr>
               <td>{this.props.todo.taskname}</td>
               <td>{this.props.todo.description}</td>
               <td>{this.props.todo.status}</td>


               </tr>
           </div>

    )
}


}