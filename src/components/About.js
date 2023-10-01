import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Placeholder Name",
        location: "India",
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shruti12130");
    const json = await data.json();

    this.setState ({
      userInfo: json,
    })
  }

  render() {
    const {name, location} = this.state.userInfo  ;

    return (
    <div className="container">
      <h1>About Us</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          { ({loggedInUser}) => (
            <h1 className="text">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <p>This is a food ordering website created by Shruti.</p>

      <UserClass 
        name={name}
        location={location}
      />
    </div>
  )
  }
}

export default About;