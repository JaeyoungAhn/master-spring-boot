
import FirstComponent from './FirstComponent'
import {FifthComponent} from './FirstComponent'
import TenthComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'

export default function LearningComponent() {
    return (
        <div className="App">
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent></ThirdComponent>
            <FourthComponent></FourthComponent>
            <FifthComponent></FifthComponent>
            <TenthComponent></TenthComponent>
        </div>
    )
}