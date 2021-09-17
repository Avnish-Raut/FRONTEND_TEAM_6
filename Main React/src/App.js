import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Home'
import { Switch , Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router';
import About from './About'
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import './index.css';



const App = () =>{
    return(
        <>
        <Navbar/>
        
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/src/index.css" />
            
            <Redirect to='/' />
        </Switch>
        
        </>
    );
};

export default App