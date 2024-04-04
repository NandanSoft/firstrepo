import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Creating A Function Based Component
function First(){
   const name="Shashank"
   return (
  <div>
     
     <h1>Sum Of 20 and 30 is {20+30}</h1>
     <h1>This Application Is Created By {name} </h1>
  </div>
     )
}
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<First />)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
