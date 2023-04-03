import logo from './logo.svg';
import './App.css';
import LearningComponent from './components/learning-examples/LearningComponent';
// import {Component} from 'react';


function App() { // return without parenthesis
  return (
    <div className="App"> 
      <LearningComponent></LearningComponent>
    </div>
  )
}

// function FirstComponent() { // Why we put parenthesis?

//     <div className="FirstComponent">First Component</div>

// }

// separately handled in a single file

// function SecondComponent() { // upper case For Component Name
//   return (
//     <div className="SecondComponent">Second Component</div> // lower case for Tag Name
//   )
// }

// class ThirdComponent extends Component { // don't really needed after hook being introduced
//   render() {
//     return (
//       <div className="ThirdComponent">Third Component</div>
//     )
//   }
// }

// class FourthComponent extends Component {
//   render () {
//     return (
//       <>
//         <div className="FourthComponent">Fourth Component</div>
//         <div className="FourthComponent">Fourth Component</div>
//       </>
//     )
//   }
// }


export default App;
