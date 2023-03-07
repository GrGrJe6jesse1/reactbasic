import React from "react";
import Comment from './Comment';

const comments = [
  {
    name : '성아',
    comment : '안녕하세요. 조성아입니다.'
  },
  {
    name : '조성아',
    comment : '리액트 어렵습니다'
  },
  {
    name : 'SungAh',
    comment : '으아아아아악'
  }
]

function CommentList () {
  return (
    <div>
      {
        comments.map((comment, i)=>{
          return (
            <Comment name={comment.name} comment={comment.comment} key={i}/>
          )
        })
      }
    </div>
  )
}

export default CommentList;