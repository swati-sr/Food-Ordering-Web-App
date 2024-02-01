//Creating a Class Bsed Component
import { Component } from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    console.log("Parent-ComponentDidMount");
  }
  componentWillUnmount() {
    console.log("Parent-ComponentWillUnmount");
  }
  render() {
    console.log("Parent-Render");
    return (
      <>
        <h2>Get to know about me and my website</h2>
        <Outlet />
      </>
    );
  }
}

export default About;
