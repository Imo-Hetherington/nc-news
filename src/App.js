import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Article from "./components/Article";
import { Router } from "@reach/router";
import ErrorPage from "./components/ErrorPage";
import TopicsNav from "./components/TopicsNav";

class App extends Component {
  state = {
    user: "weegembump",
    viewTopics: false
  };

  render() {
    return (
      <div className="App">
        <Title />
        <NavBar toggleTopics={this.toggleTopics} />
        <main className="Main">
          {this.state.viewTopics && <TopicsNav />}
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/topics/:topic_slug" />
            <Article path="/articles/:article_id" user={this.state.user} />
            <ErrorPage default msg="Page Not Found" status={404} />
          </Router>
        </main>

        <Footer />
      </div>
    );
  }

  toggleTopics = () => {
    this.setState(currentState => {
      return { viewTopics: !currentState.viewTopics };
    });
  };
}

export default App;
