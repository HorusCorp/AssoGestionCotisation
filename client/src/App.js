import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css'
import './App.css';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ProductList from './components/ProductList';
import SubscribeForm from './components/Subcribe';
import Page404 from './components/Page404';
import Tarifs from './components/Tarifs';
import Fonctions from './components/Fonctions';
import Contact from './components/Contact';
import Guideutilisation from './components/GuideUtilisation';
import Feedback from './components/Feedback';
//rREDUX IMPORT//

import newTabs from './reducers/Tabs.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({newTabs}));

function App() {
  return (
    
<Provider store={store}>
      <div className="App">
      
        <Router>
            <Switch>
              <Route  path='/' exact component={Home}/>
              <Route path='/tarifs' component={Tarifs}/>
              <Route path='/fonctions' component={Fonctions}/>
              <Route path='/guide' component={Guideutilisation}/>
              <Route path='/feedback' component={Feedback}/>
              <Route path='/contact' component={Contact}/>
              <Route  path='/login' component={LoginForm}/>
              <Route  path='/products' component={ProductList}/>
              <Route  path='/subscribe' component={SubscribeForm}/>
              <Route  component={Page404}/>
            </Switch>
          </Router>
      </div>
</Provider>
    
  );
}

export default App;
