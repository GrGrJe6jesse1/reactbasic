import React from "react";
import Comment from './Comment';
import {useState} from 'react';

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

  const [CommentList, setCommentList] = useState(comments);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const deleteComment = (index) => {
    const newCommentList = [...CommentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
  }

  const addComment = () => {
    // const add = {
    //   name : 'SS',
    //   comment : 'AhHhhaAHhh!!!!!'
    // }
    // setCommentList([add, ...CommentList])

    const add = {
      name : name,
      comment : content
    }
    setCommentList([add, ...CommentList])
    // state변경 함수에 빈 문자 입력해서 input에 작성된 내용 초기화
    setName('')
    setContent('')
  }

  return (
    <div>
      {
        CommentList.map((comment, i)=>{
          return (
            <Comment name={comment.name} comment={comment.comment} key={i} onDelete={()=> deleteComment(i)} />
          )
        })
      }
      <div>
        {/* onChange 이벤트는 input 요소에서 값이 변경될 때 발생
            그 때 발생한 이벤트를 매개변수 e
       */}
        이름: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        댓글: <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
        <button onClick={addComment}>추가</button>
        {/* <button onClick={deleteAll}>초기화</button> */}
      </div>
    </div>
  )
}

export default CommentList;