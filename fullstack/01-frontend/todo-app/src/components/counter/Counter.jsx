import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function Counter({by}) {

    const [count, setCount] = useState(0); // [0, f]

    console.log(by)
    

    function incrementCounterFunction() {

            setCount(count + by)
            console.log(count)
            console.log(count)
            console.log('increment clicked')
    }
    function decrementCounterFunction() {

            setCount(count - by)
            console.log(count)
            console.log(count)
            console.log('decrement clicked')
    }



    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" onClick={incrementCounterFunction}>     
                +{by}</button>
                <button className="minusButton" onClick={decrementCounterFunction}>
                -{by}</button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 1
}