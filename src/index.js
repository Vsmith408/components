import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail"

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
            <div className="text">Nice blog post</div>
          </div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Ant
          </a>
          <div className="metadata">
            <span className="date">Today at 7:00pm</span>
            <div className="text">Nice blog post</div>
          </div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Ellie
          </a>
          <div className="metadata">
            <span className="date">Today at 8:00pm</span>
            <div className="text">Nice blog post</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
