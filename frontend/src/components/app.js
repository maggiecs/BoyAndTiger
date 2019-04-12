import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import ComicsContainer from './comics/comics_container';
import ComicContainer from './comic/comic_container';
import ComicsSearchContainer from './comics/comics_search_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/comics" component={ComicsContainer} />
      <Route exact path="/comics/:date" component={ComicContainer} />
      <Route exact path="/results" component={ComicsSearchContainer} />
      <Route exact path="/" component={MainPage} />

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;