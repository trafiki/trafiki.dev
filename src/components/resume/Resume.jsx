import React, { Component } from "react";
import "./Resume.css";
import GoButton from "../utils/goButton/GoButton";
import Post from "../utils/article/Post";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {

    const posts = [
      {
        tags: ['tag', 'new tag'],
        url: 'https://w3schools.com/jsref/jsref_tofixed.asp',
        publicationDate: 'January 13, 2021',
        title: 'First article',
        readTime: "19"
      }, 
      {
        tags: ['tag', 'new tag'],
        url: 'https://w3schools.com/jsref/jsref_tofixed.asp',
        publicationDate: 'January 13, 2021',
        title: 'Second article',
        readTime: "19"
      },
      {
        tags: ['tag', 'new tag'],
        url: 'https://w3schools.com/jsref/jsref_tofixed.asp',
        publicationDate: 'January 13, 2021',
        title: 'Third article',
        readTime: "19"
      }
    ]

    return (
      <div className="blog">
      <div className="blog_posts">
        {posts.map((post, index) => (
          <Post key={index} {...post} id={index} />
        ))}
      </div>

      <GoButton prev={{ url: "/work", text: "Work" }} />
    </div>
    );
  }
}

export default Resume;
