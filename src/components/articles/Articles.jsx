import React, { Component } from "react";
import "./Articles.css";
import GoButton from "../utils/goButton/GoButton";
import Post from "../utils/article/Post";
// import uuid from "react-uuid";

export class Articles extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {

    const posts = [
      // {
      //   id: uuid(),
      //   tags: ['tag', 'new tag'],
      //   url: 'https://w3schools.com/jsref/jsref_tofixed.asp',
      //   publicationDate: 'January 13, 2021',
      //   title: 'First article',
      //   readTime: "19"
      // }, 
    ]

    return (
      <div className="blog">
        {
          (posts.length) ? (
            <div className="blog_posts">
            {posts.map((post, index) => (
              <Post key={index} {...post} id={index} />
            ))}
          </div>
          ) : (
            <h3>No articles to show</h3>
          )
        }
     

      <GoButton prev={{ url: "/work", text: "Work" }} />
    </div>
    );
  }
}

export default Articles;
