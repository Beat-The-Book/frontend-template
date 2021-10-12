import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/reduxCountSlice";
import { RootState } from "../store/reduxCounter";

interface ReduxCounterProps {}

const ReduxCounter: React.FC<ReduxCounterProps> = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div className="bg-green-500">
      <div>Redux Count = {count}</div>
      <button type="button" onClick={handleIncrement}>
        Redux Increment Button
      </button>
    </div>
  );
};

export default ReduxCounter;
