import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

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
          <Link to={'/profile'}>Profile</Link>
          <br></br>
          <Link to={'/comics'}>Comics</Link>
          <br></br>
          <Link to={'/new_tweet'}>Write a Tweet</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Boy and Tiger</h1>
        <li className="nav-search-container">
          <img className="nav-search-icon" src="images/search_icon.png" />
        <input type="text"
          value={this.state.searchedQuery}
          className="nav-search"
          onChange={this.update('searchedQuery')}
          placeholder="Search"
        />
        {/* <ul className="nav-search-user-list"> */}
          {/* {this.renderComics()} */}
        {/* </ul> */}
        </li> 
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;