import React from 'react';
import faker from "faker";

const CommentDetail = (name, date) => {
    return(
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={faker.image.avatar()}></img>
    </a>
    <div className="content">
      <a href="/" className="author">
       Ellie
      </a>
      <div className="metadata">
        <span className="date">Today at 6:00pm</span>
        <div className="text">Nice blog post</div>
      </div>
    </div>
  </div>
    )
}

export default CommentDetail