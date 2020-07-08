import React from 'react'


class Publisher extends React.Component {
    constructor(props) {
      super(props);      
    }    
  
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h3>{this.props.Books}</h3>
        </div>
      );
    }
  }
  
  export default Publisher;