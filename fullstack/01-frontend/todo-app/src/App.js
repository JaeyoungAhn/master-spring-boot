import logo from './logo.svg';
import './App.css';
import LearningComponent from './components/learning-examples/LearningComponent';
// import {Component} from 'react';
import CounterButton from './components/counter/Counter'
import Counter from './components/counter/Counter';

import TodoApp from './components/todo/TodoApp';

function App() { // return without parenthesis
  return (
    <div className="App"> 
      {/* <LearningComponent></LearningComponent> */}
      {/* <Counter/> */}
      <TodoApp/>
    </div>
  )
}

// function PlayingWithProps(properties) {
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
//   return (
//     <div>Props</div>
//   ) 
// }

function PlayingWithProps({property1, property2}) {
  console.log(property1)
  console.log(property2)

  return (
    <div>Props</div>
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
