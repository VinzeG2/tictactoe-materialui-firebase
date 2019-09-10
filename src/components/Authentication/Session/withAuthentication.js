import React, {useEffect, useState} from 'react';
import AuthUserContext from './context';
import firebase from 'firebase'

const withAuthentication = Component => props => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged(
      (authUser) => {
        authUser ? setAuthUser({authUser}):setAuthUser(null);
      }
    );
    return function cleanup(){
      unsuscribe();
    }
  });
  return (
    <AuthUserContext.Provider value={authUser}>
      <Component {...props} />
    </AuthUserContext.Provider>
  )
};

export default withAuthentication;