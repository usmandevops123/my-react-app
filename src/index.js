import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/250/300"
const img3="https://media-exp1.licdn.com/dms/image/C4D03AQFTMjZ3Y1RKSQ/profile-displayphoto-shrink_800_800/0/1609098568711?e=1617840000&v=beta&t=6em8cjaq-wyjiFJ_Pm3XWUcNumls7iwWOv7jvyAwW4g"
const link ="https://www.linkedin.com/in/muhammad-usman-6a905318b/"
ReactDOM.render(
 <> 
 <h1 tabIndex="true"> Hello world</h1>
 <img src={img1} alt="random images"></img> 
 <img src={img3} alt="random images"/> 
 <a href={link}target="_usman"/>
 <img src={img2}alt="random images" >  </img>

 </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
