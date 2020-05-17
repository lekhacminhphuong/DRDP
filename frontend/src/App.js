import React, { useState, useEffect, useContext } from 'react';
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
import { db } from './config/Fire';
import firebase from './config/Fire';
import adminRoutes from './adminRoutes';
import Context from './globalStore/context';

const history = createBrowserHistory();
const store = configureStore();

function App() {

  const { state, favorites, actions } = useContext(Context);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [data1, setData] = useState();

  // // BELOW is what pulls the data in from firebase
  // // this is where we currently want to pull the data to and then pass down in props
  // // uncomment to use
  // useEffect(() => {
  //   const dat = []
  //   db.collection('test3oneppr')
  //     .get()
  //     .then((snapshot) => {
  //       //const dat = []
  //       snapshot.docs.forEach(doc => {
  //         dat.push(doc.data())
  //         console.log(doc.data())
  //       })
  //       //setData(dat)
  //       //console.log(data)
  //     })
  //     .then(() => {
  //       setData(dat)
  //     })
  //     .then(() => {
  //       console.log('use effect fired');
  //       console.log(data1)
  //     })
  // }, [])

  //pull in the favorites from firebase
  useEffect(() => {
      const favData = []
      db.collection('favorites')
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach(doc => {
            favData.push(doc.data())
            //console.log(doc.data())
          })
        })
        .then(() => {
          actions({ type: 'setFavorites', payload: favData });
        })
  }, [])

  useEffect(() => {
    if (user == null) {
      setIsAdmin(false);
    }
    authListener();
  }, [user, authListener])

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

  function authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        getRole(user.uid);
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }

  function logState() {
    console.log(data1);
  }

  //console.log('is admin:' + isAdmin)

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
                {user ? (renderRoutes(adminRoutes)) : (<LoginPage />)}
                {/* {renderRoutes(routes)} */}
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
                {user ? (renderRoutes(routes)) : (<LoginPage />)}
                {/* {renderRoutes(routes)} */}
                {/* <button onClick={logState}>button</button>  */}
              </Router>
            </MuiPickersUtilsProvider>
          </StylesProvider>
        </ThemeProvider>
      </StoreProvider>
    );
  }


}

export default App;
