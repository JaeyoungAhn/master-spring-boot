export default function CounterButton({by, IncrementMethod, decrementMethod}) {


    console.log(by)
    

    // function incrementCounterFunction() {
    //         IncrementMethod(by);
    // }
    // function decrementCounterFunction() {
    //         decrementMethod(by);
    // }



    return (
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={() => IncrementMethod(by)}>     
                +{by}</button>
                <button className="minusButton" onClick={() => decrementMethod(by)}>
                -{by}</button>
            </div>
        </div>
    )
}

