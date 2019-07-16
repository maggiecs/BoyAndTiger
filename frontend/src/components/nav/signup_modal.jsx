import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from "react-redux";
import {signup} from '../../actions/session_actions';
import { login } from "../../actions/session_actions";


const mapStateToProps = (state) => {
   return {
      signedIn: state.session.isSignedIn,
      errors: state.errors.session
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      signup: user => dispatch(signup(user)),
      login: user => dispatch(login(user))
      
   };
};


class SignupModal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        email: "",
        handle: "",
        password: "",
        password2: "",
        errors: {},
        open: false
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.clearedErrors = false;
   }


   componentWillReceiveProps(nextProps) {
      if (nextProps.signedIn === true) {
         let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
         };
         // this.props.history.push('/login');
         // return <Redirect to='/' />
         this.props.login(user);

      }

      this.setState({ errors: nextProps.errors });
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
         handle: this.state.handle,
         password: this.state.password,
         password2: this.state.password2
      };
      console.log("signup")
      this.setState({ errors: {} });

      this.props.signup(user, this.props.history);
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
         <div style={{ display: 'inline-block' }}>
          <div
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
               <span className="nav-link" style={{ cursor: 'pointer' }}>Sign Up</span>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
            <DialogContent>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  value={this.state.email}
                  type="email"
                  onChange={this.update("email")}
                  placeholder="Email"
                  fullWidth
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Handle"
                  value={this.state.handle}
                  type="text"
                  onChange={this.update("handle")}
                  placeholder="Handle"
                  fullWidth
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Password"
                  value={this.state.password}
                  type="password"
                  onChange={this.update("password")}
                  placeholder="Password"
                  fullWidth
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Confirm Password"
                  value={this.state.password2}
                  type="password"
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
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
                  <Button onClick={this.handleSubmit} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </ div>
      );
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SignupModal);
