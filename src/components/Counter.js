import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Store/store";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counterValue);
  const showCounter = useSelector((state) => state.counterReducer.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseByValueHandler = () => {
    dispatch(counterActions.increaseByValue(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const content = (
    <div>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByValueHandler}>IncreaseBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && content}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
