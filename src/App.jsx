import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/body/Home/Home";
import What from "./components/body/What/What";
import Who from "./components/body/Who/Who";
import Contact from "./components/body/Contact/Contact";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from "./components/body/About/About";
import * as PATH from "./consts/Links";
import Disclaimer from "./components/body/Disclaimer/Disclaimer";


function App() {
    return (
        <div className="App">
            <div className="background-image" style={{"backgroundImage":`url("/mohawk_valley.jpg")`}}/>
            <div className="content-container">
                <BrowserRouter>
                <Route
                render={({ location }) => (
                    <React.Fragment>
                        <Header />
                        <div className="section-body">
                            <Switch location={location}>
                                <Route exact path={PATH.ABOUT} component={About} key="About" />
                                <Route exact path={PATH.HOME} component={Home} key="Home" />
                                <Route exact path={PATH.WHO} component={Who} key="Who" />
                                <Route exact path={PATH.WHAT} component={What} key="What" />
                                <Route exact path={PATH.CONTACT} component={Contact} key="Contact" />
                                <Route exact path={PATH.DISCLAIMER} component={Disclaimer} key="Disclaimer" />
                                <Route path="*" component={Home} key="Home" />
                            </Switch>
                        </div>
                        <Footer />
                    </React.Fragment>
                )}
                />
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
