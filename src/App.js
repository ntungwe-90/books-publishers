import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <input type="text" placeholder="Book" />
            <br />
            <input type="text" placeholder="Publisher" />
            <br />
            <input type="more books" />
          </form>
        </div>

        {/* List of users */}
        <div>
          <h3>List of users</h3>
        </div>
      </div>
    );
  }
}

export default App;
