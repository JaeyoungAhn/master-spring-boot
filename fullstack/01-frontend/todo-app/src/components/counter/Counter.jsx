import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton'
export default function Counter() {

        const [count, setCount] = useState(0); // [0, f]

        function incrementCounterParentFunction(by) {
            setCount(count + by)
        }

        function someMethodInParent() {
            console.log('parent method called')
        }

        function incrementCounterParentFunction(by) {
            setCount(count + by)
        }

        function decrementCounterParentFunction(by) {
            setCount(count - by)
        }

        function resetCounter() {
            setCount(0);
        }
        

        return (
            <>
                <CounterButton 
                    IncrementMethod={incrementCounterParentFunction}
                    decrementMethod={decrementCounterParentFunction} ></CounterButton>
                <CounterButton by={2}
                    IncrementMethod={incrementCounterParentFunction}
                    decrementMethod={decrementCounterParentFunction}></CounterButton>
                <CounterButton by={5}
                    IncrementMethod={incrementCounterParentFunction}
                    decrementMethod={decrementCounterParentFunction}></CounterButton>
                <span className="totalCount">{count}</span><br></br>
                <button className="resetButton"
                            onClick={resetCounter}>Reset</button>
            </>
        )
    }

    CounterButton.propTypes = {
        by: PropTypes.number
    }
    
    CounterButton.defaultProps = {
        by: 1
    }

