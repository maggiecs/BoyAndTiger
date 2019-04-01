import React from 'react';
import "./main.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import color from '@material-ui/core/colors/lightGreen';

// class MySection extends React.Component {
   
//    render() {
//       return (
//          <div className="section">
//             <h3>banana</h3>
//          </div>
//       );
//    }
// }

class MainPage extends React.Component {
  
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);



    return (
      <div>

        <ReactFullpage
          navigation
          controlArrows="true"
          sectionsColor={["#00cf35", "#7c5cff", "#001935", "#001935"]}
          navigationPosition="left"
          slidesNavigation="true"
          render={({ fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">

                  <h1 className="logo">Boy and Tiger</h1>

                  <img
                    className="splashPageImage"
                    alt="todays comic"
                    src="https://i.imgur.com/6KVgfoT.gif"
                  />

                  <div className="main_page_nav">
                    {/* buttons go here */}

                    <div>
                      <i className="fas fa-random" />
                    </div>
                    <div className="main_page_calendar" />

                    <div>
                      <Button
                        aria-owns={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        style={{ backgroundColor: "white" }}
                      >
                        Select Character
                      </Button>
                      <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        TransitionComponent={Fade}
                      >
                        <MenuItem onClick={this.handleClose}>
                          Spaceman Spiff
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                          Stupendous Man
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                          Tracer Bullet
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>

                  <a
                    href="https://github.com/maggiecs/BoyAndTiger"
                    className="boy_tiger_github"
                  >
                    <i className="fab fa-github" />
                  </a>

                  <div className="next_section_button">
                    <button
                      className="main_page_scroll_down"
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      Move down
                    </button>
                  </div>
                </div>

                <div className="section section2">
                  <h1 className="about_us"> About Us</h1>

                  <div className="people_div">
                    <div className="person1">
                      <p>m blurb</p>
                      <div className="personal_sites_wrapper">
                        <a href="https://maggiechen.me/">
                          <i className="fas fa-user-circle" />
                        </a>
                        <a href="https://github.com/maggiecs">
                          <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/maggie-chen1/">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                    </div>

                    <div className="person2">
                      <p>c blurb</p>
                      <div className="personal_sites_wrapper">
                        <a href="https://www.cameroncouch.me/">
                          <i className="fas fa-user-circle" />
                        </a>
                        <a href="https://github.com/CameronHCouch">
                          <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/cameroncouch/">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                    </div>

                    <div className="person3">
                      <p>d blurb</p>
                      <div className="personal_sites_wrapper">
                        <a href="https://derekdai.com/">
                          <i className="fas fa-user-circle" />
                        </a>
                        <a href="https://github.com/drkdi/">
                          <i className="fab fa-github" />
                        </a>
                        <a href="https://linkedin.com/in/daiderek/">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                    </div>

                    <div className="person4">
                      <p>g blurb</p>
                      <div className="personal_sites_wrapper">
                        <a href="https://www.garykangaroo.com/">
                          <i className="fas fa-user-circle" />
                        </a>
                        <a href="https://github.com/kangaree/">
                          <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/gary-kang-877b9b22/">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section section3">
                  <h1 className="about_bill">Bill?</h1>

                  <div className="bill_blurb">
                    <p>
                      Bill Watterson, a golden God that walked
                      amongst men, never compromised on his artistic
                      vision. 
                    </p>

                    <p>
                      This enigma of a man helped shape our childhoods through his art, and
                      refused to commercialize Calvin and Hobbes, for the better. 
                    </p>

                    <p>
                      This website is an ode and homage, to Calvin,
                      Hobbes, and above all, Bill's resolute character.
                    </p>

                    <p>
                      This website was built strictly for
                      educational purposes and all credit is due to
                      Bill and his work.
                    </p>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default MainPage;


