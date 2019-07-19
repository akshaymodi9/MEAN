import React from 'react'
import {render} from "react-dom"
import {MovieData} from './components/MovieData'
var movie=[{
    title:"DDLJ",
    runtime:"180min",
    description:"A young man and woman - both of Indian descent but born and raised in Britain - fall in love during a trip to Switzerland. However, the girl's traditional father takes her back to India to fulfill a betrothal promise.", 
    poster:"https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
    trailer:"https://youtu.be/cmax1C1p660",
    production:"Chopra",
    rating:"3"
  
},{title:"DDLJ",
runtime:"180min",
description:"A young man and woman - both of Indian descent but born and raised in Britain - fall in love during a trip to Switzerland. However, the girl's traditional father takes her back to India to fulfill a betrothal promise.", 
poster:"https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
trailer:"https://youtu.be/cmax1C1p660",
production:"Chopra",
rating:"3"},{
    
        title:"DDLJ",
        runtime:"180min",
        description:"A young man and woman - both of Indian descent but born and raised in Britain - fall in love during a trip to Switzerland. However, the girl's traditional father takes her back to India to fulfill a betrothal promise.", 
        poster:"https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
        trailer:"https://youtu.be/cmax1C1p660",
        production:"Chopra",
        rating:"3"
      
    
}]

class App extends React.Component{




    //mandatory function

    render(){
        
        return(
           <MovieData movie={movie}/>
        )
    }
}

render(<App/>,document.getElementById("app"))