import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './HackerNewsNav.css'

class HackerNewsNav extends Component {
  render() {
    return (
      <div className='newsNav'>
        <NavLink exact className='tab' activeStyle={{ backgroundColor: "white", color: "#039BE5" }} to="/">SURE.</NavLink>
        <NavLink className='tab' activeStyle={{ backgroundColor: "white", color: "#039BE5" }} to="/hacker-news">Hacker News</NavLink>
        <NavLink className='tab' activeStyle={{ backgroundColor: "white", color: "#039BE5" }} to="/bookmarks">Bookmarks <span>{this.props.bookmarks.length}</span></NavLink>
      </div>
    );
  }
}

export default HackerNewsNav;
