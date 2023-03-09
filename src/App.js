/* eslint-disable */
import logo from './logo.svg';
import './App.css';
// import State from './component/State'
import {useState} from 'react'
// import Box from './component/Box'
import Sss from './component/Sss'
import Comment from './component/Comment'
import CommentList from './component/CommentList'
import kitty from './kitten2.jpg'


// let name = ['라라라', '래래래', '로로로']
// let ment = ['안녕하세요, 집에 가고싶다', '리액트 재밌다!', '리액트 리액트 리액트']

function App () {
  return (
    <div className="App">
      <CommentList/>
      {/* {
      lalelo.map(function(a, i){
        return (
          <div className='box' key={i}>
            <img src="./image/0.gif" alt="moku" />
            <h1></h1>
            <h2></h2>
          </div>
        )
      })
      } */}
      {/* <div className='back'></div> */}
      {/* <div style={
        {
          // backgroundImage : `url(${kitty})`,
          backgroundImage : 'url(' + kitty + ')',
          backgroundRepeat : 'no-repeat',
          height : '100vh', 
          width : '100vw',
          backgroundSize : 'cover'
        }
      }></div>
      <img src={process.env.PUBLIC_URL + '111500268.2.jpg'} />
      <div style={{backgroundImage : 'url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)', height : '500px', backgroundSize : 'cover'} }></div>
      <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="dog" />
      <img src={kitty} alt="kitty" /> */}
    </div>
  )
}

export default App;
