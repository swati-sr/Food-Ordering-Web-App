import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: " ",
        profileImage: " ",
        url: "",
      },
    };
    console.log("Child-Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/swati-sr");
    const json = await data.json();
    console.log(json, "wwwwwwwwwwwwwwwww");
    this.setState({
      userInfo: {
        profileImage: json.avatar_url,
        name: json.name,
        url: json.url,
      },
    });
    console.log("Child-ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Child-ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child-ComponentWillUnmount");
  }
  render() {
    console.log("Child-Render");
    return (
      <>
        <h2>This is {this.props.name} profile</h2>
        <img src={this.state.userInfo.profileImage}></img>
        <h3>{this.state.userInfo.name}</h3>
        <h4>{this.state.userInfo.url}</h4>
      </>
    );
  }
}

export default Profile;
