import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Article from "./components/Article";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    user: "weegembump"
  };

  render() {
    return (
      <div className="App">
        <Title />
        <NavBar />
        <main className="Main">
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/topics/:topic_slug" />
            <Article path="/articles/:article_id" />
          </Router>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
