import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import './../main/reset.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = { searchedQuery: "" };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });

      // if (e.currentTarget.value !== "") {
      //   this.props.fetchSearchedComics(e.currentTarget.value);
      // } else {
      //   this.props.receiveNullComics();
      // }
    };
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/profile'} className="nav-link">Profile</Link>
          <br></br>
          <Link to={'/comics'} className="nav-link">Comics</Link>
          <br></br>
          <Link to={'/new_tweet'} className="nav-link">Fan Drawings</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'} className="nav-link">Signup</Link>
          <Link to={'/login'} className="nav-link">Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="nav-search-container" >
        <h1>Boy and Tiger</h1>
          <input type="text"
            value={this.state.searchedQuery}
            className="nav-search"
            onChange={this.update('searchedQuery')}
            placeholder="Search..."
          />
          <button type="submit"><i className="fa fa-search"></i></button>
          {this.getLinks()}
        </div> 
       
      </div>
    );
  }
}

export default NavBar;