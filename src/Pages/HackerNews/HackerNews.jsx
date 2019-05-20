import React, { Component } from "react";
import HackerNewsNav from "../../Components/HackerNewsNav/HackerNewsNav";
import "./HackerNews.css";

class HackerNews extends Component {
  render() {
    return (
      <>
        <HackerNewsNav bookmarks={this.props.bookmarks} />
        {this.props.topNews ? (
          <div className="newsPage">
            {this.props.topNews.map((news, idx) =>
              idx % 2 === 0 ? (
                <div
                  className="newsCards"
                  key={idx}
                  style={{
                    backgroundColor: "#FF7043",
                    width: "18rem",
                    color: "white"
                  }}
                >
                  <h6>{news.title}</h6>
                  <p>By: {news.author}</p>
                  <p>Score: {news.score}</p>
                  <a target="_blank" className="newsLink" href={news.url}>
                    Read more...
                  </a>
                  <button
                    className="newsBtn"
                    onClick={() => this.props.handleBookmark(idx)}
                  >
                    <i className="fas fa-bookmark" />
                  </button>
                </div>
              ) : (
                <div
                  key={idx}
                  className="newsCards"
                  style={{
                    backgroundColor: "#039BE5",
                    width: "18rem",
                    color: "white"
                  }}
                >
                  <h6>{news.title}</h6>
                  <p>By: {news.author}</p>
                  <p>Score: {news.score}</p>
                  <a className="newsLink" target="_blank" href={news.url}>
                    Read more...
                  </a>
                  <button
                    className="newsBtn"
                    onClick={() => this.props.handleBookmark(idx)}
                  >
                    <i className="fas fa-bookmark" />
                  </button>
                </div>
              )
            )}
          </div>
        ) : (
          <div>
            <img
              style={{ width: "100%", margin: "0 auto" }}
              src="./images/loading.gif"
              alt="loading"
            />
          </div>
        )}
      </>
    );
  }
}

export default HackerNews;
