import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {sum, multiply, sumArr} from './utils';

const Page1 = React.lazy(() => import(/* webpackChunkName: "page1"*/'./pages/Page1'));
const Page2 = React.lazy(() => import(/* webpackChunkName: "page2"*/'./pages/Page2'));

function App() {
  React.useEffect(() => {
    console.log(sum(1, 2));
    console.log(multiply(4,5));
    console.log(sumArr([9,2,13,4]));
  }, [sum, multiply, sumArr]);

  return (
    <div className="App">
      <h1>TypeScript with React</h1>
      <Router>
        <React.Suspense fallback={<p>Loading ...</p>}>
          <div style={{backgroundColor: 'papayawhip'}}>
            <Link to="/">Page1</Link>
            <Link to="/page2">Page2</Link>
          </div>

          <Switch>
            <Route exact path="/">
              <Page1 name="Joseph" />
            </Route>
            <Route path="/page2">
              <Page2 name="Ayaan" />
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
