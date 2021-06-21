import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "../Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, timestamp, text }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post_headerText">
            <h3>
              Chucky P. Lu{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter Clone</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/3o7TKEdVH8csXxKDO8/giphy.gif"
          alt="#"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
