import React from 'react';
import "./main.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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

  constructor(props) {
    super(props);
  this.state = {
    anchorEl: null,
  };
  this.handleCalendarPick = this.handleCalendarPick.bind(this);
  this.selectArc = this.selectArc.bind(this);
}

  parseTodayDate() {
    let today =   new Date();
    // 1986 -> 1994 years for yyyy
    let yyyy = Math.floor(Math.random() * 9) + 1986;
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    mm = (mm > 9 ? "" : "0") + mm;
    dd = (dd > 9 ? "" : "0") + dd; 
    let fullDate = yyyy + mm + dd;
    return fullDate;
  }

  randomDate(e) {
    e.preventDefault();
    let from = new Date(1985,11,18);
    let to = new Date(1995,12,31);
    var date = new Date(+from + Math.random() * (to - from));
    let yyyy = date.getFullYear();
    let mm = date.getMonth()+1;
    let dd = date.getDate();
    mm = (mm > 9 ? "" : "0") + mm;
    dd = (dd > 9 ? "" : "0") + dd;
    let fullDate = yyyy + mm + dd;
    this.props.history.push(`/comics/${fullDate}`); 
  }

  handleCalendarPick = date => {
  
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    mm = ((mm > 9 ? '' : '0') + mm);
    dd = ((dd > 9 ? '' : '0') + dd); 
    let fullDate = yyyy + mm + dd;
    // console.log(fullDate)
    // redirect to fullDate.img
    // browserHistory.push(`/comics/${fullDate}`);
    this.props.history.push(`/comics/${fullDate}`);    
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  selectArc(e, character) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/results",
      search: `?query=${character}`
    });
    window.location.reload();

  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  rand1 = Math.floor(Math.random() * 7) + 1;
  rand2 = Math.floor(Math.random() * 7) + 1;
  date1 = new Date(1985,10,18);
  date2 = new Date(1995,11,31);

  render() {
    let todayDate = this.parseTodayDate();
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    
    return (
      <div>
        <ReactFullpage
          navigation
          controlArrows="true"
          // sectionsColor={["#00cf35", "#7c5cff", "#001935", "#001935"]}
          navigationPosition="left"
          slidesNavigation="true"
          render={({ fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div
                  className="section section1"
                  style={{
                    backgroundImage: `url("wallpapers/wallpaper${
                      this.rand2
                    }.jpg")`,
                    backgroundSize: "cover"
                  }}
                >
                  <h1 className="logo">Boy and Tiger</h1>

                  <img
                    className="splashPageImage"
                    alt="todays comic"
                    src={
                      "https://s3.amazonaws.com/ch-comics/hdcalvinhobbes/" +
                      todayDate +
                      ".jpg"
                    }
                  />

                  <div className="main_page_nav">
                    {/* buttons go here */}

                    <div className="randomWrapper">

                      <button onClick={e => this.randomDate(e)}>
                        <i className="fas fa-random" />

                      </button>
                    </div>

                    <div className="main_page_calendar">
                      <DatePicker
                        value={"SELECT BY DATE"}
                        selected={this.date1 - 1}
                        className="calendar"
                        selectsStart
                        minDate={this.date1}
                        maxDate={this.date2}
                        onChange={event =>
                          this.handleCalendarPick(event)
                        }
                      />
                    </div>

                    <div>
                      <Button
                        aria-owns={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        variant="contained"
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
                        <MenuItem
                          onClick={e =>
                            this.selectArc(e, "Spaceman Spiff")
                          }
                        >
                          Spaceman Spiff
                        </MenuItem>
                        <MenuItem
                          onClick={e =>
                            this.selectArc(e, "Stupendous Man")
                          }
                        >
                          Stupendous Man
                        </MenuItem>
                        <MenuItem
                          onClick={e =>
                            this.selectArc(e, "Tracer Bullet")
                          }
                        >
                          Tracer Bullet
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>

                <div className="git-logo">
                  <a
                    href="https://github.com/maggiecs/BoyAndTiger"
                    className="boy_tiger_github"
                  >
                    <i className="fab fa-github" style={{ backgroundColor: "white", padding: "2px", borderRadius: "50%" }} />
                  </a>
                </div>

                  <div className="next_section_button">
                    <button
                      className="main_page_scroll_down"
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      About Us
                    </button>
                  </div>
                </div>

                <div
                  className="section section2"
                  style={{
                    backgroundImage: `url("wallpapers/wallpaper${
                      this.rand1
                    }.jpg")`,
                    backgroundSize: "cover"
                  }}
                >
                  <h1 className="about_us"> About Us</h1>

                  <div className="people_div">
                    <div className="person1">
                      <img
                        alt="magatha pic"
                        src={"about/magatha.png"}
                        className="aboutImg"
                      />
                      <p className="aboutParagraph">
                        Maggie has always enjoyed reading the Comics
                        section whenever she grabbed a newspaper.
                        She thought Calvin and Hobbes was one of the
                        most fun and relatable comics. When she’s
                        not coding, she is finding new mountains to
                        hike and new science fiction books to read.
                      </p>
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
                      <img
                        alt="cameron pic"
                        src={"about/cameron.jpg"}
                        className="aboutImg"
                      />

                      <p className="aboutParagraph">
                        Cameron fully intends on reading The
                        Complete Calvin and Hobbes that is sitting
                        on his bookshelf. It’ll happen one day! He
                        is also a webcomic connoisseur whose
                        cherished possessions include the two
                        picturesforsadchildren books. When he’s not
                        writing code, Cameron also writes short
                        stories, plays, and poems.
                      </p>
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
                      <img
                        alt="derek pic"
                        src={"about/derek.jpg"}
                        className="aboutImg"
                      />

                      <p className="aboutParagraph"> 
                        Derek loved Calvin and Hobbes growing up,
                        and read all of the books cover to cover
                        multiple times. He's a big fan of the
                        existential dread Calvin faces daily, and
                        enjoys the company. When he's not writing
                        code, Derek likes to experience new cheeses
                        and window shop for things he can't afford.
                      </p>
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
                      <img
                        alt="gary pic"
                        src={"about/gary.png"}
                        className="aboutImg"
                      />

                      <p className="aboutParagraph">
                        Gary grew up with heaps of Calvin and Hobbes
                        treasuries. He was obsessed with collecting
                        them- from the essential to the
                        authoritative. He was heartbroken to find
                        they did not make his parents’ cardboard
                        boxes when they moved a few years ago. When
                        he's not writing code, Gary likes to play
                        video games and watch TV/movies.
                      </p>
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

                <div
                  className="section section3"
                  style={{
                    backgroundImage: `url("wallpapers/bill.jpg")`,
                    backgroundSize: "cover"
                  }}
                >
                  <h1 className="about_bill">Bill Watterson</h1>

                  <div className="bill_blurb">
                    <p>
                      Bill Watterson, a golden God that walked
                      amongst men, never compromised on his artistic
                      vision.
                    </p>

                    <p>
                      This enigma of a man helped shape our
                      childhoods through his art, and refused to
                      commercialize Calvin and Hobbes, for the
                      better.
                    </p>

                    <p>
                      This website is an ode and homage, to Calvin,
                      Hobbes, and above all, Bill's resolute
                      character.
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


