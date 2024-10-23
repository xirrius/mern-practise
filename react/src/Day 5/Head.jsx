import {useDispatch, useSelector} from "react-redux"
import {increment, decrement, incrementByAmount} from "./store/counter/counterSlice"

const Head = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
    </div>
  )
}
export default Head