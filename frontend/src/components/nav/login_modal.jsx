import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from "react-redux";
import { login } from '../../actions/session_actions';


const mapStateToProps = (state) => {
   return {
      errors: state.errors.session
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      login: user => dispatch(login(user))
   };
};



class LoginModal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         // email: "demouser@demo.com",
         // password: "testtesttesttest",
         email: "",
         password: "",
         errors: {},
         open: false
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.demoLogin = this.demoLogin.bind(this);
      this.demoLoginHelper = this.demoLoginHelper.bind(this);
      this.clearedErrors = false;
   }


   componentWillReceiveProps(nextProps) {
      if (nextProps.currentUser === true) {
      }

      this.setState({ errors: nextProps.errors });
   }

   demoLogin() {
      // this.refs.btn.setAttribute("disabled", "disabled");
      const emailArr = "demouser@demo.com".split("");
      const passwordArr = "testtesttesttest".split("");
      const button = document.getElementById("signup_button");
      this.setState({ email: '', password: '' }, () =>
         this.demoLoginHelper(emailArr, passwordArr, button))
   }

   demoLoginHelper(emailArr, passwordArr, button) {
      if (emailArr.length > 0) {
         this.setState(
            { email: this.state.email + emailArr.shift() }, () => {
               window.setTimeout(() =>
                  this.demoLoginHelper(emailArr, passwordArr, button), 60);
            }
         );
      }
      else if (passwordArr.length > 0) {
         this.setState(
            { password: this.state.password + passwordArr.shift() }, () => {
               window.setTimeout(() =>
                  this.demoLoginHelper(emailArr, passwordArr, button), 70);
            }
         );
      }
      else {
         button.click();
      }
   }

   update(field) {
      return e => this.setState({
         [field]: e.currentTarget.value
      });
   }

   handleSubmit(e) {
      e.preventDefault();

      let user = {
         email: this.state.email,
         password: this.state.password
      };
      this.setState({errors: {}});

      this.props.login(user);
   }

   renderErrors() {
      return (
         <ul>
            {Object.keys(this.state.errors).map((error, i) => (
               <li key={`error-${i}`}>
                  {this.state.errors[error]}
               </li>
            ))}
         </ul>
      );
   }


   handleClickOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };
   render() {

      return (
        <div style={{ display: "inline-block", marginLeft: "10px" }}>
          <div
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
               <span className="nav-link" style={{cursor: 'pointer'}}>Log In</span>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Log In</DialogTitle>
            <DialogContent>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  value={this.state.email}
                  type="email"
                  onChange={this.update("email")}
                  placeholder="Email"
                  fullWidth
                />

                <TextField
                  margin="dense"
                  id="name"
                  label="Password"
                  value={this.state.password}
                  type="password"
                  onChange={this.update("password")}
                  placeholder="Password"
                  fullWidth
                />

                {this.renderErrors()}
                {/* <input type="submit" value="Submit" /> */}
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={this.handleSubmit}
                color="primary"
                id="signup_button"
              >
                Login
              </Button>

              <Button
                ref="btn"
                onClick={this.demoLogin}
                color="primary"
               className="demo_button"
              >
                Demo Login
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginModal);
