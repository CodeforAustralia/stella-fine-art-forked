import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import './App.css';
import AppRouters from './Components/Navbar/Routers/AppRouters';
import ReactGa from 'react-ga';

const GAcode = process.env.REACT_APP_GACODE;

const App = () => {
  useEffect(() => {
    ReactGa.initialize(GAcode);
    // TO REPORT PAGE VIEW
    ReactGa.pageview(window.location.pathname + window.location.search);
    // console.log('App', window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stella Kypriotis Fine Art</title>
        <meta
          name="Fine Art"
          content="Fine art painting can be a portrait or ourdoor painting (plein air) and commision painting anything of your interest."
        />
        <meta
          name="Commission painting"
          content="Fine art painting can be a portrait or ourdoor painting (plein air) and commision painting anything of your interest."
        />
        <meta name="Commission painting" content="Commission painting" />
      </Helmet>
      <AppRouters />
    </>
  );
};
export default App;
