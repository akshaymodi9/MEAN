import React from 'react'

export class SearchMovie extends React.Component{
    constructor(props) {
        super(props);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        
      }
      
      handleTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
      }
      
     
      
      render() {
        return (
          <form>
            <input
              type="text"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleTextInputChange}
            />
          
          </form>
        );
      }
    

}