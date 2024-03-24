import React from 'react';
import './App.css';
import Employees from './components/Employees';

/*set update button in class component */
/*NB you cannot use console inside the class directly*/

class App extends React.Component {
  constructor() {
    super()
    this.state = { name: "Teacher" }
  }
  render() {
    console.log(this.props.name)
    return (
      <div className='App'>
        <h1>Hello World</h1>
        <Employees name="Marie" email="marie@gmail.com" address="Dodan Johnson Rd 12" />

        <Employees name={this.state.name} email="luke@gmail.com" address="Oto Everland Rd 12" />
        <button onClick={() => this.setState({name:"Peter"})}>Update Name</button>
      </div>

    )

  }
}

export default App;
