import React from "react";
import {useState} from 'react';
// import './Comment.css'

const styles = {
  Wrapper : {
    display: 'flex',
    margin : '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '16px'
  },
  image : {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  },
  contentContainer : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '8px'
  },
  nameTaxt : {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  commentText : {
    fontSize: '14px',
  }

};




function Comment(props) {
  return (
    <div>
      <div>
        <div className="Wrapper" style={styles.Wrapper}>
          <div className="img-box" >
            <img style={styles.image} src="https://pbs.twimg.com/media/FPBHvSRaMAgrqae.jpg" alt="moku" />
          </div>
          <div className="content-container" style={styles.contentContainer}>
            <span className="name-text" style={styles.nameTaxt}>{props.name}</span>
            <span className="comment-text" style={styles.commentText}>{props.comment}</span>
          </div>
          <button onClick={props.onDelete}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Comment