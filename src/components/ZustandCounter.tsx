import React from "react";
import useZustandCounter from "../store/zustandCounter";

interface ZustandCounterProps {}

const ZustandCounter: React.FC<ZustandCounterProps> = () => {
  const count = useZustandCounter((state) => state.value);
  const incrementCount = useZustandCounter((state) => state.increment);

  return (
    <div className="bg-blue-500">
      <div>Zustand Count = {count}</div>
      <button onClick={incrementCount} type="button">
        Zustand Increment Button
      </button>
    </div>
  );
};

export default ZustandCounter;
