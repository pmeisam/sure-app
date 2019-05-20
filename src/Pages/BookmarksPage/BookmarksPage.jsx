import React, { Component } from "react";
import HackerNewsNav from "../../Components/HackerNewsNav/HackerNewsNav";

class BookmarksPage extends Component {
  render() {
    return (
      <>
        <HackerNewsNav bookmarks={this.props.bookmarks} />
        {this.props.bookmarks.length > 0 ? (
          <div className="newsPage">
            {this.props.bookmarks.map((bookmark, idx) =>
              idx % 2 === 0 ? (
                <div
                  className="newsCards"
                  style={{
                    backgroundColor: "#FF7043",
                    width: "18rem",
                    color: "white"
                  }}
                >
                  <h6>{bookmark.title}</h6>
                  <p>By: {bookmark.author}</p>
                  <p>Score: {bookmark.score}</p>
                  <a target="_blank" className="newsLink" href={bookmark.url}>
                    Read more...
                  </a>
                  <button
                    className="newsBtn"
                    onClick={() => this.props.handleBookmarkDelete(idx)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              ) : (
                <div
                  className="newsCards"
                  style={{
                    backgroundColor: "#039BE5",
                    width: "18rem",
                    color: "white"
                  }}
                >
                  <h6>{bookmark.title}</h6>
                  <p>By: {bookmark.author}</p>
                  <p>Score: {bookmark.score}</p>
                  <a target="_blank" className="newsLink" href={bookmark.url}>
                    Read more...
                  </a>
                  <button
                    className="newsBtn"
                    onClick={() => this.props.handleBookmarkDelete(idx)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              )
            )}
          </div>
        ) : (
          <div>
            <img
              style={{ width: "100%" }}
              alt="loading..."
              src="./images/loading.gif"
            />
          </div>
        )}
      </>
    );
  }
}

export default BookmarksPage;
