
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ducks/counter";
import "./Counter.css"

 function Counter (props) {
  const {name} = props;
  const [votes, setVotes] = useState(0)
const dispatch = useDispatch()
    const handleIncrement = () => {
       dispatch(increment());
       setVotes(votes + 1)
    }
    const handleDecrement = () => {
       dispatch(decrement());
       setVotes(votes - 1)
    }
    return(
        <>
        <div className="count">
       <h1>{name}</h1>
       <h3>{`Votes: ${votes}`}</h3>
        <div className="button">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
        </div>
       
        </>
    )
 }
 export default Counter;