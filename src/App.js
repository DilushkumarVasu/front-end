import React from 'react';
import InfoApp from './Info/app';
import FileUpload from './Info/file';
import { BrowserRouter as Router,  Route, Link, Switch } from 'react-router-dom'; 

function App() {
  return (
      <Router> 
        <div> 
            <Switch> 
              <Route exact path='/' component={InfoApp}></Route> 
              <Route exact path='/file' component={FileUpload}></Route>  
            </Switch> 
        </div> 
      </Router> 
  );
}

export default App;
