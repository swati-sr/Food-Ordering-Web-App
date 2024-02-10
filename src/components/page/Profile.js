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
    this.setState({
      userInfo: {
        profileImage: json.avatar_url,
        name: json.name,
        url: json.url,
        html_url: json.html_url,
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
      <div>
        {/* <h2>This is {this.props.name} profile</h2> */}
        <img
          className="shadow-2xl shadow-[#403d39] h-64 rounded-lg"
          src={this.state.userInfo.profileImage}
        ></img>
        <h3 className="mt-3 text-[#252422] font-semibold p-1 pl-20">
          {this.state.userInfo.name}
        </h3>
        <a
          className="mt-1 cursor-pointer text-[#ff6b35] font-semibold hover:font-extrabold p-1 pl-20"
          href={this.state.userInfo.html_url}
        >
          Github Account
        </a>{" "}
        <h4 className="mt-1"> </h4>
      </div>
    );
  }
}

export default Profile;
