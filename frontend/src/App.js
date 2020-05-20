import React, { lazy, Suspense, useState, useEffect, useContext } from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { theme } from './theme';
import { configureStore } from './store';
import routes from './routes';
import GoogleAnalytics from './components/GoogleAnalytics';
import CookiesNotification from './components/CookiesNotification';
import ScrollReset from './components/ScrollReset';
import StylesProvider from './components/StylesProvider';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './assets/scss/main.scss';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import { db } from './config/Fire';
import firebase from './config/Fire';
import Context from './globalStore/context';

const history = createBrowserHistory();
const store = configureStore();

const SignUp = lazy(() => import('src/views/SignUpPage'));
const Login = lazy(() => import('src/views/LoginPage'));

function App() {

  const { state, favorites, actions } = useContext(Context);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  // const [data1, setData] = useState();
  const [signupClicked, setSignupClicked] = useState(false);

  // below pulls the data in from firebase
  useEffect(() => {
    const dat = []
    db.collection('test3oneppr')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          dat.push(doc.data())
        })
      })
      .then(() => {
        actions({ type: 'setState', payload: dat })
      })
      .then(() => {
        console.log('data from fb loaded');
        console.log(state)
        //console.log(state.length)
      })
      .then(() => {
        console.log(state)
      })
  }, [])

  //this function pulls in the favorites from firebase
  useEffect(() => {
    const favData = []
    db.collection('favorites')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          favData.push(doc.data())
        })
      })
      .then(() => {
        actions({ type: 'setFavorites', payload: favData });
      })
  }, [])

  // this function keeps track of whether a user is logged in
  useEffect(() => {
    if (user == null) {
      setIsAdmin(false);
    }
    authListener();
  }, [user, authListener])

  //this function keeps track of current user role and sets site priviledges accordingly
  function getRole(uid) {
    db.collection('users')
      .get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.id === uid) {
            setIsAdmin(doc.data().isAdmin);
          }
        })
      })
      .catch(error => console.log(error));
  }

  // this function gets the user id and role from firebase and sets the role accordingly
  function authListener() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        getRole(user.uid);
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }

  // the following lines patch a routing issue with the sign up page
  let login;
  if (signupClicked) {
    login = <SignUpPage setSignupClicked={setSignupClicked} />
  } else {
    login = <LoginPage setSignupClicked={setSignupClicked} />
  }

  if (isAdmin) {
    return (
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <StylesProvider>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Router history={history}>
                <ScrollReset />
                <GoogleAnalytics />
                <CookiesNotification />
                {user ? (renderRoutes(routes)) : (login)}
              </Router>
            </MuiPickersUtilsProvider>
          </StylesProvider>
        </ThemeProvider>
      </StoreProvider>
    );
  } else {
    return (
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <StylesProvider>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Router history={history}>
                <ScrollReset />
                <GoogleAnalytics />
                <CookiesNotification />
                {user ? (renderRoutes(routes)) : (login)}
              </Router>
            </MuiPickersUtilsProvider>
          </StylesProvider>
        </ThemeProvider>
      </StoreProvider>
    );
  }


}

export default App;
