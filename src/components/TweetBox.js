import React from "react";
import "../TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="What's Happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
