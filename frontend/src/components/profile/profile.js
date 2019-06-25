import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id)
  }

  componentWillReceiveProps(newState) {

  }

  render() {
    if (false) {
      return (<div>This user has no Comments</div>)
    } else {
      return (
        <div>
          <h2>All of This User's Comments</h2>
        </div>
      );
    }
  }
}

export default Profile;