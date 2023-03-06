import React from "react";
import {useState} from 'react';
import './State.css';

function State() {
  const style = {
    backgroundColor : 'yellowgreen',
    fontSize : '10px',
    fontWeight : 'bold',
  };
  let [user, setUser] = useState(['SungAh1', 'SungAh2', 'SungAh3']);
  let [count, setCount] = useState(0);
  let [like, setLike] = useState([0,0,0]);

  // 변수에 들어있는 데이터 html에 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[ ]
  let [title, setTitle] = useState(["DW아카데미 503호", "DW아카데미 501호", "DW아카데미 203호"])
  let [bgColor, setbgColor] = useState('');
  

  // let changeBg = () => {
  //   let newBg = bgColor == 'darkgreen'? 'blue':'darkgreen'
  // }



  // map함수가 array의 갯수만큼 return을 반복한다
  // 한줄만 반복할때는 소괄호 생략가능
  // 매개변수(패러미터)를 만들어주면 함수 패러미터가 ARRAY자료 안에 있는 데이터가 된다
  [1,2,3].map(function(num){
    // return console.log(num)
  })

  // let num = [1,2,3,4,5];
  // let newNum = num.map((num)=> num + 1);
  // console.log(num)
  // console.log(newNum)

  // let num = [1,2,3,4,5];
  // let newArr = num.map(function(element){
  //   return element * 3
  // })
  // console.log(newArr)

  // for(let i = 0; i < num.length; i++) {
  //   num[i] = num[i] * 3;
  // }
  // console.log(num)
 
  return (
    // 리턴 안에 형제요소의 태그생성불가
    // jsx 문법 스타일링을 위한 클래스는 클래스네임
    <div className="App" style={{backgroundColor : bgColor}}>
      <h1 >Hello, SungAh!</h1>
      <p>This is a React App</p>
      <div className="box" style={style}>
        {/* 셀프클로징 */}
        <input type="text" />
      </div>
      <div style={{color: 'darkgreen', fontSize : '22px', backgroundColor : 'khaki'}}>안녕하세요</div>
      <div>
        <p>클릭시 + {count}</p>
        <button onClick={()=>{setCount(count + 1)}}>Click Me</button>
      </div>

      {/* {
        [1,2,3].map(function(){
          return <div>안녕</div>
        })
      } */}

      {
        ['sungah', 'cho', 'ahhhh'].map(function(na){
          return na.toUpperCase()
        })
      }


      {
        title.map(function(a, i){
          return (
            <div className="list" key={i} style={{backgroundColor : 'khaki'}}>
              <h4>{title[i]}</h4>
              <span onClick={()=>{
                let copy = [...like]; 
                copy[i] = copy[i] + 1 
                setLike(copy)
                }}>👍 {like[i]}</span>
              <p>안녕하세요. 저는 {user[i]}입니다.</p>
            </div>
          )
        })
      }

      {/* <div className="list" style={{backgroundColor : 'khaki'}}>
        <h4>{title[0]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 조성아입니다.</p>
      </div> */}

      {/* <div className="list" style={{backgroundColor : 'khaki'}}>
        <h4>{title[1]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 조성아입니다.</p>
      </div>

      <div className="list" style={{backgroundColor : 'khaki'}}>
        <h4>{title[2]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 조성아입니다.</p>
      </div> */}

      <button onClick={()=>{
        let copy = [...title];
        copy[0] = "리액트 너무 재밌어요!";
        console.log(title == copy)
        setTitle(copy)
      }}>글제목 변경</button>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort()
        setTitle(copy);
      }}>글 정렬</button>

      <button onClick={()=>{bgColor == 'blue'? setbgColor('') : setbgColor('blue')}}>배경색 변경</button>

      <button onClick={()=>{
        let copy = [...user];
        copy = ['성아1', '성아2', '성아3'];
        setUser(copy)
      }}>이름 변경</button>

      
    </div>
  );
}

export default State;