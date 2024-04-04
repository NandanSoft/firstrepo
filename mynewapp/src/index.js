import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Display(){
    return <h1>Form Is Successfully Submitted...</h1>
  }
 const root2 = ReactDOM.createRoot(document.getElementById('root2'));
 function send(){
   root2.render(<Display />);
 }
function MyForm(){
   return (
    <center>
      <h1>Registration Form</h1>
      <form>
  
        Name<input type="text" name=""/><br></br>
        DOB<input type="date" name="" /><br></br>
        Email<input type="email" name=""/><br></br>
        Password<input type="password" name=""/><br></br>
      </form>
        <input onClick={send} type="submit" name=""/><br></br>
    </center>
      )
}
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<MyForm />)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
