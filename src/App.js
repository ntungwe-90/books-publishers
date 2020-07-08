import React from "react";
import "./App.css";
import Bookitems from "./components/publisher";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title:"",
      Books:"",
      Publishers:[],
    };
    this.handleTitleChange=this.handleTitleChange.bind(this);
    this.handleBooksChange=this.handleBooksChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e){
    this.setState({title:e.target.value});
   

  }
  handleBooksChange(e){
    this.setState({Books: e.target.value});
  }

  handleSubmit(e){
   e.preventDefault()
  let NewPublishers={title:this.state.title, Books:this.state.Books};  
  this.setState({Publishers:[...this.state.Publishers,NewPublishers]});
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>USERS FORM</h2>
          <form onSubmit={this.handleSubmit}>
            <input className="bks" type="text" placeholder="Books"
             value={this.state.title}
             onChange={this.handleTitleChange}/>
            <br />
            <input className="pub" type="text" placeholder="Publishers" 
            value={this.state.books}
            onChange={this.handleBooksChange}
            />
            <br />
            <input className="sub" type="submit" 
           
            />
          </form>
        </div>
         
        {/* List of users */}
        <div>
        <h2>publishers</h2>
    <h3>{this.state.Publishers.map((publishers,index)=>(    
    <Bookitems title={publishers.title}Books={publishers.Books} key={index}/>))} </h3>
        </div>
      </div>
    );
  }
}

export default App;
