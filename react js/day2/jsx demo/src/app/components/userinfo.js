

import React from 'react'

export class UserInfo extends React.Component {

    //mandatory function


    render() {
       

    
        return (
            <div>
                <h1> Movie : {this.props.user.fullnume}</h1>
                <h2> Director :{this.props.user.Director}</h2>
                <h2> Release Date :{this.props.user.Release}</h2>
                <img src={this.props.user.Poster}/>
                    

                <ul>
                {this.props.player.map((player,index)=><li key={index}>{player}</li>)}

            </ul>
            <ul>
                {this.props.user.actors.map((actor,index)=><li key={index}>{actor}</li>)}
                </ul>
            </div>

            
        )
    }
}
