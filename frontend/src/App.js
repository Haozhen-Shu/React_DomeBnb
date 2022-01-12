import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from './components/SplashPage';
import Spots from './components/Spots';
import DomeDetail from './components/DomeDetail';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/spots/:id'>
            <DomeDetail />
          </Route>
          <Route path='/spots'>
            <Spots />
          </Route>
          <Route path='/' exact>
            <Splash />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
   </BrowserRouter>
  );
}

export default App;