import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import PlantScreen from './screens/PlantScreen';

import './index.css';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/plant/:id' component={PlantScreen} />
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
