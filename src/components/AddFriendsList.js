// uid
import React, { Component } from "react";
import { connect } from "react-redux";

import { updateFriendList } from "../actions/firebase.action";

import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

class AddFriendsList extends Component {
  constructor(props) {
    super(props);
    this.handleFriendEmailChange = this.handleFriendEmailChange.bind(this);
    this.handleFriendEmailSubmit = this.handleFriendEmailSubmit.bind(this);
    let list = [];
    if (
      this.props.firebase.db !== null &&
      this.props.firebase.db[this.props.firebase.user.uid]
    ) {
      list = this.props.firebase.db[this.props.firebase.user.uid].list;
    }

    this.state = {
      email: "",
      emails: list
    };
  }

  handleFriendEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleFriendEmailSubmit() {
    let updatedEmails = this.state.emails;
    updatedEmails.push(this.state.email);
    this.props.updateFriendList(
      this.props.firebase.db,
      this.props.firebase.user.uid,
      updatedEmails
    );

    this.setState({ emails: updatedEmails, email: "" });
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.emails.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>

        <TextField
          className="friends-email"
          label={`Friend's Email`}
          value={this.state.email}
          onChange={e => this.handleFriendEmailChange(e)}
          margin="normal"
          style={{ display: "block", backgroundColor: "white" }}
        />
        <Button
          variant="contained"
          style={{
            color: "white",
            marginTop: "1em",
            float: "right",
            backgroundColor: "#BB86FC"
          }}
          onClick={this.handleFriendEmailSubmit}
          className="create-button"
        >
          +
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, { updateFriendList })(AddFriendsList);

export { AddFriendsList };
