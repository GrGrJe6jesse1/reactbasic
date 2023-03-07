import React from "react";
import {useState} from 'react';
import './Comment.css'

function Comment(props) {
  return (
    <div className="Wrapper">
      <div className="img-box">
        <img src="https://pbs.twimg.com/media/FPBHvSRaMAgrqae.jpg" alt="moku" />
      </div>

      <div className="content-container">
        <span className="name-text">{props.name}</span>
        <span className="comment-text">{props.comment}</span>
      </div>

    </div>
  )
}

export default Comment