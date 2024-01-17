import React from "react";
import "./PostCard.css"; 

import { Link } from "react-router-dom";

const Post = ({ id, title, tags, url, publicationDate, readTime }) => {
  
  return (
    <article
      className={`post_container ${id % 2 !== 0 ? "post_container_pad" : ""} `}
      itemScope
      itemType="http://schema.org/Article"
    >
      <a href={url} itemProp="url" className="post" target="_blank">
        <div className="post_meta">
          <small className="post_tags">
            {tags.map((tag, index) =>
              index === tags.length - 1 ? tag : `${tag}, `
            )}
          </small>
          <small className="post_date"> {publicationDate} </small>
        </div>

        <div className="post_title">
          <h3>{title}</h3>
          <small className="post_length">
            <i className="far fa-clock"></i>{" "}
            {readTime} mins read
          </small>
        </div>
      </a>
    </article>
  );
};

export default Post;
