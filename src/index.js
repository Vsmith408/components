import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
         <CommentDetail 
           author="Sam" 
           timeAgo="Today at 5:00pm"
           comment="Nice post"
           avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
         <CommentDetail 
           author="Ellie" 
           timeAgo="Today at 7:00pm"
           comment="Cool"
           avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
         <CommentDetail 
           author="Ant" 
           timeAgo="Today at 8:00pm"
           comment="This is cool"
           avatar={faker.image.avatar()}/>
        </ApprovalCard>
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
