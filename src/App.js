import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* here we have 3 components defined in App*/

import Login from './Components/Login';
import Asset from './Components/Asset';
import PrRoute from './Components/PrRoute';

/*
We use the Router to define different "pages" or routes of the app.
The Routes component contains all the different routes that the app can visit.
The path / renders the Login a=oage (i.e., the login form).
The path /assets renders the Asset Page, but only if the user is authenticated.

*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/assets'
          element={
            <PrRoute>
              <Asset />
            </PrRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
