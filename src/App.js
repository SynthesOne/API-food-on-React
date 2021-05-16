import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';
import NotFound from './pages/main/NotFound';
import Category from './pages/main/Category';

function App() {
  let text = {
    title: "Welocme to TheMealDB",
    description: "Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world."
  }

  return (
    <>
      <Router>
        <Header />
        <main className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about">
              <About text={text} />
            </Route>
            <Route path="/contacts" component={Contacts} />
            <Route path="/category/:name" component={Category} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
