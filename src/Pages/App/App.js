import React from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import HackerNews from "../HackerNews/HackerNews";
import BookmarksPage from '../BookmarksPage/BookmarksPage';
import { Switch, Route } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { getCurrentTopNews } from "../../utils/hacker-news-api";
import { getNewsById } from "../../utils/hacker-news-api";

class App extends React.Component {
  state = {
    topNews: null,
    bookmarks: []
  };
  handleBookmark = idx => {
    let bookmarksCopy = [...this.state.bookmarks];
    let topNewsCopy = [...this.state.topNews];
    bookmarksCopy.push(topNewsCopy[idx]);
    this.setState({bookmarks: bookmarksCopy});
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksCopy));
  };
  handleBookmarkDelete = idx => {
    let bookmarksCopy = [...this.state.bookmarks];
    bookmarksCopy = bookmarksCopy.filter( (b, i)=>
      bookmarksCopy[i] !== bookmarksCopy[idx]
    )
    this.setState({bookmarks: bookmarksCopy})
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksCopy));
  }
  async componentDidMount() {
    let topNewsApi = await getCurrentTopNews();
    let topNews = [];
    for (let i = 0; i < 100; i++) {
      let news = await getNewsById(topNewsApi[i]);
      topNews.push({
        author: news.by,
        score: news.score,
        title: news.title,
        url: news.url
      });
    }
    this.setState({ topNews });
    if (localStorage.bookmarks) {
      this.setState({ bookmarks: JSON.parse(localStorage.bookmarks) });
    } else {
      this.setState({ bookmarks: [] });
    }
  }
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/hacker-news"
            render={() => (
              <HackerNews
                bookmarks={this.state.bookmarks}
                topNews ={this.state.topNews}
                handleBookmark={this.handleBookmark}
              />
            )}
          />
          <Route exact path='/bookmarks' render={() => <BookmarksPage bookmarks={this.state.bookmarks} handleBookmarkDelete={this.handleBookmarkDelete} />} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
