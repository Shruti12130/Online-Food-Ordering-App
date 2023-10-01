import { Component } from "react";

class UserClass extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  render() {
    const {name, location} = this.props;
    const {count} = this.state;

    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }} 
        >
          Increase Count
        </button>
        <h2>Name: { name }</h2>
        <h4>Location: { location }</h4>
      </div>
     );
  }
}

export default UserClass;