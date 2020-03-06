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
import { UserProvider } from "./UserContext";

class App extends Component {
  state = {
    viewTopics: false
  };

  render() {
    return (
      <UserProvider value={"weegembump"}>
        <div className="App">
          <Title />
          <NavBar
            toggleTopicsOn={this.toggleTopics}
            toggleTopicsOff={this.toggleTopicsOff}
          />
          <main className="Main" onClick={this.toggleTopicsOff}>
            {this.state.viewTopics && <TopicsNav />}
            <Router className="mainContent">
              <ArticleList path="/" />
              <ArticleList path="/topics/:topic_slug" />
              <Article path="/articles/:article_id" />
              <ErrorPage default msg="Page Not Found" status={404} />
            </Router>
          </main>
          <Footer />
        </div>
      </UserProvider>
    );
  }

  toggleTopics = () => {
    this.setState(currentState => {
      return { viewTopics: !currentState.viewTopics };
    });
  };
  toggleTopicsOff = () => {
    this.setState({ viewTopics: false });
  };
}

export default App;
