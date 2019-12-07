import React, { Component } from "react";
import { connect } from "react-redux";

import AddFriendsList from "./components/AddFriendsList";
import Login from "./components/Login";

import { initializeFirebase } from "./actions/firebase.action";

import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  componentDidMount() {
    this.props.initializeFirebase();
  }

  render() {
    return (
      <div className="App">
        <Login />
        {this.props.firebase && this.props.firebase.user && (
          <Fade in={this.props.firebase.user}>
            <Grid className="grid" container>
              <Grid className="main" style={{ padding: "1em" }} item xs={12}>
                <AddFriendsList />
              </Grid>
            </Grid>
          </Fade>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  initializeFirebase
})(App);

export { App };
