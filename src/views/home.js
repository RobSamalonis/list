import React, { Component } from "react";
import { connect } from "react-redux";
import { initializeFoo } from "../actions/baseAction.action";

class Home extends Component {
  componentWillMount() {
    this.props.initializeFoo();
  }

  render() {
    return <div>Check the console for redux!</div>;
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  { initializeFoo }
)(Home);

export { Home };
