import React, { useState } from 'react';
import { Route, Redirect } from 'react-router';
// import {userIsLogged} from './pages/auth/authActions'

interface PropTypes {
  path: string | string[];
  exact: boolean;
  component: React.ComponentType<any>;
}

const RoutesPrivate: React.FC<PropTypes> = (props) => {
  const [userIsLogged] = useState(localStorage.getItem("user") || null);

  //return <div />;
  //return userIsLogged() ? <Route {...props} /> : <Redirect to="/login" />;
  return userIsLogged ? <Route {...props} /> : <Redirect to="/" />;
  // if (!userIsLogged) {
  //   return  <Redirect to="/login" />
  // }
  // else {
  //    return <Route {...props} />
  // }
}

export default RoutesPrivate;