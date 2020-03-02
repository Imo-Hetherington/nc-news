import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    user: "weegembump"
  };

  render() {
    return (
      <div className="App">
        <Title />
        <NavBar />
        <ArticleList />
        <Footer />
      </div>
    );
  }
}

export default App;
