import React from "react";

class Employees extends React.Component {
  render() {
    return (
      <div style={{
        backgroundColor: "grey", margin: 20
      }
      } >
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
        <p>{this.props.address}</p>

      </div>
    )
  }
}

export default Employees;